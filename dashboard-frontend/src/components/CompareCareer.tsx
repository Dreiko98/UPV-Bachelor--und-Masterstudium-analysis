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
      bg: 'bg-secondary/10',
      text: 'text-emerald-700',
      border: 'border-secondary/30',
    },
    [ClusterType.INTERMEDIATE]: {
      bg: 'bg-warning/10',
      text: 'text-amber-700',
      border: 'border-warning/30',
    },
    [ClusterType.RISK]: {
      bg: 'bg-danger/10',
      text: 'text-red-700',
      border: 'border-danger/30',
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
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
        <div className="text-sm text-slate-600 mb-3 font-medium">{label}</div>
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Career 1 Value */}
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">
              {value1.toFixed(1)}
              <span className="text-sm text-slate-600 ml-1">{unit}</span>
            </div>
          </div>

          {/* Comparison Icon */}
          <div className="flex justify-center">
            {isEqual ? (
              <Minus className="w-5 h-5 text-slate-400" />
            ) : isBetter ? (
              <div className="p-2 rounded-full bg-emerald-500/20">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
            ) : (
              <div className="p-2 rounded-full bg-red-500/20">
                <TrendingDown className="w-5 h-5 text-red-600" />
              </div>
            )}
          </div>

          {/* Career 2 Value */}
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">
              {value2.toFixed(1)}
              <span className="text-sm text-slate-600 ml-1">{unit}</span>
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
        className={`bg-white rounded-2xl p-6 border-2 ${colors.border} relative shadow-md`}
      >
        <button
          onClick={onClear}
          className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full transition"
        >
          <X className="w-5 h-5 text-slate-400 hover:text-slate-700" />
        </button>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
              {clusterLabels[career.cluster]}
            </span>
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-primary/10 text-blue-700 border border-primary/20">
              {career.degree}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">{career.titulation}</h3>
          <p className="text-sm text-slate-600">{career.center}</p>
          <p className="text-xs text-slate-500 mt-1 font-medium">Ranking: #{career.ranking}</p>
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
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>

        {showDropdown && filteredResults.length > 0 && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl max-h-80 overflow-y-auto">
            {filteredResults.map((tit) => (
              <button
                key={`${tit.titulation}-${tit.center}`}
                onClick={() => {
                  setSelectedCareer(tit);
                  setSearchQuery(tit.titulation);
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-3 text-left hover:bg-slate-50 transition border-b border-slate-100 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-800 truncate">
                      {tit.titulation}
                    </div>
                    <div className="text-xs text-slate-600">{tit.center}</div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        clusterColors[tit.cluster].bg
                      } ${clusterColors[tit.cluster].text} border ${clusterColors[tit.cluster].border}`}
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
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Comparador de Carreras</h2>
        <p className="text-slate-600">
          Selecciona dos titulaciones para comparar sus indicadores de desempeño
        </p>
      </div>

      {/* Degree Type Filter */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-md">
        <label className="text-sm text-slate-600 mb-2 block font-medium">Filtrar por tipo:</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setDegreeFilter('all')}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              degreeFilter === 'all'
                ? 'bg-primary text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setDegreeFilter(DegreeType.GRADO)}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              degreeFilter === DegreeType.GRADO
                ? 'bg-primary text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Grado
          </button>
          <button
            onClick={() => setDegreeFilter(DegreeType.MASTER)}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              degreeFilter === DegreeType.MASTER
                ? 'bg-primary text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Máster
          </button>
          <button
            onClick={() => setDegreeFilter(DegreeType.DOBLE_GRADO)}
            className={`px-4 py-2 rounded-xl font-semibold transition ${
              degreeFilter === DegreeType.DOBLE_GRADO
                ? 'bg-primary text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Doble Grado
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-2 font-medium">
          Titulaciones disponibles: {filteredTitulations.length}
        </p>
      </div>

      {/* Search Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">
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
          <label className="text-sm font-semibold text-slate-700 mb-2 block">
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
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Comparación de Indicadores</h3>
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
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 shadow-md">
            <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
              🏆 Resumen Comparativo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-slate-800 mb-2">
                  {selectedCareer1.titulation}
                </div>
                <ul className="space-y-1 text-slate-700">
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
                <div className="font-semibold text-slate-800 mb-2">
                  {selectedCareer2.titulation}
                </div>
                <ul className="space-y-1 text-slate-700">
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
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-md">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">
            Selecciona dos carreras para comparar
          </h3>
          <p className="text-slate-600">
            Usa los buscadores de arriba para encontrar las titulaciones que deseas comparar
          </p>
        </div>
      )}
    </div>
  );
};
