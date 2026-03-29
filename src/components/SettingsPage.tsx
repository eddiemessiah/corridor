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
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

export function SettingsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Section: Profile */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-1">Section 01</h3>
            <h2 className="text-2xl font-black tracking-tight uppercase">Institutional Profile</h2>
          </div>
          <button className="text-xs font-bold border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors uppercase tracking-widest">Edit Details</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-white p-6 border border-slate-100 shadow-sm">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Legal Entity Name</label>
            <p className="text-lg font-semibold">AMINA Bank AG</p>
            <p className="text-xs text-slate-400 mt-1">CHE-123.456.789 HR/MWST</p>
          </div>
          <div className="bg-white p-6 border border-slate-100 shadow-sm">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Registration Jurisdiction</label>
            <p className="text-lg font-semibold">Switzerland (FINMA)</p>
            <p className="text-xs text-slate-400 mt-1">ZUG Business Registry</p>
          </div>
          <div className="bg-white p-6 border border-slate-100 shadow-sm">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Primary Contact</label>
            <p className="text-lg font-semibold">Compliance Desk</p>
            <p className="text-xs text-slate-400 mt-1">ops@amina-bank.ch</p>
          </div>
        </div>
        <div className="mt-8 bg-slate-50 p-8 border border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Branding & Terminal Identity</h4>
          <div className="flex items-center gap-12">
            <div className="w-32 h-32 bg-white flex items-center justify-center border border-slate-200">
              <img 
                alt="Brand Logo" 
                className="w-20 h-20 grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh14eulQuQMrHo-FfYKodzTtc116LYD_ocskFc4GxmMF96kcuhJQKLW7PtnKnpOo7nR-FZEsoQk5wD9SUKbuNBUZN77Uac9qPktws0NR_Xboa8xzCtwbFRtptCW6HnqYMShi-jX_PfJRcc8PxEhwfezx-JQFkTJO9yexAZFyFysivW2RQlO-TNfVdhGNg7dDYVLLUoUS--ijU_OVVDFbOYHSwKiBHi8SpdzxC47nXrd8PlMbsh4iCQDYiAs6buKzG84Wwp911X4uM"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Interface Accent Color</label>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-black ring-2 ring-offset-2 ring-black cursor-pointer"></div>
                  <div className="w-8 h-8 bg-blue-600 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-emerald-400 cursor-pointer"></div>
                  <div className="w-8 h-8 bg-slate-400 cursor-pointer"></div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-xs text-slate-500 max-w-md leading-relaxed">Institutional branding is applied to all PDF reports, settlement notifications, and the client-facing vault interface.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: API & Integration */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-1">Section 02</h3>
            <h2 className="text-2xl font-black tracking-tight uppercase">API & Integration</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 bg-emerald-400 text-black">Active Connection</span>
          </div>
        </div>
        <div className="space-y-1">
          {/* Fireblocks Row */}
          <div className="bg-white p-6 flex items-center justify-between border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-50 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-tight text-sm">Fireblocks API Gateway</p>
                <p className="text-xs font-mono text-slate-400">ID: fb-prod-8821-x99</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Last Call</p>
                <p className="text-xs font-mono tabular-nums">2023-10-24 14:02:11</p>
              </div>
              <button className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:opacity-90 transition-opacity">Manage Keys</button>
            </div>
          </div>
          {/* SIX BFI Row */}
          <div className="bg-white p-6 flex items-center justify-between border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-50 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-tight text-sm">SIX BFI Integration</p>
                <p className="text-xs font-mono text-slate-400">Settlement Protocol v2.4</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                <p className="text-xs font-bold text-emerald-600 uppercase">Synchronized</p>
              </div>
              <button className="bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-slate-50 transition-colors">Configure</button>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-6 border border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Webhook Notifications</h4>
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Endpoint URL</label>
                  <input 
                    className="w-full bg-white border-0 border-b border-slate-300 p-2 text-sm font-mono focus:ring-0 focus:border-black" 
                    type="text" 
                    defaultValue="https://api.amina-bank.ch/v1/corridoros/webhook"
                  />
                </div>
                <button className="bg-black text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest h-[37px] hover:opacity-90">Test</button>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input defaultChecked className="w-4 h-4 rounded-none border-slate-300 text-black focus:ring-0" type="checkbox"/>
                  <span className="text-xs font-medium">Settlement Success</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input defaultChecked className="w-4 h-4 rounded-none border-slate-300 text-black focus:ring-0" type="checkbox"/>
                  <span className="text-xs font-medium">Compliance Flags</span>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-6 border border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Environment Toggle</h4>
            <div className="flex bg-slate-200 p-1 w-fit">
              <button className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest bg-white shadow-sm">Mainnet-Beta</button>
              <button className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-black transition-colors">Testnet Sandbox</button>
            </div>
            <p className="text-[10px] text-slate-500 mt-4 leading-relaxed">Switching environments will reload all API credentials. Testnet transactions do not reflect on the Swiss National Bank ledger.</p>
          </div>
        </div>
      </section>

      {/* Section: Security & Governance */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-1">Section 03</h3>
            <h2 className="text-2xl font-black tracking-tight uppercase">Security & Governance</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-100 shadow-sm md:col-span-2">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Multi-Sig Threshold</h4>
                <p className="text-xs text-slate-500">Required approvals for high-value treasury movements.</p>
              </div>
              <span className="text-xl font-black tabular-nums">3 / 5</span>
            </div>
            <div className="space-y-4">
              <div className="h-2 bg-slate-100 w-full relative">
                <div className="absolute top-0 left-0 h-full bg-blue-600 w-3/5"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>0 Approvals</span>
                <span className="text-blue-600">Current Threshold</span>
                <span>Full Board (5)</span>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border-l-4 border-blue-600">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Auto-Approval Limit</p>
                <p className="text-lg font-bold tabular-nums">CHF 50,000.00</p>
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-black">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Session Timeout</p>
                <p className="text-lg font-bold tabular-nums">15 Minutes</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-6 border border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">IP Whitelisting</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 text-xs font-mono border border-slate-100">
                <span>192.168.1.1 (Zurich HQ)</span>
                <Lock className="w-3 h-3 text-slate-300" />
              </div>
              <div className="flex items-center justify-between bg-white p-3 text-xs font-mono border border-slate-100">
                <span>10.0.42.11 (Operations)</span>
                <Lock className="w-3 h-3 text-slate-300" />
              </div>
              <button className="w-full mt-4 border border-dashed border-slate-400 p-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Plus className="w-3 h-3" /> Add IP Address
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Compliance Rules */}
      <section className="mb-12 pb-12">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-1">Section 04</h3>
            <h2 className="text-2xl font-black tracking-tight uppercase">Compliance Rules</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          <div className="bg-white p-6 border border-slate-100 shadow-sm">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Travel Rule Threshold</label>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black tabular-nums">$3,000</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">IVMS101</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">Automatic data collection for transfers exceeding this amount.</p>
          </div>
          <div className="bg-white p-6 border border-slate-100 shadow-sm">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">KYT Risk Tolerance</label>
            <div className="flex bg-slate-100 p-1 w-fit mt-1">
              <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">Low</button>
              <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white shadow-sm">Medium</button>
              <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">High</button>
            </div>
            <p className="text-[10px] text-slate-400 mt-4 italic">Balanced screening for Tier 1 counterparties.</p>
          </div>
          <div className="bg-white p-6 border border-slate-100 shadow-sm">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Auto-SAR Trigger</label>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-12 h-6 bg-emerald-400 relative px-1 flex items-center justify-end">
                <div className="w-4 h-4 bg-black"></div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Enabled</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-tight">Protocol: AMLD-6</p>
          </div>
          <div className="bg-white p-6 border border-slate-100 shadow-sm">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Compliance Log Retention</label>
            <p className="text-2xl font-black tabular-nums">10 YRS</p>
            <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">Aligned with Swiss Federal Banking Ordinance.</p>
          </div>
        </div>
        <div className="mt-1 bg-black text-white p-6 flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-4">
            <Shield className="w-6 h-6 text-emerald-400 fill-emerald-400" />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">Global Compliance Override</p>
              <p className="text-xs opacity-60">All rules are currently subject to FINMA circular 2023/1 regulatory standards.</p>
            </div>
          </div>
          <button className="bg-emerald-400 text-black text-[10px] font-bold uppercase tracking-widest px-6 py-3 hover:opacity-90 active:scale-[0.98] transition-all">Review All Triggers</button>
        </div>
      </section>
    </div>
  );
}
