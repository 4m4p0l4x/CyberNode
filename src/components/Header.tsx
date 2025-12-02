import { Shield, Activity } from 'lucide-react';

interface HeaderProps {
  currentTime: Date;
}

export function Header({ currentTime }: HeaderProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-CL', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-CL', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="w-8 h-8 text-cyan-400" />
              <Activity className="w-4 h-4 text-cyan-400 absolute -bottom-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-cyan-400 tracking-tight">CyberNode CL</h1>
              <p className="text-slate-400 text-sm">Plataforma de Ciberseguridad Distribuida</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-cyan-400 font-mono">{formatTime(currentTime)}</div>
            <div className="text-slate-400 text-sm capitalize">{formatDate(currentTime)}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
