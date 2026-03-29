import React from 'react';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  Database, 
  ShieldCheck, 
  Settings, 
  HelpCircle, 
  Code,
  Landmark,
  Layers,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Market Overview' },
    { id: 'transfers', icon: ArrowLeftRight, label: 'Capital Flows' },
    { id: 'batches', icon: Layers, label: 'Batch Settlement' },
    { id: 'vaults', icon: Database, label: 'Liquidity Vaults' },
    { id: 'compliance', icon: ShieldCheck, label: 'Risk & Audit' },
    { id: 'settings', icon: Settings, label: 'System Settings' },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-white/5 flex flex-col p-6 gap-2 z-50">
      <div className="mb-12 px-2">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary flex items-center justify-center rounded-sm solana-glow">
            <Landmark className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-serif italic text-white leading-none">AMINA</h1>
            <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] font-sans mt-1.5">Institutional</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group flex items-center justify-between px-4 py-3 transition-all duration-200 ease-in-out font-semibold text-[11px] uppercase tracking-widest w-full text-left rounded-sm ${
              currentPage === item.id 
                ? 'bg-white/5 text-white border-l-2 border-primary shadow-[inset_4px_0_0_0_#9945FF]' 
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-4">
              <item.icon className={`w-4 h-4 transition-colors ${currentPage === item.id ? 'text-primary' : 'group-hover:text-primary'}`} />
              <span>{item.label}</span>
            </div>
            {currentPage === item.id && <ChevronRight className="w-3 h-3 text-primary/50" />}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
        <button className="w-full py-3.5 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] solana-glow hover:scale-[1.02] active:scale-[0.98] transition-all">
          Deposit Capital
        </button>
        <div className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-3 px-2 py-1 text-white/30 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Institutional Support</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-2 py-1 text-white/30 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
            <Code className="w-3.5 h-3.5" />
            <span>Developer SDK</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
