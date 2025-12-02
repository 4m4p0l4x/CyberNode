import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Progress } from './ui/progress';
import { Server } from 'lucide-react';

interface NodeData {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'warning' | 'offline';
  cpu: number;
  memory: number;
  uptime: string;
  threats: number;
}

export function NodesTable() {
  const nodes: NodeData[] = [
    { id: 'N001', name: 'Santiago Centro', location: 'RM', status: 'active', cpu: 45, memory: 62, uptime: '99.8%', threats: 2 },
    { id: 'N002', name: 'Valparaíso Puerto', location: 'VAL', status: 'active', cpu: 38, memory: 55, uptime: '99.9%', threats: 0 },
    { id: 'N003', name: 'Concepción', location: 'BIO', status: 'active', cpu: 52, memory: 68, uptime: '99.7%', threats: 1 },
    { id: 'N004', name: 'La Serena', location: 'COQ', status: 'warning', cpu: 78, memory: 85, uptime: '98.5%', threats: 4 },
    { id: 'N005', name: 'Antofagasta', location: 'ANT', status: 'active', cpu: 42, memory: 58, uptime: '99.9%', threats: 0 },
    { id: 'N006', name: 'Puerto Montt', location: 'LLA', status: 'active', cpu: 35, memory: 48, uptime: '99.8%', threats: 1 },
    { id: 'N007', name: 'Temuco', location: 'ARA', status: 'active', cpu: 48, memory: 64, uptime: '99.6%', threats: 0 },
    { id: 'N008', name: 'Iquique', location: 'TAR', status: 'active', cpu: 40, memory: 52, uptime: '99.7%', threats: 1 },
    { id: 'N009', name: 'Punta Arenas', location: 'MAG', status: 'offline', cpu: 0, memory: 0, uptime: '0%', threats: 0 },
    { id: 'N010', name: 'Rancagua', location: 'OHI', status: 'active', cpu: 44, memory: 60, uptime: '99.8%', threats: 0 }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="outline" className="border-cyan-600 text-cyan-400">Activo</Badge>;
      case 'warning':
        return <Badge variant="outline" className="border-amber-600 text-amber-400">Alerta</Badge>;
      case 'offline':
        return <Badge variant="outline" className="border-slate-600 text-slate-400">Inactivo</Badge>;
      default:
        return <Badge variant="outline">Desconocido</Badge>;
    }
  };

  const getProgressColor = (value: number) => {
    if (value >= 80) return 'bg-red-500';
    if (value >= 60) return 'bg-amber-500';
    return 'bg-cyan-500';
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Server className="w-5 h-5 text-cyan-400" />
        <h2 className="text-slate-200">Estado de Nodos IoT</h2>
      </div>

      <div className="rounded-lg border border-slate-800 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-950/50 hover:bg-slate-950/50 border-slate-800">
              <TableHead className="text-slate-300">ID</TableHead>
              <TableHead className="text-slate-300">Nodo</TableHead>
              <TableHead className="text-slate-300">Ubicación</TableHead>
              <TableHead className="text-slate-300">Estado</TableHead>
              <TableHead className="text-slate-300">CPU</TableHead>
              <TableHead className="text-slate-300">Memoria</TableHead>
              <TableHead className="text-slate-300">Uptime</TableHead>
              <TableHead className="text-slate-300 text-right">Amenazas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nodes.map((node) => (
              <TableRow 
                key={node.id} 
                className="border-slate-800 hover:bg-slate-950/30"
              >
                <TableCell className="font-mono text-slate-400">{node.id}</TableCell>
                <TableCell className="text-slate-200">{node.name}</TableCell>
                <TableCell className="text-slate-400">{node.location}</TableCell>
                <TableCell>{getStatusBadge(node.status)}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={node.cpu} 
                        className="h-2 w-20 bg-slate-800"
                        indicatorClassName={getProgressColor(node.cpu)}
                      />
                      <span className="text-slate-400 text-sm w-10">{node.cpu}%</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={node.memory} 
                        className="h-2 w-20 bg-slate-800"
                        indicatorClassName={getProgressColor(node.memory)}
                      />
                      <span className="text-slate-400 text-sm w-10">{node.memory}%</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-slate-400">{node.uptime}</TableCell>
                <TableCell className="text-right">
                  {node.threats > 0 ? (
                    <Badge variant="outline" className="border-amber-600 text-amber-400">
                      {node.threats}
                    </Badge>
                  ) : (
                    <span className="text-slate-500">0</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
