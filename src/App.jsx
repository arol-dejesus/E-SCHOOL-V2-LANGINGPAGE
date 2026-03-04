import React, { useState, useEffect, useRef } from 'react';
import {
  Search, ShieldCheck, Zap, ChevronRight, ChevronDown, Star, ArrowRight, Play, Apple,
  TrendingUp, Users, MapPin, Car, Heart, Sparkles, Gauge, Shield, Menu, X,
  Award, Eye, Phone, Diamond, Globe
} from 'lucide-react';

const LION_LOGO = "/eschool_logo.png";
const IMG_SHOWROOM = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"; 
const IMG_CAR_1 = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop";
const IMG_CAR_2 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop";
const IMG_INTERIOR = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop";
const IMG_STATS_BG = "https://images.unsplash.com/photo-1454165833267-02300a726b12?q=80&w=2070&auto=format&fit=crop";
const IMG_HERO_BG = "/hero_eschool.jpg";
const IMG_HOWITWORKS_BG = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop";
const IMG_PRO_BG = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";
const IMG_CTA_BG = "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop";
const IMG_TESTIMONIALS_BG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";

// ── Animations ──
const useScrollReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.unobserve(e.target); } }, { threshold, rootMargin: '0px 0px -80px 0px' });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

const Reveal = ({ children, delay = 0, className = "", direction = "up" }) => {
  const { ref, isVisible } = useScrollReveal();
  const dirs = { up: 'translateY(32px)', down: 'translateY(-32px)', left: 'translateX(40px)', right: 'translateX(-40px)', scale: 'scale(0.95)' };
  return (
    <div ref={ref} className={className} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translate(0) scale(1)' : dirs[direction] || dirs.up, transition: `all 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`, willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};

const TiltCard = ({ children, className = "", intensity = 8 }) => {
  const [style, setStyle] = useState({});
  return (
    <div onMouseMove={e => { const { left, top, width, height } = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - left) / width - 0.5; const y = (e.clientY - top) / height - 0.5; setStyle({ transform: `perspective(1000px) rotateY(${x*intensity}deg) rotateX(${-y*intensity}deg) translateZ(20px)`, transition: 'transform 0.15s ease-out' }); }}
      onMouseLeave={() => setStyle({ transform: 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)', transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' })}
      className={className} style={{ transformStyle: 'preserve-3d' }}>
      <div style={style} className="w-full h-full">{children}</div>
    </div>
  );
};

// ── Shared ──
const SectionLabel = ({ children, dark = false }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`w-8 h-[2px] rounded-full ${dark ? 'bg-gold/60' : 'bg-gold'}`} />
    <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${dark ? 'text-gold-light' : 'text-gold-dark'}`}>{children}</span>
  </div>
);

const Badge = ({ children, className = "", color = "gold" }) => {
  const c = { gold: "bg-gold-tint text-gold-dark border-gold/15", coral: "bg-coral-tint text-coral border-coral/15", azure: "bg-azure-tint text-azure border-azure/15", violet: "bg-violet-tint text-violet border-violet/15" };
  return <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] border ${c[color]} ${className}`}>{children}</span>;
};

