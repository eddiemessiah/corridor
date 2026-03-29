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
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

export function CompliancePage() {
  return (
    <div className="space-y-6">
      {/* Page Header & Global Actions */}
      <section className="flex justify-between items-end">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">Compliance & Audit Hub</h1>
          <p className="text-sm text-slate-500 font-medium">Institutional-grade AML/KYC monitoring and IVMS101 compliance.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-100 text-slate-900 px-4 py-2 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-200 transition-colors">
            <FileText className="w-4 h-4" /> Export Audit Trail (PDF)
          </button>
          <button className="bg-slate-100 text-slate-900 px-4 py-2 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-slate-200 transition-colors">
            <Table className="w-4 h-4" /> Generate Regulatory CSV
          </button>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Activity Feed */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* KYT Flags */}
          <div className="bg-white ghost-border border-l-2 border-red-600 shadow-sm">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600" /> Active KYT Flags
              </h3>
              <span className="text-[10px] font-mono text-red-600 uppercase font-bold">4 Urgent Actions Required</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Entity / Address</th>
                    <th className="px-4 py-3 font-semibold">Flag Reason</th>
                    <th className="px-4 py-3 font-semibold">Severity</th>
                    <th className="px-4 py-3 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { addr: '0x71C...4e21', reason: 'High Velocity / Rapid Peeling', sev: 'Critical', sevColor: 'bg-red-100 text-red-700' },
                    { addr: 'Sol:9vW...m1pA', reason: 'Geographic Mismatch (OFAC-Sanctioned)', sev: 'Critical', sevColor: 'bg-red-100 text-red-700' },
                    { addr: '0x2A1...98ff', reason: 'Darknet Market Interaction', sev: 'Medium', sevColor: 'bg-orange-100 text-orange-700' },
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-4 font-mono font-medium">{item.addr}</td>
                      <td className="px-4 py-4 text-slate-600">{item.reason}</td>
                      <td className="px-4 py-4">
                        <span className={`${item.sevColor} px-2 py-0.5 font-bold uppercase text-[9px]`}>{item.sev}</span>
                      </td>
                      <td className="px-4 py-4 text-right space-x-3">
                        <button className="text-red-600 font-bold uppercase text-[10px] hover:underline">Escalate</button>
                        <button className="text-slate-400 font-bold uppercase text-[10px] hover:text-slate-900">Resolve</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Travel Rule (IVMS101) Message Logs */}
          <div className="bg-white ghost-border border-l-2 border-blue-600 shadow-sm">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4 text-blue-600" /> Travel Rule (IVMS101)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Originating VASP</th>
                    <th className="px-4 py-3 font-semibold">Receiving VASP</th>
                    <th className="px-4 py-3 font-semibold">Timestamp</th>
                    <th className="px-4 py-3 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { from: 'Kraken (US)', to: 'AMINA Bank (CH)', time: '2023-10-27 14:22:01', status: 'Confirmed', statusColor: 'text-emerald-500', icon: CheckCircle2 },
                    { from: 'Binance (KY)', to: 'AMINA Bank (CH)', time: '2023-10-27 14:15:33', status: 'Retrying', statusColor: 'text-orange-500', icon: Clock },
                    { from: 'Unknown Entity', to: 'AMINA Bank (CH)', time: '2023-10-27 13:58:12', status: 'Hold', statusColor: 'text-red-600', icon: Slash },
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-4 font-bold">{item.from}</td>
                      <td className="px-4 py-4 font-bold">{item.to}</td>
                      <td className="px-4 py-4 font-mono text-slate-500">{item.time}</td>
                      <td className="px-4 py-4 text-right">
                        <span className={`${item.statusColor} font-bold uppercase text-[10px] flex items-center justify-end gap-1`}>
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
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* SAR Module */}
          <div className="bg-white p-5 space-y-4 ghost-border shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">SAR Draft Module</h3>
              <span className="bg-blue-600 text-white text-[9px] px-1.5 font-bold uppercase">AI Suggested</span>
            </div>
            <div className="space-y-3">
              {[
                { id: 'SAR-2023-0042', time: '2h ago', desc: 'Aggregated transfers exceeding $1M within 24hr window across 15 separate accounts from the same IP range.' },
                { id: 'SAR-2023-0041', time: '5h ago', desc: 'Interaction with sanctioned mixer service (Tornado Cash) detected via intermediate hopping wallet.' },
              ].map((sar) => (
                <div key={sar.id} className="p-3 bg-slate-50 border border-slate-100 hover:border-blue-600 cursor-pointer transition-colors group">
                  <div className="flex justify-between mb-1">
                    <span className="text-[11px] font-bold text-slate-900">{sar.id}</span>
                    <span className="text-[10px] text-slate-500">{sar.time}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">{sar.desc}</p>
                  <div className="mt-2 flex gap-2">
                    <button className="text-[9px] font-bold uppercase text-blue-600 group-hover:underline">Review Report</button>
                    <button className="text-[9px] font-bold uppercase text-slate-400">Dismiss</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KYC Refresh Calendar */}
          <div className="bg-white p-5 space-y-4 ghost-border shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">KYC Expiration Monitor</h3>
            <div className="space-y-1">
              {[
                { name: 'Global Hedge Partners', type: 'Institutional', expires: '3d', color: 'text-red-600' },
                { name: 'Alpha Liquidity Ltd', type: 'Institutional', expires: '12d', color: 'text-orange-500' },
                { name: 'Julianne V. (Private)', type: 'Individual Tier 2', expires: '45d', color: 'text-slate-400' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-900">{item.name}</span>
                    <span className="text-[10px] text-slate-500 uppercase">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-[11px] font-bold ${item.color}`}>Expires {item.expires}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center text-[10px] font-bold uppercase tracking-widest py-2 bg-slate-50 text-slate-500 hover:text-slate-900 transition-colors">
              View Full Calendar
            </button>
          </div>

          {/* Network Status */}
          <div className="bg-white p-5 space-y-4 ghost-border shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Compliance Infrastructure</h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                { name: 'Synaps', status: 'UP: 99.99%', color: 'bg-emerald-400', text: 'text-emerald-500' },
                { name: 'Refinitiv World-Check', status: 'UP: 99.98%', color: 'bg-emerald-400', text: 'text-emerald-500' },
                { name: 'Accuity Asset Screening', status: 'LATENCY: 450ms', color: 'bg-orange-400', text: 'text-orange-500' },
              ].map((infra, i) => (
                <div key={i} className="flex items-center justify-between bg-slate-50 p-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${infra.color}`}></div>
                    <span className="text-[11px] font-medium text-slate-900">{infra.name}</span>
                  </div>
                  <span className={`text-[9px] font-mono ${infra.text}`}>{infra.status}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
