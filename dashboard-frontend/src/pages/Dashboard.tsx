import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { calculateKPIs, loadTemporalData, loadPrograms, loadTitulationPerformance } from '@/utils/dataLoader';
import { IKPIData, ITemporalData, IProgram, ITitulationPerformance, ClusterType } from '@/types';
import { KPICard } from '@/components/KPICard';
import { ChartWrapper } from '@/components/ChartWrapper';
import { Tabs } from '@/components/Tabs';
import { AllTitulations } from '@/components/AllTitulations';
import { TitulationSearch } from '@/components/TitulationSearch';
import { CompareCareer } from '@/components/CompareCareer';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('resumen');
  const [kpis, setKPIs] = useState<IKPIData[]>([]);
  const [temporalData, setTemporalData] = useState<ITemporalData[]>([]);
  const [programs, setPrograms] = useState<IProgram[]>([]);
  const [titulations, setTitulations] = useState<ITitulationPerformance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTitulation, setSelectedTitulation] = useState<ITitulationPerformance | null>(null);

  // Cluster colors - UPVision Palette
  const clusterColors: Record<string, string> = {
    [ClusterType.EXCELLENCE]: '#6FCF97',  // Verde menta
    [ClusterType.INTERMEDIATE]: '#F2C94C',  // Amarillo suave
    [ClusterType.RISK]: '#FF8A80',  // Coral suave
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [kpisData, tempData, progsData, titData] = await Promise.all([
          calculateKPIs(),
          loadTemporalData(),
          loadPrograms(),
          loadTitulationPerformance(),
        ]);

        setKPIs(kpisData);
        setTemporalData(tempData);
        setPrograms(progsData);
        setTitulations(titData);
      } catch (err) {
        setError('Error al cargar los datos del dashboard');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-blue-400 border-t-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-400">
          <p className="text-lg font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  // Prepare data for charts
  const temporalChartData = [
    {
      x: temporalData.map((d) => d.year),
      y: temporalData.map((d) => d.satisfaction),
      name: 'Satisfacción',
      type: 'scatter',
      mode: 'lines+markers',
      line: { color: '#56CCF2', width: 3, shape: 'spline' },  // Azul cielo UPVision
      marker: { size: 10, opacity: 0.8 },
      fill: 'tonexty',
      fillcolor: 'rgba(86, 204, 242, 0.1)',
      hovertemplate: '<b>Satisfacción</b><br>Año: %{x}<br>Score: %{y:.2f}/10<extra></extra>',
      yaxis: 'y1',
    },
    {
      x: temporalData.map((d) => d.year),
      y: temporalData.map((d) => 100 - d.dropout),
      name: 'Retención (%)',
      type: 'scatter',
      mode: 'lines+markers',
      line: { color: '#6FCF97', width: 3, shape: 'spline' },  // Verde menta UPVision
      marker: { size: 10, opacity: 0.8 },
      fill: 'tonexty',
      fillcolor: 'rgba(111, 207, 151, 0.1)',
      hovertemplate: '<b>Retención</b><br>Año: %{x}<br>Tasa: %{y:.1f}%<extra></extra>',
      yaxis: 'y2',
    },
    {
      x: temporalData.map((d) => d.year),
      y: temporalData.map((d) => d.employability),
      name: 'Empleabilidad (%)',
      type: 'scatter',
      mode: 'lines+markers',
      line: { color: '#F2C94C', width: 3, shape: 'spline' },  // Amarillo suave UPVision
      marker: { size: 10, opacity: 0.8 },
      fill: 'tonexty',
      fillcolor: 'rgba(242, 201, 76, 0.1)',
      hovertemplate: '<b>Empleabilidad</b><br>Año: %{x}<br>Tasa: %{y:.1f}%<extra></extra>',
      yaxis: 'y2',
    },
    {
      x: temporalData.map((d) => d.year),
      y: temporalData.map((d) => d.selfEfficacy),
      name: 'Autoeficacia (/10)',
      type: 'scatter',
      mode: 'lines+markers',
      line: { color: '#FF8A80', width: 3, dash: 'dash', shape: 'spline' },  // Coral suave UPVision
      marker: { size: 10, opacity: 0.8 },
      hovertemplate: '<b>Autoeficacia</b><br>Año: %{x}<br>Score: %{y:.1f}/10<extra></extra>',
      yaxis: 'y1',
    },
  ];

  const clusterDistribution = programs.reduce(
    (acc, prog) => {
      const existing = acc.find((c) => c.cluster === prog.cluster);
      if (existing) {
        existing.count += 1;
      } else {
        acc.push({ cluster: prog.cluster, count: 1 });
      }
      return acc;
    },
    [] as Array<{ cluster: string; count: number }>
  );

  const clusterChartData = [
    {
      labels: clusterDistribution.map((c) =>
        c.cluster === ClusterType.EXCELLENCE
          ? 'Excelencia'
          : c.cluster === ClusterType.INTERMEDIATE
            ? 'Intermedio'
            : 'Riesgo'
      ),
      values: clusterDistribution.map((c) => c.count),
      type: 'pie',
      marker: {
        colors: clusterDistribution.map((c) => clusterColors[c.cluster]),
      },
      hoverinfo: 'label+value+percent',
    },
  ];

  const titulationChartData = [
    {
      x: titulations.map((t) => t.titulation),
      y: titulations.map((t) => t.satisfaction),
      type: 'bar',
      marker: {
        color: titulations.map((t) => clusterColors[t.cluster]),
      },
      name: 'Satisfacción',
    },
  ];

  const tabsConfig = [
    { id: 'resumen', label: 'Resumen Ejecutivo', icon: '📊', description: 'KPIs principales' },
    { id: 'temporal', label: 'Análisis Temporal', icon: '📈', description: '2020-2024' },
    { id: 'clusters', label: 'Análisis de Clusters', icon: '🎯', description: 'Segmentación' },
    { id: 'ranking', label: 'Ranking', icon: '🏆', description: 'Top titulaciones' },
    { id: 'todas', label: 'Todas las Carreras', icon: '📚', description: 'Catálogo completo' },
    { id: 'comparar', label: 'Comparar Carreras', icon: '⚖️', description: 'Comparativa detallada' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-6">
      {/* Header */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg overflow-hidden">
            <img src="/assets/favicon.png" alt="UPVision Logo" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-800">UPVision</h1>
            <p className="text-slate-600">Análisis Integral del Desempeño Académico 2020-2024</p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs tabs={tabsConfig} activeTab={activeTab} onTabChange={setActiveTab}>
        <div className="px-6 py-8">
          {/* TAB 1: RESUMEN EJECUTIVO */}
          {activeTab === 'resumen' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Indicadores Clave de Desempeño</h2>
                <p className="text-slate-600 mb-6">Métricas principales del sistema académico UPV</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map((kpi, idx) => (
                  <div key={idx} className="transform hover:scale-[1.02] transition-transform">
                    <KPICard kpi={kpi} />
                  </div>
                ))}
              </div>

              {/* Mini Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 shadow-md">
                  <h3 className="font-semibold text-blue-700 mb-3">💡 Hallazgo Principal</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Tendencia positiva consistente en todos los indicadores. La satisfacción ha mejorado 0.3 puntos, el abandono disminuyó 1.6% y la empleabilidad aumentó 3.8 puntos porcentuales en el período 2020-2024.
                  </p>
                </div>

                <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 shadow-md">
                  <h3 className="font-semibold text-emerald-700 mb-3">✅ Recomendación</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Mantener monitoreo continuo de indicadores. Replicar modelos exitosos de STEM en otras áreas. Intervención inmediata en cluster de riesgo.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ANÁLISIS TEMPORAL */}
          {activeTab === 'temporal' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Evolución de Indicadores 2020-2024</h2>
                <p className="text-slate-600 mb-6">Tendencias de satisfacción, retención, empleabilidad y autoeficacia</p>
              </div>

              <ChartWrapper
                title="Series Temporales de Indicadores Principales"
                description="Evolución año a año de las métricas clave"
                insight="El análisis temporal muestra una mejora sostenida en todos los indicadores durante el período 2020-2024. La satisfacción pasó de 6.8 a 7.1/10, la tasa de abandono disminuyó de 20.1% a 18.5%, la empleabilidad aumentó de 68.5% a 72.3%, y la autoeficacia pasó de 6.3 a 6.9/10. Este patrón positivo refleja la efectividad de las políticas e iniciativas implementadas."
              >
                <Plot
                  data={temporalChartData}
                  layout={{
                    height: 500,
                    plot_bgcolor: 'rgba(255, 255, 255, 0.5)',
                    paper_bgcolor: 'transparent',
                    font: { color: '#475569', family: 'Poppins', size: 12 },
                    margin: { l: 70, r: 70, t: 40, b: 80 },
                    xaxis: {
                      title: 'Año',
                      gridcolor: 'rgba(203, 213, 225, 0.4)',
                      showgrid: true,
                      zeroline: false,
                      tickfont: { size: 11 },
                    },
                    yaxis: {
                      title: 'Satisfacción / Autoeficacia (/10)',
                      gridcolor: 'rgba(203, 213, 225, 0.4)',
                      showgrid: true,
                      zeroline: false,
                      tickfont: { size: 11 },
                      range: [5, 10],
                      dtick: 0.5,
                    },
                    yaxis2: {
                      title: 'Retención / Empleabilidad (%)',
                      overlaying: 'y',
                      side: 'right',
                      gridcolor: 'rgba(203, 213, 225, 0.2)',
                      showgrid: false,
                      zeroline: false,
                      tickfont: { size: 11 },
                      range: [50, 100],
                      dtick: 10,
                    },
                    hovermode: 'x unified',
                    showlegend: true,
                    legend: {
                      x: 0.01,
                      y: 0.99,
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      bordercolor: 'rgba(203, 213, 225, 0.5)',
                      borderwidth: 1,
                      font: { color: '#475569' },
                    },
                  }}
                  useResizeHandler
                  style={{ width: '100%', height: '100%' }}
                  config={{
                    responsive: true,
                    displayModeBar: true,
                    displaylogo: false,
                    modeBarButtonsToRemove: ['lasso2d', 'select2d'],
                  }}
                />
              </ChartWrapper>
            </div>
          )}

          {/* TAB 3: ANÁLISIS DE CLUSTERS */}
          {activeTab === 'clusters' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Segmentación de Titulaciones</h2>
                <p className="text-slate-600 mb-6">Clasificación de programas por desempeño integral</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <ChartWrapper
                  title="Distribución por Cluster"
                  description="Número de titulaciones en cada segmento"
                  insight="Tres segmentos claramente diferenciables: Excelencia (7 programas con alto desempeño), Intermedio (12 programas equilibrados) y Riesgo (4 programas que requieren intervención inmediata)."
                >
                  <Plot
                    data={clusterChartData}
                    layout={{
                      height: 400,
                      plot_bgcolor: 'transparent',
                      paper_bgcolor: 'transparent',
                      font: { color: '#475569', family: 'Poppins' },
                      margin: { l: 40, r: 40, t: 40, b: 40 },
                    }}
                    useResizeHandler
                    style={{ width: '100%', height: '100%' }}
                    config={{
                      responsive: true,
                      displayModeBar: false,
                    }}
                  />
                </ChartWrapper>

                {/* Characteristics */}
                <ChartWrapper
                  title="Características por Cluster"
                  description="Indicadores promedio de cada segmento"
                  insight="El cluster de Excelencia muestra: Satisfacción 7.8/10, Abandono 12%, Empleabilidad 85%. Intermedio: 7.0/10, 19%, 72%. Riesgo: 6.2/10, 28%, 58%. Los clusters muestran una progresión clara de desempeño."
                >
                  <div className="space-y-4">
                    {[
                      {
                        name: 'Excelencia',
                        color: '#6FCF97',
                        metrics: ['Satisfacción: 7.8/10', 'Abandono: 12%', 'Empleabilidad: 85%'],
                        icon: '✨',
                      },
                      {
                        name: 'Intermedio',
                        color: '#F2C94C',
                        metrics: ['Satisfacción: 7.0/10', 'Abandono: 19%', 'Empleabilidad: 72%'],
                        icon: '⚡',
                      },
                      {
                        name: 'Riesgo',
                        color: '#FF8A80',
                        metrics: ['Satisfacción: 6.2/10', 'Abandono: 28%', 'Empleabilidad: 58%'],
                        icon: '⚠️',
                      },
                    ].map((cluster) => (
                      <div
                        key={cluster.name}
                        className="p-4 rounded-2xl border shadow-sm"
                        style={{
                          borderColor: cluster.color + '40',
                          backgroundColor: cluster.color + '15',
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{cluster.icon}</span>
                          <h4 className="font-semibold text-lg text-slate-800">
                            {cluster.name}
                          </h4>
                        </div>
                        <ul className="text-sm text-slate-700 space-y-1">
                          {cluster.metrics.map((metric, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: cluster.color }}
                              ></span>
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ChartWrapper>
              </div>
            </div>
          )}

          {/* TAB 4: RANKING */}
          {activeTab === 'ranking' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Top Titulaciones & Búsqueda</h2>
                <p className="text-slate-600 mb-6">Programas con mayor satisfacción estudiantil</p>
              </div>

              {/* Search Component */}
              <TitulationSearch
                titulations={titulations}
                onSelect={setSelectedTitulation}
                selectedTitulation={selectedTitulation}
              />

              <ChartWrapper
                title="Ranking de Titulaciones por Satisfacción"
                description="Top 10 programas académicos"
                insight="Los programas de ingeniería lideran el ranking con satisfacciones superiores a 7.5/10. Ingeniería Informática encabeza con 7.8/10, seguida de Aeronáutica con 7.6/10. La presencia consistente de STEM en posiciones altas sugiere una fuerte alineación entre formación técnica, demanda laboral y expectativas estudiantiles."
              >
                <Plot
                  data={titulationChartData}
                  layout={{
                    height: 450,
                    plot_bgcolor: 'rgba(255, 255, 255, 0.5)',
                    paper_bgcolor: 'transparent',
                    font: { color: '#475569', family: 'Poppins' },
                    margin: { l: 150, r: 40, t: 40, b: 60 },
                    xaxis: { title: 'Satisfacción (0-10)', gridcolor: 'rgba(203, 213, 225, 0.4)' },
                    yaxis: { automargin: true, gridcolor: 'rgba(203, 213, 225, 0.4)' },
                  }}
                  useResizeHandler
                  style={{ width: '100%', height: '100%' }}
                  config={{
                    responsive: true,
                    displayModeBar: true,
                    displaylogo: false,
                  }}
                />
              </ChartWrapper>

              {/* Table View */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="px-6 py-3 text-left font-semibold text-slate-700">#</th>
                        <th className="px-6 py-3 text-left font-semibold text-slate-700">Titulación</th>
                        <th className="px-6 py-3 text-left font-semibold text-slate-700">Centro</th>
                        <th className="px-6 py-3 text-right font-semibold text-slate-700">Satisfacción</th>
                        <th className="px-6 py-3 text-right font-semibold text-slate-700">Empleabilidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {titulations.slice(0, 10).map((t) => (
                        <tr key={t.ranking} className="border-b border-slate-100 hover:bg-slate-50 transition">
                          <td className="px-6 py-3">
                            <span className="font-semibold text-primary">{t.ranking}</span>
                          </td>
                          <td className="px-6 py-3 text-slate-800">{t.titulation}</td>
                          <td className="px-6 py-3 text-slate-600">{t.center}</td>
                          <td className="px-6 py-3 text-right">
                            <span className="font-semibold text-emerald-600">{t.satisfaction.toFixed(1)}/10</span>
                          </td>
                          <td className="px-6 py-3 text-right">
                            <span className="font-semibold text-blue-600">{t.employability.toFixed(1)}%</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: TODAS LAS CARRERAS */}
          {activeTab === 'todas' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Catálogo Completo de Titulaciones</h2>
                <p className="text-slate-600 mb-6">Explora todas las carreras con tarjetas interactivas, filtros avanzados y búsqueda</p>
              </div>

              <AllTitulations titulations={titulations} />
            </div>
          )}

          {/* TAB 6: COMPARAR CARRERAS */}
          {activeTab === 'comparar' && (
            <CompareCareer titulations={titulations} />
          )}
        </div>
      </Tabs>

      {/* Footer */}
      <div className="mt-16 pt-8 px-6 border-t border-slate-200 text-center text-slate-600 text-sm">
        <p className="font-medium">UPVision • Análisis de Desempeño Académico 2020-2024</p>
        <p className="mt-2">Datos actualizados: {new Date().toLocaleDateString('es-ES')}</p>
      </div>
    </div>
  );
};

export default Dashboard;
