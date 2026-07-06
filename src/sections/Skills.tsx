import { ScrollReveal } from '../components/ScrollReveal';
import {
  BeakerIcon,
  BugAntIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

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

export const Skills = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skillGroups.map((section, idx) => {
            const Icon = section.icon;
            return (
            <ScrollReveal key={idx} delay={idx * 100} className="flex">
              <div
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

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded border border-brand-border-light dark:border-brand-border-dark/60 bg-slate-50/50 dark:bg-[#0d0d0f]/60 text-[10px] font-semibold text-brand-text-secondary-light dark:text-brand-text-secondary-dark font-mono transition-colors group-hover:border-brand-accent-blue/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
