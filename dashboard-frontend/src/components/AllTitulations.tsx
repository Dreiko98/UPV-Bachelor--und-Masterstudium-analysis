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
      bg: 'bg-secondary/10',
      border: 'border-secondary/20',
      text: 'text-emerald-700',
    },
    [ClusterType.INTERMEDIATE]: {
      bg: 'bg-warning/10',
      border: 'border-warning/20',
      text: 'text-amber-700',
    },
    [ClusterType.RISK]: {
      bg: 'bg-danger/10',
      border: 'border-danger/20',
      text: 'text-red-700',
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
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            <input type="text" placeholder="Buscar titulación o centro..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition font-medium">
            <option value="satisfaction">Ordenar: Satisfacción</option>
            <option value="dropout">Ordenar: Menor Abandono</option>
            <option value="employability">Ordenar: Empleabilidad</option>
            <option value="name">Ordenar: Nombre A-Z</option>
          </select>
          <select value={clusterFilter} onChange={(e) => setClusterFilter(e.target.value as ClusterFilter)} className="px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition font-medium">
            <option value="all">Todos los Clusters</option>
            <option value={ClusterType.EXCELLENCE}>Excelencia</option>
            <option value={ClusterType.INTERMEDIATE}>Intermedio</option>
            <option value={ClusterType.RISK}>Riesgo</option>
          </select>
        </div>
        <p className="text-sm text-slate-600 mt-4 font-medium">Mostrando <span className="font-semibold text-primary">{filtered.length}</span> de <span className="font-semibold">{titulations.length}</span> titulaciones</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tit) => {
          const colors = clusterColors[tit.cluster as ClusterType];
          const isExpanded = expandedId === tit.ranking;
          return (
            <div key={tit.ranking} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg shadow-md">
              <button onClick={() => setExpandedId(isExpanded ? null : tit.ranking)} className="w-full px-5 py-4 flex items-start justify-between hover:bg-slate-50 transition relative">
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-500">#{tit.ranking}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 leading-tight">{tit.titulation}</h3>
                  <p className="text-xs text-slate-500 mt-1">{tit.center}</p>
                </div>
                {/* Badge en esquina superior derecha */}
                <div className="flex flex-col items-end gap-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {clusterLabels[tit.cluster as ClusterType]}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {isExpanded && (
                <div className="px-5 py-4 border-t border-slate-200 bg-slate-50 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/10 rounded-xl p-3 border border-primary/20">
                      <p className="text-xs text-slate-600 mb-1 font-medium">Satisfacción</p>
                      <p className="text-lg font-bold text-blue-600">{tit.satisfaction.toFixed(1)}</p>
                      <p className="text-xs text-slate-500">/10</p>
                    </div>
                    <div className="bg-warning/10 rounded-xl p-3 border border-warning/20">
                      <p className="text-xs text-slate-600 mb-1 font-medium">Abandono</p>
                      <p className="text-lg font-bold text-amber-600">{tit.dropout.toFixed(1)}</p>
                      <p className="text-xs text-slate-500">%</p>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-3 border border-secondary/20">
                      <p className="text-xs text-slate-600 mb-1 font-medium">Empleabilidad</p>
                      <p className="text-lg font-bold text-emerald-600">{tit.employability.toFixed(1)}</p>
                      <p className="text-xs text-slate-500">%</p>
                    </div>
                    <div className="bg-purple-100 rounded-xl p-3 border border-purple-200">
                      <p className="text-xs text-slate-600 mb-1 font-medium">Autoeficacia</p>
                      <p className="text-lg font-bold text-purple-600">{tit.selfEfficacy.toFixed(1)}</p>
                      <p className="text-xs text-slate-500">/10</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-700">Desempeño General</p>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-primary to-blue-400`} style={{width: `${(tit.satisfaction / 10) * 100}%`}} />
                    </div>
                    <p className="text-xs text-slate-600 font-medium">{tit.satisfaction >= 7.5 ? '✨ Desempeño Excelente' : tit.satisfaction >= 6.5 ? '⚡ Desempeño Bueno' : '⚠️ Requiere Atención'}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-slate-200">
                    <p className="text-xs text-slate-700 leading-relaxed">{tit.cluster === ClusterType.EXCELLENCE ? 'Programa de alto desempeño. Referencia para otras titulaciones.' : tit.cluster === ClusterType.INTERMEDIATE ? 'Programa equilibrado. Oportunidades de mejora identificadas.' : 'Programa que requiere intervención. Plan de mejora recomendado.'}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 shadow-md">
          <p className="text-slate-600 text-lg font-medium">No se encontraron titulaciones con los filtros seleccionados</p>
        </div>
      )}
    </div>
  );
};