// ── Phone Mockup ──
const PhoneMockup = ({ screenType = "home", className = "" }) => (
  <div className={`relative w-[280px] h-[580px] rounded-[3rem] border-[8px] border-onyx overflow-hidden shrink-0 ${className}`} style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.2), 0 12px 24px rgba(0,0,0,0.1)' }}>
    <div className="absolute top-3 inset-x-0 h-7 w-[90px] bg-black mx-auto rounded-full z-50 flex items-center justify-between px-2.5">
      <div className="w-2 h-2 rounded-full bg-graphite" /><div className="w-2 h-2 rounded-full bg-emerald/70" />
    </div>
    <div className="w-full h-full bg-ivory pt-14 pb-5 flex flex-col relative">
      {screenType === "home" && (<>
        <div className="px-4 pb-3 bg-white/95 backdrop-blur-xl border-b border-border-light">
          <div className="flex justify-between items-center mb-3 mt-1">
            <div>
              <p className="text-[8px] font-semibold text-text-muted uppercase tracking-[0.18em] mb-0.5">Apprentissage</p>
              <div className="flex items-center gap-1 font-semibold text-gold-dark text-[10px] bg-gold-tint px-2 py-0.5 rounded-md w-max"><Zap className="w-2.5 h-2.5" /> En direct</div>
            </div>
            <img src={LION_LOGO} alt="E-School" className="w-8 h-8 rounded-full bg-white p-0.5 border border-border shadow-xs" />
          </div>
          <div className="bg-pearl rounded-xl p-2.5 flex items-center gap-2 border border-border-light"><Search className="w-3.5 h-3.5 text-text-muted" /><span className="text-[10px] font-medium text-text-muted">Quelle langue apprendre ?</span></div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pt-3 space-y-3 pb-20 no-scrollbar">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {['Tout', 'Anglais', 'Français', 'Allemand', 'Turc'].map((cat, i) => (
              <div key={i} className={`px-3 py-1 rounded-full text-[9px] font-semibold whitespace-nowrap ${i === 0 ? 'bg-gold text-white shadow-sm' : 'bg-white text-text-secondary border border-border-light'}`}>{cat}</div>
            ))}
          </div>
          {[IMG_CAR_1, IMG_CAR_2].map((img, i) => (
            <div key={i} className="bg-white rounded-2xl border border-border-light overflow-hidden group shadow-xs">
              <div className="relative h-32 overflow-hidden bg-pearl">
                <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur-lg rounded-md text-[7px] font-bold tracking-[0.15em] uppercase">{i === 0 ? 'ANGLAIS' : 'ALLEMAND'}</div>
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-lg rounded-full"><Sparkles className="w-3 h-3 text-gold animate-pulse" /></div>
              </div>
              <div className="p-3">
                <h4 className="font-bold text-text-primary text-[11px] mb-0.5">{i === 0 ? 'Business English Mastery' : 'Deutsch A1: Débutant'}</h4>
                <p className="font-bold text-gold text-sm mb-2">{i === 0 ? '' : ''}</p>
                <div className="flex items-center justify-between border-t border-border-light pt-2">
                  <div className="flex gap-1">
                    <span className="bg-azure-tint px-1.5 py-0.5 rounded text-[7px] font-semibold text-azure border border-azure/10">B1-C2</span>
                    <span className="bg-peach-tint px-1.5 py-0.5 rounded text-[7px] font-semibold text-peach border border-peach/10">Cours Live</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-[7px] font-bold text-emerald-dark bg-emerald-tint px-1.5 py-0.5 rounded"><Award className="w-2.5 h-2.5" /> CERTIFIÉ</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 inset-x-0 h-[60px] bg-white/95 backdrop-blur-xl border-t border-border-light flex justify-around items-center px-5 z-50">
          <div className="text-gold flex flex-col items-center gap-0.5"><Search className="w-4.5 h-4.5" strokeWidth={2.2} /><div className="w-1 h-1 bg-gold rounded-full" /></div>
          <Heart className="w-4.5 h-4.5 text-coral/40" /><ShieldCheck className="w-4.5 h-4.5 text-azure/40" />
          <div className="w-6 h-6 rounded-full bg-pearl border border-border-light overflow-hidden p-0.5"><img src={LION_LOGO} className="w-full h-full object-cover opacity-60" alt="" /></div>
        </div>
      </>)}
      {screenType === "details" && (
        <div className="h-full flex flex-col bg-white">
          <div className="h-[42%] relative overflow-hidden bg-pearl"><img src={IMG_INTERIOR} className="w-full h-full object-cover" alt="" /><div className="absolute top-4 left-4 w-8 h-8 bg-white/80 backdrop-blur-lg rounded-full flex items-center justify-center"><ChevronRight className="w-3.5 h-3.5 text-charcoal rotate-180" /></div></div>
          <div className="flex-1 bg-white -mt-5 rounded-t-[1.75rem] relative z-10 p-4 flex flex-col shadow-md">
            <p className="text-[8px] font-semibold text-text-muted uppercase tracking-[0.18em] mb-0.5">Bulletin de Notes</p>
            <h3 className="text-lg font-bold text-text-primary leading-tight mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Performance <br />Trimestrielle</h3>
            <p className="text-xl font-bold text-gold mb-4"></p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[{ icon: Users, label: 'Classe', value: '45 Élèves', bg: 'bg-azure-tint' }, { icon: Zap, label: 'Moyenne', value: '16.5 / 20', bg: 'bg-peach-tint' }, { icon: Star, label: 'Rang', value: '2ème', bg: 'bg-emerald-tint' }].map(({ icon: Icon, label, value, bg }, i) => (
                <div key={i} className={`${bg} rounded-xl p-2 text-center`}><Icon className="w-3.5 h-3.5 mx-auto text-text-muted mb-1" /><div className="text-[7px] font-semibold text-text-muted uppercase tracking-wider">{label}</div><div className="text-[10px] font-bold text-text-primary mt-0.5">{value}</div></div>
              ))}
            </div>
            <button className="mt-auto w-full bg-onyx text-white font-semibold py-3 rounded-xl flex justify-center items-center gap-2 text-xs hover:bg-graphite transition-colors">Détails Complet <ArrowRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      )}
    </div>
    <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-50 pointer-events-none"><div className="w-24 h-[3px] bg-text-muted/20 rounded-full" /></div>
  </div>
);

