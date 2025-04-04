
import React, { useState } from 'react';
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
}

const PageContentEditor: React.FC<PageContentEditorProps> = ({ 
  sections: initialSections, 
  onSave, 
  onCancel 
}) => {
  const [sections, setSections] = useState<Section[]>(initialSections);
  
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
    const newSection: Section = {
      id: `s${Date.now()}`,
      name: type === 'text' ? 'New Text Section' : 'New Pricing Section',
      type: type,
      ...(type === 'text' ? { content: 'Enter content here' } : { items: [] })
    };
    
    setSections([...sections, newSection]);
  };

  const handleDeleteSection = (index: number) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
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

  return (
    <div className="space-y-6">
      <Accordion type="multiple" className="w-full">
        {sections.map((section, index) => (
          <AccordionItem key={section.id} value={section.id}>
            <div className="flex items-center justify-between">
              <AccordionTrigger className="flex-1">
                {section.name} ({section.type})
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
            <AccordionContent>
              <div className="space-y-4 p-2">
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
                        className="min-h-32"
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Label>Pricing Items</Label>
                      {section.items && section.items.map((item, itemIndex) => (
                        <Card key={item.id} className="border border-gray-200">
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
        <Button onClick={() => onSave(sections)}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default PageContentEditor;
