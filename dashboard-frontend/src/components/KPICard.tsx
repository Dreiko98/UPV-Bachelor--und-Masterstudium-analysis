import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import { IKPIData, Status } from '@/types';

interface KPICardProps {
  kpi: IKPIData;
}

interface StatusConfig {
  bg: string;
  border: string;
  accent: string;
  accentBg: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge: string;
}

export const KPICard: React.FC<KPICardProps> = ({ kpi }) => {
  const statusConfig: Record<Status, StatusConfig> = {
    [Status.OK]: {
      bg: 'from-emerald-600/40 to-teal-600/20',
      border: 'border-emerald-500/50',
      accent: 'text-emerald-400',
      accentBg: 'bg-emerald-900/20',
      icon: CheckCircle,
      badge: 'bg-emerald-500/20 text-emerald-300',
    },
    [Status.WARNING]: {
      bg: 'from-amber-600/40 to-orange-600/20',
      border: 'border-amber-500/50',
      accent: 'text-amber-400',
      accentBg: 'bg-amber-900/20',
      icon: AlertCircle,
      badge: 'bg-amber-500/20 text-amber-300',
    },
    [Status.CRITICAL]: {
      bg: 'from-red-600/40 to-pink-600/20',
      border: 'border-red-500/50',
      accent: 'text-red-400',
      accentBg: 'bg-red-900/20',
      icon: AlertCircle,
      badge: 'bg-red-500/20 text-red-300',
    },
  };

  const config: StatusConfig = statusConfig[kpi.status as Status];
  const IconComponent = config.icon;

  const trendIcon = kpi.trend !== undefined && kpi.trend !== 0 ? (
    kpi.trend > 0 ? (
      <TrendingUp className="w-4 h-4" />
    ) : (
      <TrendingDown className="w-4 h-4" />
    )
  ) : null;

  return (
    <div className={`
      relative group overflow-hidden rounded-xl border-2 ${config.border}
      bg-gradient-to-br ${config.bg} 
      p-6 transition-all duration-300 cursor-pointer
      hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-opacity-100
      backdrop-blur-sm
    `}>
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at top-right, currentColor, transparent 80%)',
        }}
      />

      {/* Corner accent */}
      <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${config.accentBg} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity`} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase text-gray-400 tracking-widest mb-1">
              {kpi.label}
            </p>
            {kpi.description && (
              <p className="text-xs text-gray-500 line-clamp-1">{kpi.description}</p>
            )}
          </div>
          <div className={`flex-shrink-0 p-2 ${config.accentBg} rounded-lg`}>
            <IconComponent className={`w-5 h-5 ${config.accent}`} />
          </div>
        </div>

        {/* Main Value */}
        <div className="mb-6">
          <div className={`flex items-baseline gap-2`}>
            <span className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
              kpi.status === Status.OK ? 'from-emerald-300 to-teal-400' :
              kpi.status === Status.WARNING ? 'from-amber-300 to-orange-400' :
              'from-red-300 to-pink-400'
            }`}>
              {kpi.value}
            </span>
            {kpi.unit && (
              <span className={`text-lg font-semibold ${config.accent} opacity-75`}>
                {kpi.unit}
              </span>
            )}
          </div>
        </div>

        {/* Trend */}
        {kpi.trend !== undefined && kpi.trend !== 0 && (
          <div className={`
            flex items-center gap-2 px-3 py-2 rounded-lg
            ${kpi.trend > 0 
              ? 'bg-green-500/10 text-green-400' 
              : 'bg-red-500/10 text-red-400'
            }
            text-sm font-medium
          `}>
            {trendIcon}
            <span>
              {kpi.trend > 0 ? '+' : ''}
              {kpi.trend.toFixed(2)}% vs. año anterior
            </span>
          </div>
        )}

        {/* Progress bar */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">Progreso</span>
            <span className={`text-xs font-semibold ${config.accent}`}>
              {Math.min(100, Math.round((parseFloat(kpi.value.toString()) / 10) * 100))}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                kpi.status === Status.OK ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                kpi.status === Status.WARNING ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                'bg-gradient-to-r from-red-500 to-pink-500'
              }`}
              style={{ width: `${Math.min(100, Math.round((parseFloat(kpi.value.toString()) / 10) * 100))}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
