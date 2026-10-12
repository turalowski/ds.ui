import React, { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultExpanded?: number[];
  expandedItems?: number[];
  onExpandedChange?: (expandedItems: number[]) => void;
  allowMultiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultExpanded = [],
  expandedItems: controlledExpandedItems,
  onExpandedChange,
  allowMultiple = false,
  className = '',
  ...rest
}) => {
  const [internalExpandedItems, setInternalExpandedItems] = useState<number[]>(defaultExpanded);

  const expandedItems = controlledExpandedItems !== undefined ? controlledExpandedItems : internalExpandedItems;

  useEffect(() => {
    if (controlledExpandedItems !== undefined) {
      setInternalExpandedItems(controlledExpandedItems);
    }
  }, [controlledExpandedItems]);

  const toggleItem = (index: number) => {
    const newExpandedItems = allowMultiple
      ? expandedItems.includes(index)
        ? expandedItems.filter(i => i !== index)
        : [...expandedItems, index]
      : expandedItems.includes(index)
        ? []
        : [index];

    if (onExpandedChange) {
      onExpandedChange(newExpandedItems);
    }
    if (controlledExpandedItems === undefined) {
      setInternalExpandedItems(newExpandedItems);
    }
  };

  const baseClassName = 'ds-accordion';
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <div className={finalClassName}>
      {items.map((item, index) => {
        const isExpanded = expandedItems.includes(index);
        
        return (
          <div key={index} className="ds-accordion-item" {...rest}>
            <div
              className="ds-accordion-header"
              onClick={() => toggleItem(index)}
            >
              {item.title}
              <FiChevronDown
                className={`ds-accordion-icon ${isExpanded ? 'ds-accordion-icon-rotated' : ''}`}
              />
            </div>
            <div
              className={`ds-accordion-content ${
                !isExpanded ? 'ds-accordion-content-collapsed' : ''
              }`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;