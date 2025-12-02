import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Wifi, Database, Zap } from 'lucide-react';

export function NetworkMetrics() {
  const networkData = [
    { time: '00:00', trafico: 45, latencia: 12, amenazas: 2 },
    { time: '04:00', trafico: 32, latencia: 15, amenazas: 1 },
    { time: '08:00', trafico: 78, latencia: 18, amenazas: 5 },
    { time: '12:00', trafico: 95, latencia: 14, amenazas: 8 },
    { time: '16:00', trafico: 88, latencia: 16, amenazas: 4 },
    { time: '20:00', trafico: 67, latencia: 13, amenazas: 3 },
    { time: '24:00', trafico: 52, latencia: 11, amenazas: 1 }
  ];

  const bandwidthData = [
    { time: '00:00', entrada: 120, salida: 80 },
    { time: '04:00', entrada: 90, salida: 60 },
    { time: '08:00', entrada: 180, salida: 140 },
    { time: '12:00', entrada: 220, salida: 180 },
    { time: '16:00', entrada: 200, salida: 160 },
    { time: '20:00', entrada: 160, salida: 120 },
    { time: '24:00', entrada: 130, salida: 90 }
  ];

  const threatData = [
    { categoria: 'DDoS', cantidad: 12 },
    { categoria: 'Malware', cantidad: 8 },
    { categoria: 'Phishing', cantidad: 5 },
    { categoria: 'Brute Force', cantidad: 15 },
    { categoria: 'SQL Injection', cantidad: 3 }
  ];

  return (
    <Card className="bg-slate-900/50 border-slate-800 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-5 h-5 text-cyan-400" />
        <h2 className="text-slate-200">Métricas de Red</h2>
      </div>

      <Tabs defaultValue="traffic" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-slate-950/50 border border-slate-800">
          <TabsTrigger value="traffic" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
            <Wifi className="w-4 h-4 mr-2" />
            Tráfico
          </TabsTrigger>
          <TabsTrigger value="bandwidth" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
            <Database className="w-4 h-4 mr-2" />
            Ancho de Banda
          </TabsTrigger>
          <TabsTrigger value="latency" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
            <Zap className="w-4 h-4 mr-2" />
            Latencia
          </TabsTrigger>
          <TabsTrigger value="threats" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-400">
            <Activity className="w-4 h-4 mr-2" />
            Amenazas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={networkData}>
              <defs>
                <linearGradient id="colorTrafico" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="trafico" 
                stroke="#22d3ee" 
                strokeWidth={2}
                fill="url(#colorTrafico)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="bandwidth" className="mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bandwidthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="entrada" 
                stroke="#22d3ee" 
                strokeWidth={2}
                name="Entrada (Mbps)"
              />
              <Line 
                type="monotone" 
                dataKey="salida" 
                stroke="#06b6d4" 
                strokeWidth={2}
                name="Salida (Mbps)"
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="latency" className="mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={networkData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="latencia" 
                stroke="#22d3ee" 
                strokeWidth={2}
                name="Latencia (ms)"
              />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>

        <TabsContent value="threats" className="mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={threatData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="categoria" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }} 
              />
              <Bar dataKey="cantidad" fill="#22d3ee" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
