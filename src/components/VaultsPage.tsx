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
  CheckCircle,
  Zap,
  ChevronRight,
  BarChart3
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
    statusStyle: 'bg-secondary/20 text-secondary border-secondary/30'
  },
  {
    id: 'KE-USDC-004',
    name: 'Kenya USDC Escrow',
    status: 'Liquidity Alert',
    balance: '482,120.50',
    currency: 'USDC',
    usdValue: '482,115.10',
    fireblocksId: 'FB-VAULT-3301-KE',
    utilization: 96.4,
    limit: '500,000.00',
    tiers: { t1: '25k', t2: '100k', t3: '250k' },
    statusStyle: 'bg-error/20 text-error border-error/30',
    critical: true
  }
];

const historicalData = [
  { date: 'OCT 24, 2026', volume: '$2,450,000', fees: '12.5 BPS', swift: '185 BPS', savings: '+93.2%' },
  { date: 'OCT 23, 2026', volume: '$1,890,200', fees: '12.5 BPS', swift: '192 BPS', savings: '+93.5%' },
  { date: 'OCT 22, 2026', volume: '$940,000', fees: '14.0 BPS', swift: '210 BPS', savings: '+93.3%' },
  { date: 'OCT 21, 2026', volume: '$3,100,500', fees: '11.8 BPS', swift: '175 BPS', savings: '+93.2%' },
];

const queueItems = [
  { id: 'TX-88219-NG', amount: '450,000.00', beneficiary: 'Standard Chartered NG', status: 'Executing', active: true },
  { id: 'TX-88220-NG', amount: '12,500.00', beneficiary: 'Zenith Bank PLC', status: 'Queued', opacity: 'opacity-50' },
  { id: 'TX-88221-KE', amount: '85,200.00', beneficiary: 'Equity Bank KE', status: 'Queued', opacity: 'opacity-30' },
];

