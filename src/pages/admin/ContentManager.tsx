import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Pencil, Trash2, FileText, Image, Euro, Code, Upload } from 'lucide-react';
import { 
  useCmsPages, 
  useCmsBlocks, 
  useSaveCmsPage, 
  useSaveCmsBlock,
  useDeleteCmsPage,
  useDeleteCmsBlock,
  uploadCmsImage,
  CmsPage,
  CmsBlock 
} from '@/hooks/useCmsContent';
import { toast } from 'sonner';

const ContentManager = () => {
  const [activeTab, setActiveTab] = useState('pages');
  const [isPageDialogOpen, setIsPageDialogOpen] = useState(false);
  const [isBlockDialogOpen, setIsBlockDialogOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<Partial<CmsPage> | null>(null);
  const [editingBlock, setEditingBlock] = useState<Partial<CmsBlock> | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const { data: pages, isLoading: pagesLoading } = useCmsPages();
  const { data: blocks, isLoading: blocksLoading } = useCmsBlocks();
  const savePage = useSaveCmsPage();
  const saveBlock = useSaveCmsBlock();
  const deletePage = useDeleteCmsPage();
  const deleteBlock = useDeleteCmsBlock();

  const handleSavePage = async () => {
    if (!editingPage?.slug || !editingPage?.title) {
      toast.error('Slug e titolo sono obbligatori');
      return;
    }
    await savePage.mutateAsync(editingPage as CmsPage);
    setIsPageDialogOpen(false);
    setEditingPage(null);
  };

  const handleSaveBlock = async () => {
    if (!editingBlock?.key || !editingBlock?.name) {
      toast.error('Chiave e nome sono obbligatori');
      return;
    }
    await saveBlock.mutateAsync(editingBlock as CmsBlock);
    setIsBlockDialogOpen(false);
    setEditingBlock(null);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const url = await uploadCmsImage(file);
      setEditingBlock(prev => prev ? { ...prev, image_url: url } : null);
      toast.success('Immagine caricata');
    } catch (error) {
      toast.error('Errore nel caricamento immagine');
    } finally {
      setUploadingImage(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'text': return <FileText className="h-4 w-4" />;
      case 'image': return <Image className="h-4 w-4" />;
      case 'price': return <Euro className="h-4 w-4" />;
      case 'html': return <Code className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Gestione Contenuti</h1>
          <p className="text-muted-foreground">Modifica testi, immagini e prezzi del sito</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="pages">Pagine</TabsTrigger>
            <TabsTrigger value="blocks">Blocchi Contenuto</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-4">
            <div className="flex justify-end">
              <Dialog open={isPageDialogOpen} onOpenChange={setIsPageDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingPage({ is_active: true })}>
                    <Plus className="h-4 w-4 mr-2" /> Nuova Pagina
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingPage?.id ? 'Modifica Pagina' : 'Nuova Pagina'}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>Slug (URL)</Label>
                      <Input 
                        value={editingPage?.slug || ''} 
                        onChange={(e) => setEditingPage(prev => prev ? {...prev, slug: e.target.value} : null)}
                        placeholder="es. home, about, programmi"
                      />
                    </div>
                    <div>
                      <Label>Titolo</Label>
                      <Input 
                        value={editingPage?.title || ''} 
                        onChange={(e) => setEditingPage(prev => prev ? {...prev, title: e.target.value} : null)}
                        placeholder="Titolo della pagina"
                      />
                    </div>
                    <div>
                      <Label>Descrizione</Label>
                      <Textarea 
                        value={editingPage?.description || ''} 
                        onChange={(e) => setEditingPage(prev => prev ? {...prev, description: e.target.value} : null)}
                        placeholder="Descrizione opzionale"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch 
                        checked={editingPage?.is_active ?? true}
                        onCheckedChange={(checked) => setEditingPage(prev => prev ? {...prev, is_active: checked} : null)}
                      />
                      <Label>Attiva</Label>
                    </div>
                    <Button onClick={handleSavePage} disabled={savePage.isPending} className="w-full">
                      {savePage.isPending ? 'Salvataggio...' : 'Salva'}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Slug</TableHead>
                      <TableHead>Titolo</TableHead>
                      <TableHead>Stato</TableHead>
                      <TableHead>Azioni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pagesLoading ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center">Caricamento...</TableCell>
                      </TableRow>
                    ) : pages?.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center">Nessuna pagina</TableCell>
                      </TableRow>
                    ) : pages?.map((page) => (
                      <TableRow key={page.id}>
                        <TableCell className="font-mono">{page.slug}</TableCell>
                        <TableCell>{page.title}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${page.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {page.is_active ? 'Attiva' : 'Bozza'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => {
                                setEditingPage(page);
                                setIsPageDialogOpen(true);
                              }}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => {
                                if (confirm('Eliminare questa pagina?')) {
                                  deletePage.mutate(page.id);
                                }
                              }}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blocks" className="space-y-4">
            <div className="flex justify-end">
              <Dialog open={isBlockDialogOpen} onOpenChange={setIsBlockDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingBlock({ type: 'text', is_active: true, price_currency: 'EUR' })}>
                    <Plus className="h-4 w-4 mr-2" /> Nuovo Blocco
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingBlock?.id ? 'Modifica Blocco' : 'Nuovo Blocco'}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Chiave (unica)</Label>
                        <Input 
                          value={editingBlock?.key || ''} 
                          onChange={(e) => setEditingBlock(prev => prev ? {...prev, key: e.target.value} : null)}
                          placeholder="es. home_hero_title"
                        />
                      </div>
                      <div>
                        <Label>Nome</Label>
                        <Input 
                          value={editingBlock?.name || ''} 
                          onChange={(e) => setEditingBlock(prev => prev ? {...prev, name: e.target.value} : null)}
                          placeholder="Nome descrittivo"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Tipo</Label>
                      <Select 
                        value={editingBlock?.type || 'text'}
                        onValueChange={(value: 'text' | 'image' | 'price' | 'html') => 
                          setEditingBlock(prev => prev ? {...prev, type: value} : null)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Testo</SelectItem>
                          <SelectItem value="image">Immagine</SelectItem>
                          <SelectItem value="price">Prezzo</SelectItem>
                          <SelectItem value="html">HTML</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {editingBlock?.type === 'text' && (
                      <div>
                        <Label>Contenuto</Label>
                        <Textarea 
                          value={editingBlock?.content || ''} 
                          onChange={(e) => setEditingBlock(prev => prev ? {...prev, content: e.target.value} : null)}
                          rows={5}
                          placeholder="Inserisci il testo..."
                        />
                      </div>
                    )}

                    {editingBlock?.type === 'html' && (
                      <div>
                        <Label>Contenuto HTML</Label>
                        <Textarea 
                          value={editingBlock?.content || ''} 
                          onChange={(e) => setEditingBlock(prev => prev ? {...prev, content: e.target.value} : null)}
                          rows={8}
                          placeholder="<p>Il tuo HTML...</p>"
                          className="font-mono text-sm"
                        />
                      </div>
                    )}

                    {editingBlock?.type === 'image' && (
                      <div className="space-y-2">
                        <Label>Immagine</Label>
                        <div className="flex gap-2">
                          <Input 
                            value={editingBlock?.image_url || ''} 
                            onChange={(e) => setEditingBlock(prev => prev ? {...prev, image_url: e.target.value} : null)}
                            placeholder="URL immagine"
                          />
                          <Button variant="outline" disabled={uploadingImage} asChild>
                            <label className="cursor-pointer">
                              <Upload className="h-4 w-4 mr-2" />
                              {uploadingImage ? 'Caricamento...' : 'Carica'}
                              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                            </label>
                          </Button>
                        </div>
                        {editingBlock?.image_url && (
                          <img src={editingBlock.image_url} alt="Preview" className="max-h-40 rounded border" />
                        )}
                      </div>
                    )}

                    {editingBlock?.type === 'price' && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Prezzo</Label>
                          <Input 
                            type="number"
                            step="0.01"
                            value={editingBlock?.price || ''} 
                            onChange={(e) => setEditingBlock(prev => prev ? {...prev, price: parseFloat(e.target.value) || null} : null)}
                            placeholder="0.00"
                          />
                        </div>
                        <div>
                          <Label>Valuta</Label>
                          <Select 
                            value={editingBlock?.price_currency || 'EUR'}
                            onValueChange={(value) => setEditingBlock(prev => prev ? {...prev, price_currency: value} : null)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="EUR">EUR (€)</SelectItem>
                              <SelectItem value="USD">USD ($)</SelectItem>
                              <SelectItem value="GBP">GBP (£)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="col-span-2">
                          <Label>Descrizione prezzo</Label>
                          <Input 
                            value={editingBlock?.content || ''} 
                            onChange={(e) => setEditingBlock(prev => prev ? {...prev, content: e.target.value} : null)}
                            placeholder="es. al mese, per lezione..."
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <Switch 
                        checked={editingBlock?.is_active ?? true}
                        onCheckedChange={(checked) => setEditingBlock(prev => prev ? {...prev, is_active: checked} : null)}
                      />
                      <Label>Attivo</Label>
                    </div>
                    <Button onClick={handleSaveBlock} disabled={saveBlock.isPending} className="w-full">
                      {saveBlock.isPending ? 'Salvataggio...' : 'Salva'}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Chiave</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Contenuto</TableHead>
                      <TableHead>Stato</TableHead>
                      <TableHead>Azioni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blocksLoading ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center">Caricamento...</TableCell>
                      </TableRow>
                    ) : blocks?.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center">Nessun blocco</TableCell>
                      </TableRow>
                    ) : blocks?.map((block) => (
                      <TableRow key={block.id}>
                        <TableCell>{getTypeIcon(block.type)}</TableCell>
                        <TableCell className="font-mono text-xs">{block.key}</TableCell>
                        <TableCell>{block.name}</TableCell>
                        <TableCell className="max-w-xs truncate text-sm text-muted-foreground">
                          {block.type === 'price' 
                            ? `${block.price} ${block.price_currency}` 
                            : block.type === 'image'
                            ? block.image_url?.substring(0, 30) + '...'
                            : block.content?.substring(0, 50) + '...'
                          }
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${block.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {block.is_active ? 'Attivo' : 'Bozza'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => {
                                setEditingBlock(block);
                                setIsBlockDialogOpen(true);
                              }}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => {
                                if (confirm('Eliminare questo blocco?')) {
                                  deleteBlock.mutate(block.id);
                                }
                              }}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default ContentManager;
