import React from 'react';
import { 
  Zap, 
  ArrowRight, 
  MoreVertical, 
  ChevronRight, 
  ExternalLink, 
  GitMerge, 
  CheckCircle2, 
  Database, 
  Rocket,
  TrendingUp,
  Shield,
  CheckCircle,
  BarChart3,
  Layers,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

const batches = [
  { id: 'B-992-X1', corridor: 'NG-USDC → KE-USDC', amount: '412,000.00', status: 'Ready', savings: '+$4,120.40', statusStyle: 'bg-secondary/20 text-secondary border-secondary/30' },
  { id: 'B-993-Z5', corridor: 'US-USDC → PH-USDC', amount: '1,205,450.00', status: 'Pending IVMS101', savings: '+$11,890.15', statusStyle: 'bg-primary/20 text-primary border-primary/30', active: true },
  { id: 'B-994-A2', corridor: 'MX-USDC → BR-USDC', amount: '89,200.00', status: 'AML Flag', savings: '+$890.00', statusStyle: 'bg-error/20 text-error border-error/30' },
  { id: 'B-995-Q9', corridor: 'EU-EURC → IN-USDC', amount: '2,500,000.00', status: 'Ready', savings: '+$24,500.00', statusStyle: 'bg-secondary/20 text-secondary border-secondary/30' },
];

export function BatchSettlementPage() {
  return (
    <div className="flex flex-col h-full space-y-10 pb-20">
      {/* Content Header */}
      <section className="mt-6">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8">
          <div className="space-y-3">
             <div className="flex items-center gap-3">
              <div className="w-2 h-0.5 bg-secondary"></div>
              <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Atomic Rails</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase leading-none">Batch Settlement</h1>
            <p className="text-white/40 text-sm font-medium tracking-wide max-w-xl">
              Monitor and execute high-throughput liquidity flows across regional corridors via Solana Atomic Settlement.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="glass-card p-6 min-w-[200px] border-white/5 bg-white/[0.01]">
              <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/20 block mb-2">Individual Transfers</span>
              <span className="text-3xl font-black tabular-nums text-white tracking-tighter leading-none">10,245</span>
              <div className="flex items-center gap-2 mt-3">
                <Activity className="w-3 h-3 text-secondary" />
                <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">+12% vs LW</span>
              </div>
            </div>
            <div className="glass-card p-6 min-w-[200px] border-white/5 bg-white/[0.01]">
               <div className="absolute top-0 right-0 p-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary solana-glow"></div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/20 block mb-2">Active Batches</span>
              <span className="text-3xl font-black tabular-nums text-white tracking-tighter leading-none">48</span>
              <div className="flex items-center gap-2 mt-3">
                <Layers className="w-3 h-3 text-primary" />
                <span className="text-[9px] font-bold text-primary uppercase tracking-widest">In-Queue</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action Bar */}
        <div className="mt-10 glass-card bg-secondary/10 border-secondary/20 p-6 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden group">
          <div className="absolute -left-12 -top-12 w-48 h-48 bg-secondary/5 blur-[60px]"></div>
          <div className="flex items-center gap-6 relative">
            <div className="p-3 bg-secondary/20 border border-secondary/30 rounded-sm">
              <Zap className="w-5 h-5 text-secondary shadow-[0_0_15px_rgba(20,241,149,0.5)]" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-white/80 max-w-lg">
              32 Batches are verified and ready for atomic settlement on Solana Mainnet-Beta.
            </span>
          </div>
          <button className="glass-card bg-secondary text-black font-black px-10 py-3.5 uppercase text-[10px] tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all solana-glow border-none relative">
            Execute Atomic Settlement
          </button>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row flex-1 gap-10">
        {/* Data Table Section */}
        <div className="flex-[2] glass-card bg-white/[0.02] border-white/5 overflow-hidden flex flex-col shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Batch ID</th>
                  <th className="px-6 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Corridor</th>
                  <th className="px-6 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Notional Amount</th>
                  <th className="px-6 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Logic Status</th>
                  <th className="px-6 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Econ Savings</th>
                  <th className="px-6 py-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.02]">
                {batches.map((batch) => (
                  <tr 
                    key={batch.id} 
                    className={`hover:bg-white/[0.02] transition-colors cursor-pointer group relative ${batch.active ? 'bg-primary/5' : ''}`}
                  >
                    {batch.active && <div className="absolute left-0 top-0 w-1 h-full bg-primary solana-glow"></div>}
                    <td className="px-6 py-6 font-mono text-[11px] text-primary font-black tracking-tight tabular-nums">{batch.id}</td>
                    <td className="px-6 py-6 font-black tracking-tighter">
                      <div className="flex items-center gap-3">
                        <span className="text-white text-xs">{batch.corridor.split(' → ')[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-primary transition-colors" />
                        <span className="text-white text-xs">{batch.corridor.split(' → ')[1]}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 tabular-nums text-sm font-black text-white tracking-tighter">{batch.amount}</td>
                    <td className="px-6 py-6">
                      <span className={`${batch.statusStyle} text-[9px] px-3 py-1 font-black uppercase border rounded-sm tracking-widest`}>
                        {batch.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-secondary font-black text-[11px] tabular-nums tracking-wider">{batch.savings}</td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex justify-end items-center gap-3">
                        {batch.active ? (
                          <ChevronRight className="w-5 h-5 text-primary animate-pulse" />
                        ) : (
                          <MoreVertical className="w-5 h-5 text-white/10 group-hover:text-white transition-colors" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Details */}
        <aside className="flex-1 flex flex-col gap-10">
          {/* Detail Card */}
          <div className="glass-card p-8 border-white/5 bg-primary/5 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 -m-4 w-32 h-32 bg-primary/10 blur-[50px]"></div>
            <div className="flex items-center justify-between mb-8 relative">
              <div className="space-y-1">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Node Instance</span>
                <h4 className="text-sm font-black uppercase tracking-tighter text-white">Batch: B-993-Z5</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-white/40 cursor-pointer hover:text-white transition-colors" />
            </div>
            <div className="space-y-6 relative flex-1">
              {[
                { icon: GitMerge, color: 'text-primary', title: 'Travel Rule Merged', desc: '425 PII packets compressed into single block entry.' },
                { icon: CheckCircle2, color: 'text-secondary', title: 'AML Global Pass', desc: 'Global screening cleared for all unique beneficiaries.' },
                { icon: Database, color: 'text-white/40', title: 'Execution Proof', desc: 'Smart contract simulation confirms zero-slippage path.' }
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className={`w-10 h-10 flex items-center justify-center bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-all shadow-xl`}>
                    <step.icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-white mb-1">{step.title}</p>
                    <p className="text-[10px] text-white/40 font-medium leading-relaxed tracking-wide italic">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 relative">
              <button className="w-full bg-primary text-white py-4 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all solana-glow hover:scale-[1.01] active:scale-[0.98]">
                <Rocket className="w-4 h-4" />
                Sign & Dispatch
              </button>
            </div>
          </div>

          {/* Analytics Widget */}
          <div className="glass-card p-8 border-white/5 bg-white/[0.01] shadow-xl">
             <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-4 h-4 text-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Cost Efficacy Matrix</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                  <span className="text-white/30">Legacy Rails (Avg)</span>
                  <span className="tabular-nums text-white/60">$4.50 / tx</span>
                </div>
                <div className="h-1.5 bg-white/5 w-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-white/10 w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                  <span className="text-secondary">CorridorOS Batch</span>
                  <span className="tabular-nums text-secondary solana-glow font-black">$0.03 / tx</span>
                </div>
                <div className="h-1.5 bg-white/5 w-full relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '2%' }}
                    className="absolute top-0 left-0 h-full bg-secondary shadow-[0_0_10px_#14F195]"
                  ></motion.div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-secondary/5 p-6 border-l-4 border-secondary relative group">
              <p className="text-[11px] font-medium leading-relaxed text-white/60 tracking-wider">
                <span className="font-black text-secondary uppercase tracking-[0.1em] block mb-2">Network Delta:</span> 
                Using Solana atomic batching for this corridor has saved your institution <span className="font-black text-white tabular-nums">$148,220.50</span> in the last 24 hours.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
