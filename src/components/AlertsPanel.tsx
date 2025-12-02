import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { AlertTriangle, AlertCircle, Info, Bell } from 'lucide-react';

interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  time: string;
  node: string;
}

export function AlertsPanel() {
  const alerts: Alert[] = [
    {
      id: 'A001',
      type: 'warning',
      title: 'Tráfico anómalo detectado',
      description: 'Incremento del 45% en peticiones desde IP desconocida',
      time: 'Hace 2 min',
      node: 'N004'
    },
    {
      id: 'A002',
      type: 'critical',
      title: 'Intento de acceso no autorizado',
      description: 'Múltiples intentos fallidos de autenticación',
      time: 'Hace 8 min',
      node: 'N001'
    },
    {
      id: 'A003',
      type: 'info',
      title: 'Actualización completada',
      description: 'Firmware actualizado exitosamente',
      time: 'Hace 15 min',
      node: 'N007'
    },
    {
      id: 'A004',
      type: 'warning',
      title: 'Alta latencia detectada',
      description: 'Latencia superior a 100ms en conexión',
      time: 'Hace 23 min',
      node: 'N003'
    },
    {
      id: 'A005',
      type: 'info',
      title: 'Escaneo de seguridad programado',
      description: 'Iniciando escaneo de vulnerabilidades',
      time: 'Hace 35 min',
      node: 'N002'
    },
    {
      id: 'A006',
      type: 'critical',
      title: 'Nodo desconectado',
      description: 'Pérdida de conexión con nodo',
      time: 'Hace 1 hora',
      node: 'N009'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return AlertCircle;
      case 'warning': return AlertTriangle;
      case 'info': return Info;
      default: return Bell;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return { icon: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-900', badge: 'border-red-600 text-red-400' };
      case 'warning': return { icon: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-900', badge: 'border-amber-600 text-amber-400' };
      case 'info': return { icon: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-900', badge: 'border-blue-600 text-blue-400' };
      default: return { icon: 'text-slate-400', bg: 'bg-slate-400/10', border: 'border-slate-800', badge: 'border-slate-600 text-slate-400' };
    }
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-cyan-400" />
          <h2 className="text-slate-200">Alertas en Tiempo Real</h2>
        </div>
        <Badge variant="outline" className="border-cyan-600 text-cyan-400">
          {alerts.filter(a => a.type !== 'info').length} Activas
        </Badge>
      </div>

      <ScrollArea className="h-[450px] pr-4">
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = getAlertIcon(alert.type);
            const colors = getAlertColor(alert.type);
            
            return (
              <div
                key={alert.id}
                className={`border ${colors.border} rounded-lg p-4 ${colors.bg} hover:border-opacity-60 transition-colors`}
              >
                <div className="flex items-start gap-3">
                  <div className={`${colors.bg} p-2 rounded-lg mt-0.5`}>
                    <Icon className={`w-4 h-4 ${colors.icon}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-slate-200 text-sm">{alert.title}</h3>
                      <Badge variant="outline" className={`${colors.badge} text-xs shrink-0`}>
                        {alert.node}
                      </Badge>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{alert.description}</p>
                    <p className="text-slate-500 text-xs">{alert.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
}
