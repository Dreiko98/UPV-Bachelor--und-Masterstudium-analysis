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
    <div className="group relative rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/30 overflow-hidden transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Gradient background accent */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
        style={{
          background: 'radial-gradient(circle at top-right, #3b82f6, transparent 70%)'
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-700/50 backdrop-blur-sm">
          <div className="flex justify-between items-start gap-4 mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                {title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 flex-shrink-0">
              {onExport && (
                <button
                  onClick={onExport}
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 text-gray-400 hover:text-white transition-all duration-200"
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
        <div className="border-t border-slate-700/50 backdrop-blur-sm">
          <button
            onClick={() => setExpanded(!expanded)}
            className={`
              w-full px-6 py-4 flex items-center gap-3 font-medium
              transition-all duration-200 group/insight
              ${expanded 
                ? 'bg-blue-600/20 text-blue-300' 
                : 'text-gray-400 hover:text-blue-300 hover:bg-slate-700/20'
              }
            `}
          >
            <div className={`p-1.5 rounded-lg ${expanded ? 'bg-blue-500/30' : 'bg-slate-700/30'} transition-all`}>
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
            <div className="px-6 py-5 bg-gradient-to-b from-blue-900/10 to-transparent border-t border-blue-700/20 animate-in fade-in slide-in-from-top-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full opacity-60" />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
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
