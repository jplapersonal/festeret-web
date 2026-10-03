import React from 'react';
import { Bot, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080f] border-t border-white/5 py-12 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo & Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <span className="font-black text-sm text-white font-mono">
              festeret<span className="text-amber-400">.ai</span>
            </span>
            <p className="text-[11px] text-slate-500">El 1er Copiloto IA de la Fiesta</p>
          </div>
        </div>

        {/* Made with love */}
        <div className="flex items-center gap-1.5 text-slate-400 text-xs">
          <span>Diseñado y desarrollado con pasión festera</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>en Ontinyent</span>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} festeret.ai · Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};
