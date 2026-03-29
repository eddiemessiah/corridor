import React from 'react';
import { 
  MoreVertical, 
  PlusCircle, 
  ArrowUpRight, 
  Settings2, 
  ArrowRight, 
  RefreshCw, 
  Hourglass,
  TrendingUp,
  Shield,
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const vaults = [
  {
    id: 'NG-USDC-001',
    name: 'Nigeria USDC Escrow',
    status: 'Active',
    balance: '1,240,500.00',
    currency: 'USDC',
    usdValue: '1,240,488.20',
    fireblocksId: 'FB-VAULT-7721-NG',
    utilization: 62.0,
    limit: '2,000,000.00',
    tiers: { t1: '50k', t2: '250k', t3: '1.5M' },
    color: 'border-emerald-400'
  },
  {
    id: 'KE-USDC-004',
    name: 'Kenya USDC Escrow',
    status: 'Pending',
    balance: '482,120.50',
    currency: 'USDC',
    usdValue: '482,115.10',
    fireblocksId: 'FB-VAULT-3301-KE',
    utilization: 96.4,
    limit: '500,000.00',
    tiers: { t1: '25k', t2: '100k', t3: '250k' },
    color: 'border-blue-600',
    critical: true
  }
];

const historicalData = [
  { date: 'OCT 24, 2023', volume: '$2,450,000', fees: '12.5 BPS', swift: '185 BPS', savings: '+93.2%' },
  { date: 'OCT 23, 2023', volume: '$1,890,200', fees: '12.5 BPS', swift: '192 BPS', savings: '+93.5%' },
  { date: 'OCT 22, 2023', volume: '$940,000', fees: '14.0 BPS', swift: '210 BPS', savings: '+93.3%' },
  { date: 'OCT 21, 2023', volume: '$3,100,500', fees: '11.8 BPS', swift: '175 BPS', savings: '+93.2%' },
];

const queueItems = [
  { id: 'TX-88219-NG', amount: '450,000.00', beneficiary: 'Standard Chartered NG', status: 'Executing', active: true },
  { id: 'TX-88220-NG', amount: '12,500.00', beneficiary: 'Zenith Bank PLC', status: 'Queued', opacity: 'opacity-70' },
  { id: 'TX-88221-KE', amount: '85,200.00', beneficiary: 'Equity Bank KE', status: 'Queued', opacity: 'opacity-50' },
];

export function VaultsPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Header Section */}
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-black uppercase">Corridor Vaults</h2>
          <p className="text-slate-500 text-sm mt-1 max-w-xl">
            Multi-signature liquidity management for institutional cross-border settlement corridors.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-200 px-4 py-2 text-[12px] font-bold uppercase border-b-2 border-black">Grid View</button>
          <button className="bg-transparent px-4 py-2 text-[12px] font-bold uppercase text-slate-500 hover:bg-slate-100 transition-colors">Analytics</button>
        </div>
      </section>

      {/* Vault Inventory Card Grid */}
      <section className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 mb-10">
        {vaults.map((vault) => (
          <div key={vault.id} className={`bg-white p-6 border-b-4 ${vault.color} shadow-sm ghost-border`}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Corridor ID: {vault.id}</span>
                <h3 className="text-xl font-bold mt-1 uppercase tracking-tight">{vault.name}</h3>
              </div>
              <div className={`${vault.status === 'Active' ? 'bg-emerald-400' : 'bg-blue-600 text-white'} px-2 py-0.5 text-[10px] font-black uppercase`}>
                {vault.status}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[11px] text-slate-500 uppercase font-bold">Live Balance</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black tabular-nums">{vault.balance}</span>
                    <span className="text-sm font-bold text-blue-800 uppercase">{vault.currency}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 tabular-nums mt-0.5">≈ ${vault.usdValue} USDG</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Fireblocks ID</p>
                  <p className="text-[12px] font-mono font-medium">{vault.fireblocksId}</p>
                </div>
              </div>

              {/* Usage Gauge */}
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-bold uppercase">
                  <span>Position Utilization</span>
                  <span className={`${vault.critical ? 'text-red-600' : 'text-blue-600'} tabular-nums`}>{vault.utilization}%</span>
                </div>
                <div className="h-2 bg-slate-100">
                  <div 
                    className={`h-full ${vault.critical ? 'bg-red-600' : 'bg-blue-600'}`} 
                    style={{ width: `${vault.utilization}%` }}
                  ></div>
                </div>
                <div className={`flex justify-between text-[10px] tabular-nums ${vault.critical ? 'text-red-600 font-bold' : 'text-slate-400'}`}>
                  <span>{vault.critical ? 'CRITICAL LOAD' : '0.00 USDC'}</span>
                  <span>Limit: {vault.limit} USDC</span>
                </div>
              </div>

              {/* Transfer Limits */}
              <div className="grid grid-cols-3 gap-4 bg-slate-50 p-4 border border-slate-100">
                <div>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Tier 1</p>
                  <p className="text-[12px] font-bold tabular-nums">{vault.tiers.t1}</p>
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Tier 2</p>
                  <p className="text-[12px] font-bold tabular-nums">{vault.tiers.t2}</p>
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Tier 3</p>
                  <p className="text-[12px] font-bold tabular-nums">{vault.tiers.t3}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className={`flex-1 ${vault.critical ? 'bg-blue-600' : 'bg-black'} text-white py-2 text-[11px] font-black uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all`}>
                  {vault.critical ? 'Rebalance' : 'Manage'}
                </button>
                <button className="px-3 bg-slate-100 text-black hover:bg-slate-200 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Global Liquidity Actions Card */}
        <div className="bg-slate-900 text-white p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight mb-2">Manage Liquidity</h3>
            <p className="text-[11px] text-slate-400 uppercase tracking-widest leading-relaxed">System-wide treasury controls and vault parameters.</p>
          </div>
          <div className="space-y-3 mt-8">
            <button className="w-full flex justify-between items-center bg-slate-800 p-4 hover:bg-slate-700 transition-colors group">
              <div className="flex flex-col items-start">
                <span className="text-[13px] font-bold">Deposit USDC</span>
                <span className="text-[10px] text-slate-400 uppercase font-medium">via Fireblocks Network</span>
              </div>
              <PlusCircle className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
            </button>
            <button className="w-full flex justify-between items-center bg-slate-800 p-4 hover:bg-slate-700 transition-colors group">
              <div className="flex flex-col items-start">
                <span className="text-[13px] font-bold">Withdraw Assets</span>
                <span className="text-[10px] text-slate-400 uppercase font-medium">Multi-sig (3/5 Required)</span>
              </div>
              <ArrowUpRight className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            </button>
            <button className="w-full flex justify-between items-center bg-slate-800 p-4 hover:bg-slate-700 transition-colors group">
              <div className="flex flex-col items-start">
                <span className="text-[13px] font-bold">Adjust Position Limits</span>
                <span className="text-[10px] text-slate-400 uppercase font-medium">Policy Engine Override</span>
              </div>
              <Settings2 className="w-5 h-5 group-hover:text-slate-200 transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* Analytics & Queue Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Historical Cost Analysis */}
        <div className="lg:col-span-2 bg-white p-6 shadow-sm ghost-border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest">Historical Cost Efficiency</h3>
              <p className="text-[11px] text-slate-500 uppercase mt-1">30-Day Corridor Comparison (BPS)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-emerald-400 border border-black"></div>
                <span className="text-[10px] font-bold uppercase">CorridorOS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-slate-300"></div>
                <span className="text-[10px] font-bold uppercase">SWIFT/Int.</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-3 text-[10px] font-black uppercase text-slate-500">Date</th>
                  <th className="pb-3 text-[10px] font-black uppercase text-slate-500">Volume</th>
                  <th className="pb-3 text-[10px] font-black uppercase text-slate-500">CorridorOS Fees</th>
                  <th className="pb-3 text-[10px] font-black uppercase text-slate-500">Est. SWIFT Cost</th>
                  <th className="pb-3 text-[10px] font-black uppercase text-slate-500 text-right">Savings</th>
                </tr>
              </thead>
              <tbody className="text-[12px] tabular-nums">
                {historicalData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="py-4 font-medium">{row.date}</td>
                    <td className="py-4">{row.volume}</td>
                    <td className="py-4">{row.fees}</td>
                    <td className="py-4 text-slate-400">{row.swift}</td>
                    <td className="py-4 text-right text-emerald-600 font-bold">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Settlement Queue (FIFO) */}
        <div className="bg-slate-50 p-6 shadow-sm border-l-4 border-black ghost-border">
          <h3 className="text-sm font-black uppercase tracking-widest mb-6">Settlement Queue (FIFO)</h3>
          <div className="space-y-4">
            {queueItems.map((item) => (
              <div key={item.id} className={`bg-white p-4 border border-slate-200 ${item.opacity || ''}`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">{item.id}</span>
                  <span className={`${item.status === 'Executing' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'} px-1.5 py-0.5 text-[8px] font-black uppercase`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[14px] font-black tabular-nums">{item.amount} USDC</p>
                    <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Beneficiary: {item.beneficiary}</p>
                  </div>
                  {item.status === 'Executing' ? (
                    <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                  ) : (
                    <Hourglass className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-black transition-colors flex items-center justify-center gap-2">
            View Full Queue <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
