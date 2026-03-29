import React from 'react';
import { Zap, RefreshCcw, TrendingUp } from 'lucide-react';

interface CorridorProps {
  pair: string;
  description: string;
  rate: string;
  depth: number;
  volume: string;
  type: 'bolt' | 'sync';
}

function CorridorCard({ pair, description, rate, depth, volume, type }: CorridorProps) {
  const [base, target] = pair.split(' → ');
  const [rateVal, rateTarget] = rate.split(' = ');
  const [rateNum, rateCurrency] = rateTarget.split(' ');

  return (
    <div className="glass-card p-6 group hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl -mr-12 -mt-12 group-hover:bg-primary/10 transition-all"></div>
      
      <div className="flex justify-between items-start mb-6 relative">
        <div>
          <h4 className="font-black text-xs text-white uppercase tracking-widest flex items-center gap-2">
            {base} <span className="text-white/20">→</span> {target}
          </h4>
          <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-1.5">{description}</p>
        </div>
        <div className={`p-2 rounded-sm ${type === 'bolt' ? 'bg-secondary/10 border border-secondary/20' : 'bg-primary/10 border border-primary/20'}`}>
          {type === 'bolt' ? (
            <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
          ) : (
            <RefreshCcw className="w-3.5 h-3.5 text-primary" />
          )}
        </div>
      </div>
      
      <div className="space-y-5 relative">
        <div className="flex justify-between items-baseline">
          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Spot Exchange Rate</span>
          <span className="text-lg font-black tabular-nums text-white tracking-tighter">
            {rateVal.split(' ')[0]} <span className="text-[10px] text-white/40 font-bold ml-1">{rateVal.split(' ')[1]}</span> 
            <span className="mx-2 text-primary">=</span> 
            {rateNum} <span className="text-[10px] text-white/40 font-bold ml-1">{rateCurrency}</span>
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
            <span className="flex items-center gap-1.5">
              Liquidity Depth
              <TrendingUp className="w-2.5 h-2.5 text-secondary" />
            </span>
            <span className="text-white">{depth}%</span>
          </div>
          <div className="h-1 bg-white/5 w-full overflow-hidden rounded-full">
            <div 
              className={`h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(20,241,149,0.3)] ${type === 'bolt' ? 'bg-secondary' : 'bg-primary'}`} 
              style={{ width: `${depth}%` }} 
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">24h Volume</span>
          <span className="text-sm font-black tabular-nums text-white tracking-widest">{volume}</span>
        </div>
      </div>
    </div>
  );
}

export function CorridorPerformance() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 text-white/60">
          <div className="w-4 h-[1px] bg-primary"></div>
          Active Liquidity Corridors
        </h3>
        <button className="text-[9px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary/20 hover:border-white pb-0.5">
          Global Pool Explorer
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <CorridorCard 
          pair="NG-USDC → KE-USDC"
          description="East African Settlement"
          rate="1.00 USDC = 1,450.20 NGN"
          depth={82}
          volume="$1,240,000"
          type="bolt"
        />
        <CorridorCard 
          pair="USDC → EUR-C"
          description="EU-Atlantic Rail"
          rate="1.00 USDC = 0.922 EUR"
          depth={45}
          volume="$4,812,000"
          type="sync"
        />
        <CorridorCard 
          pair="NG-USDC → GH-USDC"
          description="West African Nexus"
          rate="1.00 USDC = 14.80 GHS"
          depth={94}
          volume="$412,000"
          type="bolt"
        />
      </div>
    </div>
  );
}
