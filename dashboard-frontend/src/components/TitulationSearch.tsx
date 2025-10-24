import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { ITitulationPerformance, ClusterType } from '@/types';

interface TitulationSearchProps {
  titulations: ITitulationPerformance[];
  onSelect: (titulation: ITitulationPerformance | null) => void;
  selectedTitulation: ITitulationPerformance | null;
}

export const TitulationSearch: React.FC<TitulationSearchProps> = ({ titulations, onSelect, selectedTitulation }: TitulationSearchProps) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filtered = titulations.filter((t: ITitulationPerformance) => 
    t.titulation.toLowerCase().includes(search.toLowerCase())
  );

  const clusterColors: Record<ClusterType, string> = {
    [ClusterType.EXCELLENCE]: 'from-emerald-500 to-teal-500',
    [ClusterType.INTERMEDIATE]: 'from-amber-500 to-orange-500',
    [ClusterType.RISK]: 'from-red-500 to-pink-500',
  };

  const clusterLabels: Record<ClusterType, string> = {
    [ClusterType.EXCELLENCE]: 'Excelencia',
    [ClusterType.INTERMEDIATE]: 'Intermedio',
    [ClusterType.RISK]: 'Riesgo',
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
        
        <div className="relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-white/30 transition-all duration-300 shadow-2xl hover:shadow-blue-500/20">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar titulación..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && search && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-lg blur"></div>
          
          <div className="relative max-h-96 overflow-y-auto rounded-lg bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-2xl border border-white/20 shadow-2xl">
            {filtered.length > 0 ? (
              <div className="space-y-1 p-2">
                {filtered.map((tit: ITitulationPerformance) => (
                  <button
                    key={tit.ranking}
                    onClick={() => {
                      onSelect(tit);
                      setSearch('');
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 group ${
                      selectedTitulation?.ranking === tit.ranking
                        ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/30'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-white group-hover:text-blue-300 transition-colors">
                          {tit.titulation}
                        </p>
                        <p className="text-xs text-gray-400">{tit.center}</p>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r ${clusterColors[tit.cluster as ClusterType]} text-white`}>
                        {clusterLabels[tit.cluster as ClusterType]}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 text-center text-gray-400">
                No se encontraron titulaciones
              </div>
            )}
          </div>
        </div>
      )}

      {/* Selected Titulation Card */}
      {selectedTitulation && (
        <div className="mt-4 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative p-6 rounded-xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{selectedTitulation.titulation}</h3>
                <p className="text-sm text-gray-400">{selectedTitulation.center}</p>
              </div>
              <button
                onClick={() => onSelect(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Satisfacción', value: selectedTitulation.satisfaction.toFixed(1), unit: '/10', color: 'from-blue-400 to-cyan-400' },
                { label: 'Abandono', value: selectedTitulation.dropout.toFixed(1), unit: '%', color: 'from-orange-400 to-red-400' },
                { label: 'Empleabilidad', value: selectedTitulation.employability.toFixed(1), unit: '%', color: 'from-green-400 to-emerald-400' },
                { label: 'Autoeficacia', value: selectedTitulation.selfEfficacy.toFixed(1), unit: '/10', color: 'from-purple-400 to-pink-400' },
              ].map((metric, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                  <p className="text-xs text-gray-400 mb-2">{metric.label}</p>
                  <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${metric.color}`}>
                    {metric.value}{metric.unit}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <div className={`flex-1 px-3 py-2 rounded-lg text-center text-sm font-semibold bg-gradient-to-r ${clusterColors[selectedTitulation.cluster as ClusterType]} text-white`}>
                Cluster: {clusterLabels[selectedTitulation.cluster as ClusterType]}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TitulationSearch;
