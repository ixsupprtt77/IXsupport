import React, { useState } from 'react';
import { ChevronDown } from './SimpleIcons';

interface AccordionItemProps {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, children, isOpen, onToggle }) => {
  return (
    <div className="border rounded-lg px-6 bg-card">
      <button
        onClick={() => onToggle(id)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
      >
        {title}
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
};

interface SimpleAccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  className?: string;
}

const SimpleAccordion: React.FC<SimpleAccordionProps> = ({ 
  children, 
  type = 'single', 
  className = '' 
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(id) ? [] : [id]);
    } else {
      setOpenItems(
        openItems.includes(id)
          ? openItems.filter(item => item !== id)
          : [...openItems, id]
      );
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
            isOpen: openItems.includes(child.props.id),
            onToggle: handleToggle,
          });
        }
        return child;
      })}
    </div>
  );
};

export { SimpleAccordion, AccordionItem };