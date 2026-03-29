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
  Layers
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
    { id: 'transfers', icon: ArrowLeftRight, label: 'Transfers' },
    { id: 'batches', icon: Layers, label: 'Batches' },
    { id: 'vaults', icon: Database, label: 'Vaults' },
    { id: 'compliance', icon: ShieldCheck, label: 'Compliance' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-100 flex flex-col p-4 gap-2 z-50 border-r border-slate-200">
      <div className="mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <Landmark className="text-white w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none">AMINA Bank</h1>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">Institutional Tier</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center gap-3 px-3 py-2 transition-all duration-150 ease-in-out font-medium text-[13px] w-full text-left ${
              currentPage === item.id 
                ? 'bg-white text-slate-900 border-l-4 border-black' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-slate-200 flex flex-col gap-1">
        <button className="w-full py-3 bg-black text-white text-[11px] font-bold uppercase tracking-widest mb-4 hover:opacity-90 transition-opacity">
          Deposit to Vault
        </button>
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 text-[12px] hover:text-slate-900">
          <HelpCircle className="w-4 h-4" />
          <span>Support</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 text-[12px] hover:text-slate-900">
          <Code className="w-4 h-4" />
          <span>API Docs</span>
        </a>
      </div>
    </aside>
  );
}
