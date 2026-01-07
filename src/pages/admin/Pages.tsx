import React, { useState, useEffect } from 'react';
import { Page, Section } from '@/integrations/supabase/database.types';
import AdminLayout from '../../components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { format } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { v4 as uuidv4 } from 'uuid';

// Static pages data - can be replaced with database when pages table is created
const initialPages: Page[] = [];

const PagesAdmin = () => {
  const [pages, setPages] = useState<Page[]>(initialPages);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [newPageTitle, setNewPageTitle] = useState('');
  const [newPageSlug, setNewPageSlug] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Pages are managed locally for now
    setIsLoading(false);
  }, []);

  // Handle creating a new page
  const handleCreatePage = () => {
    if (!newPageTitle || !newPageSlug) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const slugExists = pages.some(page => page.slug === newPageSlug);
    if (slugExists) {
      toast({
        title: "Validation Error",
        description: "A page with this slug already exists",
        variant: "destructive"
      });
      return;
    }

    const newPage: Page = {
      id: uuidv4(),
      title: newPageTitle,
      slug: newPageSlug,
      status: 'draft',
      sections: [],
      last_modified: new Date().toISOString()
    };

    setPages(prev => [...prev, newPage]);
    toast({
      title: "Success",
      description: "Page created successfully",
    });
    setIsAddDialogOpen(false);
    setNewPageTitle('');
    setNewPageSlug('');
  };

  // Handle updating page title or slug
  const handleUpdatePageBasic = () => {
    if (!selectedPage || !selectedPage.title || !selectedPage.slug) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const slugExists = pages.some(page => 
      page.slug === selectedPage.slug && page.id !== selectedPage.id
    );
    
    if (slugExists) {
      toast({
        title: "Validation Error",
        description: "A page with this slug already exists",
        variant: "destructive"
      });
      return;
    }

    setPages(prev => prev.map(page => 
      page.id === selectedPage.id 
        ? {...page, title: selectedPage.title, slug: selectedPage.slug, last_modified: new Date().toISOString()} 
        : page
    ));
    
    toast({
      title: "Success",
      description: "Page updated successfully",
    });
    
    setIsEditDialogOpen(false);
  };

  // Handle updating page content sections
  const handleUpdatePageSections = (pageId: string, sections: Page['sections']) => {
    setPages(prev => prev.map(page => 
      page.id === pageId 
        ? {...page, sections, last_modified: new Date().toISOString()} 
        : page
    ));
    
    toast({
      title: "Success",
      description: "Page content updated successfully",
    });
  };

  // Handle changing page status (publish/unpublish)
  const handleChangePageStatus = (pageId: string, newStatus: string) => {
    setPages(prev => prev.map(page => 
      page.id === pageId 
        ? {...page, status: newStatus, last_modified: new Date().toISOString()} 
        : page
    ));
    
    toast({
      title: "Success",
      description: `Page ${newStatus === 'published' ? 'published' : 'unpublished'} successfully`,
    });
  };

  // Handle deleting a page
  const handleDeletePage = () => {
    if (!selectedPage) return;

    setPages(prev => prev.filter(page => page.id !== selectedPage.id));
    
    toast({
      title: "Success",
      description: "Page deleted successfully",
    });
    
    setIsDeleteDialogOpen(false);
    setSelectedPage(null);
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Pages</h1>
          <Button onClick={() => setIsAddDialogOpen(true)}>Add Page</Button>
        </div>

        {isLoading ? (
          <p>Loading pages...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell>{page.title}</TableCell>
                  <TableCell>{page.slug}</TableCell>
                  <TableCell>
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => handleChangePageStatus(page.id, page.status === 'published' ? 'draft' : 'published')}
                    >
                      {page.status === 'published' ? 'Published' : 'Draft'}
                    </Button>
                  </TableCell>
                  <TableCell>
                    {page.last_modified ? format(new Date(page.last_modified), 'PPP') : 'N/A'}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      size="sm"
                      onClick={() => {
                        setSelectedPage(page);
                        setIsEditDialogOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => {
                        setSelectedPage(page);
                        setIsDeleteDialogOpen(true);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {/* Add Page Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Page</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input 
                  id="title" 
                  value={newPageTitle}
                  onChange={(e) => setNewPageTitle(e.target.value)}
                  className="col-span-3" 
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="slug" className="text-right">
                  Slug
                </Label>
                <Input 
                  id="slug" 
                  value={newPageSlug}
                  onChange={(e) => setNewPageSlug(e.target.value)}
                  className="col-span-3" 
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleCreatePage}>Create Page</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Page Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Page</DialogTitle>
            </DialogHeader>
            {selectedPage ? (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={selectedPage.title}
                    onChange={(e) => setSelectedPage({...selectedPage, title: e.target.value} as Page)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="slug" className="text-right">
                    Slug
                  </Label>
                  <Input
                    id="slug"
                    value={selectedPage.slug}
                    onChange={(e) => setSelectedPage({...selectedPage, slug: e.target.value} as Page)}
                    className="col-span-3"
                  />
                </div>
              </div>
            ) : (
              <p>No page selected</p>
            )}
            <DialogFooter>
              <Button type="button" onClick={handleUpdatePageBasic}>Update Page</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Page Dialog */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete Page</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p>Are you sure you want to delete this page?</p>
            </div>
            <DialogFooter>
              <Button type="button" variant="destructive" onClick={handleDeletePage}>
                Delete Page
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default PagesAdmin;
