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
    [ClusterType.EXCELLENCE]: 'from-secondary to-emerald-400',
    [ClusterType.INTERMEDIATE]: 'from-warning to-yellow-400',
    [ClusterType.RISK]: 'from-danger to-red-400',
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
        
        <div className="relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-lg">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar titulación..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="text-slate-400 hover:text-slate-700">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && search && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-2xl blur"></div>
          
          <div className="relative max-h-96 overflow-y-auto rounded-2xl bg-white backdrop-blur-md border border-slate-200 shadow-xl">
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
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 group ${
                      selectedTitulation?.ranking === tit.ranking
                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-slate-800 group-hover:text-primary transition-colors">
                          {tit.titulation}
                        </p>
                        <p className="text-xs text-slate-600">{tit.center}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${clusterColors[tit.cluster as ClusterType]} text-white`}>
                        {clusterLabels[tit.cluster as ClusterType]}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 text-center text-slate-600">
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
