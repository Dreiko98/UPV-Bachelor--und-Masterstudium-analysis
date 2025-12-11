import React, { ReactNode } from 'react';

export type TabItem = {
  id: string;
  label: string;
  icon: string;
  description?: string;
};

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: ReactNode;
}

export const Tabs = (props: TabsProps): React.ReactElement => {
  const { tabs, activeTab, onTabChange, children } = props;

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="flex gap-2 px-6 py-4 overflow-x-auto scrollbar-hide">
          {tabs.map((tab: TabItem) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center gap-3 px-5 py-2.5 rounded-xl font-medium
                transition-all duration-300 whitespace-nowrap text-sm
                ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }
              `}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="transition-opacity duration-300">{children}</div>
    </div>
  );
};
