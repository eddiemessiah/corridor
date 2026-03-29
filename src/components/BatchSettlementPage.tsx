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
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const batches = [
  { id: 'B-992-X1', corridor: 'NG-USDC → KE-USDC', amount: '412,000.00', status: 'Ready', savings: '+$4,120.40', statusColor: 'bg-emerald-400 text-black' },
  { id: 'B-993-Z5', corridor: 'US-USDC → PH-USDC', amount: '1,205,450.00', status: 'Pending IVMS101', savings: '+$11,890.15', statusColor: 'bg-blue-600 text-white', active: true },
  { id: 'B-994-A2', corridor: 'MX-USDC → BR-USDC', amount: '89,200.00', status: 'AML Flag', savings: '+$890.00', statusColor: 'bg-red-100 text-red-700' },
  { id: 'B-995-Q9', corridor: 'EU-EURC → IN-USDC', amount: '2,500,000.00', status: 'Ready', savings: '+$24,500.00', statusColor: 'bg-emerald-400 text-black' },
];

export function BatchSettlementPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Content Header */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase">Batch Settlement</h1>
            <p className="text-slate-500 text-sm">Monitor and execute high-throughput liquidity flows across regional corridors.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 min-w-[180px] ghost-border shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 block mb-1">Individual Transfers</span>
              <span className="text-2xl font-bold tabular-nums">10,245</span>
            </div>
            <div className="bg-white p-4 min-w-[180px] ghost-border border-l-4 border-emerald-400 shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 block mb-1">Active Batches</span>
              <span className="text-2xl font-bold tabular-nums">48</span>
            </div>
          </div>
        </div>

        {/* Primary Action Bar */}
        <div className="flex justify-between items-center bg-black text-white p-4 ghost-border mb-6">
          <div className="flex items-center gap-4">
            <Zap className="w-5 h-5 text-emerald-400 fill-emerald-400" />
            <span className="text-sm font-medium">32 Batches are verified and ready for atomic settlement on Solana Mainnet-Beta.</span>
          </div>
          <button className="bg-emerald-400 text-black font-bold px-6 py-2 uppercase text-xs tracking-widest hover:bg-emerald-500 transition-colors active:scale-[0.98]">
            Execute Atomic Settlement
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden gap-6">
        {/* Data Table Section */}
        <div className="flex-[2] bg-white overflow-auto ghost-border shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Batch ID</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Corridor</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Amount</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Compliance</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Fee Savings</th>
                <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {batches.map((batch) => (
                <tr 
                  key={batch.id} 
                  className={`hover:bg-slate-50 transition-colors cursor-pointer group ${batch.active ? 'bg-blue-50/30 border-l-4 border-blue-600' : ''}`}
                >
                  <td className="px-4 py-4 font-mono text-xs text-blue-600 font-medium">{batch.id}</td>
                  <td className="px-4 py-4 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{batch.corridor.split(' → ')[0]}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                      <span className="font-bold">{batch.corridor.split(' → ')[1]}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 tabular-nums text-sm font-semibold">{batch.amount}</td>
                  <td className="px-4 py-4">
                    <span className={`${batch.statusColor} text-[10px] px-2 py-0.5 font-bold uppercase tracking-tighter`}>
                      {batch.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-emerald-600 font-bold text-xs">{batch.savings}</td>
                  <td className="px-4 py-4">
                    {batch.active ? (
                      <ChevronRight className="w-5 h-5 text-black" />
                    ) : (
                      <MoreVertical className="w-5 h-5 text-slate-400 group-hover:text-black" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sidebar Details */}
        <aside className="flex-1 flex flex-col gap-6">
          {/* Detail Card */}
          <div className="bg-slate-100 p-6 ghost-border shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Batch Detail: B-993-Z5</span>
              <ExternalLink className="w-4 h-4 text-black cursor-pointer hover:opacity-70" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200">
                  <GitMerge className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tight mb-1">Travel Rule Message Merged</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">425 PII packets compressed into single block entry.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tight mb-1">Single AML Check Passed</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Global screening cleared for all unique beneficiaries.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200">
                  <Database className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-tight mb-1">Solana Execution Proof</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Smart contract simulation confirms zero-slippage path.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <button className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98]">
                <Rocket className="w-4 h-4" />
                Sign & Dispatch
              </button>
            </div>
          </div>

          {/* Analytics Widget */}
          <div className="bg-white p-6 ghost-border flex-1 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-6">Cost Efficiency Analytics</span>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[11px] mb-2">
                  <span className="text-slate-500">SWIFT Traditional Avg.</span>
                  <span className="font-mono">$4.50 / tx</span>
                </div>
                <div className="h-2 bg-slate-100 w-full relative">
                  <div className="absolute top-0 left-0 h-full bg-slate-300 w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] mb-2">
                  <span className="text-emerald-600 font-bold">CorridorOS Batching</span>
                  <span className="font-mono font-bold">$0.03 / tx</span>
                </div>
                <div className="h-2 bg-slate-100 w-full relative">
                  <div className="absolute top-0 left-0 h-full bg-emerald-400 w-[2%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-emerald-50 p-4 border-l-4 border-emerald-400">
              <p className="text-[11px] font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-emerald-700">Total Estimated Savings:</span> 
                Using Solana atomic batching for this corridor has saved your institution <span className="font-bold">$148,220.50</span> in the last 24 hours.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
