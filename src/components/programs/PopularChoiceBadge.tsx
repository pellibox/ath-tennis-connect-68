
import { cn } from "@/lib/utils";

interface PopularChoiceBadgeProps {
  className?: string;
}

const PopularChoiceBadge = ({ className }: PopularChoiceBadgeProps) => {
  return (
    <div 
      className={cn(
        "absolute -top-2 -left-2 bg-[#ea384c] text-white text-xs font-bold py-1 px-3 rounded-md transform -rotate-12 shadow-md z-10",
        className
      )}
    >
      POPULAR CHOICE
    </div>
  );
};

export default PopularChoiceBadge;