// ── Countdown Component ──
const Countdown = () => {
  const targetDate = new Date('2026-04-10T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / 1000 / 60) % 60),
        secs: Math.floor((diff / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-1 justify-center">
      {[
        { val: timeLeft.days, label: "Jrs" },
        { val: timeLeft.hours, label: "Hrs" },
        { val: timeLeft.mins, label: "Min" },
        { val: timeLeft.secs, label: "Sec" }
      ].map((item, i) => (
        <div key={i} className="min-w-[42px] text-center">
          <div className="text-[13px] font-bold text-onyx leading-none">{String(item.val).padStart(2, '0')}</div>
          <div className="text-[7px] uppercase tracking-widest text-text-muted mt-0.5">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

// ── Popup ──
const DownloadPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-onyx/40 backdrop-blur-xl animate-in fade-in duration-500" onClick={onClose} />
      
      <Reveal direction="up" className="relative w-full max-w-[340px] bg-white/95 backdrop-blur-2xl rounded-[2rem] p-1 shadow-2xl border border-white overflow-hidden">
        <div className="relative bg-white rounded-[1.8rem] p-5 border border-border-light overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-3">
            <button onClick={onClose} className="p-1.5 hover:bg-pearl rounded-full transition-all group">
              <X className="w-4 h-4 text-text-muted" />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 mb-2">
              <img src={LION_LOGO} alt="SAAH Logo" className="w-full h-full object-contain" />
            </div>

            <SectionLabel>Lancement Officiel</SectionLabel>
            
            <h3 className="text-xl font-bold text-onyx mb-1 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              L'excellence se <span className="italic text-gold">prépare.</span>
            </h3>

            <p className="text-text-secondary text-[12px] font-light leading-snug mb-4 max-w-[260px]">
              Nous peaufinons chaque détail pour que votre expérience E-SCHOOL soit à la hauteur de vos exigences les plus élevées.
            </p>

            <div className="w-full bg-pearl/50 rounded-2xl p-4 border border-border-light mt-0 mb-4">
              <div className="text-lg font-black text-gold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>10 AVRIL 2026</div>
              <div className="w-full h-px bg-border-light mb-3" />
              <Countdown />
            </div>

            <div className="w-full mb-6 p-3 rounded-xl bg-amber-tint border border-amber/20 flex flex-col gap-2">
              <div className="flex items-center gap-2 justify-center text-[10px] font-bold text-amber-dark uppercase tracking-widest">
                <Globe className="w-3 h-3" /> Version Web Disponible
              </div>
              <button 
                onClick={onClose}
                className="text-[11px] font-semibold text-onyx underline underline-offset-4 hover:text-amber-dark transition-colors"
              >
                Tester la version web dès maintenant
              </button>
            </div>

            <button 
              onClick={onClose} 
              className="w-full btn-primary py-2.5 rounded-lg text-[11px] font-bold tracking-widest mb-2"
            >
              C'est noté
            </button>
            <p className="text-[8px] text-text-muted font-medium uppercase tracking-widest">
              ◆ Accès privilégié ◆
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

// ── Navbar ──
const Navbar = ({ onDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h); }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-border-light py-3 shadow-xs' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <img src={LION_LOGO} alt="E-School" className="w-9 h-9 object-contain group-hover:scale-105 transition-transform duration-500" />
          <span className="font-bold text-xl tracking-[0.02em] text-onyx" style={{ fontFamily: 'var(--font-heading)' }}>E-SCHOOL</span>
        </a>
        <div className="flex items-center gap-5">
          <button onClick={onDownload} className="btn-primary text-[11px]">Télécharger</button>
        </div>
      </div>
    </nav>
  );
};

// ── Hero ──
const Hero = ({ onDownload }) => (
  <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
    {/* Background image */}
    <img src={IMG_HERO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-ivory/70" />
    <div className="noise-overlay" />

    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl">
          <Reveal delay={100}><Badge color="gold" className="mb-8"><Zap className="w-3 h-3" /> L'Éducation de Demain</Badge></Reveal>
          <Reveal delay={200}>
            <h1 className="font-bold text-[3rem] sm:text-[3.8rem] lg:text-[4.5rem] xl:text-[5.5rem] text-onyx tracking-[-0.03em] leading-[0.95] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Parlez le monde,<br className="hidden lg:block" />
              <span className="italic text-gold">à votre rythme.</span>
            </h1>
          </Reveal>
          <Reveal delay={350}><p className="text-base lg:text-lg text-text-secondary leading-[1.8] mb-10 max-w-lg font-light">Maîtrisez l'Anglais, le Français, l'Allemand ou le Turc avec des experts natifs. La plateforme de langues leader en Afrique Centrale.</p></Reveal>
          <Reveal delay={450}>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button onClick={onDownload} className="btn-dark w-full sm:w-auto"><Apple className="w-5 h-5" /><div className="text-left"><div className="text-[8px] font-normal tracking-[0.1em] uppercase opacity-70">Télécharger sur</div><div className="text-sm font-semibold -mt-0.5 tracking-tight normal-case">App Store</div></div></button>
              <button onClick={onDownload} className="btn-outline w-full sm:w-auto"><Play className="w-5 h-5 fill-current" /><div className="text-left"><div className="text-[8px] font-normal tracking-[0.1em] uppercase opacity-70">Disponible sur</div><div className="text-sm font-semibold -mt-0.5 tracking-tight normal-case">Google Play</div></div></button>
              <button onClick={onDownload} className="btn-outline w-full sm:w-auto border-amber/40 bg-amber-tint text-amber-dark hover:bg-amber-light/30"><Globe className="w-5 h-5" /><div className="text-left"><div className="text-[8px] font-normal tracking-[0.1em] uppercase opacity-70">Accéder via la</div><div className="text-sm font-semibold -mt-0.5 tracking-tight normal-case">Version Web</div></div></button>
            </div>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-tint rounded-xl flex items-center justify-center border border-emerald/20"><ShieldCheck className="w-5 h-5 text-emerald-dark" /></div>
                <div><div className="text-xs font-semibold text-text-primary">Securisé</div><div className="text-[10px] text-text-muted">Certifié E-School</div></div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">{[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/36?u=eschool-user-${i}`} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />)}</div>
                <div><div className="text-xs font-semibold text-text-primary">500+</div><div className="text-[10px] text-text-muted">Établissements</div></div>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={300} direction="left" className="flex-1 w-full flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-[480px] h-[680px] flex items-center justify-center">
            <div className="absolute inset-[10%] rounded-[4rem] blur-3xl bg-gold-tint/30" />
            <TiltCard className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><PhoneMockup screenType="home" /></TiltCard>
            <TiltCard className="absolute hidden lg:block z-10 left-[56%] top-[6%] opacity-50 scale-[0.8] transition-all duration-700 hover:opacity-80 hover:scale-[0.85]" intensity={5}><PhoneMockup screenType="details" /></TiltCard>
          </div>
        </Reveal>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center pt-2"><div className="w-1 h-2.5 bg-gold rounded-full animate-bounce" /></div>
    </div>
  </section>
);

// ── Stats ──
const AnimatedNumber = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal(0.3);
  useEffect(() => {
    if (!isVisible) return;
    const num = parseInt(target.replace(/\s/g, '').replace('+', ''));
    let current = 0; const inc = num / 70;
    const t = setInterval(() => { current += inc; if (current >= num) { setCount(num); clearInterval(t); } else setCount(Math.floor(current)); }, 2200 / 70);
    return () => clearInterval(t);
  }, [isVisible, target]);
  return <span ref={ref}>{count.toLocaleString('fr-FR')}{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    { value: "500", suffix: "+", label: "Classes en Direct", icon: Play, color: "text-gold-glow", border: "border-gold/20" },
    { value: "50", suffix: "+", label: "Professeurs Natifs", icon: Award, color: "text-coral-light", border: "border-coral/20" },
    { value: "25000", suffix: "+", label: "Étudiants Actifs", icon: Users, color: "text-azure-light", border: "border-azure/20" },
    { value: "4", suffix: "", label: "Langues Clés", icon: Globe, color: "text-emerald-light", border: "border-emerald/20" },
  ];
  return (
    <section className="relative py-20 overflow-hidden bg-onyx">
      {/* Background image */}
      <img src={IMG_STATS_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-onyx/80" />
      <div className="noise-overlay" style={{ opacity: 0.04 }} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`text-center py-8 px-4 rounded-2xl border ${s.border} bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500`}>
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-4 opacity-70`} strokeWidth={1.5} />
                <div className={`font-bold text-3xl md:text-4xl ${s.color} mb-2 tracking-tight`} style={{ fontFamily: 'var(--font-heading)' }}><AnimatedNumber target={s.value} suffix={s.suffix} /></div>
                <p className="text-[12px] text-text-light/45 font-medium tracking-wide uppercase">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Marquee ──
const InfiniteMarquee = () => {
  const brands = ['ANGLAIS', 'FRANÇAIS', 'ALLEMAND', 'TURC', 'BUSINESS', 'DÉBUTANT', 'AVANCÉ', 'IELTS/TOEFL'];
  return (
    <div className="w-full py-6 overflow-hidden border-y border-border-light bg-pearl">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-14">
        {[...brands, ...brands].map((b, i) => (
          <React.Fragment key={i}>
            <span className="text-text-muted/60 font-bold text-2xl tracking-[0.12em]" style={{ fontFamily: 'var(--font-heading)' }}>{b}</span>
            <span className="text-gold text-sm font-bold opacity-70">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ── Value Props ──
const ValueProps = () => {
  const features = [
    { icon: Play, title: "Immersion Directe", desc: "Suivez des sessions live avec des professeurs natifs pour une progression foudroyante.", accent: "text-azure", iconBg: "bg-azure-tint", borderC: "border-azure/15" },
    { icon: Award, title: "Certificats CEFR", desc: "Obtenez des certifications alignées sur les standards internationaux (A1 à C2).", accent: "text-violet", iconBg: "bg-violet-tint", borderC: "border-violet/15" },
    { icon: Users, title: "Cafés Linguistiques", desc: "Pratiquez l'oral au sein de clubs de conversation dynamiques et bienveillants.", accent: "text-emerald-dark", iconBg: "bg-emerald-tint", borderC: "border-emerald/15" },
  ];
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="plateforme">
      <div className="noise-overlay" style={{ opacity: 0.015 }} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <Reveal direction="right" className="flex-1 relative order-2 lg:order-1 w-full">
            <div className="aspect-[4/5] max-w-md mx-auto relative rounded-3xl overflow-hidden group">
              <img src={IMG_SHOWROOM} className="w-full h-full object-cover rounded-3xl transition-transform duration-[1.5s] group-hover:scale-[1.03]" alt="" />
              <div className="absolute bottom-6 left-5 right-5 bg-white/90 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-amber-tint rounded-xl border border-amber/15"><Star className="w-4 h-4 text-amber fill-amber" /></div>
                  <span className="font-bold text-text-primary text-base" style={{ fontFamily: 'var(--font-heading)' }}>Qualité Premium</span>
                </div>
                <p className="text-[13px] text-text-secondary font-light leading-relaxed">Chaque annonce est minutieusement validée par nos experts.</p>
              </div>
              <div className="absolute top-6 right-6 w-14 h-14 border-2 border-coral/15 rounded-full" />
              <div className="absolute top-10 right-10 w-6 h-6 border-2 border-azure/15 rounded-full" />
            </div>
          </Reveal>
          <div className="flex-1 order-1 lg:order-2">
            <Reveal delay={100}><SectionLabel>Notre Approche</SectionLabel></Reveal>
            <Reveal delay={200}>
              <h2 className="font-bold text-3xl md:text-4xl lg:text-[2.8rem] text-onyx tracking-[-0.02em] leading-[1.12] mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                Ouvrez-vous de <span className="italic text-coral">nouveaux horizons</span>.
              </h2>
            </Reveal>
            <Reveal delay={250}><p className="text-text-secondary text-[15px] font-light leading-[1.8] mb-10 max-w-lg">Que ce soit pour le travail, les études ou le voyage, nous vous donnons les clés de la communication internationale.</p></Reveal>
            <div className="space-y-5">
              {features.map((f, i) => (
                <Reveal key={i} delay={300 + i * 120}>
                  <div className="flex gap-5 items-start group cursor-default p-4 rounded-2xl hover:bg-pearl/80 transition-all duration-500">
                    <div className={`w-12 h-12 rounded-2xl ${f.iconBg} flex items-center justify-center shrink-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-md border ${f.borderC}`}>
                      <f.icon className={`w-5 h-5 ${f.accent}`} strokeWidth={1.8} />
                    </div>
                    <div className="pt-0.5"><h4 className="text-base font-semibold text-text-primary mb-1">{f.title}</h4><p className="text-text-secondary text-[14px] leading-[1.7] font-light">{f.desc}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── How It Works ──
const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Configuration", desc: "Importez vos données élèves et configurez vos classes en quelques clics.", icon: Zap, color: "text-azure", bg: "bg-azure-tint", borderC: "border-azure/15", hoverBg: "group-hover:bg-azure", hoverText: "group-hover:text-white" },
    { num: "02", title: "Déploiement", desc: "Distribuez les accès aux enseignants et ouvrez le portail parent.", icon: Users, color: "text-emerald-dark", bg: "bg-emerald-tint", borderC: "border-emerald/15", hoverBg: "group-hover:bg-emerald", hoverText: "group-hover:text-white" },
    { num: "03", title: "Gestion", desc: "Suivez les performances et simplifiez votre administration au quotidien.", icon: TrendingUp, color: "text-coral", bg: "bg-coral-tint", borderC: "border-coral/15", hoverBg: "group-hover:bg-coral", hoverText: "group-hover:text-white" },
  ];
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image */}
      <img src={IMG_HOWITWORKS_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-pearl/65" />
      <div className="noise-overlay" style={{ opacity: 0.015 }} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <Reveal><SectionLabel>Comment ça marche</SectionLabel></Reveal>
          <Reveal delay={100}>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-[2.8rem] text-onyx tracking-[-0.02em] leading-tight max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Maîtrisez une langue en <span className="italic text-violet">quelques mois</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={i} delay={200 + i * 150}>
              <div className="relative bg-white rounded-3xl p-8 border border-border-light hover-lift group">
                <div className="text-[4rem] font-bold text-text-muted/[0.06] absolute top-4 right-6 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>{s.num}</div>
                <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mb-6 border ${s.borderC} ${s.hoverBg} transition-all duration-500`}>
                  <s.icon className={`w-5 h-5 ${s.color} ${s.hoverText} transition-colors duration-500`} strokeWidth={1.8} />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">{s.title}</h4>
                <p className="text-text-secondary text-[14px] font-light leading-[1.7]">{s.desc}</p>
                {i < 2 && <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10"><ChevronRight className="w-5 h-5 text-gold/30" /></div>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Testimonials ──
const TestimonialSection = () => {
  const testimonials = [
    { text: "Grâce à l'allemand appris sur E-SCHOOL, j'ai pu obtenir ma bourse pour Berlin en seulement 6 mois. Incroyable !", name: "Jean-Marc Essono", role: "Boursier DAAD · Douala", avatar: "https://i.pravatar.cc/80?u=eschool-client-1", topColor: "bg-gold" },
    { text: "Le turc paraissait impossible, mais la méthode live est fantastique. Je gère maintenant mes imports à Istanbul seul.", name: "Marie-Claire Ndam", role: "Commerce International · Yaoundé", avatar: "https://i.pravatar.cc/80?u=eschool-client-2", topColor: "bg-gold" },
    { text: "Le business English m'a permis de négocier mon premier contrat aux USA. Les profs sont vraiment compétents.", name: "Patrick Mbida", role: "Manager Export · Douala", avatar: "https://i.pravatar.cc/80?u=eschool-client-3", topColor: "bg-gold" },
  ];
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="securite">
      <div className="noise-overlay" style={{ opacity: 0.015 }} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-14">
          <Reveal><SectionLabel>Témoignages</SectionLabel></Reveal>
          <Reveal delay={100}><h2 className="font-bold text-3xl md:text-4xl lg:text-[2.8rem] text-onyx tracking-[-0.02em] leading-tight max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>Ils nous font <span className="italic text-gold">confiance</span></h2></Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={200 + i * 120}>
              <div className="bg-pearl rounded-3xl p-7 border border-border-light hover-lift relative group overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${t.topColor}`} />
                <div className="absolute top-5 right-6 text-gold/8 text-5xl leading-none" style={{ fontFamily: 'var(--font-heading)' }}>"</div>
                <div className="flex gap-0.5 mb-5">{[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-amber fill-amber" />)}</div>
                <blockquote className="text-text-primary text-[14px] leading-[1.8] font-light mb-6 relative z-10">"{t.text}"</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <div><div className="font-semibold text-text-primary text-sm">{t.name}</div><div className="text-text-muted text-[11px]">{t.role}</div></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Pro Section ──
const ProSection = ({ onDownload }) => {
  const cards = [
    { icon: TrendingUp, title: "Analyse de Données", text: "Suivez les performances globales de votre établissement.", stat: "100%", statLabel: "digitalisé", color: "text-coral", bg: "bg-coral-tint", hoverBg: "group-hover:bg-coral", borderC: "border-coral/15" },
    { icon: Users, title: "Gestion RH", text: "Suivez les carrières et les charges des enseignants.", stat: "95%", statLabel: "gain de temps", color: "text-azure", bg: "bg-azure-tint", hoverBg: "group-hover:bg-azure", borderC: "border-azure/15" },
    { icon: Shield, title: "Sécurité de Données", text: "Vos données sont cryptées et sauvegardées quotidiennement.", stat: "100%", statLabel: "sécurisé", color: "text-emerald-dark", bg: "bg-emerald-tint", hoverBg: "group-hover:bg-emerald", borderC: "border-emerald/15" },
  ];
  return (
    <section className="section-padding relative overflow-hidden" id="pro">
      {/* Background image */}
      <img src={IMG_PRO_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-ivory/65" />
      <div className="noise-overlay" style={{ opacity: 0.015 }} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          <div className="flex-1">
            <Reveal><SectionLabel>Pour les Entreprises</SectionLabel></Reveal>
            <Reveal delay={100}><h2 className="font-bold text-3xl md:text-4xl lg:text-[2.8rem] text-onyx tracking-[-0.02em] leading-[1.12] mb-5" style={{ fontFamily: 'var(--font-heading)' }}>Formez vos <span className="italic text-azure">équipes.</span></h2></Reveal>
            <Reveal delay={200}><p className="text-text-secondary text-[15px] font-light leading-[1.8] mb-10 max-w-lg">Des programmes sur mesure pour accompagner la transformation digitale de votre entreprise.</p></Reveal>
            <Reveal delay={300}><button onClick={onDownload} className="btn-primary">E-School Business <ArrowRight className="w-4 h-4" /></button></Reveal>
          </div>
          <div className="flex-1 space-y-5 w-full">
            {cards.map((item, i) => (
              <Reveal key={i} delay={200 + i * 120} direction="left">
                <div className="bg-white rounded-2xl p-6 border border-border-light hover-lift group flex gap-5 items-start">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 border ${item.borderC} ${item.hoverBg} transition-all duration-500`}>
                    <item.icon className={`w-5 h-5 ${item.color} group-hover:text-white transition-colors duration-500`} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-semibold text-text-primary">{item.title}</h4>
                      <div className="text-right shrink-0 ml-4">
                        <div className={`text-lg font-bold ${item.color}`} style={{ fontFamily: 'var(--font-heading)' }}>{item.stat}</div>
                        <div className="text-[9px] text-text-muted uppercase tracking-wider">{item.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-text-secondary text-[13px] font-light leading-[1.7]">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── CTA ──
const CTASection = ({ onDownload }) => (
  <section className="relative overflow-hidden py-24">
    {/* Background image */}
    <img src={IMG_CTA_BG} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-onyx/75" />
    <div className="noise-overlay" style={{ opacity: 0.04 }} />
    <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 text-center">
      <Reveal><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-white/[0.06] text-gold-glow border border-white/[0.08] mb-8"><Sparkles className="w-3 h-3" /> Commencez maintenant</div></Reveal>
      <Reveal delay={100}><h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-[-0.02em] leading-tight mb-5" style={{ fontFamily: 'var(--font-heading)' }}>Prêt à numériser <span className="italic text-gold">votre école ?</span></h2></Reveal>
      <Reveal delay={200}><p className="text-text-light/60 text-base md:text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">L'application E-SCHOOL est gratuite pour les élèves et parents. Rejoignez la révolution éducative en Afrique Centrale.</p></Reveal>
      <Reveal delay={300}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onDownload} className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-sm text-white bg-gold hover:bg-gold-dark hover:-translate-y-1 transition-all duration-400 shadow-gold-lg">
            <Apple className="w-5 h-5" /><div className="text-left"><div className="text-[8px] font-normal tracking-[0.1em] uppercase opacity-80">Télécharger sur</div><div className="text-sm font-semibold -mt-0.5 tracking-tight">App Store</div></div>
          </button>
          <button onClick={onDownload} className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-sm bg-white/[0.08] text-white border border-white/[0.12] hover:bg-white/[0.14] transition-all duration-400 hover:-translate-y-1">
            <Play className="w-5 h-5 fill-current" /><div className="text-left"><div className="text-[8px] font-normal tracking-[0.1em] uppercase opacity-70">Disponible sur</div><div className="text-sm font-semibold -mt-0.5 tracking-tight">Google Play</div></div>
          </button>
          <button onClick={onDownload} className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-sm bg-amber-tint text-onyx border border-amber/30 hover:bg-amber-light/40 transition-all duration-400 hover:-translate-y-1">
            <Globe className="w-5 h-5" /><div className="text-left"><div className="text-[8px] font-normal tracking-[0.1em] uppercase opacity-70">Accéder via la</div><div className="text-sm font-semibold -mt-0.5 tracking-tight">Version Web</div></div>
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);

// ── Footer ──
const Footer = () => (
  <footer className="pt-20 pb-8 relative overflow-hidden bg-charcoal">
    <div className="noise-overlay" style={{ opacity: 0.03 }} />
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between gap-14 mb-16">
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-5"><img src={LION_LOGO} alt="E-School" className="w-10 h-10 object-contain" /><span className="font-bold text-xl text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>E-SCHOOL</span></div>
          <p className="text-text-light/40 text-sm font-light leading-[1.8] mb-6">La référence du e-learning linguistique en Afrique Centrale.</p>
          <div className="flex gap-3">
            {[{ l: 'Li', c: 'hover:text-azure' }, { l: 'Ig', c: 'hover:text-coral' }, { l: 'Fb', c: 'hover:text-azure' }].map(s => (
              <a key={s.l} href="#" className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:border-gold/30 transition-all duration-300 group">
                <span className={`text-text-light/40 text-[10px] uppercase font-bold ${s.c} transition-colors`}>{s.l}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-12 lg:gap-16 flex-wrap">
          {[{ title: "Produit", links: ["Pour les élèves", "Pour les écoles", "Portail Parent", "Administration"] }, { title: "Entreprise", links: ["À propos", "Carrières", "Écoles Partenaires", "Contact"] }, { title: "Légal", links: ["Mentions légales", "Confidentialité", "CGU", "Protection des données"] }].map((col, i) => (
            <div key={i}><h4 className="font-semibold text-white/70 mb-5 text-[12px] tracking-[0.12em] uppercase">{col.title}</h4><ul className="space-y-3">{col.links.map((l, j) => <li key={j}><a href="#" className="text-[13px] text-text-light/35 font-light hover:text-gold transition-colors duration-300">{l}</a></li>)}</ul></div>
          ))}
        </div>
      </div>
      <div className="gold-line w-full mb-8" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-text-light/25 font-medium">
        <p>© 2026 E-SCHOOL. Tous droits réservés.</p>
        <p className="flex items-center gap-1.5">Construit avec <span className="text-coral">♥</span> en Afrique Centrale</p>
      </div>
    </div>
  </footer>
);

// ── APP ──
export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <div className="min-h-screen bg-ivory text-text-primary overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <Navbar onDownload={togglePopup} />
      <Hero onDownload={togglePopup} />
      <StatsSection />
      <InfiniteMarquee />
      <ValueProps />
      <HowItWorks />
      <TestimonialSection />
      <ProSection onDownload={togglePopup} />
      <CTASection onDownload={togglePopup} />
      <Footer />
      
      <DownloadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
