
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Edit, Trash, Save, X, EyeIcon, Settings, RefreshCw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import PageContentEditor from '@/components/admin/PageContentEditor';
import { Switch } from '@/components/ui/switch';

const Pages = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState(false);
  const [currentPage, setCurrentPage] = useState<any>(null);
  const [updateKnowledgeBase, setUpdateKnowledgeBase] = useState(true);
  const [knowledgeBaseLastUpdated, setKnowledgeBaseLastUpdated] = useState<string | null>(null);
  
  // Mock data for demonstration - in a real app this would come from Supabase
  const [pages, setPages] = useState([
    { 
      id: '1', 
      title: 'Home', 
      slug: 'home', 
      status: 'published', 
      lastModified: '2025-04-01',
      sections: [
        { id: 's1', name: 'Hero', content: 'Welcome to Advanced Tennis Hub', type: 'text' },
        { id: 's2', name: 'Features', content: 'Discover our state-of-the-art facilities', type: 'text' },
        { id: 's3', name: 'Pricing', items: [
          { id: 'p1', name: 'Basic', price: '50', description: 'Basic training program' },
          { id: 'p2', name: 'Advanced', price: '100', description: 'Advanced training program' }
        ], type: 'pricing' }
      ]
    },
    { 
      id: '2', 
      title: 'About', 
      slug: 'about', 
      status: 'published', 
      lastModified: '2025-04-02',
      sections: [
        { id: 's1', name: 'Mission', content: 'Our mission is to provide world-class tennis training', type: 'text' },
        { id: 's2', name: 'Vision', content: 'We aim to revolutionize tennis coaching with technology', type: 'text' }
      ]
    },
    { 
      id: '3', 
      title: 'Programs', 
      slug: 'programs', 
      status: 'published', 
      lastModified: '2025-04-03',
      sections: [
        { id: 's1', name: 'Junior Program', content: 'For ages 6-12', type: 'text' },
        { id: 's2', name: 'Elite Program', content: 'For competitive players', type: 'text' },
        { id: 's3', name: 'Pricing', items: [
          { id: 'p1', name: 'Junior', price: '75', description: 'Junior training program' },
          { id: 'p2', name: 'Elite', price: '150', description: 'Elite training program' }
        ], type: 'pricing' }
      ]
    },
    { 
      id: '4', 
      title: 'Contact', 
      slug: 'contact', 
      status: 'draft', 
      lastModified: '2025-04-04',
      sections: [
        { id: 's1', name: 'Contact Info', content: 'Email: info@ath.com, Phone: +1234567890', type: 'text' },
        { id: 's2', name: 'Location', content: 'Via Roma 123, Milano, Italy', type: 'text' }
      ]
    },
  ]);

  // Initialize last update timestamp from localStorage or set current date
  useEffect(() => {
    const savedTimestamp = localStorage.getItem('knowledgeBaseLastUpdated');
    if (savedTimestamp) {
      setKnowledgeBaseLastUpdated(savedTimestamp);
    } else {
      const currentDate = new Date().toISOString();
      setKnowledgeBaseLastUpdated(currentDate);
      localStorage.setItem('knowledgeBaseLastUpdated', currentDate);
    }
  }, []);

  // State for the new page form
  const [newPage, setNewPage] = useState({
    title: '',
    slug: '',
    content: '',
    sections: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPage(prev => ({ ...prev, [name]: value }));
  };

  const handleCreatePage = () => {
    // Here we would normally save to Supabase
    const id = Math.random().toString(36).substr(2, 9);
    const newPageWithId = {
      id,
      ...newPage,
      status: 'draft',
      lastModified: new Date().toISOString().split('T')[0],
      sections: [{ id: 's1', name: 'Main Content', content: newPage.content, type: 'text' }]
    };
    
    setPages([...pages, newPageWithId]);
    setNewPage({ title: '', slug: '', content: '', sections: [] });
    toast.success('Page created successfully! (Demo only)');
    
    // Update knowledge base if enabled
    if (updateKnowledgeBase) {
      updateKnowledgeBaseTimestamp();
    }
  };

  const handleDeletePage = (id: string) => {
    // Here we would normally delete from Supabase
    setPages(pages.filter(page => page.id !== id));
    toast.success('Page deleted successfully! (Demo only)');
    
    // Update knowledge base if enabled
    if (updateKnowledgeBase) {
      updateKnowledgeBaseTimestamp();
    }
  };

  const handleEditPage = (id: string) => {
    setEditingPageId(id);
  };

  const handleSaveEdit = (id: string) => {
    // Here we would normally update in Supabase
    setEditingPageId(null);
    toast.success('Page updated successfully! (Demo only)');
    
    // Update knowledge base if enabled
    if (updateKnowledgeBase) {
      updateKnowledgeBaseTimestamp();
    }
  };

  const handleCancelEdit = () => {
    setEditingPageId(null);
  };

  const handleEditContent = (page: any) => {
    setCurrentPage(page);
    setEditingContent(true);
  };

  const handleSaveContent = (updatedSections: any[]) => {
    // Here we would normally update in Supabase
    const updatedPages = pages.map(page => 
      page.id === currentPage.id 
        ? { ...page, sections: updatedSections, lastModified: new Date().toISOString().split('T')[0] } 
        : page
    );
    
    setPages(updatedPages);
    setEditingContent(false);
    setCurrentPage(null);
    toast.success('Page content updated successfully! (Demo only)');
    
    // Update knowledge base if enabled
    if (updateKnowledgeBase) {
      updateKnowledgeBaseTimestamp();
    }
  };

  const handleCancelContentEdit = () => {
    setEditingContent(false);
    setCurrentPage(null);
  };

  const handleTogglePageStatus = (id: string) => {
    const updatedPages = pages.map(page => 
      page.id === id 
        ? { 
            ...page, 
            status: page.status === 'published' ? 'draft' : 'published',
            lastModified: new Date().toISOString().split('T')[0]
          } 
        : page
    );
    
    setPages(updatedPages);
    toast.success(`Page ${updatedPages.find(p => p.id === id)?.status === 'published' ? 'published' : 'unpublished'} successfully! (Demo only)`);
    
    // Update knowledge base if enabled
    if (updateKnowledgeBase) {
      updateKnowledgeBaseTimestamp();
    }
  };

  const handlePreviewPage = (slug: string) => {
    // Here we would normally redirect to the actual page
    toast.info(`Previewing page: /${slug} (Demo only)`);
  };

  // Function to update the knowledge base timestamp
  const updateKnowledgeBaseTimestamp = () => {
    const currentDate = new Date().toISOString();
    setKnowledgeBaseLastUpdated(currentDate);
    localStorage.setItem('knowledgeBaseLastUpdated', currentDate);
  };

  // Format the timestamp for display
  const formatTimestamp = (timestamp: string | null) => {
    if (!timestamp) return 'Never';
    
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('it-IT', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Manually update knowledge base
  const handleUpdateKnowledgeBase = () => {
    updateKnowledgeBaseTimestamp();
    toast.success('Knowledge base updated successfully!');
  };

  return (
    <AdminLayout title={t('admin.pages') || 'Pages'}>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{t('admin.pages') || 'Pages'}</h1>
          <p className="text-muted-foreground">Manage website content and pages</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch 
              id="update-knowledge" 
              checked={updateKnowledgeBase} 
              onCheckedChange={setUpdateKnowledgeBase}
            />
            <Label htmlFor="update-knowledge" className="font-medium">Auto-update Knowledge Base</Label>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleUpdateKnowledgeBase}
            className="flex items-center gap-1"
          >
            <RefreshCw className="h-4 w-4" />
            Update Knowledge Base
          </Button>
        </div>
      </div>
      
      <div className="bg-muted/50 p-3 rounded-md mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">Knowledge Base Last Updated:</span>
          <span>{formatTimestamp(knowledgeBaseLastUpdated)}</span>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Pages</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="new">Create New</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Pages</CardTitle>
              <CardDescription>Manage all website pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Page Title</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pages.map(page => (
                      <TableRow key={page.id}>
                        <TableCell>
                          {editingPageId === page.id ? (
                            <Input 
                              value={page.title} 
                              onChange={(e) => {
                                const updatedPages = pages.map(p => 
                                  p.id === page.id ? {...p, title: e.target.value} : p
                                );
                                setPages(updatedPages);
                              }}
                            />
                          ) : (
                            page.title
                          )}
                        </TableCell>
                        <TableCell>
                          {editingPageId === page.id ? (
                            <Input 
                              value={page.slug} 
                              onChange={(e) => {
                                const updatedPages = pages.map(p => 
                                  p.id === page.id ? {...p, slug: e.target.value} : p
                                );
                                setPages(updatedPages);
                              }}
                            />
                          ) : (
                            page.slug
                          )}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            page.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {page.status}
                          </span>
                        </TableCell>
                        <TableCell>{page.lastModified}</TableCell>
                        <TableCell>
                          {editingPageId === page.id ? (
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleSaveEdit(page.id)}
                              >
                                <Save className="h-4 w-4 mr-1" />
                                Save
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={handleCancelEdit}
                              >
                                <X className="h-4 w-4 mr-1" />
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleEditPage(page.id)}
                              >
                                <Settings className="h-4 w-4 mr-1" />
                                Settings
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleEditContent(page)}
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Edit Content
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handlePreviewPage(page.slug)}
                              >
                                <EyeIcon className="h-4 w-4 mr-1" />
                                Preview
                              </Button>
                              <Button 
                                variant={page.status === 'published' ? 'destructive' : 'default'}
                                size="sm" 
                                onClick={() => handleTogglePageStatus(page.id)}
                              >
                                {page.status === 'published' ? 'Unpublish' : 'Publish'}
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => handleDeletePage(page.id)}
                              >
                                <Trash className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Published Pages</CardTitle>
              <CardDescription>Manage published pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Page Title</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pages
                      .filter(page => page.status === 'published')
                      .map(page => (
                        <TableRow key={page.id}>
                          <TableCell>{page.title}</TableCell>
                          <TableCell>{page.slug}</TableCell>
                          <TableCell>{page.lastModified}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleEditContent(page)}
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Edit Content
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handlePreviewPage(page.slug)}
                              >
                                <EyeIcon className="h-4 w-4 mr-1" />
                                Preview
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => handleTogglePageStatus(page.id)}
                              >
                                Unpublish
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Draft Pages</CardTitle>
              <CardDescription>Manage unpublished draft pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Page Title</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pages
                      .filter(page => page.status === 'draft')
                      .map(page => (
                        <TableRow key={page.id}>
                          <TableCell>{page.title}</TableCell>
                          <TableCell>{page.slug}</TableCell>
                          <TableCell>{page.lastModified}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleEditContent(page)}
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Edit Content
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handlePreviewPage(page.slug)}
                              >
                                <EyeIcon className="h-4 w-4 mr-1" />
                                Preview
                              </Button>
                              <Button 
                                variant="default" 
                                size="sm" 
                                onClick={() => handleTogglePageStatus(page.id)}
                              >
                                Publish
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => handleDeletePage(page.id)}
                              >
                                <Trash className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>Create New Page</CardTitle>
              <CardDescription>Add a new page to your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Page Title</Label>
                <Input 
                  id="title" 
                  name="title" 
                  placeholder="Enter page title" 
                  value={newPage.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input 
                  id="slug" 
                  name="slug" 
                  placeholder="Enter page URL slug" 
                  value={newPage.slug}
                  onChange={handleInputChange}
                />
                <p className="text-sm text-muted-foreground">
                  This will be used for the page URL: https://example.com/<span className="font-medium">{newPage.slug || 'page-slug'}</span>
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Initial Page Content</Label>
                <Textarea 
                  id="content" 
                  name="content" 
                  placeholder="Enter initial page content" 
                  className="min-h-32" 
                  value={newPage.content}
                  onChange={handleInputChange}
                />
                <p className="text-sm text-muted-foreground">
                  You can add more sections and content after creating the page.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab('all')}>Cancel</Button>
              <Button onClick={handleCreatePage}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Page
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Content Editor Dialog */}
      <Dialog open={editingContent} onOpenChange={setEditingContent}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit {currentPage?.title} Content</DialogTitle>
            <DialogDescription>
              Edit the content of this page. Updates will automatically sync with the knowledge base.
            </DialogDescription>
          </DialogHeader>
          
          {currentPage && (
            <PageContentEditor 
              sections={currentPage.sections} 
              onSave={handleSaveContent}
              onCancel={handleCancelContentEdit}
              updateKnowledgeBase={updateKnowledgeBase}
            />
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Pages;
