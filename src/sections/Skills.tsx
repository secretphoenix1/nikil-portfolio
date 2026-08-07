import { useState, useEffect, useRef } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  BeakerIcon,
  BugAntIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import playwrightCert from '../assets/playwright-certificate.png';
import playwright102Cert from '../assets/playwright-102-certificate.png';

const skillGroups = [
  {
    icon: BeakerIcon,
    category: 'QA & Automation',
    description: 'Core testing methods used to validate product behavior and automate repeatable checks.',
    items: [
      'Playwright',
      'Manual Testing',
      'Automation Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Test Case Design',
      'Bug Reporting',
      'End-to-End Testing'
    ],
    accent: 'emerald'
  },
  {
    icon: BugAntIcon,
    category: 'API Testing',
    description: 'Request, response, and payload validation for REST-driven workflows.',
    items: [
      'API Testing',
      'Postman',
      'REST APIs',
      'JSON'
    ],
    accent: 'blue'
  },
  {
    icon: CodeBracketSquareIcon,
    category: 'Languages',
    description: 'Programming and scripting used to write automated checks and support test workflows.',
    items: [
      'JavaScript',
      'TypeScript (Basic)'
    ],
    accent: 'slate'
  },
  {
    icon: CommandLineIcon,
    category: 'Tools',
    description: 'Everyday tools for source control, debugging, inspection, and evidence review.',
    items: [
      'Git',
      'GitHub',
      'Chrome DevTools'
    ],
    accent: 'amber'
  },
  {
    icon: GlobeAltIcon,
    category: 'Web Technologies',
    description: 'Frontend awareness used to inspect user interfaces and test browser workflows.',
    items: [
      'HTML',
      'CSS',
      'React (Basic)',
      'Node.js'
    ],
    accent: 'indigo'
  },
  {
    icon: CircleStackIcon,
    category: 'Familiar With',
    description: 'Additional environments and data layers that support broader QA debugging context.',
    items: [
      'MongoDB',
      'Linux'
    ],
    accent: 'zinc'
  }
];

const getAccentClasses = (accent: string) => {
  switch (accent) {
    case 'emerald':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    case 'blue':
      return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
    case 'amber':
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
    case 'indigo':
      return 'bg-brand-accent-blue/10 text-brand-accent-blue border-brand-accent-blue/20';
    default:
      return 'bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/15';
  }
};

const certificationsList = [
  {
    title: 'Playwright 101 Certification',
    issuer: 'TestMu AI',
    thumbnail: playwrightCert,
    verificationUrl: 'https://www.testmuai.com/certified/P101-DZHIC2/',
    status: 'Verified',
    highlights: [
      'Know-how of Playwright automation framework.',
      'Using DOM and Web Locators in Playwright.',
      'Running cross browser tests (Serial and Parallel) on cloud grid.'
    ]
  },
  {
    title: 'Playwright 102 Certification',
    issuer: 'TestMu AI',
    thumbnail: playwright102Cert,
    verificationUrl: 'https://www.testmuai.com/certified/P102-1UBJ9P',
    status: 'Verified',
    highlights: [
      'Know-how of Playwright automation framework.',
      'Know-how of HyperExecute smart test orchestration platform.',
      'Know-how of Auto-split execution mechanism, Matrix-based test execution, and Secrets management using YAML.',
      'Experience in running cross browser tests (Serial and Parallel) on HyperExecute Cloud Grid.'
    ]
  }
];

export const Skills = () => {
  const [maxHeight, setMaxHeight] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const measureHeights = () => {
      // Reset height to auto first to measure natural height
      cardRefs.current.forEach(card => {
        if (card) card.style.minHeight = '0px';
      });

      // Measure max height
      const heights = cardRefs.current.map(card => card ? card.offsetHeight : 0);
      const max = Math.max(...heights, 0);
      if (max > 0) {
        setMaxHeight(max);
      }
    };

    // Run once and on window resize
    measureHeights();
    window.addEventListener('resize', measureHeights);
    
    // Cleanup
    return () => window.removeEventListener('resize', measureHeights);
  }, []);

  return (
    <section id="skills" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-semibold text-brand-accent-blue uppercase tracking-wider block">
              Technical Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Technical skills organized for <br />
              QA automation delivery.
            </h2>
            <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark max-w-2xl leading-relaxed">
              A testing-focused toolkit for designing cases, automating browser workflows, validating APIs, reporting defects, and keeping product releases reliable.
            </p>
          </div>
        </ScrollReveal>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillGroups.map((section, idx) => {
            const Icon = section.icon;
            return (
            <ScrollReveal key={idx} delay={idx * 100} className="flex h-full w-full">
              <div
                ref={el => { cardRefs.current[idx] = el; }}
                style={maxHeight ? { minHeight: `${maxHeight}px` } : undefined}
                className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between group w-full"
              >
                <div className="space-y-5">
                  {/* Header Labels */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block mb-1">
                        Skill Group 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200">
                        {section.category}
                      </h3>
                    </div>
                    <span className={`p-2.5 rounded-lg border shrink-0 ${getAccentClasses(section.accent)}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                    {section.description}
                  </p>
                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {section.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[10px] font-semibold text-brand-text-secondary-light dark:text-brand-text-secondary-dark bg-slate-50 dark:bg-[#18181b]/50 border border-brand-border-light dark:border-brand-border-dark/60 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>

        {/* Certifications Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsList.map((cert, idx) => (
            <ScrollReveal key={idx} delay={200} className="flex h-full w-full">
              <div className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between group w-full h-full">
                <div className="flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
                        Certifications
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark font-mono">
                        {cert.status}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark font-normal">
                        Issued by <strong className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">{cert.issuer}</strong>
                      </p>
                    </div>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-2 mt-3">
                      {cert.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal text-left">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-text-tertiary-light dark:bg-brand-text-tertiary-dark shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Screenshot Presentation Frame for Certificate Thumbnail */}
                  <div className="rounded-xl overflow-hidden border border-brand-border-light dark:border-brand-border-dark bg-slate-50 dark:bg-brand-surface-dark p-2.5 flex items-center justify-center aspect-[16/11] max-w-full">
                    <img
                      src={cert.thumbnail}
                      alt={`${cert.title} Certificate`}
                      loading="lazy"
                      className="max-h-full object-contain rounded border border-brand-border-light dark:border-brand-border-dark/50 shadow-xs"
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border-light/60 dark:border-brand-border-dark/40">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-brand-text-primary-light text-brand-bg-light dark:bg-[#1f1f23] dark:text-brand-text-primary-dark py-2.5 px-4 text-xs font-semibold hover:opacity-95 dark:hover:bg-zinc-800 transition-colors text-center cursor-pointer shadow-xs active:scale-[0.98]"
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
