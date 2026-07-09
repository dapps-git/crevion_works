'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Mail, MapPin, MessageSquare, Globe, ArrowUp,
  Sparkles, Package, Globe2, Zap, ShoppingCart, Building2,
  Smartphone, Star, ChevronRight, Award, Users, Briefcase,
} from 'lucide-react';
import { projects, categories, Category } from '@/data/projects';

/* ─── Category Icon/Style Config (Cream Theme) ─────────────────────── */
const catConfig: Record<string, {
  border: string; pill: string; pillText: string;
  icon: React.ReactNode; headerBg: string; activeText: string;
}> = {
  products: {
    border: 'border-purple-200/50',
    pill: 'bg-purple-50',
    pillText: 'text-purple-700',
    icon: <Package size={13} />,
    headerBg: 'from-purple-50/80 to-white/90',
    activeText: 'text-[#8A32C6]',
  },
  static: {
    border: 'border-sky-200/60',
    pill: 'bg-sky-50',
    pillText: 'text-sky-700',
    icon: <Globe2 size={13} />,
    headerBg: 'from-sky-50/50 to-white/90',
    activeText: 'text-[#8A32C6]',
  },
  dynamic: {
    border: 'border-amber-200/50',
    pill: 'bg-amber-50',
    pillText: 'text-amber-700',
    icon: <Zap size={13} />,
    headerBg: 'from-amber-50/50 to-white/90',
    activeText: 'text-[#8A32C6]',
  },
  ecommerce: {
    border: 'border-emerald-200/50',
    pill: 'bg-emerald-50',
    pillText: 'text-emerald-700',
    icon: <ShoppingCart size={13} />,
    headerBg: 'from-emerald-50/50 to-white/90',
    activeText: 'text-[#8A32C6]',
  },
  erp: {
    border: 'border-rose-200/50',
    pill: 'bg-rose-50',
    pillText: 'text-rose-700',
    icon: <Building2 size={13} />,
    headerBg: 'from-rose-50/50 to-white/90',
    activeText: 'text-[#8A32C6]',
  },
  mobile: {
    border: 'border-indigo-200/50',
    pill: 'bg-indigo-50',
    pillText: 'text-indigo-700',
    icon: <Smartphone size={13} />,
    headerBg: 'from-indigo-50/50 to-white/90',
    activeText: 'text-[#8A32C6]',
  },
};

