
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Trash2, Plus } from 'lucide-react';

type Court = {
  id: string;
  name: string;
  surface: string;
  status: 'available' | 'maintenance' | 'booked';
  nextMaintenance: string;
};

const CourtManagement = () => {
  // Initial mock data
  const initialCourts: Court[] = [
    { 
      id: '1', 
      name: 'Campo Centrale', 
      surface: 'Terra Rossa', 
      status: 'available', 
      nextMaintenance: '2025-04-15' 
    },
    { 
      id: '2', 
      name: 'Campo 1', 
      surface: 'Terra Rossa', 
      status: 'maintenance', 
      nextMaintenance: '2025-04-10' 
    },
    { 
      id: '3', 
      name: 'Campo 2', 
      surface: 'Sintetico', 
      status: 'booked', 
      nextMaintenance: '2025-05-20' 
    },
  ];

  const [courts, setCourts] = useState<Court[]>(initialCourts);
  const [editingCourt, setEditingCourt] = useState<Court | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newCourt, setNewCourt] = useState<Omit<Court, 'id'>>({
    name: '',
    surface: '',
    status: 'available',
    nextMaintenance: ''
  });

  const handleEdit = (court: Court) => {
    setEditingCourt(court);
    setNewCourt({
      name: court.name,
      surface: court.surface,
      status: court.status,
      nextMaintenance: court.nextMaintenance
    });
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setCourts(courts.filter(court => court.id !== id));
    toast.success('Campo eliminato con successo');
  };

  const handleAddOrUpdate = () => {
    if (!newCourt.name || !newCourt.surface) {
      toast.error('Nome e superficie sono campi obbligatori');
      return;
    }

    if (editingCourt) {
      // Update existing court
      setCourts(courts.map(court => 
        court.id === editingCourt.id 
          ? { ...court, ...newCourt } 
          : court
      ));
      toast.success('Campo aggiornato con successo');
    } else {
      // Add new court
      const id = Math.random().toString(36).substr(2, 9);
      setCourts([...courts, { id, ...newCourt }]);
      toast.success('Nuovo campo aggiunto con successo');
    }

    // Reset form and close dialog
    setNewCourt({
      name: '',
      surface: '',
      status: 'available',
      nextMaintenance: ''
    });
    setEditingCourt(null);
    setDialogOpen(false);
  };

  const getStatusLabel = (status: Court['status']) => {
    switch (status) {
      case 'available':
        return <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Disponibile</span>;
      case 'maintenance':
        return <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">Manutenzione</span>;
      case 'booked':
        return <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Prenotato</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gestione Campi</h1>
          <p className="text-gray-500">Visualizza e gestisci i campi da tennis</p>
        </div>
        
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={() => {
                setEditingCourt(null);
                setNewCourt({
                  name: '',
                  surface: '',
                  status: 'available',
                  nextMaintenance: ''
                });
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Nuovo Campo
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingCourt ? 'Modifica Campo' : 'Aggiungi Nuovo Campo'}
              </DialogTitle>
              <DialogDescription>
                Inserisci i dettagli del campo da tennis.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="name">Nome del Campo</Label>
                <Input 
                  id="name" 
                  value={newCourt.name} 
                  onChange={(e) => setNewCourt({...newCourt, name: e.target.value})}
                  placeholder="es. Campo Centrale"
                />
              </div>
              
              <div>
                <Label htmlFor="surface">Superficie</Label>
                <Input 
                  id="surface" 
                  value={newCourt.surface} 
                  onChange={(e) => setNewCourt({...newCourt, surface: e.target.value})}
                  placeholder="es. Terra Rossa"
                />
              </div>
              
              <div>
                <Label htmlFor="status">Stato</Label>
                <select 
                  id="status"
                  value={newCourt.status}
                  onChange={(e) => setNewCourt({
                    ...newCourt, 
                    status: e.target.value as Court['status']
                  })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  <option value="available">Disponibile</option>
                  <option value="maintenance">In Manutenzione</option>
                  <option value="booked">Prenotato</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="nextMaintenance">Prossima Manutenzione</Label>
                <Input 
                  id="nextMaintenance" 
                  type="date"
                  value={newCourt.nextMaintenance} 
                  onChange={(e) => setNewCourt({...newCourt, nextMaintenance: e.target.value})}
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Annulla
              </Button>
              <Button onClick={handleAddOrUpdate}>
                {editingCourt ? 'Aggiorna' : 'Aggiungi'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Superficie</TableHead>
              <TableHead>Stato</TableHead>
              <TableHead>Prossima Manutenzione</TableHead>
              <TableHead className="text-right">Azioni</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courts.map((court) => (
              <TableRow key={court.id}>
                <TableCell className="font-medium">{court.name}</TableCell>
                <TableCell>{court.surface}</TableCell>
                <TableCell>{getStatusLabel(court.status)}</TableCell>
                <TableCell>{new Date(court.nextMaintenance).toLocaleDateString('it-IT')}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(court)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-500 hover:text-red-700" 
                      onClick={() => handleDelete(court.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {courts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Nessun campo trovato. Aggiungi un nuovo campo.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CourtManagement;