export function VaultsPage() {
  return (
    <div className="flex flex-col h-full space-y-10 pb-20">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-0.5 bg-primary"></div>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Treasury Ops</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase leading-none">Corridor Vaults</h2>
          <p className="text-white/40 text-sm font-medium tracking-wide max-w-xl">
            Multi-signature liquidity management for institutional cross-border settlement corridors via Solana Escrow.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="glass-card bg-primary text-white border-primary/30 px-6 py-2.5 text-[9px] font-black uppercase tracking-widest solana-glow">
            Deploy New Vault
          </button>
          <button className="glass-card bg-white/[0.02] border-white/10 text-white/40 px-6 py-2.5 text-[9px] font-black uppercase tracking-widest hover:text-white transition-all">
            Audit Logs
          </button>
        </div>
      </section>

      {/* Vault Inventory Card Grid */}
      <section className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
        {vaults.map((vault) => (
          <div key={vault.id} className="glass-card p-8 border-white/5 relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-1 h-full ${vault.critical ? 'bg-error' : 'bg-secondary'}`}></div>
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-black">Corridor ID: {vault.id}</span>
                <h3 className="text-xl font-black mt-2 uppercase tracking-tighter text-white group-hover:text-primary transition-colors">{vault.name}</h3>
              </div>
              <div className={`${vault.statusStyle} px-2.5 py-1 text-[9px] font-black uppercase border rounded-sm tracking-widest`}>
                {vault.status}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.15em] mb-2">Live Liquidity</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black tabular-nums text-white tracking-tighter">{vault.balance}</span>
                    <span className="text-sm font-black text-primary uppercase">{vault.currency}</span>
                  </div>
                  <p className="text-[10px] text-white/10 tabular-nums mt-1 italic font-medium">≈ ${vault.usdValue} USDG Internal</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-white/20 uppercase font-black tracking-[0.1em] mb-1">Fireblocks Node</p>
                  <p className="text-[11px] font-mono font-bold text-white/40 tabular-nums">{vault.fireblocksId}</p>
                </div>
              </div>

              {/* Usage Gauge */}
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/30">Position Utilization</span>
                  <span className={`${vault.critical ? 'text-error' : 'text-secondary'} tabular-nums px-2 py-0.5 bg-white/[0.03] rounded-sm`}>{vault.utilization}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${vault.utilization}%` }}
                    className={`h-full ${vault.critical ? 'bg-error' : 'bg-secondary'} shadow-[0_0_10px] shadow-current`}
                  ></motion.div>
                </div>
                <div className={`flex justify-between text-[9px] font-black uppercase tracking-tighter ${vault.critical ? 'text-error' : 'text-white/20'}`}>
                  <span>{vault.critical ? 'CRITICAL CAP LOAD' : 'SAFE OPERATING ZONE'}</span>
                  <span className="tabular-nums opacity-60">Upper Bound: {vault.limit}</span>
                </div>
              </div>

              {/* Transfer Limits */}
              <div className="grid grid-cols-3 gap-6 bg-white/[0.02] p-5 border border-white/5 rounded-sm">
                <div>
                  <p className="text-[8px] text-white/20 uppercase font-black tracking-widest mb-1">Tier 1</p>
                  <p className="text-[12px] font-black text-white tabular-nums">{vault.tiers.t1}</p>
                </div>
                <div className="border-l border-white/5 pl-6">
                  <p className="text-[8px] text-white/20 uppercase font-black tracking-widest mb-1">Tier 2</p>
                  <p className="text-[12px] font-black text-white tabular-nums">{vault.tiers.t2}</p>
                </div>
                <div className="border-l border-white/5 pl-6">
                  <p className="text-[8px] text-white/20 uppercase font-black tracking-widest mb-1">Tier 3</p>
                  <p className="text-[12px] font-black text-white tabular-nums">{vault.tiers.t3}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className={`flex-1 ${vault.critical ? 'bg-error' : 'bg-primary'} text-white py-3 text-[10px] font-black uppercase tracking-[0.2em] solana-glow hover:scale-[1.02] active:scale-[0.98] transition-all`}>
                  {vault.critical ? 'Instant Rebalance' : 'Execute Policy'}
                </button>
                <button className="px-4 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all border border-white/5">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Global Liquidity Actions Card */}
        <div className="glass-card bg-primary/5 p-8 flex flex-col justify-between border-primary/20 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-all"></div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Treasury Controls</h3>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2 leading-none">Global Liquidity</h3>
            <p className="text-[11px] text-white/30 uppercase tracking-[0.15em] font-medium italic">Policy Engine & Multi-sig Rails.</p>
          </div>
          <div className="space-y-4 mt-12 relative">
            <button className="w-full flex justify-between items-center bg-white/[0.03] p-4 border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-secondary/10 rounded-sm">
                   <PlusCircle className="w-4 h-4 text-secondary" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-black text-white uppercase tracking-tight">Deposit Liquidity</span>
                  <span className="text-[9px] text-white/20 uppercase font-bold tracking-widest">External → Fireblocks</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
            </button>
            <button className="w-full flex justify-between items-center bg-white/[0.03] p-4 border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all group">
               <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-sm">
                   <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-black text-white uppercase tracking-tight">Withdraw Principal</span>
                  <span className="text-[9px] text-white/20 uppercase font-bold tracking-widest">Multi-sig (3/5) Approval</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
            </button>
            <button className="w-full flex justify-between items-center bg-white/[0.03] p-4 border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all group">
               <div className="flex items-center gap-4">
                <div className="p-2 bg-white/5 rounded-sm">
                   <Settings2 className="w-4 h-4 text-white/40" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-black text-white uppercase tracking-tight">System Parameters</span>
                  <span className="text-[9px] text-white/20 uppercase font-bold tracking-widest">Modify Risk Filters</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* Analytics & Queue Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Historical Cost Analysis */}
        <div className="lg:col-span-2 glass-card p-8 border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
          <div className="flex justify-between items-start mb-10">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                 <BarChart3 className="w-4 h-4 text-secondary" />
                 <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Efficiency Matrix</h3>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Institutional Arbitrage</h3>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary solana-glow"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">CorridorOS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">SWIFT / Legacy</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="pb-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Audit Date</th>
                  <th className="pb-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Notional Volume</th>
                  <th className="pb-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">Corridor Fees</th>
                  <th className="pb-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">SWIFT Delta</th>
                  <th className="pb-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20 text-right">Net Savings</th>
                </tr>
              </thead>
              <tbody className="text-[13px] tabular-nums font-bold">
                {historicalData.map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                    <td className="py-5 text-white/40 group-hover:text-white/80 transition-colors uppercase text-[11px] font-black">{row.date}</td>
                    <td className="py-5 text-white tracking-tight">{row.volume}</td>
                    <td className="py-5 text-secondary">{row.fees}</td>
                    <td className="py-5 text-white/20 font-medium italic">{row.swift}</td>
                    <td className="py-5 text-right text-secondary font-black tracking-widest">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Settlement Queue (FIFO) */}
        <div className="glass-card p-8 bg-white/[0.01] border-white/5 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8">
             <TrendingUp className="w-4 h-4 text-primary" />
             <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Settlement Queue</h3>
          </div>
          <div className="space-y-4">
            {queueItems.map((item) => (
              <div key={item.id} className={`p-5 bg-white/[0.02] border border-white/5 rounded-sm relative group overflow-hidden ${item.opacity || ''}`}>
                {item.active && <div className="absolute top-0 left-0 w-full h-0.5 bg-primary animate-pulse shadow-[0_0_10px_#9945FF]"></div>}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] font-mono text-white/20 uppercase font-black tracking-widest">{item.id}</span>
                  <span className={`${item.status === 'Executing' ? 'text-primary' : 'text-white/20'} text-[8px] font-black uppercase tracking-[0.1em]`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xl font-black tabular-nums text-white tracking-tighter">{item.amount} USDC</p>
                    <p className="text-[9px] text-white/20 uppercase font-black tracking-[0.05em] mt-1">{item.beneficiary}</p>
                  </div>
                  {item.status === 'Executing' ? (
                    <RefreshCw className="w-5 h-5 text-primary animate-spin" />
                  ) : (
                    <Hourglass className="w-5 h-5 text-white/10" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-[9px] font-black uppercase tracking-[0.3em] text-white/20 border border-white/5 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-3 group">
            Expand Fulfilment Ledger <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

