import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon, 
  EnvelopeIcon, 
  ArrowDownTrayIcon, 
  CheckIcon,
  DocumentDuplicateIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { ThemeToggle } from './ThemeToggle';
import resumePdf from '../assets/Nikil_Varghese_Resume.pdf';
import { NavbarLogo } from './NavbarLogo';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const navItems = [
  { name: 'Expertise', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#work' },
  { name: 'QA Evidence', href: '#qa-testing' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nikiledwin6@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsHireModalOpen(false);
      }
    };
    if (isHireModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isHireModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['skills', 'about', 'work', 'qa-testing', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '/');
    setActiveSection('');
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 transition-[background-color,border-color,padding,box-shadow] duration-300 ${
        isHireModalOpen ? 'z-[200]' : 'z-50'
      } ${
        isScrolled
          ? 'bg-brand-bg-light/95 dark:bg-brand-bg-dark/95 border-b border-brand-border-light dark:border-brand-border-dark/80 py-3 shadow-xs'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 w-full">
        {/* Brand Logo & Name */}
        <a 
          href="#" 
          onClick={handleBrandClick}
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark transition-colors duration-200 group shrink-0"
          aria-label="Nikil Varghese Home"
        >
          <NavbarLogo className="h-10 w-auto shrink-0 transition-transform duration-200 group-hover:scale-[1.02]" alt="" />
          <span className="hidden min-[480px]:inline shrink-0">Nikil Varghese</span>
        </a>

        {/* Desktop Centered Navigation */}
        <nav aria-label="Main desktop navigation" className="hidden lg:flex items-center justify-center flex-grow mx-4">
          <div className="flex items-center gap-1.5 border border-brand-border-light dark:border-brand-border-dark/85 bg-brand-surface-light/40 dark:bg-[#121215]/50 px-4 py-1.5 rounded-full whitespace-nowrap">
            {navItems.map((item) => {
              const isLinkActive = item.href.slice(1) === activeSection;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative z-10 text-xs font-medium tracking-tight transition-colors duration-200 px-2 py-0.5 whitespace-nowrap ${
                    isLinkActive
                      ? 'text-brand-accent-indigo font-semibold dark:text-brand-text-primary-dark'
                      : 'text-brand-text-secondary-light hover:text-brand-text-primary-light dark:text-brand-text-secondary-dark dark:hover:text-brand-text-primary-dark'
                  }`}
                >
                  {item.name}
                  {isLinkActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-brand-accent-indigo/10 dark:bg-brand-accent-indigo/15 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right Area (Actions & Mobile/Tablet Triggers) */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Actions Section (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-4.5">
            {/* Theme Toggler */}
            <ThemeToggle />

            {/* Resume CTA */}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-brand-border-light dark:border-brand-border-dark/80 text-brand-text-secondary-light hover:text-brand-text-primary-light dark:text-brand-text-secondary-dark dark:hover:text-brand-text-primary-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] whitespace-nowrap"
            >
              <ArrowDownTrayIcon className="w-3.5 h-3.5 shrink-0" />
              <span>Resume</span>
            </a>

            {/* Recruiter CTA */}
            <button
              onClick={() => setIsHireModalOpen(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-brand-text-primary-light text-brand-bg-light hover:opacity-90 dark:bg-brand-text-primary-dark dark:text-brand-bg-dark transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98] whitespace-nowrap"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Theme Toggle & Menu (Mobile Only: hidden on md and up) */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              className="p-2 text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark border border-brand-border-light dark:border-brand-border-dark/80 rounded-lg cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-4 w-4" />
              ) : (
                <Bars3Icon className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Tablet Menu Trigger (Tablet Only: visible on md to lg screens) */}
          <button
            className="hidden md:block lg:hidden p-2 text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark border border-brand-border-light dark:border-brand-border-dark/80 rounded-lg cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-4 w-4" />
            ) : (
              <Bars3Icon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-surface-light dark:bg-[#0f0f11] border-b border-brand-border-light dark:border-brand-border-dark/80 shadow-md"
            aria-label="Main mobile navigation"
          >
            <div className="flex flex-col px-4 sm:px-6 py-5 space-y-4">
              {navItems.map((item) => {
                const isLinkActive = item.href.slice(1) === activeSection;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      isLinkActive
                        ? 'text-brand-accent-indigo font-semibold'
                        : 'text-brand-text-secondary-light hover:text-brand-text-primary-light dark:text-brand-text-secondary-dark dark:hover:text-brand-text-primary-dark'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="flex gap-3 pt-2 md:hidden">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow text-center flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg border border-brand-border-light dark:border-brand-border-dark/80 text-brand-text-secondary-light hover:text-brand-text-primary-light dark:text-brand-text-secondary-dark dark:hover:text-brand-text-primary-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 transition-all cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <ArrowDownTrayIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Resume</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsHireModalOpen(true);
                  }}
                  className="flex-grow text-center px-4 py-2.5 text-xs font-semibold rounded-lg bg-brand-text-primary-light text-brand-bg-light dark:bg-brand-text-primary-dark dark:text-brand-bg-dark transition-all cursor-pointer shadow-sm active:scale-[0.98] whitespace-nowrap"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Connection & Hiring Dialogue Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isHireModalOpen && (
            <div 
              className="fixed inset-0 z-[300] flex items-start sm:items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto cursor-pointer" 
              onClick={() => setIsHireModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark w-full max-w-md rounded-xl shadow-xl p-6 sm:p-8 relative flex flex-col gap-6 cursor-default my-8 sm:my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button - absolute top-5 right-5 */}
                <button
                  onClick={() => setIsHireModalOpen(false)}
                  className="absolute top-5 right-5 p-1.5 rounded-lg border border-brand-border-light dark:border-brand-border-dark/80 text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>

                {/* Title & Description with clean visual hierarchy */}
                <div className="space-y-1.5 pr-8">
                  <span className="text-[10px] text-brand-accent-indigo dark:text-brand-accent-indigo tracking-wider font-semibold uppercase block">
                    Contact
                  </span>
                  <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                    Resume & Contact Details
                  </h3>
                  <p className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark mt-1 leading-relaxed font-normal">
                    Feel free to access my resume or reach out directly to discuss job opportunities and projects.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5">
                  {/* PDF Resume Download */}
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-brand-text-primary-light text-brand-bg-light dark:bg-brand-text-primary-dark dark:text-brand-bg-dark hover:opacity-90 transition-opacity font-semibold text-xs shadow-xs cursor-pointer"
                  >
                    <ArrowDownTrayIcon className="w-3.5 h-3.5 shrink-0" />
                    View & Download Resume
                  </a>

                  {/* Email (with Copy utility) */}
                  <div className="flex gap-2 mt-1">
                    <a
                      href="mailto:nikiledwin6@gmail.com"
                      className="flex-grow flex items-center gap-3 p-2.5 rounded-lg border border-brand-border-light dark:border-brand-border-dark/80 bg-brand-surface-light dark:bg-brand-surface-dark hover:border-brand-accent-indigo/40 dark:hover:border-brand-accent-indigo/40 transition-colors group"
                    >
                      <EnvelopeIcon className="w-4 h-4 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-indigo transition-colors" />
                      <div className="text-left leading-none">
                        <span className="block text-[8px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-0.5">Email</span>
                        <span className="block text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark truncate max-w-[170px] sm:max-w-xs">nikiledwin6@gmail.com</span>
                      </div>
                    </a>
                    
                    <button
                      onClick={handleCopyEmail}
                      className="px-3.5 rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-xs font-semibold cursor-pointer transition-colors min-w-[75px] flex items-center justify-center gap-1.5"
                      aria-label="Copy email address to clipboard"
                    >
                      {copied ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-[11px] text-green-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <DocumentDuplicateIcon className="w-3.5 h-3.5 text-brand-text-tertiary-light" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone (with WhatsApp link) */}
                  <div className="flex gap-2">
                    <a
                      href="tel:+918591766970"
                      className="flex-grow flex items-center gap-3 p-2.5 rounded-lg border border-brand-border-light dark:border-brand-border-dark/80 bg-brand-surface-light dark:bg-brand-surface-dark hover:border-brand-accent-indigo/40 dark:hover:border-brand-accent-indigo/40 transition-colors group"
                    >
                      <PhoneIcon className="w-4 h-4 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-indigo transition-colors shrink-0" />
                      <div className="text-left leading-none">
                        <span className="block text-[8px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-0.5">Phone</span>
                        <span className="block text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">+91 8591766970</span>
                      </div>
                    </a>
                    
                    <a
                      href="https://wa.me/918591766970"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-xs font-semibold cursor-pointer transition-colors min-w-[75px] flex items-center justify-center gap-1.5"
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* LinkedIn Link */}
                  <a
                    href="https://www.linkedin.com/in/nikil-varghese-956281255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg border border-brand-border-light dark:border-brand-border-dark/80 bg-brand-surface-light dark:bg-brand-surface-dark hover:border-brand-accent-indigo/40 dark:hover:border-brand-accent-indigo/40 transition-colors group"
                  >
                    <LinkedInIcon className="w-4 h-4 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-indigo transition-colors" />
                    <div className="text-left leading-none">
                      <span className="block text-[8px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-0.5">LinkedIn</span>
                      <span className="block text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">nikil-varghese-956281255</span>
                    </div>
                    <span className="ml-auto text-[10px] text-brand-text-tertiary-light group-hover:text-brand-text-primary-light dark:group-hover:text-brand-text-primary-dark transition-colors font-medium">Connect &rarr;</span>
                  </a>

                  {/* GitHub Link */}
                  <a
                    href="https://github.com/nikilvarghese"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg border border-brand-border-light dark:border-brand-border-dark/80 bg-brand-surface-light dark:bg-brand-surface-dark hover:border-brand-accent-indigo/40 dark:hover:border-brand-accent-indigo/40 transition-colors group"
                  >
                    <GitHubIcon className="w-4 h-4 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark group-hover:text-brand-accent-indigo transition-colors" />
                    <div className="text-left leading-none">
                      <span className="block text-[8px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-0.5">GitHub</span>
                      <span className="block text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">nikilvarghese</span>
                    </div>
                    <span className="ml-auto text-[10px] text-brand-text-tertiary-light group-hover:text-brand-text-primary-light dark:group-hover:text-brand-text-primary-dark transition-colors font-medium font-semibold">View &rarr;</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>
  );
};
