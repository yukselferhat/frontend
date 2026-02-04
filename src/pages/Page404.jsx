import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Settings, Home, MoveLeft, Wrench, HardHat } from 'lucide-react';

const Page404 = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 relative overflow-hidden font-sans">
            
            {/* Arkaplan Dekoratif Simgeler */}
            <Wrench className="absolute -top-10 -left-10 text-slate-100 w-64 h-64 -rotate-12" />
            <Settings className="absolute -bottom-20 -right-20 text-slate-100 w-80 h-80 animate-spin-slow opacity-50" />

            <div className="max-w-2xl w-full text-center space-y-10 relative z-10">
                
                {/* 404 Görsel Alanı */}
                <div className="relative inline-block group">
                    {/* Arka plan ışığı */}
                    <div className="absolute inset-0 bg-rose-200 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    {/* Ana İkon: Kask ve Dişli */}
                    <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                        <HardHat size={140} className="text-slate-800 mx-auto drop-shadow-2xl" strokeWidth={1.5} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
                            <Settings size={40} className="text-rose-500 animate-spin-slow" />
                        </div>
                    </div>

                    {/* 404 Etiketi */}
                    <div className="absolute -top-2 -right-8 bg-rose-500 text-white px-5 py-2 rounded-2xl shadow-xl font-black text-4xl rotate-12 border-4 border-white">
                        404
                    </div>
                </div>

                {/* Metin Alanı */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
                        BU PARÇA <span className="text-rose-500">EKSİK!</span>
                    </h1>
                    <div className="w-24 h-2 bg-rose-500 mx-auto rounded-full"></div>
                    <p className="text-slate-500 text-lg md:text-xl font-bold max-w-md mx-auto leading-tight">
                        Ustam aradığın sayfa yanlış montajlanmış veya şantiyeden kaldırılmış olabilir.
                    </p>
                </div>

                {/* Aksiyon Butonları */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="group flex items-center gap-3 px-10 py-4 rounded-2xl border-2 border-slate-200 text-slate-600 font-black uppercase text-sm tracking-widest hover:border-rose-500 hover:text-rose-500 transition-all w-full sm:w-auto justify-center bg-white"
                    >
                        <MoveLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                        Geri Dön
                    </button>

                    <Link 
                        to="/" 
                        className="group flex items-center gap-3 px-10 py-4 rounded-2xl bg-slate-900 text-white font-black uppercase text-sm tracking-widest hover:bg-rose-500 shadow-2xl shadow-slate-200 hover:shadow-rose-200 hover:-translate-y-1 transition-all w-full sm:w-auto justify-center"
                    >
                        <Home size={20} />
                        Atölyeye Dön
                    </Link>
                </div>

                {/* Alt Bilgi */}
                <p className="text-slate-300 text-xs font-black uppercase tracking-[0.3em] pt-10">
                    Usta Montaj © 2026
                </p>
            </div>

            {/* Tailwind config'e eklenmesi gereken özel animasyon için stil */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Page404;