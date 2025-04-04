
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Edit, Trash, Save, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const Pages = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  
  // Mock data for demonstration - in a real app this would come from Supabase
  const [pages, setPages] = useState([
    { id: '1', title: 'Home', slug: 'home', status: 'published', lastModified: '2025-04-01' },
    { id: '2', title: 'About', slug: 'about', status: 'published', lastModified: '2025-04-02' },
    { id: '3', title: 'Programs', slug: 'programs', status: 'published', lastModified: '2025-04-03' },
    { id: '4', title: 'Contact', slug: 'contact', status: 'draft', lastModified: '2025-04-04' },
  ]);

  // State for the new page form
  const [newPage, setNewPage] = useState({
    title: '',
    slug: '',
    content: ''
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
      lastModified: new Date().toISOString().split('T')[0]
    };
    
    setPages([...pages, newPageWithId]);
    setNewPage({ title: '', slug: '', content: '' });
    toast.success('Page created successfully! (Demo only)');
  };

  const handleDeletePage = (id: string) => {
    // Here we would normally delete from Supabase
    setPages(pages.filter(page => page.id !== id));
    toast.success('Page deleted successfully! (Demo only)');
  };

  const handleEditPage = (id: string) => {
    setEditingPageId(id);
  };

  const handleSaveEdit = (id: string) => {
    // Here we would normally update in Supabase
    setEditingPageId(null);
    toast.success('Page updated successfully! (Demo only)');
  };

  const handleCancelEdit = () => {
    setEditingPageId(null);
  };

  return (
    <AdminLayout title={t('admin.pages') || 'Pages'}>
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
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="border-b">
                      <th className="p-4 text-left font-medium">Page Title</th>
                      <th className="p-4 text-left font-medium">Slug</th>
                      <th className="p-4 text-left font-medium">Status</th>
                      <th className="p-4 text-left font-medium">Last Modified</th>
                      <th className="p-4 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map(page => (
                      <tr key={page.id} className="border-b">
                        <td className="p-4">
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
                        </td>
                        <td className="p-4">
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
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            page.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {page.status}
                          </span>
                        </td>
                        <td className="p-4">{page.lastModified}</td>
                        <td className="p-4">
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
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleDeletePage(page.id)}
                              >
                                <Trash className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="border-b">
                      <th className="p-4 text-left font-medium">Page Title</th>
                      <th className="p-4 text-left font-medium">Slug</th>
                      <th className="p-4 text-left font-medium">Last Modified</th>
                      <th className="p-4 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages
                      .filter(page => page.status === 'published')
                      .map(page => (
                        <tr key={page.id} className="border-b">
                          <td className="p-4">{page.title}</td>
                          <td className="p-4">{page.slug}</td>
                          <td className="p-4">{page.lastModified}</td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleEditPage(page.id)}
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleDeletePage(page.id)}
                              >
                                <Trash className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
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
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="border-b">
                      <th className="p-4 text-left font-medium">Page Title</th>
                      <th className="p-4 text-left font-medium">Slug</th>
                      <th className="p-4 text-left font-medium">Last Modified</th>
                      <th className="p-4 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages
                      .filter(page => page.status === 'draft')
                      .map(page => (
                        <tr key={page.id} className="border-b">
                          <td className="p-4">{page.title}</td>
                          <td className="p-4">{page.slug}</td>
                          <td className="p-4">{page.lastModified}</td>
                          <td className="p-4">
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleEditPage(page.id)}
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleDeletePage(page.id)}
                              >
                                <Trash className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
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
                <Label htmlFor="content">Page Content</Label>
                <Textarea 
                  id="content" 
                  name="content" 
                  placeholder="Enter page content" 
                  className="min-h-32" 
                  value={newPage.content}
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleCreatePage}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Page
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default Pages;
