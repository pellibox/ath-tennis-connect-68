
/**
 * Format a number as currency
 * @param value - The value to format
 * @param currency - The currency symbol
 * @param locale - The locale to use for formatting
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number | string, 
  currency: string = '€', 
  locale: string = 'it-IT'
): string => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  
  if (isNaN(numValue)) {
    return `${currency} -`;
  }
  
  return `${currency} ${numValue.toLocaleString(locale)}`;
};
