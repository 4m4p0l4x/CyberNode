import { Card } from './ui/card';
import { Activity, Shield, AlertTriangle, Cpu } from 'lucide-react';

export function StatusPanel() {
  const stats = [
    {
      label: 'Nodos Activos',
      value: '47',
      total: '50',
      icon: Activity,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      percentage: 94
    },
    {
      label: 'Seguridad',
      value: '98.5%',
      icon: Shield,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      status: 'Óptima'
    },
    {
      label: 'Alertas Activas',
      value: '3',
      icon: AlertTriangle,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      status: 'Media'
    },
    {
      label: 'Carga del Sistema',
      value: '67%',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      status: 'Normal'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 hover:border-cyan-900/50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <p className="text-slate-400 text-sm">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`${stat.color} text-3xl`}>{stat.value}</span>
                  {stat.total && (
                    <span className="text-slate-500 text-sm">/ {stat.total}</span>
                  )}
                </div>
                {stat.status && (
                  <p className="text-slate-500 text-sm">{stat.status}</p>
                )}
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
