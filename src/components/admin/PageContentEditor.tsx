
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardFooter 
} from '@/components/ui/card';
import { Plus, Trash, ArrowUp, ArrowDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { toast } from 'sonner';

interface PricingItem {
  id: string;
  name: string;
  price: string;
  description: string;
}

interface Section {
  id: string;
  name: string;
  type: 'text' | 'pricing';
  content?: string;
  items?: PricingItem[];
}

interface PageContentEditorProps {
  sections: Section[];
  onSave: (sections: Section[]) => void;
  onCancel: () => void;
  updateKnowledgeBase?: boolean;
}

const PageContentEditor: React.FC<PageContentEditorProps> = ({ 
  sections: initialSections, 
  onSave, 
  onCancel,
  updateKnowledgeBase = true
}) => {
  const [sections, setSections] = useState<Section[]>(initialSections);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  // Initialize expanded sections
  useEffect(() => {
    if (initialSections.length > 0 && expandedSections.length === 0) {
      setExpandedSections([initialSections[0].id]);
    }
  }, [initialSections, expandedSections]);
  
  const handleUpdateSection = (index: number, field: string, value: string) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setSections(newSections);
  };

  const handleUpdatePricingItem = (sectionIndex: number, itemIndex: number, field: string, value: string) => {
    const newSections = [...sections];
    if (newSections[sectionIndex].items) {
      newSections[sectionIndex].items![itemIndex] = { 
        ...newSections[sectionIndex].items![itemIndex], 
        [field]: value 
      };
      setSections(newSections);
    }
  };

  const handleAddPricingItem = (sectionIndex: number) => {
    const newSections = [...sections];
    const newItem = {
      id: `p${Date.now()}`,
      name: 'New Item',
      price: '0',
      description: 'Description'
    };
    
    if (!newSections[sectionIndex].items) {
      newSections[sectionIndex].items = [];
    }
    
    newSections[sectionIndex].items!.push(newItem);
    setSections(newSections);
  };

  const handleDeletePricingItem = (sectionIndex: number, itemIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].items!.splice(itemIndex, 1);
    setSections(newSections);
  };

  const handleAddSection = (type: 'text' | 'pricing') => {
    const newSectionId = `s${Date.now()}`;
    const newSection: Section = {
      id: newSectionId,
      name: type === 'text' ? 'New Text Section' : 'New Pricing Section',
      type: type,
      ...(type === 'text' ? { content: 'Enter content here' } : { items: [] })
    };
    
    const newSections = [...sections, newSection];
    setSections(newSections);
    
    // Auto expand the new section
    setExpandedSections([...expandedSections, newSectionId]);
  };

  const handleDeleteSection = (index: number) => {
    const newSections = [...sections];
    const sectionId = newSections[index].id;
    newSections.splice(index, 1);
    setSections(newSections);
    
    // Remove from expanded sections
    setExpandedSections(expandedSections.filter(id => id !== sectionId));
  };

  const handleMoveSection = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === sections.length - 1)) {
      return;
    }

    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    [newSections[index], newSections[targetIndex]] = 
      [newSections[targetIndex], newSections[index]];
    
    setSections(newSections);
  };

  const handleToggleAccordion = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId) 
        : [...prev, sectionId]
    );
  };

  const handleSaveWithKnowledgeBase = () => {
    if (updateKnowledgeBase) {
      toast.success('Content saved and knowledge base updated');
    }
    onSave(sections);
  };

  const countTextSections = sections.filter(section => section.type === 'text').length;
  const countPricingSections = sections.filter(section => section.type === 'pricing').length;

  return (
    <div className="space-y-6">
      <div className="bg-muted p-3 rounded-md mb-4">
        <div className="text-sm font-medium mb-2">Editor Summary</div>
        <div className="flex gap-3 text-xs">
          <div className="bg-background p-2 rounded-md">
            <span className="font-medium">{sections.length}</span> total sections
          </div>
          <div className="bg-background p-2 rounded-md">
            <span className="font-medium">{countTextSections}</span> text sections
          </div>
          <div className="bg-background p-2 rounded-md">
            <span className="font-medium">{countPricingSections}</span> pricing sections
          </div>
        </div>
      </div>
      
      <Accordion 
        type="multiple" 
        value={expandedSections}
        className="w-full space-y-3"
      >
        {sections.map((section, index) => (
          <AccordionItem 
            key={section.id} 
            value={section.id}
            className="border border-border rounded-md overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <AccordionTrigger 
                className="flex-1 px-4"
                onClick={() => handleToggleAccordion(section.id)}
              >
                <div className="flex items-center">
                  <span className="text-primary mr-2">[{index + 1}]</span>
                  <span>{section.name}</span>
                  <span className="ml-2 text-xs bg-muted px-2 py-0.5 rounded-full">
                    {section.type}
                  </span>
                </div>
              </AccordionTrigger>
              <div className="flex space-x-2 p-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMoveSection(index, 'up');
                  }}
                  disabled={index === 0}
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMoveSection(index, 'down');
                  }}
                  disabled={index === sections.length - 1}
                >
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSection(index);
                  }}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <AccordionContent className="border-t border-border">
              <div className="space-y-4 p-4">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor={`section-name-${index}`}>Section Name</Label>
                    <Input
                      id={`section-name-${index}`}
                      value={section.name}
                      onChange={(e) => handleUpdateSection(index, 'name', e.target.value)}
                    />
                  </div>
                  
                  {section.type === 'text' ? (
                    <div>
                      <Label htmlFor={`section-content-${index}`}>Content</Label>
                      <Textarea
                        id={`section-content-${index}`}
                        value={section.content}
                        onChange={(e) => handleUpdateSection(index, 'content', e.target.value)}
                        className="min-h-32 font-mono text-sm"
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Label>Pricing Items</Label>
                      {section.items && section.items.map((item, itemIndex) => (
                        <Card key={item.id} className="border border-border">
                          <CardHeader className="p-4">
                            <CardTitle className="text-base flex justify-between items-center">
                              <span>Item {itemIndex + 1}</span>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => handleDeletePricingItem(index, itemIndex)}
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0 grid gap-4">
                            <div>
                              <Label htmlFor={`item-name-${index}-${itemIndex}`}>Name</Label>
                              <Input
                                id={`item-name-${index}-${itemIndex}`}
                                value={item.name}
                                onChange={(e) => handleUpdatePricingItem(index, itemIndex, 'name', e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`item-price-${index}-${itemIndex}`}>Price</Label>
                              <Input
                                id={`item-price-${index}-${itemIndex}`}
                                value={item.price}
                                onChange={(e) => handleUpdatePricingItem(index, itemIndex, 'price', e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor={`item-desc-${index}-${itemIndex}`}>Description</Label>
                              <Textarea
                                id={`item-desc-${index}-${itemIndex}`}
                                value={item.description}
                                onChange={(e) => handleUpdatePricingItem(index, itemIndex, 'description', e.target.value)}
                                className="min-h-20"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleAddPricingItem(index)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Pricing Item
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          onClick={() => handleAddSection('text')}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Text Section
        </Button>
        <Button 
          variant="outline" 
          onClick={() => handleAddSection('pricing')}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Pricing Section
        </Button>
      </div>
      
      <div className="flex justify-end space-x-2 mt-6">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSaveWithKnowledgeBase}>
          {updateKnowledgeBase ? 'Save & Update Knowledge Base' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
};

export default PageContentEditor;
