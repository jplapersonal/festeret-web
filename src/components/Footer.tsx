import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050811] border-t border-white/5 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo & Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-sm">
            🎺
          </div>
          <div>
            <span className="font-bold text-sm text-white">
              festeret<span className="text-teal-400">.ai</span>
            </span>
            <p className="text-[11px] text-slate-400">El Copiloto IA de Comparsas y Fiestas</p>
          </div>
        </div>

        {/* Made with love */}
        <div className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
          <span>Diseñado y desarrollado con pasión festera</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>para Moros y Cristianos, Fallas y Peñas</span>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} festeret.ai · Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};
