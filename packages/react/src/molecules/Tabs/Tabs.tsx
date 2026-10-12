import React, { useId, useRef, useState } from 'react';

export interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: number;
  activeTab?: number;
  onTabChange?: (index: number) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab = 0,
  activeTab: controlledActiveTab,
  onTabChange,
  className = '',
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState<number>(defaultActiveTab);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;
  const activeItem = items[activeTab];
  const enabledIndexes = items.flatMap((item, index) => (item.disabled ? [] : [index]));
  // The tab that receives focus when tabbing into the list: the active one, or the first enabled one.
  const focusableTab = activeItem && !activeItem.disabled ? activeTab : enabledIndexes[0];

  const selectTab = (index: number) => {
    if (items[index]?.disabled) return;

    if (onTabChange) {
      onTabChange(index);
    }
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (enabledIndexes.length === 0) return;

    const current = enabledIndexes.indexOf(tabRefs.current.indexOf(event.target as HTMLButtonElement));
    const count = enabledIndexes.length;
    let next: number;

    switch (event.key) {
      case 'ArrowRight':
        next = enabledIndexes[(current + 1) % count];
        break;
      case 'ArrowLeft':
        next = enabledIndexes[(current - 1 + count) % count];
        break;
      case 'Home':
        next = enabledIndexes[0];
        break;
      case 'End':
        next = enabledIndexes[count - 1];
        break;
      default:
        return;
    }

    event.preventDefault();
    selectTab(next);
    tabRefs.current[next]?.focus();
  };

  const baseClassName = 'ds-tabs';
  const finalClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <div className={finalClassName}>
      <div className="ds-tabs-list" role="tablist" onKeyDown={handleKeyDown}>
        {items.map((item, index) => (
          <button
            key={index}
            ref={element => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            className={`ds-tab-button ${
              activeTab === index ? 'ds-tab-active' : ''
            } ${item.disabled ? 'ds-tab-disabled' : ''}`}
            onClick={() => selectTab(index)}
            aria-selected={activeTab === index}
            aria-controls={activeTab === index ? `${baseId}-panel-${index}` : undefined}
            aria-disabled={item.disabled}
            tabIndex={focusableTab === index ? 0 : -1}
          >
            {item.label}
          </button>
        ))}
      </div>
      {activeItem && (
        <div
          className="ds-tab-content"
          role="tabpanel"
          id={`${baseId}-panel-${activeTab}`}
          aria-labelledby={`${baseId}-tab-${activeTab}`}
          tabIndex={0}
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
};

export default Tabs;
