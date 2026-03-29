import React from 'react';
import { 
  FileText, 
  Table, 
  AlertCircle, 
  ArrowLeftRight, 
  CheckCircle2, 
  Clock, 
  Slash,
  ShieldAlert,
  Activity,
  Calendar,
  ExternalLink,
  Download,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

export function CompliancePage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Page Header & Global Actions */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-0.5 bg-primary"></div>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Governance Module</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white uppercase leading-none">Compliance & Audit Hub</h1>
          <p className="text-sm text-white/40 font-medium tracking-wide">Institutional-grade AML/KYC monitoring and IVMS101 regulatory rail enforcement.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-card bg-white/[0.02] border-white/10 text-white/60 px-5 py-2.5 text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/5 hover:text-white transition-all">
            <Download className="w-3.5 h-3.5" /> Archive Audit Trail
          </button>
          <button className="glass-card bg-white/[0.02] border-white/10 text-white/60 px-5 py-2.5 text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/5 hover:text-white transition-all">
            <Table className="w-3.5 h-3.5" /> Regulatory CSV
          </button>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Main Activity Feed */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* KYT Flags */}
          <div className="glass-card overflow-hidden border-error/20 bg-error/5">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-error flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Active KYT Risk Vectors
              </h3>
              <span className="text-[10px] font-black text-error/60 uppercase tracking-widest">4 Critical Exceptions Found</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-white/[0.01] text-white/20 uppercase text-[9px] font-black tracking-[0.2em] border-b border-white/5">
                  <tr>
                    <th className="px-8 py-5">Entity / On-Chain Address</th>
                    <th className="px-8 py-5">Risk Vector</th>
                    <th className="px-8 py-5">Severity</th>
                    <th className="px-8 py-5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { addr: '0x71C...4e21', reason: 'High Velocity / Rapid Peeling', sev: 'Critical', sevStyle: 'bg-error/20 text-error border-error/30' },
                    { addr: 'Sol:9vW...m1pA', reason: 'Geographic Mismatch (OFAC)', sev: 'Critical', sevStyle: 'bg-error/20 text-error border-error/30' },
                    { addr: '0x2A1...98ff', reason: 'Darknet Interaction', sev: 'Medium', sevStyle: 'bg-primary/20 text-primary border-primary/30' },
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-8 py-5 font-mono font-bold text-white/80 tabular-nums">{item.addr}</td>
                      <td className="px-8 py-5 text-white/50 font-medium italic">{item.reason}</td>
                      <td className="px-8 py-5">
                        <span className={`${item.sevStyle} px-2 py-0.5 font-black uppercase text-[9px] border rounded-sm tracking-widest`}>{item.sev}</span>
                      </td>
                      <td className="px-8 py-5 text-right space-x-4">
                        <button className="text-error font-black uppercase text-[9px] tracking-widest hover:brightness-125 transition-all">Escalate</button>
                        <button className="text-white/20 font-black uppercase text-[9px] tracking-widest hover:text-white/60 transition-all">Dismiss</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Travel Rule (IVMS101) Message Logs */}
          <div className="glass-card overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4 text-primary" /> Travel Rule (IVMS101) Messaging
              </h3>
              <div className="flex items-center gap-2 text-[10px] font-black text-secondary tracking-widest uppercase">
                <Zap className="w-3.5 h-3.5" /> Rail Status: Optimal
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-white/[0.01] text-white/20 uppercase text-[9px] font-black tracking-[0.2em] border-b border-white/5">
                  <tr>
                    <th className="px-8 py-5">Originating VASP</th>
                    <th className="px-8 py-5">Receiving VASP</th>
                    <th className="px-8 py-5">Time (UTC)</th>
                    <th className="px-8 py-5 text-right">Handshake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { from: 'Kraken Institutional', to: 'Corridor Node #1', time: '14:22:01', status: 'Settled', style: 'text-secondary', icon: CheckCircle2 },
                    { from: 'Binance Custody', to: 'Corridor Node #4', time: '14:15:33', status: 'Payload Preparing', style: 'text-primary animate-pulse', icon: Clock },
                    { from: 'Unidentified Entity', to: 'Corridor Node #12', time: '13:58:12', status: 'Blocked', style: 'text-error', icon: Slash },
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-white/[0.03] transition-colors">
                      <td className="px-8 py-5 font-bold text-white">{item.from}</td>
                      <td className="px-8 py-5 font-bold text-white/60">{item.to}</td>
                      <td className="px-8 py-5 font-mono text-white/20 tabular-nums">{item.time}</td>
                      <td className="px-8 py-5 text-right">
                        <span className={`${item.style} font-black uppercase text-[9px] tracking-widest flex items-center justify-end gap-2`}>
                          <item.icon className="w-3.5 h-3.5" /> {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Modules */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          
          {/* SAR Module */}
          <div className="glass-card p-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">AI Insights</h3>
              <span className="bg-primary/20 text-primary border border-primary/30 text-[8px] px-2 py-0.5 font-black uppercase tracking-widest rounded-sm">SAR Intelligence</span>
            </div>
            <div className="space-y-4">
              {[
                { id: 'SAR-2026-0042', time: '2h ago', desc: 'Aggregated velocity exceeding $1M within 24hr window across 15 sub-vaults.' },
                { id: 'SAR-2026-0041', time: '5h ago', desc: 'Interactions with hop-proxy detected via intermediate jumping wallet (Tornado-linked).' },
              ].map((sar) => (
                <div key={sar.id} className="p-4 bg-white/[0.02] border border-white/5 hover:border-primary/40 cursor-pointer transition-all group">
                  <div className="flex justify-between mb-2">
                    <span className="text-[11px] font-black text-white group-hover:text-primary transition-colors tracking-tight">{sar.id}</span>
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{sar.time}</span>
                  </div>
                  <p className="text-[11px] text-white/40 font-medium leading-relaxed italic line-clamp-2">"{sar.desc}"</p>
                  <div className="mt-4 flex gap-3">
                    <button className="text-[9px] font-black uppercase tracking-widest text-primary hover:brightness-125 transition-all">Review Report</button>
                    <button className="text-[9px] font-black uppercase tracking-widest text-white/10 hover:text-white/40 transition-all">Dismiss</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KYC Refresh Calendar */}
          <div className="glass-card p-8 space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Lifecycle Monitor</h3>
            <div className="space-y-1">
              {[
                { name: 'Global Hedge Partners', type: 'Institution', expires: '3d', color: 'text-error' },
                { name: 'Alpha Liquidity Ltd', type: 'Institution', expires: '12d', color: 'text-primary' },
                { name: 'Julianne V.', type: 'Private Tier 2', expires: '45d', color: 'text-white/20' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors rounded-sm px-2 -mx-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white tracking-tight">{item.name}</span>
                    <span className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em]">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>-{item.expires}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center text-[9px] font-black uppercase tracking-[0.3em] py-3 bg-white/[0.02] text-white/20 border border-white/5 hover:text-white/60 hover:bg-white/5 transition-all group">
              View Full Compliance Calendar
            </button>
          </div>

          {/* Network Status */}
          <div className="glass-card p-8 space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Infrastructure Core</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: 'Fireblocks API', status: 'Operational', color: 'bg-secondary', text: 'text-secondary' },
                { name: 'Refinitiv World-Check', status: 'Operational', color: 'bg-secondary', text: 'text-secondary' },
                { name: 'Chainalysis KYT', status: 'Latency: 450ms', color: 'bg-primary', text: 'text-primary' },
              ].map((infra, i) => (
                <div key={i} className="flex items-center justify-between bg-white/[0.02] p-4 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${infra.color} shadow-[0_0_8px] shadow-current`}></div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/60">{infra.name}</span>
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${infra.text}`}>{infra.status}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
