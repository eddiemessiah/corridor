import React from 'react';
import { Bell, Wallet } from 'lucide-react';

interface HeaderProps {
  onNewTransfer: () => void;
}

export function Header({ onNewTransfer }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 flex justify-between items-center w-full px-6 py-3">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-slate-900 uppercase">CorridorOS</div>
        <div className="hidden md:flex items-center gap-6">
          <span className="text-slate-500 text-sm tracking-tight font-medium">
            Network: <span className="text-emerald-500 font-bold">Solana</span>
          </span>
          <span className="text-slate-500 text-sm tracking-tight font-medium">
            System Health: <span className="text-emerald-500 font-bold">Optimal</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={onNewTransfer}
          className="bg-black text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:opacity-80 active:scale-[0.99] transition-all"
        >
          New Transfer
        </button>
        <div className="flex items-center gap-2 text-slate-500">
          <button className="p-2 hover:bg-slate-100 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-slate-100 transition-colors">
            <Wallet className="w-5 h-5" />
          </button>
        </div>
        <div className="w-8 h-8 bg-slate-200 overflow-hidden">
          <img 
            alt="User Profile" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiPeU6ma9ijsKAMJrefGgUbMZ3N2rYRxrCImzqfY3w6SwkYvAIFLmV6W7xC5NlFB5r3Df206A2-ZMZl0O6WsK0NeUIv9z1mdtuaT5ecNUGdwDKigaFHz5E0zRLeTgboQFAbWo53CaOiyp_5iLi3iWwxcx7Ze9_J9sSQvH8mslgGhl_hQ1FjLoHVYuAIvvJoHVEwvGUDFrHYbNMvPap5hCyQN8Ny0V0ApQKOp1X466lY1NGt4aBEp9fXAbVXjEYHvTn8jjuNhRbr_4"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
