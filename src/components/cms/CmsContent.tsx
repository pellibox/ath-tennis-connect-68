import { useCmsBlock } from '@/hooks/useCmsContent';
import { Skeleton } from '@/components/ui/skeleton';

interface CmsContentProps {
  /** Unique key of the CMS block */
  blockKey: string;
  /** Fallback content if block not found */
  fallback?: React.ReactNode;
  /** Custom className for styling */
  className?: string;
  /** Render as specific HTML element */
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  /** Show loading skeleton */
  showSkeleton?: boolean;
}

/**
 * CmsContent - Renders text content from CMS
 * Usage: <CmsContent blockKey="home_hero_title" fallback="Default Title" as="h1" />
 */
export const CmsContent = ({ 
  blockKey, 
  fallback, 
  className = '',
  as: Component = 'span',
  showSkeleton = true
}: CmsContentProps) => {
  const { data: block, isLoading } = useCmsBlock(blockKey);

  if (isLoading && showSkeleton) {
    return <Skeleton className={`h-6 w-32 ${className}`} />;
  }

  const content = block?.content || fallback;

  if (!content) return null;

  return <Component className={className}>{content}</Component>;
};

interface CmsImageProps {
  /** Unique key of the CMS block */
  blockKey: string;
  /** Fallback image URL */
  fallback?: string;
  /** Alt text for the image */
  alt?: string;
  /** Custom className for styling */
  className?: string;
  /** Show loading skeleton */
  showSkeleton?: boolean;
}

/**
 * CmsImage - Renders image from CMS
 * Usage: <CmsImage blockKey="home_hero_image" fallback="/default.jpg" alt="Hero" />
 */
export const CmsImage = ({ 
  blockKey, 
  fallback,
  alt = '',
  className = '',
  showSkeleton = true
}: CmsImageProps) => {
  const { data: block, isLoading } = useCmsBlock(blockKey);

  if (isLoading && showSkeleton) {
    return <Skeleton className={`h-48 w-full ${className}`} />;
  }

  const imageUrl = block?.image_url || fallback;

  if (!imageUrl) return null;

  return (
    <img 
      src={imageUrl} 
      alt={block?.name || alt} 
      className={className}
      loading="lazy"
    />
  );
};

interface CmsPriceProps {
  /** Unique key of the CMS block */
  blockKey: string;
  /** Fallback price */
  fallback?: number;
  /** Custom className for styling */
  className?: string;
  /** Show currency symbol */
  showCurrency?: boolean;
  /** Show price description */
  showDescription?: boolean;
}

/**
 * CmsPrice - Renders price from CMS
 * Usage: <CmsPrice blockKey="elite_program_price" fallback={299} />
 */
export const CmsPrice = ({ 
  blockKey, 
  fallback,
  className = '',
  showCurrency = true,
  showDescription = true
}: CmsPriceProps) => {
  const { data: block, isLoading } = useCmsBlock(blockKey);

  if (isLoading) {
    return <Skeleton className={`h-6 w-20 ${className}`} />;
  }

  const price = block?.price ?? fallback;
  const currency = block?.price_currency || 'EUR';
  const description = block?.content;

  if (price === null || price === undefined) return null;

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency;

  return (
    <span className={className}>
      {showCurrency && <span>{currencySymbol}</span>}
      <span>{price}</span>
      {showDescription && description && <span className="text-muted-foreground ml-1">{description}</span>}
    </span>
  );
};

interface CmsHtmlProps {
  /** Unique key of the CMS block */
  blockKey: string;
  /** Fallback HTML content */
  fallback?: string;
  /** Custom className for styling */
  className?: string;
}

/**
 * CmsHtml - Renders HTML content from CMS (use with caution)
 * Usage: <CmsHtml blockKey="about_rich_text" />
 */
export const CmsHtml = ({ 
  blockKey, 
  fallback,
  className = ''
}: CmsHtmlProps) => {
  const { data: block, isLoading } = useCmsBlock(blockKey);

  if (isLoading) {
    return <Skeleton className={`h-24 w-full ${className}`} />;
  }

  const html = block?.content || fallback;

  if (!html) return null;

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface CmsBlockProps {
  /** Unique key of the CMS block */
  blockKey: string;
  /** Fallback content */
  fallback?: React.ReactNode;
  /** Custom className for styling */
  className?: string;
  /** Custom render function */
  children?: (block: { 
    content: string | null; 
    image_url: string | null; 
    price: number | null;
    price_currency: string;
    type: string;
    name: string;
  } | null) => React.ReactNode;
}

/**
 * CmsBlock - Generic CMS block with custom render
 * Usage: 
 * <CmsBlock blockKey="program_details">
 *   {(block) => block ? <CustomComponent data={block} /> : <Fallback />}
 * </CmsBlock>
 */
export const CmsBlock = ({ 
  blockKey, 
  fallback,
  className = '',
  children
}: CmsBlockProps) => {
  const { data: block, isLoading } = useCmsBlock(blockKey);

  if (isLoading) {
    return <Skeleton className={`h-12 w-full ${className}`} />;
  }

  if (children) {
    return <>{children(block)}</>;
  }

  if (!block) return <>{fallback}</>;

  // Auto-render based on type
  switch (block.type) {
    case 'image':
      return <CmsImage blockKey={blockKey} className={className} />;
    case 'price':
      return <CmsPrice blockKey={blockKey} className={className} />;
    case 'html':
      return <CmsHtml blockKey={blockKey} className={className} />;
    default:
      return <CmsContent blockKey={blockKey} className={className} />;
  }
};

export default CmsContent;
