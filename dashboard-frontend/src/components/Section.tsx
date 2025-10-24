import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  icon,
  children,
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg mb-4 cursor-pointer hover:from-slate-700 hover:to-slate-600 transition-all"
      >
        {icon && <div className="text-2xl">{icon}</div>}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <ChevronRight
          className={`w-5 h-5 text-blue-400 transition-transform ${
            collapsed ? '' : 'rotate-90'
          }`}
        />
      </div>

      {/* Section Content */}
      {!collapsed && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};
