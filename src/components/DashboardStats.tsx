import React from 'react';
import { Shield } from 'lucide-react';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Aggregated Balances */}
      <div className="col-span-12 lg:col-span-8 bg-white p-6 ghost-border flex flex-col justify-between min-h-[200px] shadow-sm">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1 block">
            Aggregated Treasury Balances
          </span>
          <div className="flex items-baseline gap-4 mt-2">
            <h2 className="text-5xl font-extrabold tracking-tighter tabular-nums">$12,482,904.52</h2>
            <span className="text-emerald-500 font-bold text-sm">+0.12% 24h</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="border-l-2 border-blue-600 pl-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">USDC Liquidity</p>
            <p className="text-xl font-bold tabular-nums">$8,120,440</p>
          </div>
          <div className="border-l-2 border-black pl-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">USDG (Global)</p>
            <p className="text-xl font-bold tabular-nums">$4,362,464</p>
          </div>
          <div className="border-l-2 border-emerald-400 pl-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">In-Transit</p>
            <p className="text-xl font-bold tabular-nums">$241,000</p>
          </div>
        </div>
      </div>

      {/* Compliance Quick Glance */}
      <div className="col-span-12 lg:col-span-4 bg-black text-white p-6 flex flex-col shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Compliance Radar</span>
          <Shield className="w-5 h-5 text-blue-500" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-sm">KYC Refreshes</span>
            <span className="bg-blue-600 px-2 py-0.5 text-[11px] font-bold">12 PENDING</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-white/10">
            <span className="text-sm">Active KYT Flags</span>
            <span className="bg-red-600 px-2 py-0.5 text-[11px] font-bold">02 CRITICAL</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm">Travel Rule Messages</span>
            <span className="bg-emerald-400 text-black px-2 py-0.5 text-[11px] font-bold">05 UNREAD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
