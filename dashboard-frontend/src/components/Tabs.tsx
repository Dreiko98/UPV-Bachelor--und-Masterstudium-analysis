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
      <div className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex gap-2 px-6 py-4 overflow-x-auto scrollbar-hide">
          {tabs.map((tab: TabItem) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-lg font-medium
                transition-all duration-300 whitespace-nowrap text-sm
                ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
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
