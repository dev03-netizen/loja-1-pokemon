/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  ChevronRight, 
  Menu, 
  X,
  CreditCard,
  Zap,
  Flame,
  Droplets,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SHOPEE_LINK = "https://www.youtube.com/"; // Replace with real link if available

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "100% Autêntico",
      desc: "Todas as nossas cartas passam por uma rigorosa avaliação de autenticidade.",
      bg: "bg-blue-50"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-600" />,
      title: "Estado Impecável",
      desc: "Cartas mantidas em sleeves e cases desde o primeiro dia (Near Mint/Mint).",
      bg: "bg-yellow-50"
    },
    {
      icon: <Truck className="w-6 h-6 text-red-600" />,
      title: "Envio Rápido",
      desc: "Postagem em até 24h úteis para todo o Brasil via Shopee Xpress.",
      bg: "bg-red-50"
    }
  ];

  const featuredCards = [
    { title: "Rare Charizard", type: "Fogo", color: "from-orange-400 to-red-500", icon: <Flame /> },
    { title: "Special Pikachu", type: "Elétrico", color: "from-yellow-300 to-yellow-400", icon: <Zap /> },
    { title: "Blastoise EX", type: "Água", color: "from-blue-400 to-blue-500", icon: <Droplets /> },
    { title: "Venusaur GX", type: "Planta", color: "from-green-400 to-green-500", icon: <Leaf /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-slate-900 flex items-center justify-center relative shadow-sm">
                <div className="w-8 h-1 bg-slate-900 scale-110"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
                POKE<span className="text-red-600">COLLECTOR</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 font-bold text-xs uppercase tracking-[0.15em] text-slate-600">
              <a href="#" className="hover:text-red-600 transition-colors">Coleções</a>
              <a href="#" className="hover:text-red-600 transition-colors">Raridades</a>
              <a href="#" className="hover:text-red-600 transition-colors">Suporte</a>
              <a 
                href={SHOPEE_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-shopee hover:bg-[#d73211] text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all transform hover:translate-y-[-2px] shadow-lg shadow-orange-200"
              >
                <ShoppingBag className="w-4 h-4" />
                SHOPEE STORE
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden px-6"
          >
            <a href="#" className="text-3xl font-extrabold text-slate-900 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>COLEÇÕES</a>
            <a href="#" className="text-3xl font-extrabold text-slate-900 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>RARIDADES</a>
            <a href="#" className="text-3xl font-extrabold text-slate-900 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>SUPORTE</a>
            <a 
              href={SHOPEE_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-shopee text-white px-8 py-5 rounded-2xl text-xl font-bold uppercase flex items-center justify-center gap-3 shadow-xl shadow-orange-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag />
              COMPRAR NA SHOPEE
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 sm:pt-48 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8 text-center lg:text-left"
              >
                <div className="inline-flex items-center px-4 py-1.5 bg-yellow-100 border border-yellow-200 rounded-full">
                  <span className="text-xs font-bold text-yellow-700 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-3 h-3" /> Estoque Verificado • 2024
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-slate-900 uppercase">
                  Domine a Arena com <br />
                  <span className="text-red-600">Cartas Raras</span> <br />
                  e Originais.
                </h1>
                
                <p className="max-w-xl mx-auto lg:mx-0 text-xl text-slate-500 leading-relaxed font-medium">
                  Encontre as edições mais cobiçadas do mundo Pokémon. <br className="hidden sm:block" />
                  Garantia de autenticidade e envio imediato para todo o Brasil via Shopee.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                  <a 
                    href={SHOPEE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-shopee hover:bg-[#d73211] text-white px-10 py-5 rounded-2xl text-xl font-bold uppercase flex items-center justify-center gap-3 transition-all transform hover:translate-y-[-4px] shadow-2xl shadow-orange-200 group"
                    id="main-cta-shopee"
                  >
                    <ShoppingBag className="w-6 h-6" />
                    COMPRAR NA SHOPEE
                  </a>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Vendedor Premium</span>
                    <div className="flex text-yellow-400 text-xl tracking-tighter">★★★★★</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="absolute -inset-6 bg-gradient-to-tr from-yellow-400 to-red-500 rounded-[3.5rem] blur-3xl opacity-10"></div>
                <div className="relative w-[380px] h-[520px] bg-white rounded-[2.5rem] border-[10px] border-slate-900 shadow-2xl overflow-hidden flex flex-col p-5 group">
                  <div className="h-full w-full bg-slate-50 rounded-[1.5rem] overflow-hidden flex flex-col">
                    <div className="flex-1 bg-gradient-to-br from-orange-400 to-yellow-300 relative overflow-hidden flex items-center justify-center p-12">
                      <div className="w-48 h-48 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                      <Flame className="w-32 h-32 text-white/50 relative z-10 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="h-5 w-3/4 bg-slate-100 rounded-lg"></div>
                      <div className="h-5 w-1/2 bg-slate-100 rounded-lg"></div>
                      <div className="pt-6 flex justify-between items-end">
                        <div className="space-y-3">
                          <div className="h-4 w-20 bg-slate-100 rounded-lg"></div>
                          <div className="h-10 w-32 bg-red-50 rounded-xl"></div>
                        </div>
                        <div className="w-16 h-16 rounded-full border-[6px] border-yellow-400 bg-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floaties */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center rotate-12 border border-slate-100">
                    <Zap className="w-10 h-10 text-yellow-400" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center -rotate-12 border border-slate-100">
                    <Droplets className="w-8 h-8 text-blue-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Card Grid */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center sm:items-end gap-6 mb-16">
              <div>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase italic tracking-tighter mb-4 text-slate-900">
                  Destaques da Semana
                </h2>
                <div className="h-2 w-24 bg-red-600 rounded-full mx-auto sm:mx-0"></div>
              </div>
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
                Atualizado agora mesmo
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredCards.map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -12 }}
                  className="bg-white rounded-[2rem] border border-slate-200 p-4 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className={`aspect-square bg-gradient-to-br ${card.color} rounded-[1.5rem] flex items-center justify-center mb-6 relative overflow-hidden p-10`}>
                    <div className="w-20 h-20 text-white/40 group-hover:scale-110 transition-transform duration-500">
                      {card.icon}
                    </div>
                    {/* Gloss effect */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  </div>
                  <div className="px-2 pb-2">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{card.type}</span>
                        <div className="flex text-yellow-400">
                            {[1, 2, 3].map(s => <Sparkles key={s} className="w-3 h-3" />)}
                        </div>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight mb-4">{card.title}</h3>
                    <a 
                      href={SHOPEE_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-shopee group-hover:text-white text-slate-600 transition-all py-3 rounded-xl font-bold text-sm uppercase"
                    >
                      Ver na Shopee
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Layout */}
        <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-slate-300 transition-colors">
                  <div className={`w-16 h-16 ${f.bg} rounded-2xl flex items-center justify-center mb-8 shadow-inner`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="py-24 sm:py-40 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto rounded-[3rem] border border-slate-200 overflow-hidden relative group">
            <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex flex-col md:flex-row items-center p-8 sm:p-20 gap-12">
              <div className="flex-1 space-y-8 text-center md:text-left">
                <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase tracking-tighter leading-[0.9] text-slate-900">
                  Dê o Próximo Passo na sua <br className="hidden sm:block" />
                  <span className="text-shopee">Jornada Pokémon.</span>
                </h2>
                <p className="text-xl text-slate-500 font-medium max-w-xl">
                  Aproveite cupons de frete grátis e descontos exclusivos comprando direto pela nossa loja oficial na Shopee. Qualidade e autenticidade garantidas.
                </p>
                <div className="flex justify-center md:justify-start">
                    <a 
                    href={SHOPEE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-4 bg-shopee hover:bg-[#d73211] text-white px-12 py-6 rounded-2xl text-2xl font-bold uppercase transition-all shadow-xl shadow-orange-200"
                    id="footer-shopee-btn"
                    >
                    <ShoppingBag className="w-8 h-8" />
                    ACESSAR LOJA SHOPEE
                    </a>
                </div>
              </div>
              <div className="shrink-0">
                  <div className="w-40 h-40 bg-white shadow-2xl rounded-3xl border border-slate-100 flex flex-col items-center justify-center p-6 -rotate-6">
                      <div className="text-4xl font-black text-red-600 mb-1">4.9</div>
                      <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Avaliação na Shopee</div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 sm:px-6 lg:px-8 text-[10px] uppercase tracking-[0.25em] font-bold">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <span>© 2026 PokeCollector Store • CNPJ 00.000.000/0000-00</span>
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDADE</a>
                <a href="#" className="hover:text-white transition-colors">PARCEIRO SHOPEE BRASIL</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
