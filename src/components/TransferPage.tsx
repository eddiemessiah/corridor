import React from 'react';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Clock, 
  Wallet,
  Shield
} from 'lucide-react';
import { motion } from 'motion/react';

interface TransferPageProps {
  onBack: () => void;
}

export function TransferPage({ onBack }: TransferPageProps) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header/Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 mt-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-black transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold uppercase tracking-widest">Return to Treasury</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-1 shadow-2xl">
        {/* Left Column: Form */}
        <div className="flex-1 bg-slate-50 p-8 border-r border-slate-200">
          <header className="mb-10">
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">Liquidity Transfer</h1>
            <p className="text-slate-500 text-sm">Initiate secure cross-border settlement via CorridorOS Rails.</p>
          </header>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Amount Section */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">
                Transfer Principal (USDC)
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                <input 
                  className="w-full bg-white border-0 border-b border-slate-300 p-4 pl-8 text-2xl font-bold tabular-nums focus:ring-0 focus:border-blue-600 transition-all outline-none" 
                  type="text" 
                  defaultValue="3,500.00"
                />
              </div>
              
              {/* Travel Rule Warning */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-3 bg-red-50 p-4 border-l-4 border-red-600"
              >
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold uppercase text-red-600">Travel Rule Threshold Exceeded</p>
                  <p className="text-xs text-slate-600">Amounts &gt; $3,000.00 require full IVMS101 message preparation and counterparty identification.</p>
                </div>
              </motion.div>
            </div>

            {/* Vault Configuration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">Origin Vault</label>
                <select className="w-full bg-slate-200 border-0 border-b border-slate-300 p-3 text-sm focus:ring-0 focus:border-blue-600 outline-none">
                  <option>Nigeria USDC - V3490 (Custodian)</option>
                  <option>South Africa USDC - V1120</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">Destination Vault</label>
                <select className="w-full bg-slate-200 border-0 border-b border-slate-300 p-3 text-sm focus:ring-0 focus:border-blue-600 outline-none">
                  <option>Kenya USDC - V8821 (Institutional)</option>
                  <option>UAE USDC - V9001</option>
                </select>
              </div>
            </div>

            {/* Recipient Details */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">Recipient Institution Details</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  className="bg-slate-200 border-0 border-b border-slate-300 p-3 text-sm focus:ring-0 focus:border-blue-600 outline-none" 
                  placeholder="LEI Number" 
                  type="text" 
                  defaultValue="549300OU9S7S8G..."
                />
                <input 
                  className="bg-slate-200 border-0 border-b border-slate-300 p-3 text-sm focus:ring-0 focus:border-blue-600 outline-none" 
                  placeholder="Institution Name" 
                  type="text" 
                  defaultValue="KCB Bank Kenya"
                />
              </div>
            </div>

            {/* Fee Breakdown */}
            <div className="bg-white p-6 border border-slate-100">
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-slate-500">Settlement Quote</h3>
              <div className="space-y-3 tabular-nums text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Protocol Fee (0.21%)</span>
                  <span className="font-medium">$7.35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Solana Gas Estimate</span>
                  <span className="font-medium">0.000005 SOL</span>
                </div>
                <div className="h-[1px] bg-slate-100 my-2"></div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="uppercase tracking-tighter">Net Settlement</span>
                  <span className="text-blue-600">$3,492.65</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                className="flex-1 bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98]" 
                type="button"
              >
                <span>Confirm Transfer</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Live Status */}
        <div className="w-full lg:w-[400px] bg-slate-100 p-8">
          <div className="sticky top-24">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Validation Engine</h2>
              </div>
              <h3 className="text-xl font-bold tracking-tight">Active Process Checklist</h3>
            </header>

            {/* Checklist Items */}
            <div className="space-y-1">
              {/* KYC */}
              <div className="flex gap-4 p-4 bg-white border-l-4 border-emerald-400 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 fill-emerald-400 text-white" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">KYC Verification</p>
                  <p className="text-[10px] text-slate-500">AMINA Inst. ID: #A99-X21 Verified</p>
                </div>
              </div>
              {/* KYT */}
              <div className="flex gap-4 p-4 bg-white border-l-4 border-emerald-400 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 fill-emerald-400 text-white" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">KYT Anomaly Scan</p>
                  <p className="text-[10px] text-slate-500">Chainalysis: Low Risk Score (0.02)</p>
                </div>
              </div>
              {/* Travel Rule */}
              <div className="flex gap-4 p-4 bg-slate-200 border-l-4 border-blue-600">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">IVMS101 Preparation</p>
                  <p className="text-[10px] text-slate-500">Syncing counterparty VASP data...</p>
                </div>
              </div>
              {/* Rate Lock */}
              <div className="flex gap-4 p-4 bg-slate-50 border-l-4 border-slate-300">
                <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-xs font-bold uppercase tracking-wide">Rate Lock (SIX Feed)</p>
                    <span className="text-[10px] font-mono bg-slate-200 px-1">0.9998 USDC</span>
                  </div>
                  <p className="text-[10px] text-slate-500 italic">Waiting for compliance clearance</p>
                </div>
              </div>
              {/* Settlement */}
              <div className="flex gap-4 p-4 bg-slate-50 border-l-4 border-slate-300">
                <Wallet className="w-5 h-5 text-slate-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">Atomic Settlement</p>
                  <p className="text-[10px] text-slate-500">Solana Finalization pending</p>
                </div>
              </div>
            </div>

            {/* Technical Footnote */}
            <div className="mt-12 p-4 bg-black text-white text-[10px] font-mono leading-relaxed">
              <p className="opacity-60 mb-2">SYSTEM_LOG_v4.2</p>
              <p>&gt; ATOMIC_TX_PREP: READY</p>
              <p>&gt; SOLANA_RPC: OPTIMAL (12ms)</p>
              <p>&gt; IVMS101_HASH: 0x82f...a12c</p>
              <p>&gt; COMPLIANCE_STATUS: PENDING_APPROVAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
