import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { ITitulationPerformance, ClusterType } from '@/types';

interface AllTitulationsProps {
  titulations: ITitulationPerformance[];
}

type SortOption = 'satisfaction' | 'dropout' | 'employability' | 'name';
type ClusterFilter = 'all' | ClusterType;

export const AllTitulations: React.FC<AllTitulationsProps> = ({ titulations }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('satisfaction');
  const [clusterFilter, setClusterFilter] = useState<ClusterFilter>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const clusterColors: Record<ClusterType, { bg: string; border: string; text: string }> = {
    [ClusterType.EXCELLENCE]: {
      bg: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
    },
    [ClusterType.INTERMEDIATE]: {
      bg: 'from-amber-500/20 to-orange-500/20',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
    },
    [ClusterType.RISK]: {
      bg: 'from-red-500/20 to-pink-500/20',
      border: 'border-red-500/30',
      text: 'text-red-400',
    },
  };

  const clusterLabels: Record<ClusterType, string> = {
    [ClusterType.EXCELLENCE]: 'Excelencia',
    [ClusterType.INTERMEDIATE]: 'Intermedio',
    [ClusterType.RISK]: 'Riesgo',
  };

  // Filter titulations
  let filtered = titulations.filter((t) => {
    const matchSearch = t.titulation.toLowerCase().includes(searchQuery.toLowerCase()) || t.center.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCluster = clusterFilter === 'all' || t.cluster === clusterFilter;
    return matchSearch && matchCluster;
  });

  // Sort titulations
  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'satisfaction': return b.satisfaction - a.satisfaction;
      case 'dropout': return a.dropout - b.dropout;
      case 'employability': return b.employability - a.employability;
      case 'name': return a.titulation.localeCompare(b.titulation);
      default: return 0;
    }
  });

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700/50 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Buscar titulación o centro..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition">
            <option value="satisfaction">Ordenar: Satisfacción</option>
            <option value="dropout">Ordenar: Menor Abandono</option>
            <option value="employability">Ordenar: Empleabilidad</option>
            <option value="name">Ordenar: Nombre A-Z</option>
          </select>
          <select value={clusterFilter} onChange={(e) => setClusterFilter(e.target.value as ClusterFilter)} className="px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition">
            <option value="all">Todos los Clusters</option>
            <option value={ClusterType.EXCELLENCE}>Excelencia</option>
            <option value={ClusterType.INTERMEDIATE}>Intermedio</option>
            <option value={ClusterType.RISK}>Riesgo</option>
          </select>
        </div>
        <p className="text-sm text-gray-400 mt-4">Mostrando <span className="font-semibold text-blue-400">{filtered.length}</span> de <span className="font-semibold">{titulations.length}</span> titulaciones</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tit) => {
          const colors = clusterColors[tit.cluster as ClusterType];
          const isExpanded = expandedId === tit.ranking;
          return (
            <div key={tit.ranking} className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`}>
              <button onClick={() => setExpandedId(isExpanded ? null : tit.ranking)} className="w-full px-5 py-4 flex items-start justify-between hover:bg-white/5 transition">
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-400">#{tit.ranking}</span>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold bg-black/20 ${colors.text}`}>{clusterLabels[tit.cluster as ClusterType]}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-tight">{tit.titulation}</h3>
                  <p className="text-xs text-gray-400 mt-1">{tit.center}</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              {isExpanded && (
                <div className="px-5 py-4 border-t border-white/10 bg-black/20 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-500/20 rounded p-3 border border-blue-500/30">
                      <p className="text-xs text-gray-400 mb-1">Satisfacción</p>
                      <p className="text-lg font-bold text-blue-400">{tit.satisfaction.toFixed(1)}</p>
                      <p className="text-xs text-gray-500">/10</p>
                    </div>
                    <div className="bg-orange-500/20 rounded p-3 border border-orange-500/30">
                      <p className="text-xs text-gray-400 mb-1">Abandono</p>
                      <p className="text-lg font-bold text-orange-400">{tit.dropout.toFixed(1)}</p>
                      <p className="text-xs text-gray-500">%</p>
                    </div>
                    <div className="bg-green-500/20 rounded p-3 border border-green-500/30">
                      <p className="text-xs text-gray-400 mb-1">Empleabilidad</p>
                      <p className="text-lg font-bold text-green-400">{tit.employability.toFixed(1)}</p>
                      <p className="text-xs text-gray-500">%</p>
                    </div>
                    <div className="bg-purple-500/20 rounded p-3 border border-purple-500/30">
                      <p className="text-xs text-gray-400 mb-1">Autoeficacia</p>
                      <p className="text-lg font-bold text-purple-400">{tit.selfEfficacy.toFixed(1)}</p>
                      <p className="text-xs text-gray-500">/10</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-300">Desempeño General</p>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-blue-500 to-blue-400`} style={{width: `${(tit.satisfaction / 10) * 100}%`}} />
                    </div>
                    <p className="text-xs text-gray-400">{tit.satisfaction >= 7.5 ? '✨ Desempeño Excelente' : tit.satisfaction >= 6.5 ? '⚡ Desempeño Bueno' : '⚠️ Requiere Atención'}</p>
                  </div>
                  <div className="bg-white/5 rounded p-3 border border-white/10">
                    <p className="text-xs text-gray-300 leading-relaxed">{tit.cluster === ClusterType.EXCELLENCE ? 'Programa de alto desempeño. Referencia para otras titulaciones.' : tit.cluster === ClusterType.INTERMEDIATE ? 'Programa equilibrado. Oportunidades de mejora identificadas.' : 'Programa que requiere intervención. Plan de mejora recomendado.'}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No se encontraron titulaciones con los filtros seleccionados</p>
        </div>
      )}
    </div>
  );
};
