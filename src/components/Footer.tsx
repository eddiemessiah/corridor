import React from 'react';
import { TrendingUp, Shield, CheckCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-8 bg-slate-900 border-t border-slate-800 flex justify-between items-center px-6 z-[60] ml-[-16rem] md:ml-0">
      <div className="flex gap-8">
        <div className="text-emerald-400 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest cursor-default">
          <TrendingUp className="w-3.5 h-3.5" />
          FX Rates: Stable
        </div>
        <div className="text-slate-500 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest cursor-default hover:text-white transition-colors">
          <Shield className="w-3.5 h-3.5" />
          Fireblocks: Connected
        </div>
        <div className="text-slate-500 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest cursor-default hover:text-white transition-colors">
          <CheckCircle className="w-3.5 h-3.5" />
          Security: Multi-Sig Active
        </div>
      </div>
      <div className="text-slate-600 font-mono text-[9px] uppercase tracking-widest">
        v2.4.1-STABLE // LATENCY: 42MS
      </div>
    </footer>
  );
}
