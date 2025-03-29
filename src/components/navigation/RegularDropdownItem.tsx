
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
import { NavigationItem } from './navigationItems';
import { useState } from 'react';

interface RegularDropdownItemProps {
  item: NavigationItem;
  textColorClass: string;
}

const RegularDropdownItem = ({ item, textColorClass }: RegularDropdownItemProps) => {
  const [open, setOpen] = useState(false);
  
  const isActive = (href: string) => {
    return location.pathname.startsWith(href) && href !== '/';
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button 
          className={cn(
            "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay bg-transparent px-4 py-2 rounded-md",
            textColorClass,
            isActive(item.href) ? "text-ath-clay" : ""
          )}
        >
          {item.icon}
          {item.text}
          <ChevronDown 
            size={16} 
            className={cn(
              "ml-1 transition-transform", 
              open ? "rotate-180" : ""
            )} 
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="bg-popover w-[200px] p-2">
        {item.submenu?.map((subItem, subIndex) => (
          <DropdownMenuItem key={subIndex} asChild>
            <Link 
              to={subItem.href}
              className={cn(
                "flex items-center p-2 hover:bg-gray-100 rounded-md",
                isActive(subItem.href) ? "text-ath-clay" : ""
              )}
            >
              {subItem.icon}
              <span>{subItem.text}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RegularDropdownItem;
