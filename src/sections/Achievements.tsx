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

        {/* QA Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievementsList.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="flex h-full w-full">
              <div
                className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between group w-full h-full"
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

      </div>
    </section>
  );
};
