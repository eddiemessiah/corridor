import React from 'react';
import { 
  RefreshCw, 
  Landmark, 
  Lock, 
  Shield, 
  CheckCircle2, 
  ExternalLink,
  Settings as SettingsIcon,
  Bell,
  HelpCircle,
  Plus,
  Globe,
  Key,
  Database,
  Search,
  Zap,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export function SettingsPage() {
  return (
    <div className="flex flex-col h-full space-y-12 pb-20 max-w-7xl mx-auto">
      {/* Page Header */}
      <section className="mt-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-0.5 bg-primary"></div>
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">System Config</span>
        </div>
        <h1 className="text-4xl font-black tracking-tighter text-white uppercase leading-none">Settings & Governance</h1>
        <p className="text-white/40 text-sm font-medium tracking-wide max-w-xl mt-3">
          Configure institutional identity, security parameters, and regional compliance rails for CorridorOS.
        </p>
      </section>

      {/* Section: Profile */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-white/5 pb-6">
          <div className="space-y-1">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Identity Engine</span>
            <h2 className="text-2xl font-black tracking-tighter uppercase text-white">Institutional Profile</h2>
          </div>
          <button className="glass-card bg-white/[0.02] border-white/10 text-white/40 px-6 py-2.5 text-[9px] font-black uppercase tracking-widest hover:text-white transition-all">
            Update Entity
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 border-white/5 bg-white/[0.01]">
            <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-3">Legal Entity Name</label>
            <p className="text-xl font-black text-white tracking-tight uppercase">AMINA Bank AG</p>
            <p className="text-[10px] text-white/30 mt-2 font-mono tabular-nums">CHE-123.456.789 HR/MWST</p>
          </div>
          <div className="glass-card p-8 border-white/5 bg-white/[0.01]">
            <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-3">Registration Jurisdiction</label>
            <p className="text-xl font-black text-white tracking-tight uppercase">Switzerland (FINMA)</p>
            <p className="text-[10px] text-white/30 mt-2 font-mono tabular-nums">ZUG Business Registry</p>
          </div>
          <div className="glass-card p-8 border-white/5 bg-white/[0.01]">
            <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-3">Primary Contact</label>
            <p className="text-xl font-black text-white tracking-tight uppercase">Compliance Desk</p>
            <p className="text-[10px] text-white/30 mt-2 font-mono tabular-nums underline decoration-primary/30">ops@amina-bank.ch</p>
          </div>
        </div>

        <div className="glass-card p-8 border-white/5 bg-primary/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -m-8 w-48 h-48 bg-primary/10 blur-[60px]"></div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Branding & Terminal Identity</h4>
          <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="w-40 h-40 glass-card bg-white/[0.03] flex items-center justify-center border-white/10 group-hover:border-primary/40 transition-all shadow-2xl">
              <img 
                alt="Brand Logo" 
                className="w-24 h-24 invert opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh14eulQuQMrHo-FfYKodzTtc116LYD_ocskFc4GxmMF96kcuhJQKLW7PtnKnpOo7nR-FZEsoQk5wD9SUKbuNBUZN77Uac9qPktws0NR_Xboa8xzCtwbFRtptCW6HnqYMShi-jX_PfJRcc8PxEhwfezx-JQFkTJO9yexAZFyFysivW2RQlO-TNfVdhGNg7dDYVLLUoUS--ijU_OVVDFbOYHSwKiBHi8SpdzxC47nXrd8PlMbsh4iCQDYiAs6buKzG84Wwp911X4uM"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 space-y-8">
              <div>
                <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] block mb-4">Interface Accent Color</label>
                <div className="flex gap-4">
                  {[
                    { color: 'bg-primary', active: true },
                    { color: 'bg-secondary', active: false },
                    { color: 'bg-white', active: false },
                    { color: 'bg-error', active: false }
                  ].map((item, i) => (
                    <div key={i} className={`w-10 h-10 ${item.color} ${item.active ? 'ring-2 ring-offset-4 ring-offset-surface ring-primary' : 'opacity-40'} cursor-pointer hover:scale-110 transition-all shadow-lg`}></div>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-white/40 max-w-lg leading-relaxed italic font-medium tracking-wide">
                Institutional branding is autonomously applied to all PDF reports, settlement notifications, and the client-facing vault interface across the CorridorOS network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: API & Integration */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-white/5 pb-6">
          <div className="space-y-1">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary">External Connectivity</span>
            <h2 className="text-2xl font-black tracking-tighter uppercase text-white">API & Integration Rails</h2>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-secondary solana-glow"></div>
             <span className="text-[10px] font-black uppercase tracking-widest text-secondary">All Nodes Synchronized</span>
          </div>
        </div>

        <div className="space-y-4">
          {/* Fireblocks Row */}
          <div className="glass-card p-8 flex items-center justify-between border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors group">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass-card bg-primary/10 flex items-center justify-center border-primary/20">
                <Key className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-black uppercase tracking-widest text-sm text-white">Fireblocks API Gateway</p>
                <p className="text-[10px] font-mono text-white/20 mt-1 uppercase tracking-tighter">ID: fb-prod-8821-x99</p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="text-right">
                <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Heartbeat</p>
                <p className="text-[11px] font-mono tabular-nums text-white/60">2026-10-24 14:02:11</p>
              </div>
              <button className="glass-card bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] px-6 py-3 hover:scale-[1.02] active:scale-[0.98] transition-all">Manage Keys</button>
            </div>
          </div>
          {/* SIX BFI Row */}
          <div className="glass-card p-8 flex items-center justify-between border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors group">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glass-card bg-secondary/10 flex items-center justify-center border-secondary/20">
                <Landmark className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-black uppercase tracking-widest text-sm text-white">SIX BFI Protocol</p>
                <p className="text-[10px] font-mono text-white/20 mt-1 uppercase tracking-tighter">v2.4 Settlement Proxy</p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="text-right">
                <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Operational State</p>
                <p className="text-[11px] font-black text-secondary uppercase tracking-widest">Linked & Active</p>
              </div>
              <button className="glass-card bg-white/[0.03] border-white/10 text-white/40 text-[9px] font-black uppercase tracking-[0.2em] px-6 py-3 hover:text-white transition-all">Configure</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 border-white/5 bg-white/[0.01]">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Webhook Notifications</h4>
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block">Endpoint URL</label>
                <div className="flex gap-3">
                  <input 
                    className="flex-1 glass-card bg-white/[0.03] border-white/10 p-4 text-xs font-mono text-white focus:outline-none focus:border-primary/50" 
                    type="text" 
                    defaultValue="https://api.amina-bank.ch/v1/corridoros/webhook"
                  />
                  <button className="glass-card bg-primary text-white px-6 font-black uppercase text-[9px] tracking-widest solana-glow">Test</button>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 glass-card bg-primary border-none flex items-center justify-center shadow-[0_0_10px_rgba(153,69,255,0.4)]">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Settlement Success</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 glass-card bg-primary border-none flex items-center justify-center shadow-[0_0_10px_rgba(153,69,255,0.4)]">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Compliance Flags</span>
                </label>
              </div>
            </div>
          </div>
          <div className="glass-card p-8 border-white/5 bg-white/[0.01]">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Execution Environment</h4>
            <div className="flex glass-card bg-white/[0.03] border-white/10 p-1.5 w-fit">
              <button className="px-8 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] bg-white text-black shadow-xl">Mainnet-Beta</button>
              <button className="px-8 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all">Testnet Sandbox</button>
            </div>
            <p className="text-[10px] text-white/20 mt-8 leading-relaxed font-medium italic">
              Switching environments will autonomously revoke and reload all API credentials. Testnet transactions do not settle on the Swiss National Bank (SNB) RITS ledger.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Security & Governance */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-white/5 pb-6">
          <div className="space-y-1">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-error">Risk Protocol</span>
            <h2 className="text-2xl font-black tracking-tighter uppercase text-white">Security & Governance</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-10 border-white/5 bg-white/[0.01] md:col-span-2 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-error solana-glow"></div>
            <div className="flex justify-between items-start mb-10 relative">
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Multi-Sig Approval Threshold</h4>
                <p className="text-[11px] text-white/60 font-medium italic">Required consensus for principal movements & policy shifts.</p>
              </div>
              <span className="text-4xl font-black tabular-nums text-white tracking-tighter">3 / 5</span>
            </div>
            <div className="space-y-6 relative">
              <div className="h-2 bg-white/5 w-full rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  className="h-full bg-error shadow-[0_0_15px_#FF4B4B]"
                ></motion.div>
              </div>
              <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em] text-white/20">
                <span>Individual Signing</span>
                <span className="text-error">Consensus Threshold</span>
                <span>Unanimous Board</span>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 relative">
              <div className="p-6 glass-card bg-white/[0.02] border-white/5 border-l-4 border-error">
                <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Policy Freepass Limit</p>
                <p className="text-2xl font-black tabular-nums text-white tracking-tighter">CHF 50,000.00</p>
              </div>
              <div className="p-6 glass-card bg-white/[0.02] border-white/5 border-l-4 border-white/40">
                <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Admin Session TTL</p>
                <p className="text-2xl font-black tabular-nums text-white tracking-tighter">15 Minutes</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-10 border-white/5 bg-white/[0.01] flex flex-col">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">Access Control (IP)</h4>
            <div className="space-y-4 flex-1">
              {[
                { label: 'Zurich HQ Gateway', ip: '192.168.1.1' },
                { label: 'Ops Cluster (Internal)', ip: '10.0.42.11' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between glass-card bg-white/[0.03] p-5 border-white/5 group hover:border-primary/30 transition-all">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">{item.label}</p>
                    <p className="text-xs font-mono text-white/80">{item.ip}</p>
                  </div>
                  <Lock className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
            <button className="w-full mt-10 border border-dashed border-white/20 p-5 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 hover:bg-white/[0.02] hover:text-white transition-all flex items-center justify-center gap-3 group">
              <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" /> Add IP Signature
            </button>
          </div>
        </div>
      </section>

      {/* Section: Compliance Rules */}
      <section className="pb-20 space-y-8">
        <div className="flex items-end justify-between border-b border-white/5 pb-6">
          <div className="space-y-1">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Regulatory Logic</span>
            <h2 className="text-2xl font-black tracking-tighter uppercase text-white">Compliance Rules Engine</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Travel Rule Threshold', value: '$3,000', sub: 'IVMS101', desc: 'Auto-collection for all cross-border flows exceeding cap.' },
            { label: 'KYT Risk Tolerance', value: 'MEDIUM', sub: 'Balanced', desc: 'Dynamic screening intensity for Tier 1 counterparties.' },
            { label: 'Auto-SAR Reporting', value: 'ENABLED', sub: 'AMLD-6', desc: 'Autonomous report generation for suspicious flags.' },
            { label: 'Audit Log Retention', value: '10 YRS', sub: 'Ordinance', desc: 'Secure immutable storage aligned with SNB standards.' }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all group">
              <label className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-4 group-hover:text-primary transition-colors">{item.label}</label>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-black tabular-nums text-white tracking-tighter">{item.value}</span>
                <span className="text-[9px] font-black text-primary uppercase tracking-widest">{item.sub}</span>
              </div>
              <p className="text-[10px] text-white/30 leading-relaxed font-medium italic tracking-wide">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="glass-card bg-secondary/10 border-secondary/20 p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute right-0 top-0 -m-12 w-64 h-64 bg-secondary/5 blur-[80px]"></div>
          <div className="flex items-center gap-8 relative">
            <div className="p-4 bg-secondary/20 rounded-sm">
              <Shield className="w-8 h-8 text-secondary solana-glow shadow-[0_0_20px_rgba(20,241,149,0.3)]" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white">Global Compliance Override</p>
              <p className="text-xs font-medium text-white/40 italic">
                All logic circuits are currently subject to FINMA circular 2023/1 regulatory standards. No local overrides permitted.
              </p>
            </div>
          </div>
          <button className="glass-card bg-secondary text-black text-[10px] font-black uppercase tracking-[0.3em] px-10 py-4 hover:scale-[1.02] active:scale-[0.98] transition-all solana-glow border-none whitespace-nowrap">
            Audit Logic Triggers
          </button>
        </div>
      </section>
    </div>
  );
}
