// Data Types for UPV Dashboard

export interface IIndicator {
  year: number;
  value: number;
  center?: string;
  titulation?: string;
}

export interface IProgram {
  id: string;
  titulation: string;
  center: string;
  degree: DegreeType;
  satisfaction: number;
  dropout: number;
  employability: number;
  selfEfficacy: number;
  cluster: ClusterType;
  cluster_probability?: number;
}

export enum ClusterType {
  EXCELLENCE = 'excellence',      // Cluster 1 - Green
  INTERMEDIATE = 'intermediate',  // Cluster 2 - Orange
  RISK = 'risk',                  // Cluster 3 - Red
}

export enum Status {
  OK = 'ok',
  WARNING = 'warning',
  CRITICAL = 'critical',
}

export enum DegreeType {
  GRADO = 'Grado',
  MASTER = 'Máster',
  DOBLE_GRADO = 'Doble Grado',
  OTROS = 'Otros',
}

export interface IKPIData {
  label: string;
  value: number | string;
  unit?: string;
  trend?: number;  // percentage change
  status: Status;
  icon?: string;
}

export interface ICluster {
  id: ClusterType;
  name: string;
  color: string;
  description: string;
  count: number;
  characteristics: string[];
}

export interface ITemporalData {
  year: number;
  satisfaction: number;
  dropout: number;
  employability: number;
  selfEfficacy: number;
}

export interface ICorrelationData {
  variable1: string;
  variable2: string;
  correlation: number;
}

export interface IPCAData {
  pc1: number;
  pc2: number;
  titulation?: string;
  cluster?: ClusterType;
}

export interface ITitulationPerformance {
  titulation: string;
  center: string;
  degree: DegreeType;
  satisfaction: number;
  dropout: number;
  employability: number;
  selfEfficacy: number;
  cluster: ClusterType;
  ranking: number;
}

export interface IDashboardState {
  loading: boolean;
  error: string | null;
  programs: IProgram[];
  kpis: IKPIData[];
  temporalData: ITemporalData[];
  clusters: ICluster[];
  correlations: ICorrelationData[];
  pcaData: IPCAData[];
  titulationPerformance: ITitulationPerformance[];
}

export interface IChartConfig {
  title: string;
  description: string;
  insight: string;
  type: 'line' | 'scatter' | 'bar' | 'heatmap' | 'box' | 'pie';
  data: any[];
  layout?: any;
}