/* ─── Project Card ────────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cfg = catConfig[project.category] ?? catConfig.static;
  const isLive = project.url !== '#';
  const catLabel = categories.find(c => c.id === project.category)?.label ?? '';

  const isWhiteLogo = project.logo.toLowerCase().includes('milemakers') ||
                      project.logo.toLowerCase().includes('movex') ||
                      project.logo.toLowerCase().includes('branday');

  const isLargeLogo = project.logo.toLowerCase().includes('aquapool') ||
                      project.logo.toLowerCase().includes('srflames') ||
                      project.logo.toLowerCase().includes('movex') ||
                      project.logo.toLowerCase().includes('danush') ||
                      project.logo.toLowerCase().includes('milemakers');

  return (
    <article
      role="button"
      tabIndex={isLive ? 0 : undefined}
      aria-label={isLive ? `Visit ${project.name}` : `${project.name} — coming soon`}
      onKeyDown={(e) => e.key === 'Enter' && isLive && window.open(project.url, '_blank', 'noopener,noreferrer')}
      className="project-card group relative bg-white rounded-2xl sm:rounded-[1.6rem] overflow-hidden flex flex-col border border-purple-100/50
                 shadow-[0_4px_20px_-6px_rgba(52,31,96,0.03)] cursor-pointer
                 hover:shadow-[0_20px_48px_-12px_rgba(52,31,96,0.12)] hover:bg-white
                 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-[#8A32C6]/20 transition-all duration-500 ease-out
                 active:scale-[0.98]"
      style={{ animationDelay: `${index * 55}ms` }}
      onClick={() => isLive && window.open(project.url, '_blank', 'noopener,noreferrer')}
    >
      {/* Top accent bar — purple to gold */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8A32C6] via-[#7c3aed] to-[rgba(244,206,69,0.9)] z-20" />
 
      {/* Logo area — warm cream/yellow bg so all cards are uniform and pretty */}
      <div className="relative flex items-center justify-center h-36 sm:h-44 p-6 sm:p-8 overflow-hidden border-b border-purple-100/30"
        style={{ background: 'linear-gradient(135deg, rgba(244,206,69,0.18) 0%, #FFFDF9 60%, rgba(244,206,69,0.08) 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(141,24,209,0.01)_0%,transparent_60%)] pointer-events-none" />
        <div className={`relative w-full h-full mx-auto z-10 transition-all duration-500
                        group-hover:scale-[1.06] group-hover:drop-shadow-[0_4px_12px_rgba(52,31,96,0.06)]
                        ${isLargeLogo
                          ? 'max-w-[145px] sm:max-w-[170px] max-h-[76px] sm:max-h-[84px]'
                          : 'max-w-[130px] sm:max-w-[150px] max-h-[64px] sm:max-h-[72px]'
                        }`}>
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            fill
            className={`object-contain ${isWhiteLogo ? 'brightness-0 opacity-80' : ''}`}
            sizes="(max-width: 640px) 150px, 180px"
          />
        </div>

        {/* Featured badge */}

      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 pt-4.5 gap-3.5">

        {/* Name */}
        <h3 className="text-[15.5px] font-extrabold text-[#1c0e35] tracking-tight leading-tight
                       group-hover:text-[#8A32C6] transition-colors duration-300">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-[12.5px] text-[#574d6d] leading-relaxed flex-1 line-clamp-3 font-light">
          {project.description}
        </p>

        {/* CTA - Visit button simplified to a neat text line and -> arrow button */}
        <div className="pt-3.5 border-t border-purple-100/30 mt-auto flex items-center justify-between">
          {isLive ? (
            <>
              <span className="text-xs font-bold text-purple-750/80 group-hover:text-purple-700 transition-colors">

              </span>
              <div className="w-8 h-8 rounded-full bg-[rgba(244,206,69,1)] text-[#1c0e35] group-hover:bg-[#8A32C6] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm font-bold">
                →
              </div>
            </>
          ) : (
            <span className="text-xs font-medium text-purple-300">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─── Stats Card ──────────────────────────────────────────────────── */
function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-white/50 backdrop-blur rounded-2xl border border-purple-100/50 hover:bg-white/80 transition-colors duration-300">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#8A32C6] to-[#7c3aed] border border-purple-200/30 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-base font-black text-[#1c0e35] leading-none">{value}</p>
        <p className="text-[10px] text-[#7d6c96] font-semibold uppercase tracking-wider mt-1">{label}</p>
      </div>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────────────── */
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filtered = useMemo(() =>
    selectedCategory === 'all' ? projects : projects.filter(p => p.category === selectedCategory),
    [selectedCategory]
  );

  const counts = useMemo(() => {
    const m: Record<string, number> = { all: projects.length };
    projects.forEach(p => { m[p.category] = (m[p.category] ?? 0) + 1; });
    return m;
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#1c0e35] selection:bg-purple-150 selection:text-[#8A32C6] pb-24 relative overflow-x-hidden pt-[56px] md:pt-[36px]">

      {/* ═══ TOP NAVBAR BAR (FIXED) ═══ */}
      <div className="fixed top-0 left-0 right-0 w-full bg-[#8A32C6] text-white text-[11px] font-medium z-50 shadow-md border-b-2 border-[rgba(244,206,69,0.5)]">
        {/* Mobile: stacked centered | Desktop: single inline row */}
        <div className="flex flex-col items-center gap-1 py-2.5 px-4
                        md:flex-row md:justify-center md:gap-x-5 md:gap-y-0">
          <div className="flex items-center gap-4">
            <a href="https://wa.me/918113908262" target="_blank" rel="noopener noreferrer"
              className="hover:text-[#F4CE41] transition-colors">
              IN +91 81139 08262
            </a>
            <span className="text-purple-400" aria-hidden="true">|</span>
            <a href="https://wa.me/971542545909" target="_blank" rel="noopener noreferrer"
              className="hover:text-[#F4CE41] transition-colors">
              UAE +971 54 254 5909
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:crevionads@gmail.com"
              className="hover:text-[#F4CE41] transition-colors">
              crevionads@gmail.com
            </a>
            <span className="text-purple-400" aria-hidden="true">|</span>
            <span className="text-purple-100">Kerala, India</span>
            <span className="text-purple-400" aria-hidden="true">|</span>
            <a href="https://crevionads.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-[#F4CE41] transition-colors">
              crevionads.com
            </a>
          </div>
        </div>
      </div>

      {/* ═══ BACKGROUND ORBS ═══ */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[550px] bg-[radial-gradient(circle_at_50%_-15%,rgba(138,50,198,0.06)_0%,transparent_60%)]" />
        {/* Gold ambient glow — bottom left */}
        <div className="absolute bottom-[10%] -left-20 w-[350px] h-[350px] rounded-full bg-[rgba(244,206,69,0.06)] blur-[120px]" />
        {/* Purple ambient glow — top right */}
        <div className="absolute top-[15%] -right-32 w-[400px] h-[400px] rounded-full bg-[rgba(138,50,198,0.04)] blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 sm:pt-2 pb-10 flex flex-col gap-6 sm:gap-14">

        {/* ═══ 1. LOGO + STATS HEADER ROW ═══ */}
        <div className="flex flex-row items-center justify-between gap-3 pt-1 pb-3 border-b border-purple-100/50">
          {/* Logo — smaller on mobile to share row with stats */}
          <div className="relative w-36 sm:w-80 h-[44px] sm:h-[80px] flex-shrink-0">
            <Image
              src="/images/crevionads_logod.png"
              alt="CrevionAds"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 144px, 320px"
            />
          </div>

          {/* Stats — right-aligned on both mobile and desktop */}
          <div className="flex items-center justify-end gap-3 sm:gap-6 flex-shrink-0">
            {[
              { val: `${projects.length}+`, label: 'Projects' },
              { val: '50+', label: 'Clients' },
              { val: '5', label: 'Rating', suffix: true },
            ].map(({ val, label, suffix }, i, arr) => (
              <React.Fragment key={label}>
                <div className="flex flex-col items-center">
                  <span className="text-[12px] sm:text-xl font-black text-[#8A32C6] leading-none flex items-center gap-0.5">
                    {val}
                    {suffix && <span style={{ color: 'rgba(244,206,69,1)', textShadow: '0 0 8px rgba(244,206,69,0.6)' }}>★</span>}
                    {!suffix && '+'}
                  </span>
                  <span className="text-[7px] sm:text-[10px] font-semibold text-[#7d6c96] uppercase tracking-widest mt-0.5">{label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px h-4 sm:h-8 bg-purple-100" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ═══ 2. HERO HEADER ═══ */}
        <section className="text-center py-1">
          <div className="space-y-2">
            <h1 className="font-black tracking-tight leading-tight text-[20px] sm:text-[36px] md:text-[48px]">
              <span style={{ color: '#1c0e35' }}>Our</span>{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#8A32C6] to-[#7c3aed] bg-clip-text text-transparent">
                  Works
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 4 Q50 0 100 4 Q150 8 200 4" stroke="rgba(244,206,69,0.9)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-[11px] sm:text-sm md:text-base text-[#574d6d] max-w-xs sm:max-w-md mx-auto leading-relaxed">
              Trusted by leading brands — from mobile apps to enterprise platforms.
            </p>
          </div>
        </section>

        {/* ═══ 3. INTERACTIVE FILTER CONTROLLER ═══ */}
        <section aria-label="Filter projects by category" className="px-1">
          {/* Wrapped rows — no scrolling, no border radius, small font */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 sm:gap-x-5 border-b border-purple-100 pb-1.5">
            {categories.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-${cat.id}`}
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    px-2 sm:px-4 py-1.5 text-[11px] sm:text-sm font-semibold
                    whitespace-nowrap cursor-pointer select-none transition-all duration-200
                    border-b-2 -mb-px
                    ${isActive
                      ? 'border-[rgba(244,206,69,0.9)] text-[#8A32C6]'
                      : 'border-transparent text-[#574d6d] hover:text-[#1c0e35] hover:border-purple-200'
                    }
                  `}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* ═══ 4. PORTFOLIO CARDS GRID ═══ */}
        <main>
          {/* Row header */}
          <div className="flex items-center justify-between mb-7 px-1 border-b border-purple-100/30 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[rgba(244,206,69,0.9)] to-[#8A32C6]" />
              <span className="text-sm font-extrabold text-[#1c0e35] tracking-tight">
                {categories.find(c => c.id === selectedCategory)?.label ?? 'All Projects'}
              </span>
              <span className="text-xs text-[#574d6d] font-medium">
                — {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
              </span>
            </div>
            <span className="text-xs text-[#7d6c96] hidden sm:flex items-center gap-1 font-medium">
              <span>Click any card to visit</span>
              <span className="text-purple-600">→</span>
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
              <div className="w-20 h-20 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center">
                <Building2 size={28} className="text-purple-300" />
              </div>
              <div>
                <p className="text-[#1c0e35] font-bold text-base">No projects yet</p>
                <p className="text-sm text-[#7d6c96] mt-1">Coming soon — we're always delivering new work!</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}
        </main>

        {/* ═══ 5. FOOTER ═══ */}
        <footer className="mt-4 pt-8 border-t-2 border-[rgba(244,206,69,0.25)] flex flex-col items-center sm:flex-row
                          sm:justify-between gap-3 text-xs text-[#7d6c96] font-medium text-center sm:text-left">
          <p>© 2026 <span className="font-bold text-[#8A32C6]">CrevionAds</span>. All rights reserved.</p>

        </footer>
      </div>

      {/* ═══ BACK TO TOP ═══ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full text-white
                   bg-gradient-to-br from-[#8A32C6] to-[#7c3aed]
                   shadow-[0_8px_24px_rgba(138,50,198,0.25)]
                   ring-2 ring-[rgba(244,206,69,0.4)] hover:ring-[rgba(244,206,69,0.8)]
                   hover:shadow-[0_12px_32px_rgba(138,50,198,0.35)] hover:-translate-y-1
                   active:scale-90 transition-all duration-300 flex items-center justify-center cursor-pointer
                   ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}
