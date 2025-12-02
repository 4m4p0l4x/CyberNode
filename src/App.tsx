import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { StatusPanel } from "./components/StatusPanel";
import { AlertsPanel } from "./components/AlertsPanel";
import { NodeMap } from "./components/NodeMap";
import { NetworkMetrics } from "./components/NetworkMetrics";
import { NodesTable } from "./components/NodesTable";

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header currentTime={currentTime} />

      <main className="max-w-[1600px] mx-auto p-6 space-y-6">
        {/* Status Overview */}
        <StatusPanel />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Node Map - Takes 2 columns */}
          <div className="lg:col-span-2">
            <NodeMap />
          </div>

          {/* Alerts Panel */}
          <div className="lg:col-span-1">
            <AlertsPanel />
          </div>
        </div>

        {/* Network Metrics */}
        <NetworkMetrics />

        {/* Nodes Table */}
        <NodesTable />
      </main>
    </div>
  );
}