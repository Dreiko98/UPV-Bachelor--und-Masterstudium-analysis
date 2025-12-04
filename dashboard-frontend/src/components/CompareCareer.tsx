import React, { useState, useMemo } from 'react';
import { Search, X, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ITitulationPerformance, DegreeType, ClusterType } from '@/types';

interface CompareCareerProps {
  titulations: ITitulationPerformance[];
}

export const CompareCareer: React.FC<CompareCareerProps> = ({ titulations }) => {
  const [degreeFilter, setDegreeFilter] = useState<DegreeType | 'all'>('all');
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [selectedCareer1, setSelectedCareer1] = useState<ITitulationPerformance | null>(null);
  const [selectedCareer2, setSelectedCareer2] = useState<ITitulationPerformance | null>(null);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const clusterColors: Record<ClusterType, { bg: string; text: string; border: string }> = {
    [ClusterType.EXCELLENCE]: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      border: 'border-emerald-500/30',
    },
    [ClusterType.INTERMEDIATE]: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      border: 'border-amber-500/30',
    },
    [ClusterType.RISK]: {
      bg: 'bg-red-500/10',
      text: 'text-red-400',
      border: 'border-red-500/30',
    },
  };

  const clusterLabels: Record<ClusterType, string> = {
    [ClusterType.EXCELLENCE]: 'Excelencia',
    [ClusterType.INTERMEDIATE]: 'Intermedio',
    [ClusterType.RISK]: 'Riesgo',
  };

  // Filter titulations by degree type
  const filteredTitulations = useMemo(() => {
    return titulations.filter((t) => {
      if (degreeFilter === 'all') return true;
      return t.degree === degreeFilter;
    });
  }, [titulations, degreeFilter]);

  // Filter for dropdown 1
  const filteredResults1 = useMemo(() => {
    if (!searchQuery1.trim()) return filteredTitulations.slice(0, 10);
    return filteredTitulations
      .filter((t) => {
        const query = searchQuery1.toLowerCase();
        return (
          t.titulation.toLowerCase().includes(query) ||
          t.center.toLowerCase().includes(query)
        );
      })
      .slice(0, 10);
  }, [filteredTitulations, searchQuery1]);

  // Filter for dropdown 2
  const filteredResults2 = useMemo(() => {
    if (!searchQuery2.trim()) return filteredTitulations.slice(0, 10);
    return filteredTitulations
      .filter((t) => {
        const query = searchQuery2.toLowerCase();
        return (
          t.titulation.toLowerCase().includes(query) ||
          t.center.toLowerCase().includes(query)
        );
      })
      .slice(0, 10);
  }, [filteredTitulations, searchQuery2]);

  const ComparisonMetric = ({
    label,
    value1,
    value2,
    unit = '',
    inverse = false,
  }: {
    label: string;
    value1: number;
    value2: number;
    unit?: string;
    inverse?: boolean;
  }) => {
    const diff = value1 - value2;
    const isBetter = inverse ? diff < 0 : diff > 0;
    const isEqual = Math.abs(diff) < 0.1;

    return (
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
        <div className="text-sm text-gray-400 mb-3">{label}</div>
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Career 1 Value */}
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {value1.toFixed(1)}
              <span className="text-sm text-gray-400 ml-1">{unit}</span>
            </div>
          </div>

          {/* Comparison Icon */}
          <div className="flex justify-center">
            {isEqual ? (
              <div className="p-2 rounded-full bg-gray-500/20">
                <Minus className="w-5 h-5 text-gray-400" />
              </div>
            ) : isBetter ? (
              <div className="p-2 rounded-full bg-emerald-500/20">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
            ) : (
              <div className="p-2 rounded-full bg-red-500/20">
                <TrendingDown className="w-5 h-5 text-red-400" />
              </div>
            )}
          </div>

          {/* Career 2 Value */}
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              {value2.toFixed(1)}
              <span className="text-sm text-gray-400 ml-1">{unit}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CareerCard = ({
    career,
    onClear,
    position,
  }: {
    career: ITitulationPerformance;
    onClear: () => void;
    position: 'left' | 'right';
  }) => {
    const colors = clusterColors[career.cluster];
    return (
      <div
        className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg p-6 border ${colors.border} relative`}
      >
        <button
          onClick={onClear}
          className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition"
        >
          <X className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 rounded text-xs font-semibold ${colors.bg} ${colors.text}`}>
              {clusterLabels[career.cluster]}
            </span>
            <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-500/10 text-blue-400">
              {career.degree}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{career.titulation}</h3>
          <p className="text-sm text-gray-400">{career.center}</p>
          <p className="text-xs text-gray-500 mt-1">Ranking: #{career.ranking}</p>
        </div>
      </div>
    );
  };

  const SearchBox = ({
    searchQuery,
    setSearchQuery,
    selectedCareer,
    setSelectedCareer,
    showDropdown,
    setShowDropdown,
    filteredResults,
    placeholder,
  }: {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCareer: ITitulationPerformance | null;
    setSelectedCareer: (career: ITitulationPerformance | null) => void;
    showDropdown: boolean;
    setShowDropdown: (show: boolean) => void;
    filteredResults: ITitulationPerformance[];
    placeholder: string;
  }) => {
    return (
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {showDropdown && filteredResults.length > 0 && (
          <div className="absolute z-10 w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl max-h-80 overflow-y-auto">
            {filteredResults.map((tit) => (
              <button
                key={`${tit.titulation}-${tit.center}`}
                onClick={() => {
                  setSelectedCareer(tit);
                  setSearchQuery(tit.titulation);
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-slate-700/50 transition border-b border-slate-700/50 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white truncate">
                      {tit.titulation}
                    </div>
                    <div className="text-xs text-gray-400">{tit.center}</div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        clusterColors[tit.cluster].bg
                      } ${clusterColors[tit.cluster].text}`}
                    >
                      {clusterLabels[tit.cluster]}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Comparador de Carreras</h2>
        <p className="text-gray-400">
          Selecciona dos titulaciones para comparar sus indicadores de desempeño
        </p>
      </div>

      {/* Degree Type Filter */}
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700/50 p-4">
        <label className="text-sm text-gray-400 mb-2 block">Filtrar por tipo:</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setDegreeFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              degreeFilter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setDegreeFilter(DegreeType.GRADO)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              degreeFilter === DegreeType.GRADO
                ? 'bg-blue-500 text-white'
                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
            }`}
          >
            Grado
          </button>
          <button
            onClick={() => setDegreeFilter(DegreeType.MASTER)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              degreeFilter === DegreeType.MASTER
                ? 'bg-blue-500 text-white'
                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
            }`}
          >
            Máster
          </button>
          <button
            onClick={() => setDegreeFilter(DegreeType.DOBLE_GRADO)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              degreeFilter === DegreeType.DOBLE_GRADO
                ? 'bg-blue-500 text-white'
                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
            }`}
          >
            Doble Grado
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Titulaciones disponibles: {filteredTitulations.length}
        </p>
      </div>

      {/* Search Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-gray-300 mb-2 block">
            Primera Carrera
          </label>
          <SearchBox
            searchQuery={searchQuery1}
            setSearchQuery={setSearchQuery1}
            selectedCareer={selectedCareer1}
            setSelectedCareer={setSelectedCareer1}
            showDropdown={showDropdown1}
            setShowDropdown={setShowDropdown1}
            filteredResults={filteredResults1}
            placeholder="Buscar primera carrera..."
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-300 mb-2 block">
            Segunda Carrera
          </label>
          <SearchBox
            searchQuery={searchQuery2}
            setSearchQuery={setSearchQuery2}
            selectedCareer={selectedCareer2}
            setSelectedCareer={setSelectedCareer2}
            showDropdown={showDropdown2}
            setShowDropdown={setShowDropdown2}
            filteredResults={filteredResults2}
            placeholder="Buscar segunda carrera..."
          />
        </div>
      </div>

      {/* Comparison Section */}
      {selectedCareer1 && selectedCareer2 ? (
        <div className="space-y-6">
          {/* Career Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CareerCard
              career={selectedCareer1}
              onClear={() => {
                setSelectedCareer1(null);
                setSearchQuery1('');
              }}
              position="left"
            />
            <CareerCard
              career={selectedCareer2}
              onClear={() => {
                setSelectedCareer2(null);
                setSearchQuery2('');
              }}
              position="right"
            />
          </div>

          {/* Comparison Metrics */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Comparación de Indicadores</h3>
            <div className="space-y-3">
              <ComparisonMetric
                label="Satisfacción"
                value1={selectedCareer1.satisfaction}
                value2={selectedCareer2.satisfaction}
                unit="/10"
              />
              <ComparisonMetric
                label="Tasa de Abandono"
                value1={selectedCareer1.dropout}
                value2={selectedCareer2.dropout}
                unit="%"
                inverse={true}
              />
              <ComparisonMetric
                label="Empleabilidad"
                value1={selectedCareer1.employability}
                value2={selectedCareer2.employability}
                unit="%"
              />
              <ComparisonMetric
                label="Autoeficacia"
                value1={selectedCareer1.selfEfficacy}
                value2={selectedCareer2.selfEfficacy}
                unit="/10"
              />
            </div>
          </div>

          {/* Winner Summary */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
              🏆 Resumen Comparativo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-white mb-2">
                  {selectedCareer1.titulation}
                </div>
                <ul className="space-y-1 text-gray-300">
                  {selectedCareer1.satisfaction > selectedCareer2.satisfaction && (
                    <li>✓ Mayor satisfacción</li>
                  )}
                  {selectedCareer1.dropout < selectedCareer2.dropout && (
                    <li>✓ Menor tasa de abandono</li>
                  )}
                  {selectedCareer1.employability > selectedCareer2.employability && (
                    <li>✓ Mayor empleabilidad</li>
                  )}
                  {selectedCareer1.selfEfficacy > selectedCareer2.selfEfficacy && (
                    <li>✓ Mayor autoeficacia</li>
                  )}
                </ul>
              </div>
              <div>
                <div className="font-semibold text-white mb-2">
                  {selectedCareer2.titulation}
                </div>
                <ul className="space-y-1 text-gray-300">
                  {selectedCareer2.satisfaction > selectedCareer1.satisfaction && (
                    <li>✓ Mayor satisfacción</li>
                  )}
                  {selectedCareer2.dropout < selectedCareer1.dropout && (
                    <li>✓ Menor tasa de abandono</li>
                  )}
                  {selectedCareer2.employability > selectedCareer1.employability && (
                    <li>✓ Mayor empleabilidad</li>
                  )}
                  {selectedCareer2.selfEfficacy > selectedCareer1.selfEfficacy && (
                    <li>✓ Mayor autoeficacia</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-12 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            Selecciona dos carreras para comparar
          </h3>
          <p className="text-gray-500">
            Usa los buscadores de arriba para encontrar las titulaciones que deseas comparar
          </p>
        </div>
      )}
    </div>
  );
};
