import React, { useId, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
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
  const baseId = useId();

  const expandedItems = controlledExpandedItems !== undefined ? controlledExpandedItems : internalExpandedItems;

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
    <div className={finalClassName} {...rest}>
      {items.map((item, index) => {
        const isExpanded = expandedItems.includes(index);
        const headerId = `${baseId}-header-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={index} className="ds-accordion-item">
            <button
              type="button"
              id={headerId}
              className="ds-accordion-header"
              aria-expanded={isExpanded}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
            >
              {item.title}
              <FiChevronDown
                aria-hidden="true"
                className={`ds-accordion-icon ${isExpanded ? 'ds-accordion-icon-rotated' : ''}`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isExpanded}
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
