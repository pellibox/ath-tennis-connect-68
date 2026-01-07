import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface CmsPage {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CmsBlock {
  id: string;
  key: string;
  name: string;
  type: 'text' | 'image' | 'price' | 'html';
  content: string | null;
  image_url: string | null;
  price: number | null;
  price_currency: string;
  metadata: Record<string, unknown> | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CmsPageBlock {
  id: string;
  page_id: string;
  block_id: string;
  section: string | null;
  sort_order: number;
  created_at: string;
}

// Fetch all CMS pages
export const useCmsPages = () => {
  return useQuery({
    queryKey: ['cms-pages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cms_pages')
        .select('*')
        .order('title');
      
      if (error) throw error;
      return data as CmsPage[];
    },
  });
};

// Fetch all CMS blocks
export const useCmsBlocks = () => {
  return useQuery({
    queryKey: ['cms-blocks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cms_blocks')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as CmsBlock[];
    },
  });
};

// Fetch a single block by key
export const useCmsBlock = (key: string) => {
  return useQuery({
    queryKey: ['cms-block', key],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cms_blocks')
        .select('*')
        .eq('key', key)
        .single();
      
      if (error) {
        if (error.code === 'PGRST116') return null;
        throw error;
      }
      return data as CmsBlock;
    },
    enabled: !!key,
  });
};

// Fetch blocks for a specific page
export const useCmsPageBlocks = (pageSlug: string) => {
  return useQuery({
    queryKey: ['cms-page-blocks', pageSlug],
    queryFn: async () => {
      const { data: page, error: pageError } = await supabase
        .from('cms_pages')
        .select('id')
        .eq('slug', pageSlug)
        .single();
      
      if (pageError) {
        if (pageError.code === 'PGRST116') return [];
        throw pageError;
      }

      const { data, error } = await supabase
        .from('cms_page_blocks')
        .select(`
          *,
          block:cms_blocks(*)
        `)
        .eq('page_id', page.id)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
    enabled: !!pageSlug,
  });
};

// Create/Update CMS page
export const useSaveCmsPage = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (page: Partial<CmsPage> & { slug: string; title: string }) => {
      if (page.id) {
        const { data, error } = await supabase
          .from('cms_pages')
          .update(page)
          .eq('id', page.id)
          .select()
          .single();
        if (error) throw error;
        return data;
      } else {
        const { data, error } = await supabase
          .from('cms_pages')
          .insert(page)
          .select()
          .single();
        if (error) throw error;
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-pages'] });
      toast.success('Pagina salvata con successo');
    },
    onError: (error) => {
      toast.error('Errore nel salvare la pagina: ' + error.message);
    },
  });
};

// Create/Update CMS block
export const useSaveCmsBlock = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (block: Partial<CmsBlock> & { key: string; name: string }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { metadata, ...blockData } = block;
      const insertData = {
        ...blockData,
        metadata: metadata ? JSON.parse(JSON.stringify(metadata)) : null,
      };
      
      if (block.id) {
        const { data, error } = await supabase
          .from('cms_blocks')
          .update(insertData)
          .eq('id', block.id)
          .select()
          .single();
        if (error) throw error;
        return data;
      } else {
        const { data, error } = await supabase
          .from('cms_blocks')
          .insert(insertData)
          .select()
          .single();
        if (error) throw error;
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-blocks'] });
      toast.success('Blocco salvato con successo');
    },
    onError: (error) => {
      toast.error('Errore nel salvare il blocco: ' + error.message);
    },
  });
};

// Delete CMS page
export const useDeleteCmsPage = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('cms_pages')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-pages'] });
      toast.success('Pagina eliminata');
    },
    onError: (error) => {
      toast.error('Errore: ' + error.message);
    },
  });
};

// Delete CMS block
export const useDeleteCmsBlock = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('cms_blocks')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-blocks'] });
      toast.success('Blocco eliminato');
    },
    onError: (error) => {
      toast.error('Errore: ' + error.message);
    },
  });
};

// Upload image to CMS bucket
export const uploadCmsImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  
  const { error: uploadError } = await supabase.storage
    .from('cms-images')
    .upload(fileName, file);
    
  if (uploadError) throw uploadError;
  
  const { data } = supabase.storage
    .from('cms-images')
    .getPublicUrl(fileName);
    
  return data.publicUrl;
};
