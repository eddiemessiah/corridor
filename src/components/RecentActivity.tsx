import React from 'react';

const activities = [
  {
    status: 'Settled',
    amount: '50,000.00',
    corridor: 'NG-USDC → KE-USDC',
    timestamp: 'Oct 24, 14:32:01',
    tx: '8wKx...9zP2',
    statusColor: 'bg-emerald-400 text-black',
  },
  {
    status: 'Pending Compliance',
    amount: '125,000.00',
    corridor: 'USDC → EUR-C',
    timestamp: 'Oct 24, 14:15:44',
    tx: '3mRt...2vL9',
    statusColor: 'bg-blue-600 text-white',
  },
  {
    status: 'Settled',
    amount: '2,400.00',
    corridor: 'NG-USDC → GH-USDC',
    timestamp: 'Oct 24, 13:58:20',
    tx: '7uYp...6mQ4',
    statusColor: 'bg-emerald-400 text-black',
  },
  {
    status: 'Rollback',
    amount: '15,000.00',
    corridor: 'USDC → EUR-C',
    timestamp: 'Oct 24, 12:44:12',
    tx: '4kLo...1fX8',
    statusColor: 'bg-red-200 text-red-800',
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white ghost-border shadow-sm">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center">
        <h3 className="text-sm font-bold uppercase tracking-widest">Recent Activity</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-slate-100 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
            Export CSV
          </button>
          <button className="px-3 py-1 bg-slate-100 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
            Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Amount (USDC)</th>
              <th className="px-6 py-4">Corridor</th>
              <th className="px-6 py-4">Timestamp</th>
              <th className="px-6 py-4">Solana TX</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {activities.map((activity, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors group border-b border-slate-50 last:border-0">
                <td className="px-6 py-4">
                  <span className={`${activity.statusColor} px-2 py-0.5 text-[10px] font-bold uppercase`}>
                    {activity.status}
                  </span>
                </td>
                <td className="px-6 py-4 tabular-nums font-bold">{activity.amount}</td>
                <td className="px-6 py-4">{activity.corridor}</td>
                <td className="px-6 py-4 text-slate-500 tabular-nums">{activity.timestamp}</td>
                <td className="px-6 py-4 font-mono text-xs text-blue-600 group-hover:underline cursor-pointer">
                  {activity.tx}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
