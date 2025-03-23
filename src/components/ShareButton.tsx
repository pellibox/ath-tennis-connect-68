
import { useState } from 'react';
import { Share2, Link, Copy, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

interface ShareButtonProps {
  url?: string;
  title?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const ShareButton = ({ 
  url = window.location.href, 
  title = "ATH - Advanced Tennis Hub", 
  variant = "outline",
  size = "default",
  className = ""
}: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copiato!",
        description: "Il link è stato copiato negli appunti",
      });
      setTimeout(() => setIsOpen(false), 500);
    } catch (err) {
      toast({
        title: "Errore",
        description: "Impossibile copiare il link",
        variant: "destructive",
      });
    }
  };

  const shareOptions = [
    {
      name: "Copia Link",
      icon: <Copy size={18} />,
      action: handleCopyLink,
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`, '_blank');
        setTimeout(() => setIsOpen(false), 500);
      },
    },
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      action: () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        setTimeout(() => setIsOpen(false), 500);
      },
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        setTimeout(() => setIsOpen(false), 500);
      },
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      action: () => {
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Dai un'occhiata: ${url}`)}`;
        setTimeout(() => setIsOpen(false), 500);
      },
    },
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant={variant} size={size} className={`gap-2 ${className}`}>
          <Share2 size={18} />
          Condividi
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <div className="grid gap-1">
          {shareOptions.map((option, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex justify-start gap-2 px-3 py-2"
              onClick={option.action}
            >
              {option.icon}
              <span>{option.name}</span>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
