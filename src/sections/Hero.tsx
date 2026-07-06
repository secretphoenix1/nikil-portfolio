import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import {
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { ScrollReveal } from '../components/ScrollReveal';
import profileImg from '../assets/profile.png';

const focusAreas = [
  { icon: BeakerIcon, title: 'Test Automation', desc: 'Playwright frameworks and end-to-end automation.', status: 'ACTIVE' },
  { icon: ClipboardDocumentCheckIcon, title: 'Manual Testing', desc: 'Test case design and structured execution.', status: '100%' },
  { icon: CloudArrowUpIcon, title: 'API Testing', desc: 'Postman, REST APIs, JSON validation.', status: 'VERIFIED' },
  { icon: ShieldCheckIcon, title: 'Quality Assurance', desc: 'Regression, smoke testing, bug reporting, release validation.', status: 'PASSED' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-200">
      {/* Main Grid Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-start z-10">

        {/* Left Column: Headline and CTAs */}
        <div className="md:col-span-7 flex flex-col md:flex-row items-start text-left border-l-0 md:border-l border-brand-border-light dark:border-brand-border-dark/60 pl-0 md:pl-8 gap-6 md:gap-8">

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="shrink-0 relative mx-auto md:mx-0"
          >
            <img
              src={profileImg}
              alt="Nikil Varghese"
              className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full ring-4 ring-brand-border-light dark:ring-brand-border-dark/30 shadow-md"
            />
          </motion.div>

          {/* Details Column */}
          <div className="flex-grow flex flex-col items-start w-full">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-4 flex items-center gap-2 text-xs font-semibold fallback-emerald tracking-wide"
            >
              <span>Available for QA Automation & Software Testing Roles</span>
            </motion.div>

            {/* Name & Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-2"
            >
              <span className="text-xs font-semibold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
                BSc IT Graduate | Playwright Certified | QA Automation Engineer
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-[1.2]">
                QA Automation Engineer <br />
                <span className="text-brand-text-primary-light dark:text-brand-text-primary-dark font-semibold">Focused on Quality, Reliability & Test Automation</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="max-w-xl mt-4 mb-6 space-y-3"
            >
              <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                Self-driven QA Automation Engineer and BSc IT Graduate specializing in manual testing methodology, automation framework development, API testing, and regression analysis. Experienced in verifying end-to-end user workflows on full-stack applications.
              </p>
              <p className="text-[11px] sm:text-xs text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark leading-relaxed font-normal">
                Developing Playwright POM frameworks, designing structured test documentation (test cases, bug reports), and executing smoke, regression, and exploratory tests with a quality-first mindset. Eager to contribute to a professional engineering team.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <Button href="#work" className="text-xs py-2 px-5 font-semibold">
                View QA Projects
              </Button>
              <Button variant="outline" href="#qa-testing" className="gap-2 text-xs py-2 px-5 font-semibold">
                <ClipboardDocumentCheckIcon className="w-4 h-4" />
                View Test Automation Evidence
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Areas of Focus Grid */}
        <div className="md:col-span-5 w-full border-t border-brand-border-light dark:border-brand-border-dark/50 pt-12 md:pt-0 md:border-t-0 md:border-l border-brand-border-light dark:border-brand-border-dark/60 md:pl-8 lg:pl-12 flex flex-col">
          <ScrollReveal>
            <h2 className="text-xs font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-6">
              Areas of Focus
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {focusAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="flex">
                <div
                  className="qa-dashboard-card p-4 w-full rounded-xl flex flex-col gap-2 group cursor-default"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/15 shrink-0">
                        <area.icon className="w-3.5 h-3.5" />
                      </span>
                      <h3 className="text-sm font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                        {area.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[9px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider">
                      {area.status}
                    </span>
                  </div>
                  <p className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                    {area.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
