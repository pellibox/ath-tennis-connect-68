import { useCmsBlock } from '@/hooks/useCmsContent';
import { Skeleton } from '@/components/ui/skeleton';

interface CmsPriceDisplayProps {
  blockKey: string;
  fallbackPrice?: number;
  fallbackCurrency?: string;
  fallbackPeriod?: string;
  className?: string;
  priceClassName?: string;
  periodClassName?: string;
  showPeriod?: boolean;
}

const CmsPriceDisplay = ({
  blockKey,
  fallbackPrice = 0,
  fallbackCurrency = 'EUR',
  fallbackPeriod = '',
  className = '',
  priceClassName = 'text-3xl font-bold text-ath-clay',
  periodClassName = 'text-sm text-gray-600',
  showPeriod = true
}: CmsPriceDisplayProps) => {
  const { data: block, isLoading } = useCmsBlock(blockKey);

  if (isLoading) {
    return (
      <div className={className}>
        <Skeleton className="h-9 w-24 mb-1" />
        {showPeriod && <Skeleton className="h-4 w-32" />}
      </div>
    );
  }

  const price = block?.price ?? fallbackPrice;
  const currency = block?.price_currency ?? fallbackCurrency;
  const period = block?.content ?? fallbackPeriod;

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency;

  const formattedPrice = new Intl.NumberFormat('it-IT', {
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  }).format(price);

  return (
    <div className={className}>
      <p className={priceClassName}>{currencySymbol}{formattedPrice}</p>
      {showPeriod && period && <p className={periodClassName}>{period}</p>}
    </div>
  );
};

export default CmsPriceDisplay;
