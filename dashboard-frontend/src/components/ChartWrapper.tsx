import React from 'react';
import { ChevronDown, Download, Info } from 'lucide-react';

interface ChartWrapperProps {
  title: string;
  description: string;
  insight: string;
  children: React.ReactNode;
  onExport?: () => void;
}

export const ChartWrapper: React.FC<ChartWrapperProps> = (props) => {
  const { title, description, insight, children, onExport } = props;
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg shadow-md">
      {/* Gradient background accent */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
        style={{
          background: 'radial-gradient(circle at top-right, #56CCF2, transparent 70%)'
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200">
          <div className="flex justify-between items-start gap-4 mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 flex-shrink-0">
              {onExport && (
                <button
                  onClick={onExport}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-all duration-200"
                  title="Descargar"
                >
                  <Download className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Chart Content */}
        <div className="px-6 py-6">
          <div className="relative w-full" style={{ minHeight: '500px' }}>
            {/* Subtle border effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-gradient-to-b from-white to-transparent transition-opacity" style={{ pointerEvents: 'none' }} />
            {children}
          </div>
        </div>

        {/* Insight Section */}
        <div className="border-t border-slate-200">
          <button
            onClick={() => setExpanded(!expanded)}
            className={`
              w-full px-6 py-4 flex items-center gap-3 font-medium
              transition-all duration-200 group/insight
              ${expanded 
                ? 'bg-primary/10 text-blue-700' 
                : 'text-slate-600 hover:text-primary hover:bg-slate-50'
              }
            `}
          >
            <div className={`p-1.5 rounded-xl ${expanded ? 'bg-primary/20' : 'bg-slate-100'} transition-all`}>
              <Info className="w-4 h-4" />
            </div>

            <span className="flex-1 text-sm text-left">
              {expanded ? 'Conclusiones y Hallazgos' : 'Ver Conclusiones'}
            </span>

            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>

          {expanded && (
            <div className="px-6 py-5 bg-primary/5 border-t border-primary/10 animate-in fade-in slide-in-from-top-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full opacity-60" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {insight}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartWrapper;
