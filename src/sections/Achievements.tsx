import { ScrollReveal } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';
import {
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import playwrightCert from '../assets/playwright-certificate.png';

const achievementsList = [
  {
    icon: ClipboardDocumentCheckIcon,
    value: 280,
    suffix: '+',
    label: 'Manual Test Cases Designed',
    description: 'Structured cases covering expected results, edge paths, workflow rules, and validation outcomes.',
    status: 'Documented'
  },
  {
    icon: PlayIcon,
    value: 225,
    suffix: '',
    label: 'End-to-End Tests Automated',
    description: 'Playwright scenarios validating authentication, job applications, dashboards, and profile flows.',
    status: 'Automated'
  },
  {
    icon: WrenchScrewdriverIcon,
    valueText: 'POM',
    label: 'Playwright Test Framework Built',
    description: 'Modular framework structure with Page Object Model thinking for maintainable browser automation.',
    status: 'Framework'
  },
  {
    icon: ShieldCheckIcon,
    valueText: 'Smoke + Regression',
    label: 'Regression & Smoke Testing Executed',
    description: 'Critical workflows were checked through repeatable release validation and targeted regression passes.',
    status: 'Validated'
  },
  {
    icon: UserGroupIcon,
    valueText: 'Candidate + Recruiter',
    label: 'Candidate & Recruiter Workflows Validated',
    description: 'Role-based journeys were tested across application, hiring, dashboard, and profile management paths.',
    status: 'Covered'
  },
  {
    icon: DocumentChartBarIcon,
    valueText: 'Evidence Ready',
    label: 'Comprehensive Test Documentation Produced',
    description: 'Excel test cases, Playwright reports, terminal output, screenshots, and framework structure are included.',
    status: 'Traceable'
  }
];

const certificationsList = [
  {
    title: 'Playwright 101 Certification',
    issuer: 'TestMu AI',
    thumbnail: playwrightCert,
    verificationUrl: 'https://www.testmuai.com/certified/P101-DZHIC2/',
    status: 'Verified'
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-semibold text-brand-accent-blue uppercase tracking-wider block">
              Key Achievements & Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              QA achievements backed by <br />
              test evidence and reports.
            </h2>
            <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark max-w-2xl leading-relaxed">
              Recruiter-friendly metrics showing manual test design, automation coverage, framework structure, and workflow validation.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: QA Metrics Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {achievementsList.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="flex">
                <div
                  className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between group w-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
                        QA Metric 0{idx + 1}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark font-mono">
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="rounded-lg border border-brand-border-light dark:border-brand-border-dark bg-brand-bg-light dark:bg-[#09090b] p-3 text-brand-accent-blue">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-2xl font-bold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark">
                          {typeof item.value === 'number' ? (
                            <AnimatedCounter value={item.value} suffix={item.suffix ?? ''} />
                          ) : (
                            <span>{item.valueText}</span>
                          )}
                        </div>
                        <h3 className="mt-1 text-sm font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200">
                          {item.label}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column: Certifications Showcase */}
          <div className="md:col-span-4 space-y-6">
            {certificationsList.map((cert, idx) => (
              <ScrollReveal key={idx} delay={200} className="flex">
                <div className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between w-full group">
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

      </div>
    </section>
  );
};
