import React from 'react';
import { Bell, Wallet, Activity } from 'lucide-react';

interface HeaderProps {
  onNewTransfer: () => void;
}

export function Header({ onNewTransfer }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center w-full px-8 py-4">
      <div className="flex items-center gap-10">
        <div className="text-3xl font-serif tracking-tighter uppercase italic">
          <span className="text-white">Corridor</span>
          <span className="text-gradient">OS</span>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#14F195]"></div>
            <span className="text-white/40 text-[11px] uppercase tracking-widest font-bold">
              Solana <span className="text-white/80 ml-1">Mainnet-Beta</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-tertiary" />
            <span className="text-white/40 text-[11px] uppercase tracking-widest font-bold">
              Latency <span className="text-white/80 ml-1">400ms</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={onNewTransfer}
          className="bg-primary text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:solana-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Initiate Settlement
        </button>
        <div className="flex items-center gap-3 text-white/60">
          <button className="p-2.5 hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-white/10">
            <Bell className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Wallet className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-bold text-white/80 tabular-nums">8vA...2p9</span>
          </button>
        </div>
        <div className="w-9 h-9 border border-white/20 p-0.5 overflow-hidden">
          <img 
            alt="User Profile" 
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiPeU6ma9ijsKAMJrefGgUbMZ3N2rYRxrCImzqfY3w6SwkYvAIFLmV6W7xC5NlFB5r3Df206A2-ZMZl0O6WsK0NeUIv9z1mdtuaT5ecNUGdwDKigaFHz5E0zRLeTgboQFAbWo53CaOiyp_5iLi3iWwxcx7Ze9_J9sSQvH8mslgGhl_hQ1FjLoHVYuAIvvJoHVEwvGUDFrHYbNMvPap5hCyQN8Ny0V0ApQKOp1X466lY1NGt4aBEp9fXAbVXjEYHvTn8jjuNhRbr_4"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
