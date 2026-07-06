import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nikiledwin6@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg-light dark:bg-[#070709] border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Card Block */}
        <ScrollReveal>
          <div className="qa-dashboard-card rounded-xl p-5 sm:p-8 md:p-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Info: Status & Headline */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-brand-accent-blue uppercase tracking-wider block">
                Contact
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
                Let's discuss QA automation <br />
                and software testing roles.
              </h2>
              
              <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal max-w-md">
                I am open to QA Automation Engineer, Software Tester, and Playwright-focused testing opportunities. Feel free to reach out to review my test evidence or schedule a technical discussion.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent-blue tracking-wide">
                <span>Open to QA Automation Roles</span>
              </div>
            </div>

            {/* Right Connection Rows */}
            <div className="lg:col-span-5 w-full space-y-3 pt-6 lg:pt-0">
              
              {/* Email Connection */}
              <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between gap-3 p-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl hover:border-brand-accent-blue/35 dark:hover:border-brand-accent-blue/35 transition-all">
                <a 
                  href="mailto:nikiledwin6@gmail.com" 
                  className="flex items-center gap-3.5 group text-xs sm:text-sm font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark hover:text-brand-accent-blue transition-colors min-w-0"
                >
                  <EnvelopeIcon className="w-4 h-4 text-brand-text-tertiary-light group-hover:text-brand-accent-blue transition-colors shrink-0" />
                  <span className="truncate">nikiledwin6@gmail.com</span>
                </a>
                
                <button
                  onClick={handleCopyEmail}
                  className="w-full min-[400px]:w-auto px-3 py-1.5 bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 text-[10px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded-md font-semibold cursor-pointer transition-colors flex items-center gap-1.5 min-w-[70px] justify-center shadow-xs shrink-0"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5 text-green-500" />
                      <span className="text-green-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <DocumentDuplicateIcon className="w-3.5 h-3.5 text-brand-text-tertiary-light" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Connection */}
              <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between gap-3 p-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl hover:border-brand-accent-blue/35 dark:hover:border-brand-accent-blue/35 transition-all group">
                <a 
                  href="tel:+918591766970" 
                  className="flex items-center gap-3.5 text-xs sm:text-sm font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark hover:text-brand-accent-blue transition-colors min-w-0"
                >
                  <PhoneIcon className="w-4 h-4 text-brand-text-tertiary-light group-hover:text-brand-accent-blue transition-colors shrink-0" />
                  <span>+91 8591766970</span>
                </a>
                
                <a
                  href="https://wa.me/918591766970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-[400px]:w-auto px-3 py-1.5 bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 text-[10px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded-md font-semibold cursor-pointer transition-colors flex items-center gap-1.5 min-w-[70px] justify-center shadow-xs shrink-0"
                >
                  WhatsApp
                </a>
              </div>

              {/* LinkedIn Connection */}
              <a 
                href="https://www.linkedin.com/in/nikil-varghese-956281255/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col min-[450px]:flex-row min-[450px]:items-center min-[450px]:justify-between gap-3 p-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl text-xs sm:text-sm font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark hover:text-brand-accent-blue hover:border-brand-accent-blue/35 dark:hover:border-brand-accent-blue/35 transition-all group"
              >
                <div className="flex items-center gap-3.5 min-w-0 w-full min-[450px]:w-auto">
                  <LinkedInIcon className="w-4 h-4 text-brand-text-tertiary-light group-hover:text-brand-accent-blue transition-colors shrink-0" />
                  <span className="truncate">nikil-varghese-956281255</span>
                </div>
                <span className="text-[10px] text-brand-text-tertiary-light group-hover:text-brand-text-primary-light dark:group-hover:text-brand-text-primary-dark transition-colors font-medium shrink-0 self-start min-[450px]:self-auto">Connect &rarr;</span>
              </a>

              {/* Location & Timezone Details */}
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between gap-3 p-4 bg-brand-bg-light dark:bg-[#09090b] border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl text-xs text-brand-text-primary-light dark:text-brand-text-primary-dark font-bold">
                <div className="flex items-center gap-3.5">
                  <MapPinIcon className="w-4 h-4 text-brand-text-tertiary-light shrink-0" />
                  Mumbai, India
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-text-primary-light dark:text-brand-text-primary-dark uppercase tracking-tight self-start min-[380px]:self-auto">
                  <ClockIcon className="w-3.5 h-3.5 text-brand-text-tertiary-light" />
                  GMT+5:30
                </div>
              </div>

            </div>

          </div>

        </div>
        </ScrollReveal>

        {/* Footer info */}
        <ScrollReveal delay={200}>
          <footer
            className="mt-20 pt-8 border-t border-brand-border-light dark:border-brand-border-dark/60 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark text-xs flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <p className="tracking-wide font-normal">&copy; {new Date().getFullYear()} Nikil Edwin Varghese. All rights reserved.</p>
            
            <a 
              href="https://github.com/nikilvarghese" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-text-secondary-light hover:text-brand-accent-blue dark:text-brand-text-secondary-dark dark:hover:text-brand-accent-blue transition-colors text-xs font-semibold cursor-pointer"
            >
              <CodeBracketIcon className="w-4 h-4" />
              GitHub Repository
            </a>
          </footer>
        </ScrollReveal>

      </div>
    </section>
  );
};
