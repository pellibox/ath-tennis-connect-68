-- Fix RLS policies for cms_blocks to allow admins full access
-- Drop existing policies
DROP POLICY IF EXISTS "CMS blocks are publicly readable" ON public.cms_blocks;
DROP POLICY IF EXISTS "Admins can manage CMS blocks" ON public.cms_blocks;

-- Create proper PERMISSIVE policies
-- Admins can do everything
CREATE POLICY "Admins can manage CMS blocks" 
ON public.cms_blocks 
FOR ALL 
TO authenticated
USING (has_role(auth.uid(), 'admin'::text))
WITH CHECK (has_role(auth.uid(), 'admin'::text));

-- Public can only read active blocks
CREATE POLICY "Public can read active blocks" 
ON public.cms_blocks 
FOR SELECT 
TO anon, authenticated
USING (is_active = true);

-- Fix cms_pages policies too
DROP POLICY IF EXISTS "CMS pages are publicly readable" ON public.cms_pages;
DROP POLICY IF EXISTS "Admins can manage CMS pages" ON public.cms_pages;

CREATE POLICY "Admins can manage CMS pages" 
ON public.cms_pages 
FOR ALL 
TO authenticated
USING (has_role(auth.uid(), 'admin'::text))
WITH CHECK (has_role(auth.uid(), 'admin'::text));

CREATE POLICY "Public can read active pages" 
ON public.cms_pages 
FOR SELECT 
TO anon, authenticated
USING (is_active = true);