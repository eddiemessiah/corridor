import React from 'react';
import { Shield, TrendingUp, Info } from 'lucide-react';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Aggregated Balances */}
      <div className="col-span-12 lg:col-span-8 glass-card p-8 flex flex-col justify-between min-h-[240px]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
              Aggregated Treasury Balances
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
          </div>
          <div className="flex items-baseline gap-6 mt-1">
            <h2 className="text-6xl font-black tracking-tighter tabular-nums text-white">
              $12,482,904<span className="text-white/30">.52</span>
            </h2>
            <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded-sm border border-secondary/20">
              <TrendingUp className="w-3 h-3 text-secondary" />
              <span className="text-secondary font-bold text-[10px] tracking-widest">+0.12%</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-12 mt-10">
          <div className="space-y-1">
            <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">USDC Liquidity</p>
            <p className="text-2xl font-bold tabular-nums text-white">$8,120,440</p>
            <div className="h-0.5 w-8 bg-primary"></div>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">USDG (Global)</p>
            <p className="text-2xl font-bold tabular-nums text-white">$4,362,464</p>
            <div className="h-0.5 w-8 bg-white/20"></div>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">In-Transit</p>
            <p className="text-2xl font-bold tabular-nums text-secondary">$241,000</p>
            <div className="h-0.5 w-8 bg-secondary/50"></div>
          </div>
        </div>
      </div>

      {/* Compliance Quick Glance */}
      <div className="col-span-12 lg:col-span-4 bg-gradient-to-br from-primary/20 to-black p-8 flex flex-col glass-border relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-700"></div>
        <div className="flex justify-between items-start mb-8 relative">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Compliance Radar</span>
            <h3 className="text-lg font-bold text-white mt-1">System Audit</h3>
          </div>
          <Shield className="w-6 h-6 text-primary shadow-primary/50" />
        </div>
        <div className="space-y-5 relative">
          <div className="flex justify-between items-center py-3 border-b border-white/5 group/row hover:bg-white/5 px-2 -mx-2 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-primary/50"></div>
              <span className="text-xs font-semibold text-white/70">KYC Refreshes</span>
            </div>
            <span className="bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest">12 PENDING</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-white/5 group/row hover:bg-white/5 px-2 -mx-2 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-error/50"></div>
              <span className="text-xs font-semibold text-white/70">Active KYT Flags</span>
            </div>
            <span className="bg-error/20 text-error border border-error/30 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest">02 CRITICAL</span>
          </div>
          <div className="flex justify-between items-center py-3 group/row hover:bg-white/5 px-2 -mx-2 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-secondary/50"></div>
              <span className="text-xs font-semibold text-white/70">Travel Rule</span>
            </div>
            <span className="bg-secondary/20 text-secondary border border-secondary/30 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest">05 UNREAD</span>
          </div>
        </div>
        <button className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
          <Info className="w-3 h-3" />
          View Detailed Compliance Log
        </button>
      </div>
    </div>
  );
}
