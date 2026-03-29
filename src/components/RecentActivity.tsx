import React from 'react';
import { ExternalLink, Filter, Download } from 'lucide-react';

const activities = [
  {
    status: 'Settled',
    amount: '50,000.00',
    corridor: 'NG-USDC → KE-USDC',
    timestamp: 'Oct 24, 14:32:01',
    tx: '8wKx...9zP2',
    statusStyle: 'bg-secondary/20 text-secondary border-secondary/30',
  },
  {
    status: 'Compliance',
    amount: '125,000.00',
    corridor: 'USDC → EUR-C',
    timestamp: 'Oct 24, 14:15:44',
    tx: '3mRt...2vL9',
    statusStyle: 'bg-primary/20 text-primary border-primary/30',
  },
  {
    status: 'Settled',
    amount: '2,400.00',
    corridor: 'NG-USDC → GH-USDC',
    timestamp: 'Oct 24, 13:58:20',
    tx: '7uYp...6mQ4',
    statusStyle: 'bg-secondary/20 text-secondary border-secondary/30',
  },
  {
    status: 'Rollback',
    amount: '15,000.00',
    corridor: 'USDC → EUR-C',
    timestamp: 'Oct 24, 12:44:12',
    tx: '4kLo...1fX8',
    statusStyle: 'bg-error/20 text-error border-error/30',
  },
];

export function RecentActivity() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 flex items-center gap-2">
          <div className="w-1 h-3 bg-primary"></div>
          Institutional Activity Ledger
        </h3>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10">
            <Download className="w-3 h-3" />
            Archive
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/10">
            <Filter className="w-3 h-3" />
            Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.01] text-[9px] font-black uppercase tracking-[0.2em] text-white/30 border-b border-white/5">
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5">Amount (USDC)</th>
              <th className="px-8 py-5">Corridor</th>
              <th className="px-8 py-5">Mined Timestamp</th>
              <th className="px-8 py-5">Solana Transaction</th>
            </tr>
          </thead>
          <tbody className="text-[13px]">
            {activities.map((activity, idx) => (
              <tr key={idx} className="hover:bg-white/[0.03] transition-colors group border-b border-white/5 last:border-0">
                <td className="px-8 py-5">
                  <span className={`${activity.statusStyle} px-2.5 py-1 text-[9px] font-black uppercase tracking-widest border rounded-sm`}>
                    {activity.status}
                  </span>
                </td>
                <td className="px-8 py-5 tabular-nums font-bold text-white tracking-tight">{activity.amount}</td>
                <td className="px-8 py-5 text-white/60 font-semibold">{activity.corridor}</td>
                <td className="px-8 py-5 text-white/40 tabular-nums font-medium">{activity.timestamp}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-primary/80 group-hover:text-primary transition-colors cursor-pointer tabular-nums">
                    {activity.tx}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-white/[0.01] text-center">
        <button className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">
          View Full Chain History
        </button>
      </div>
    </div>
  );
}
