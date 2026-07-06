import { ScrollReveal } from '../components/ScrollReveal';
import {
  ArrowPathIcon,
  BeakerIcon,
  BugAntIcon,
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const testingExpertise = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Manual Testing',
    items: ['Test Case Design', 'Requirement Validation', 'Boundary Testing', 'Exploratory Testing']
  },
  {
    icon: BeakerIcon,
    title: 'Automation Testing',
    items: ['Playwright', 'End-to-End Testing', 'Regression Automation', 'Smoke Testing']
  },
  {
    icon: CloudArrowUpIcon,
    title: 'API Testing',
    items: ['Postman', 'REST APIs', 'JSON Validation', 'Response Verification']
  },
  {
    icon: BugAntIcon,
    title: 'Bug Management',
    items: ['Defect Identification', 'Reproduction Steps', 'Root Cause Analysis', 'Reporting']
  }
];

const philosophyPrinciples = [
  {
    icon: ShieldCheckIcon,
    title: 'Quality First',
    description: 'Validate every feature before release.'
  },
  {
    icon: LightBulbIcon,
    title: 'Think Like The User',
    description: 'Test real user flows and edge cases.'
  },
  {
    icon: ArrowPathIcon,
    title: 'Automate Repetitive Work',
    description: 'Improve reliability and coverage through automation.'
  },
  {
    icon: DocumentTextIcon,
    title: 'Document Everything',
    description: 'Maintain clear test cases, reports, and evidence.'
  }
];

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <span className="text-xs font-semibold text-brand-accent-blue uppercase tracking-wider block">
              Testing Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Testing expertise and <br />
              QA principles.
            </h2>
            <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark max-w-2xl leading-relaxed">
              Practical testing coverage across manual execution, Playwright automation, API validation, and defect management.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testingExpertise.map((area, idx) => {
            const Icon = area.icon;

            return (
              <ScrollReveal key={idx} delay={idx * 100} className="flex">
                <div className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-start group w-full">
                  <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-500/15 w-fit mb-5 transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200 mb-4">
                    {area.title}
                  </h3>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-blue/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-brand-border-light dark:bg-brand-border-dark" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark">
              Principles
            </span>
            <span className="h-px flex-1 bg-brand-border-light dark:bg-brand-border-dark" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyPrinciples.map((principle, idx) => {
            const Icon = principle.icon;

            return (
              <ScrollReveal key={idx} delay={idx * 100} className="flex">
                <div className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-start group w-full">
                  <div className="p-3 bg-emerald-500/[0.08] text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-500/15 w-fit mb-6 transition-all duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200 mb-3">
                    {principle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
