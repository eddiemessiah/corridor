import React from 'react';
import { Zap, RefreshCcw } from 'lucide-react';

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
    <div className="bg-slate-50 p-5 ghost-border group hover:bg-white transition-colors shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-sm">
            {base} <span className="text-slate-400 mx-1">→</span> {target}
          </h4>
          <p className="text-[10px] text-slate-500 uppercase font-medium mt-1">{description}</p>
        </div>
        {type === 'bolt' ? (
          <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
        ) : (
          <RefreshCcw className="w-4 h-4 text-slate-400" />
        )}
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-baseline">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Spot Rate</span>
          <span className="text-lg font-bold tabular-nums">
            {rateVal.split(' ')[0]} <span className="text-xs text-slate-400 font-medium">{rateVal.split(' ')[1]}</span> = {rateNum} <span className="text-xs text-slate-400 font-medium">{rateCurrency}</span>
          </span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-slate-500">
            <span>Liquidity Depth</span>
            <span className="text-black">{depth}%</span>
          </div>
          <div className="h-1 bg-slate-200 w-full overflow-hidden">
            <div 
              className={`h-full ${type === 'bolt' ? 'bg-emerald-400' : 'bg-blue-600'}`} 
              style={{ width: `${depth}%` }} 
            />
          </div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-[10px] font-bold text-slate-500 uppercase">24h Volume</span>
          <span className="text-sm font-bold tabular-nums">{volume}</span>
        </div>
      </div>
    </div>
  );
}

export function CorridorPerformance() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-4 bg-blue-600"></span>
          Active Liquidity Corridors
        </h3>
        <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:underline">
          View All Pools
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <CorridorCard 
          pair="NG-USDC → KE-USDC"
          description="Nigeria to Kenya Hub"
          rate="1.00 USDC = 1,450.20 NGN"
          depth={82}
          volume="$1.2M"
          type="bolt"
        />
        <CorridorCard 
          pair="USDC → EUR-C"
          description="Cross-Atlantic Settle"
          rate="1.00 USDC = 0.922 EUR"
          depth={45}
          volume="$4.8M"
          type="sync"
        />
        <CorridorCard 
          pair="NG-USDC → GH-USDC"
          description="West African Corridor"
          rate="1.00 USDC = 14.80 GHS"
          depth={94}
          volume="$0.4M"
          type="bolt"
        />
      </div>
    </div>
  );
}
