import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin } from 'lucide-react';
import { useState } from 'react';

interface Node {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'warning' | 'offline';
  x: number;
  y: number;
}

export function NodeMap() {
  const nodes: Node[] = [
    { id: 'N001', name: 'Santiago Centro', location: 'Región Metropolitana', status: 'active', x: 45, y: 65 },
    { id: 'N002', name: 'Valparaíso Puerto', location: 'Región de Valparaíso', status: 'active', x: 35, y: 60 },
    { id: 'N003', name: 'Concepción', location: 'Región del Biobío', status: 'active', x: 50, y: 80 },
    { id: 'N004', name: 'La Serena', location: 'Región de Coquimbo', status: 'warning', x: 40, y: 45 },
    { id: 'N005', name: 'Antofagasta', location: 'Región de Antofagasta', status: 'active', x: 38, y: 25 },
    { id: 'N006', name: 'Puerto Montt', location: 'Región de Los Lagos', status: 'active', x: 48, y: 90 },
    { id: 'N007', name: 'Temuco', location: 'Región de La Araucanía', status: 'active', x: 52, y: 85 },
    { id: 'N008', name: 'Iquique', location: 'Región de Tarapacá', status: 'active', x: 35, y: 20 },
    { id: 'N009', name: 'Punta Arenas', location: 'Región de Magallanes', status: 'offline', x: 45, y: 98 },
    { id: 'N010', name: 'Rancagua', location: 'Región de O\'Higgins', status: 'active', x: 47, y: 68 },
  ];

  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const getNodeColor = (status: string) => {
    switch (status) {
      case 'active': return 'fill-cyan-400 stroke-cyan-300';
      case 'warning': return 'fill-amber-400 stroke-amber-300';
      case 'offline': return 'fill-slate-600 stroke-slate-500';
      default: return 'fill-slate-400 stroke-slate-300';
    }
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-cyan-400" />
          <h2 className="text-slate-200">Mapa de Nodos - Chile</h2>
        </div>
        <div className="flex gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span className="text-slate-400">Activo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <span className="text-slate-400">Alerta</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            <span className="text-slate-400">Inactivo</span>
          </div>
        </div>
      </div>

      <div className="relative bg-slate-950/50 rounded-lg p-8 min-h-[500px]">
        {/* Chile Map SVG */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          style={{ minHeight: '500px' }}
        >
          {/* Simplified Chile outline */}
          <path
            d="M 42 15 L 40 18 L 38 22 L 37 28 L 36 35 L 35 42 L 35 50 L 36 58 L 38 65 L 40 72 L 42 78 L 44 84 L 45 90 L 45 95 L 46 97 L 48 95 L 50 90 L 52 84 L 53 78 L 54 72 L 55 65 L 56 58 L 56 50 L 55 42 L 54 35 L 52 28 L 50 22 L 47 18 L 44 15 Z"
            fill="none"
            stroke="rgb(30, 41, 59)"
            strokeWidth="0.5"
            opacity="0.5"
          />

          {/* Connection lines */}
          {nodes.map((node, i) => 
            nodes.slice(i + 1).map((otherNode, j) => (
              <line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={otherNode.x}
                y2={otherNode.y}
                stroke="rgb(30, 41, 59)"
                strokeWidth="0.2"
                opacity="0.3"
              />
            ))
          )}

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.id}>
              {/* Pulse effect for active nodes */}
              {node.status === 'active' && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  className="fill-cyan-400 animate-ping"
                  opacity="0.4"
                />
              )}
              
              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r="2"
                className={`${getNodeColor(node.status)} cursor-pointer transition-all hover:r-3`}
                strokeWidth="0.5"
                onClick={() => setSelectedNode(node)}
                onMouseEnter={() => setSelectedNode(node)}
              />
            </g>
          ))}
        </svg>

        {/* Node Info Tooltip */}
        {selectedNode && (
          <div className="absolute bottom-4 right-4 bg-slate-800 border border-slate-700 rounded-lg p-4 min-w-[250px]">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-slate-200">{selectedNode.name}</h3>
                  <Badge 
                    variant="outline" 
                    className={
                      selectedNode.status === 'active' 
                        ? 'border-cyan-600 text-cyan-400' 
                        : selectedNode.status === 'warning'
                        ? 'border-amber-600 text-amber-400'
                        : 'border-slate-600 text-slate-400'
                    }
                  >
                    {selectedNode.status === 'active' ? 'Activo' : selectedNode.status === 'warning' ? 'Alerta' : 'Inactivo'}
                  </Badge>
                </div>
                <p className="text-slate-400 text-sm">{selectedNode.location}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">ID:</span>
                <span className="text-slate-300 font-mono">{selectedNode.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Latencia:</span>
                <span className="text-slate-300">12ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Uptime:</span>
                <span className="text-slate-300">99.8%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
