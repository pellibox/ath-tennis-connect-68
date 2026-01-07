import { useState, useMemo } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Pencil, Trash2, Euro, Search, Filter } from 'lucide-react';
import { 
  useCmsBlocks, 
  useSaveCmsBlock,
  useDeleteCmsBlock,
  CmsBlock 
} from '@/hooks/useCmsContent';
import { toast } from 'sonner';

type PriceCategory = 'all' | 'junior' | 'elite' | 'adult' | 'padel' | 'pickleball' | 'touchtennis' | 'camps' | 'coach' | 'other';

const PriceManager = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlock, setEditingBlock] = useState<Partial<CmsBlock> | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<PriceCategory>('all');

  const { data: blocks, isLoading } = useCmsBlocks();
  const saveBlock = useSaveCmsBlock();
  const deleteBlock = useDeleteCmsBlock();

  const priceBlocks = useMemo(() => {
    if (!blocks) return [];
    return blocks.filter(b => b.type === 'price');
  }, [blocks]);

  const filteredBlocks = useMemo(() => {
    return priceBlocks.filter(block => {
      const matchesSearch = 
        block.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        block.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (block.content?.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      if (categoryFilter === 'all') return true;

      const key = block.key.toLowerCase();
      switch (categoryFilter) {
        case 'junior': return key.includes('junior') || key.includes('sat') || key.includes('sit') || key.includes('perf1');
        case 'elite': return key.includes('elite') || key.includes('perf2') || key.includes('perf3') || key.includes('perf4') || key.includes('professional');
        case 'adult': return key.includes('adult');
        case 'padel': return key.includes('padel');
        case 'pickleball': return key.includes('pickleball');
        case 'touchtennis': return key.includes('touchtennis') || key.includes('touch_tennis');
        case 'camps': return key.includes('camp');
        case 'coach': return key.includes('coach') || key.includes('club') || key.includes('certification');
        default: return true;
      }
    });
  }, [priceBlocks, searchTerm, categoryFilter]);

  const handleSave = async () => {
    if (!editingBlock?.key || !editingBlock?.name) {
      toast.error('Chiave e nome sono obbligatori');
      return;
    }
    await saveBlock.mutateAsync({
      ...editingBlock,
      type: 'price'
    } as CmsBlock);
    setIsDialogOpen(false);
    setEditingBlock(null);
  };

  const formatPrice = (price: number | null, currency: string | null) => {
    if (price === null) return '-';
    const symbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency || '€';
    return `${symbol}${new Intl.NumberFormat('it-IT').format(price)}`;
  };

  const getCategoryBadge = (key: string) => {
    const k = key.toLowerCase();
    if (k.includes('junior') || k.includes('sat') || k.includes('sit')) return { label: 'Junior', color: 'bg-blue-100 text-blue-800' };
    if (k.includes('elite') || k.includes('perf') || k.includes('professional')) return { label: 'Elite/Performance', color: 'bg-purple-100 text-purple-800' };
    if (k.includes('adult')) return { label: 'Adulti', color: 'bg-green-100 text-green-800' };
    if (k.includes('padel')) return { label: 'Padel', color: 'bg-orange-100 text-orange-800' };
    if (k.includes('pickleball')) return { label: 'Pickleball', color: 'bg-yellow-100 text-yellow-800' };
    if (k.includes('touchtennis') || k.includes('touch_tennis')) return { label: 'TouchTennis', color: 'bg-pink-100 text-pink-800' };
    if (k.includes('camp')) return { label: 'Camps', color: 'bg-cyan-100 text-cyan-800' };
    if (k.includes('coach') || k.includes('club')) return { label: 'Coach/Club', color: 'bg-indigo-100 text-indigo-800' };
    return { label: 'Altro', color: 'bg-gray-100 text-gray-800' };
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">Gestione Prezzi</h1>
            <p className="text-muted-foreground">Modifica i prezzi dei programmi dal CMS</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditingBlock({ type: 'price', is_active: true, price_currency: 'EUR' })}>
                <Plus className="h-4 w-4 mr-2" /> Nuovo Prezzo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingBlock?.id ? 'Modifica Prezzo' : 'Nuovo Prezzo'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Chiave (es. price_elite_full)</Label>
                  <Input 
                    value={editingBlock?.key || ''} 
                    onChange={(e) => setEditingBlock(prev => prev ? {...prev, key: e.target.value} : null)}
                    placeholder="price_nome_programma"
                  />
                </div>
                <div>
                  <Label>Nome descrittivo</Label>
                  <Input 
                    value={editingBlock?.name || ''} 
                    onChange={(e) => setEditingBlock(prev => prev ? {...prev, name: e.target.value} : null)}
                    placeholder="Prezzo Programma XYZ"
                  />
                </div>
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
                </div>
                <div>
                  <Label>Periodo/Descrizione (es. "per stagione", "per lezione")</Label>
                  <Input 
                    value={editingBlock?.content || ''} 
                    onChange={(e) => setEditingBlock(prev => prev ? {...prev, content: e.target.value} : null)}
                    placeholder="per stagione (40 settimane)"
                  />
                </div>
                <Button onClick={handleSave} disabled={saveBlock.isPending} className="w-full">
                  {saveBlock.isPending ? 'Salvataggio...' : 'Salva'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Cerca per nome, chiave o descrizione..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as PriceCategory)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutti</SelectItem>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="elite">Elite/Performance</SelectItem>
                    <SelectItem value="adult">Adulti</SelectItem>
                    <SelectItem value="padel">Padel</SelectItem>
                    <SelectItem value="pickleball">Pickleball</SelectItem>
                    <SelectItem value="touchtennis">TouchTennis</SelectItem>
                    <SelectItem value="camps">Summer Camps</SelectItem>
                    <SelectItem value="coach">Coach/Club</SelectItem>
                    <SelectItem value="other">Altro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Chiave</TableHead>
                  <TableHead className="text-right">Prezzo</TableHead>
                  <TableHead>Periodo</TableHead>
                  <TableHead>Azioni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">Caricamento...</TableCell>
                  </TableRow>
                ) : filteredBlocks.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      {searchTerm || categoryFilter !== 'all' ? 'Nessun prezzo trovato' : 'Nessun prezzo configurato'}
                    </TableCell>
                  </TableRow>
                ) : filteredBlocks.map((block) => {
                  const category = getCategoryBadge(block.key);
                  return (
                    <TableRow key={block.id}>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs ${category.color}`}>
                          {category.label}
                        </span>
                      </TableCell>
                      <TableCell className="font-medium">{block.name}</TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">{block.key}</TableCell>
                      <TableCell className="text-right font-bold text-ath-clay">
                        {formatPrice(block.price, block.price_currency)}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{block.content || '-'}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => {
                              setEditingBlock(block);
                              setIsDialogOpen(true);
                            }}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => {
                              if (confirm('Eliminare questo prezzo?')) {
                                deleteBlock.mutate(block.id);
                              }
                            }}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Euro className="h-5 w-5" />
              Riepilogo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-2xl font-bold">{priceBlocks.length}</p>
                <p className="text-sm text-muted-foreground">Prezzi totali</p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-2xl font-bold">{priceBlocks.filter(b => b.key.includes('perf') || b.key.includes('elite')).length}</p>
                <p className="text-sm text-muted-foreground">Performance/Elite</p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-2xl font-bold">{priceBlocks.filter(b => b.key.includes('padel') || b.key.includes('pickleball') || b.key.includes('touchtennis')).length}</p>
                <p className="text-sm text-muted-foreground">Multisport</p>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <p className="text-2xl font-bold">{priceBlocks.filter(b => b.key.includes('private') || b.key.includes('personal')).length}</p>
                <p className="text-sm text-muted-foreground">Lezioni Private</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default PriceManager;
