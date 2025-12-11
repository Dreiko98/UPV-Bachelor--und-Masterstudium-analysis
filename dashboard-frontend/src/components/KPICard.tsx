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
      bg: 'bg-white',
      border: 'border-secondary/30',
      accent: 'text-emerald-700',
      accentBg: 'bg-secondary/10',
      icon: CheckCircle,
      badge: 'bg-secondary/20 text-emerald-700',
    },
    [Status.WARNING]: {
      bg: 'bg-white',
      border: 'border-warning/30',
      accent: 'text-amber-700',
      accentBg: 'bg-warning/10',
      icon: AlertCircle,
      badge: 'bg-warning/20 text-amber-700',
    },
    [Status.CRITICAL]: {
      bg: 'bg-white',
      border: 'border-danger/30',
      accent: 'text-red-700',
      accentBg: 'bg-danger/10',
      icon: AlertCircle,
      badge: 'bg-danger/20 text-red-700',
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
      relative group overflow-hidden rounded-2xl border-2 ${config.border}
      ${config.bg}
      p-6 transition-all duration-300 cursor-pointer
      hover:shadow-xl shadow-md
    `}>
      {/* Corner accent - sutil para light mode */}
      <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${config.accentBg} blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase text-slate-500 tracking-widest mb-1">
              {kpi.label}
            </p>
            {kpi.description && (
              <p className="text-xs text-slate-400 line-clamp-1">{kpi.description}</p>
            )}
          </div>
          <div className={`flex-shrink-0 p-2 ${config.accentBg} rounded-xl`}>
            <IconComponent className={`w-5 h-5 ${config.accent}`} />
          </div>
        </div>

        {/* Main Value */}
        <div className="mb-6">
          <div className={`flex items-baseline gap-2`}>
            <span className={`text-5xl font-bold ${
              kpi.status === Status.OK ? 'text-emerald-600' :
              kpi.status === Status.WARNING ? 'text-amber-600' :
              'text-red-600'
            }`}>
              {kpi.value}
            </span>
            {kpi.unit && (
              <span className={`text-lg font-semibold ${config.accent}`}>
                {kpi.unit}
              </span>
            )}
          </div>
        </div>

        {/* Trend */}
        {kpi.trend !== undefined && kpi.trend !== 0 && (
          <div className={`
            flex items-center gap-2 px-3 py-2 rounded-xl
            ${kpi.trend > 0 
              ? 'bg-secondary/15 text-emerald-700' 
              : 'bg-danger/15 text-red-700'
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
        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-500 font-medium">Progreso</span>
            <span className={`text-xs font-semibold ${config.accent}`}>
              {Math.min(100, Math.round((parseFloat(kpi.value.toString()) / 10) * 100))}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                kpi.status === Status.OK ? 'bg-gradient-to-r from-secondary to-emerald-400' :
                kpi.status === Status.WARNING ? 'bg-gradient-to-r from-warning to-yellow-400' :
                'bg-gradient-to-r from-danger to-red-400'
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
