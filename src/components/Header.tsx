'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'ランキング', href: '/#ranking' },
  { label: '年代別', href: '/#age-guide' },
  { label: '業界別', href: '/#purpose-guide' },
  { label: 'お役立ち', href: '/#faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="17" stroke="white" strokeWidth="2.5"/>
              <line x1="20" y1="3" x2="20" y2="8" stroke="white" strokeWidth="2"/>
              <line x1="20" y1="32" x2="20" y2="37" stroke="white" strokeWidth="2"/>
              <line x1="3" y1="20" x2="8" y2="20" stroke="white" strokeWidth="2"/>
              <line x1="32" y1="20" x2="37" y2="20" stroke="white" strokeWidth="2"/>
              <polygon points="20,6 25,22 20,18 15,22" fill="#0D9488"/>
              <polygon points="20,34 15,18 20,22 25,18" fill="white" fillOpacity="0.5"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-base sm:text-lg tracking-tight">転職エージェント<span className="text-teal">比較ラボ</span></span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></svg>
            )}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-white/10 pt-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
