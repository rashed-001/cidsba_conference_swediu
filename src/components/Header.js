'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '#',
      dropdown: [
        { name: 'Committees', href: '/committees' },
        { name: 'Speakers', href: '/speakers' },
        { name: 'Sponsors', href: '/sponsors' },
      ],
    },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Submission', href: '/submission' },
    { name: 'Registration', href: '/registration' },
    {
      name: 'Resources',
      href: '#',
      dropdown: [
        { name: 'Downloads', href: '/downloads' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'News', href: '/news' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-slate-200 bg-white/90 shadow-lg backdrop-blur-xl' : 'bg-white/80 shadow-sm backdrop-blur-xl'
      }`}
    >
      <nav className="container">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <img src="/images/ConferenceLogo.png" alt="CIDSBA 2027 conference logo" className="h-12 w-auto max-w-[240px] object-contain md:h-14" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[var(--navy)]">
                      {item.name}
                      <FaChevronDown className="ml-1 text-[10px]" />
                    </button>
                    <div className="invisible absolute left-0 top-full mt-2 w-52 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-[var(--navy)]"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[var(--navy)]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <img src="/images/diu-logo.png" alt="DIU logo" className="h-12 w-12 rounded-full border border-slate-200 bg-white p-1 shadow-sm" />
            <Link href="/registration" className="gold-button">
              Register Now
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 pb-4 pt-3 lg:hidden">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-base font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                      {item.name}
                      <FaChevronDown className={`text-[10px] transition ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="px-3 pb-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-[var(--navy)]"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 transition hover:bg-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}