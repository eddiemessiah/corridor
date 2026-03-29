import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Clock, 
  Wallet,
  Shield,
  ExternalLink,
  ChevronRight,
  Fingerprint,
  Zap,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TransferPageProps {
  onBack: () => void;
}

type SimulationState = 'idle' | 'validating' | 'signing' | 'settling' | 'success';

export function TransferPage({ onBack }: TransferPageProps) {
  const [simState, setSimState] = useState<SimulationState>('idle');
  const [progress, setProgress] = useState(0);

  const startSimulation = () => {
    setSimState('validating');
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setSimState('signing'), 500);
      }
      setProgress(p);
    }, 200);
  };

  useEffect(() => {
    if (simState === 'signing') {
      setTimeout(() => setSimState('settling'), 2000);
    } else if (simState === 'settling') {
      setTimeout(() => setSimState('success'), 3000);
    }
  }, [simState]);

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <AnimatePresence mode="wait">
        {simState === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center min-h-[70vh] text-center"
          >
            <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mb-8 solana-glow border border-secondary/50">
              <Check className="w-12 h-12 text-secondary" />
            </div>
            <h1 className="text-5xl font-serif italic text-white tracking-tight mb-4">Settlement Finalized</h1>
            <p className="text-white/40 max-w-md mb-10 text-sm font-medium tracking-wide">
              Corridor NG-USDC → KE-USDC has been successfully settled on Solana Mainnet-Beta.
            </p>
            <div className="glass-card p-6 w-full max-w-sm text-left mb-10 border-secondary/20 bg-secondary/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Transaction Hash</span>
                <span className="text-primary font-mono text-xs">8vA...2p9</span>
              </div>
              <div className="space-y-3 tabular-nums">
                <div className="flex justify-between text-xs">
                  <span className="text-white/40">Amount</span>
                  <span className="text-white font-bold">$3,500.00 USDC</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-white/40">Protocol Fee</span>
                  <span className="text-white font-bold">$7.35</span>
                </div>
                <div className="h-[1px] bg-white/5"></div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Net Settlement</span>
                  <span className="text-secondary font-black">$3,492.65</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={onBack} className="px-8 py-3 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all">
                Registry Home
              </button>
              <button className="px-8 py-3 bg-primary text-white text-[10px] font-black uppercase tracking-widest solana-glow">
                Download Audit PDF
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            {/* Header/Breadcrumb */}
            <div className="flex items-center gap-2 mt-6">
              <button 
                onClick={onBack}
                className="flex items-center gap-3 text-white/40 hover:text-white transition-all group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Institutional Hub</span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column: Form */}
              <div className="flex-1 glass-card p-10 border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32"></div>
                <header className="mb-12 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-0.5 bg-primary"></div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Execution Module</span>
                  </div>
                  <h1 className="text-5xl font-serif italic tracking-tight text-white leading-none mb-3">Capital Settlement</h1>
                  <p className="text-white/40 text-sm font-medium">Cross-border liquidity relocation via on-chain corridor rails.</p>
                </header>

                <div className="space-y-10 relative">
                  {/* Amount Section */}
                  <div className="space-y-4">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 block">
                      Transfer Principal (USDC)
                    </label>
                    <div className="relative group">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-primary font-black text-4xl leading-none">$</span>
                      <input 
                        className="w-full bg-transparent border-0 border-b-2 border-white/10 p-6 pl-10 text-5xl font-black tabular-nums text-white focus:ring-0 focus:border-primary transition-all outline-none tracking-tighter selection:bg-primary/30" 
                        type="text" 
                        defaultValue="3,500.00"
                        disabled={simState !== 'idle'}
                      />
                    </div>
                    
                    {/* Travel Rule Warning */}
                    <AnimatePresence>
                      {simState === 'idle' && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-4 bg-error/10 p-5 border border-error/20 rounded-sm"
                        >
                          <AlertTriangle className="w-5 h-5 text-error shrink-0" />
                          <div>
                            <p className="text-[10px] font-black uppercase text-error tracking-widest">Regulatory Threshold Alert</p>
                            <p className="text-xs text-white/50 mt-1 font-medium italic">Amounts &gt; $3,000.00 require mandated IVMS101 AML compliance headers.</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Vault Configuration */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 block">Origin Infrastructure</label>
                      <div className="relative">
                        <select className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold text-white/80 focus:ring-1 focus:ring-primary outline-none appearance-none rounded-sm" disabled={simState !== 'idle'}>
                          <option>NIGERIA-VAULT-V3 (USDC)</option>
                          <option>EURO-VAULT-E1 (EURC)</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 rotate-90" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 block">Destination Infrastructure</label>
                      <div className="relative">
                        <select className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold text-white/80 focus:ring-1 focus:ring-primary outline-none appearance-none rounded-sm" disabled={simState !== 'idle'}>
                          <option>KENYA-NODE-V8 (USDC)</option>
                          <option>UAE-HUB-U1 (USDC)</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Fee Breakdown */}
                  <div className="bg-white/[0.02] p-8 border border-white/5">
                    <div className="flex items-center gap-2 mb-6">
                      <Zap className="w-3.5 h-3.5 text-secondary" />
                      <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Real-time Settlement Quote</h3>
                    </div>
                    <div className="space-y-4 tabular-nums text-xs font-semibold">
                      <div className="flex justify-between items-center text-white/50">
                        <span>Dynamic Protocol Fee (0.21%)</span>
                        <span className="text-white">$7.35</span>
                      </div>
                      <div className="flex justify-between items-center text-white/50">
                        <span>Solana L1 Compute Gas</span>
                        <span className="text-secondary tracking-widest">0.000005 SOL</span>
                      </div>
                      <div className="h-[1px] bg-white/5 my-2"></div>
                      <div className="flex justify-between items-center text-xl font-black">
                        <span className="uppercase text-white/30 text-[10px] tracking-[0.2em]">Net Expected Credit</span>
                        <span className="text-primary tracking-tighter">$3,492.65</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {simState === 'idle' ? (
                      <button 
                        onClick={startSimulation}
                        className="flex-1 bg-primary text-white py-5 font-black uppercase tracking-[0.3em] text-[10px] solana-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-4" 
                        type="button"
                      >
                        Authorize Settlement Flow
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="flex-1 bg-white/5 border border-white/10 py-5 px-8 flex flex-col items-center gap-4 relative overflow-hidden">
                        <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-primary shadow-[0_0_15px_#9945FF]"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                        />
                        <div className="flex items-center gap-3">
                          <Loader2 className="w-4 h-4 text-primary animate-spin" />
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                            {simState === 'validating' ? 'Compliance Engine Scanning' : 
                             simState === 'signing' ? 'Biometric Signature Pending' : 
                             'Mining on Solana Mainnet'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Context */}
              <div className="w-full lg:w-[450px] space-y-8">
                {/* Visual Simulation Feedback */}
                <div className="glass-card p-10 relative overflow-hidden h-full flex flex-col border-white/10">
                   {simState === 'signing' && (
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="absolute inset-0 z-10 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-10 text-center"
                     >
                       <div className="w-20 h-20 border-2 border-primary rounded-full flex items-center justify-center mb-6 solana-glow animate-pulse">
                         <Fingerprint className="w-10 h-10 text-primary" />
                       </div>
                       <h4 className="text-xl font-black text-white uppercase tracking-widest mb-2">Auth Required</h4>
                       <p className="text-white/40 text-xs font-medium tracking-wide">Please approve the transaction on your institutional custody device.</p>
                     </motion.div>
                   )}

                   <header className="mb-10">
                    <div className="flex items-center gap-3 mb-2">
                       <Shield className="w-4 h-4 text-secondary" />
                       <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Audit Trail Context</h2>
                    </div>
                    <h3 className="text-2xl font-black tracking-tighter text-white">Execution Status</h3>
                   </header>

                   <div className="flex-1 space-y-6">
                      <div className={`flex gap-5 transition-opacity duration-500 ${simState === 'idle' ? 'opacity-30' : 'opacity-100'}`}>
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${progress > 20 ? 'bg-secondary border-secondary' : 'border-white/20'}`}>
                            {progress > 20 ? <Check className="w-3 h-3 text-black" /> : <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>}
                         </div>
                         <div>
                            <p className="text-xs font-black uppercase tracking-widest text-white">KYC/KYT Verification</p>
                            <p className="text-[10px] text-white/40 mt-1 font-medium leading-relaxed">Cross-referencing counterparty against global sanction vectors (OFAC/UN/local).</p>
                         </div>
                      </div>

                      <div className={`flex gap-5 transition-opacity duration-500 ${progress < 40 ? 'opacity-30' : 'opacity-100'}`}>
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${progress > 60 ? 'bg-secondary border-secondary' : 'border-white/20'}`}>
                            {progress > 60 ? <Check className="w-3 h-3 text-black" /> : <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>}
                         </div>
                         <div>
                            <p className="text-xs font-black uppercase tracking-widest text-white">Travel Rule Preparation</p>
                            <p className="text-[10px] text-white/40 mt-1 font-medium leading-relaxed">IVMS101 payload generated and cryptographically bound to settlement ID.</p>
                         </div>
                      </div>

                      <div className={`flex gap-5 transition-opacity duration-500 ${progress < 80 ? 'opacity-30' : 'opacity-100'}`}>
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${simState === 'settling' ? 'bg-secondary border-secondary animate-pulse' : 'border-white/20'}`}>
                            {simState === 'settling' ? <Zap className="w-3 h-3 text-black fill-black" /> : <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>}
                         </div>
                         <div>
                            <p className="text-xs font-black uppercase tracking-widest text-white">Atomic Settlement</p>
                            <p className="text-[10px] text-white/40 mt-1 font-medium leading-relaxed">Dispatching settlement instruction to Solana Program for vault execution.</p>
                         </div>
                      </div>
                   </div>

                   <div className="mt-12 p-6 bg-white/5 border border-white/5 font-mono text-[9px] leading-relaxed uppercase tracking-widest space-y-1">
                      <p className="text-primary mb-2 font-black">System Live Console</p>
                      <p className="text-white/20">&gt; SOLANA_RPC: CONNECTED</p>
                      <p className="text-white/20">&gt; VAULT_AUTH: SECURE</p>
                      <p className={progress > 30 ? 'text-secondary' : 'text-white/20'}>&gt; COMPLIANCE_CORE: {progress > 30 ? 'PASS' : 'WAITING'}</p>
                      <p className={simState === 'settling' ? 'text-primary' : 'text-white/20'}>&gt; STATE_MACHINE: {simState.toUpperCase()}</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
