import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  TableCellsIcon,
  FolderOpenIcon,
  PhotoIcon,
  CommandLineIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { ScrollReveal } from '../components/ScrollReveal';
import { Button } from '../components/Button';
import { AnimatedCounter } from '../components/AnimatedCounter';

// Import screenshot assets
import playwrightReportImg from '../assets/Test-case/playwright-test-report.png';
import testExecutionImg from '../assets/Test-case/test-execution-terminal.png';

const techBadges = [
  'Playwright', 
  'TypeScript', 
  'QA Testing', 
  'Automation Testing', 
  'POM', 
  'Regression Testing', 
  'Smoke Testing'
];

const coverageItems = [
  'Authentication',
  'Candidate Dashboard',
  'Recruiter Dashboard',
  'Job Search',
  'Job Applications',
  'Profile Management',
  'Hiring Workflow',
  'Applicant Tracking',
  'Job Management'
];

const statsData = [
  { value: 280, suffix: '+', label: 'Test Cases Designed' },
  { value: 225, suffix: '', label: 'Automated Test Cases' },
  { value: 225, suffix: '', label: 'Tests Passed', highlight: true },
  { valueText: 'POM', label: 'Framework Architecture' }
];

const testingHighlights = [
  '280+ Test Cases Designed',
  '225 Automated Test Cases',
  'Playwright Framework',
  'POM Architecture',
  'Regression Testing',
  'Smoke Testing',
  'Functional Testing'
];

type LightboxPayload = 
  | { type: 'image'; src: string; alt: string }
  | { type: 'framework' };

export const QATesting = () => {
  const [lightbox, setLightbox] = useState<LightboxPayload | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox(null);
      }
    };
    if (lightbox) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="qa-testing" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 mb-16 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-semibold text-brand-accent-blue uppercase tracking-wider block">
                QA Testing & Automation
              </span>
              <a
                href="https://github.com/nikilvarghese/Worklance/tree/main/tests"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent-blue hover:underline"
              >
                <span>View Repository on GitHub</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Test Case Design, Manual Testing, and Playwright Automation <br />
              for the Worklance Job Marketplace project.
            </h2>
            <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark max-w-2xl leading-relaxed">
              A complete testing evidence package: manual test cases, Playwright execution reports, terminal output, module coverage, and framework structure.
            </p>
          </div>
        </ScrollReveal>

        {/* Overview & Statistics Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 items-start mb-16">
          {/* Left: Description & Tech Badges */}
          <ScrollReveal className="md:col-span-6 space-y-6">
            <p className="text-sm sm:text-[15px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
              Designed and executed 280+ test cases covering Authentication, Candidate Dashboard, Recruiter Dashboard, Job Search, Job Applications, Profile Management, and Hiring Workflows. Automated 225 end-to-end test scenarios using Playwright and TypeScript following Page Object Model (POM) architecture. Performed functional, smoke, and regression testing while generating HTML reports and execution logs.
            </p>
            
            <div>
              <h4 className="text-xs font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider mb-3">
                Key Methodologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 dark:bg-brand-bg-dark border border-brand-border-light dark:border-brand-border-dark/60 text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Statistics Grid */}
          <ScrollReveal delay={100} className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="qa-dashboard-card rounded-xl p-5 md:p-6 flex flex-col justify-center"
                >
                  <span className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                    stat.highlight 
                      ? 'text-emerald-600 dark:text-emerald-400' 
                      : 'text-brand-text-primary-light dark:text-brand-text-primary-dark'
                  }`}>
                    {typeof stat.value === 'number' ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix ?? ''} />
                    ) : (
                      stat.valueText
                    )}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-brand-text-secondary-light dark:text-brand-text-secondary-dark uppercase tracking-wider mt-1.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mb-16">
          <div className="qa-dashboard-card rounded-xl p-5 md:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider">
                  Testing Highlights
                </span>
                <h3 className="mt-1 text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                  Worklance QA execution summary
                </h3>
                {/* Visual Pass Rate Bar */}
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-1.5 w-32 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">100% PASS RATE</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-3 lg:max-w-3xl w-full">
                {testingHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-semibold text-brand-text-secondary-light dark:text-brand-text-secondary-dark font-mono"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-text-tertiary-light dark:bg-brand-text-tertiary-dark shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Test Coverage checklist */}
        <ScrollReveal className="mb-16">
          <div className="qa-dashboard-card p-6 md:p-8 rounded-xl">
            <h3 className="text-xs font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark mb-6 uppercase tracking-wider flex items-center gap-2">
              Verified Module Test Coverage Scope
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6">
              {coverageItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Card 1: Test Case Documentation */}
          <ScrollReveal delay={50} className="flex">
            <div className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between group w-full">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
                  Evidence 01 - Documentation
                </span>
                
                <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200">
                  Test Case Documentation
                </h3>
                
                <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                  Comprehensive Excel document structuring and mapping scenarios to support manual testing validation runs.
                </p>

                <div className="flex items-center gap-4.5 p-4 bg-brand-surface-hover-light dark:bg-[#18181b]/40 rounded-lg border border-brand-border-light/60 dark:border-brand-border-dark/40">
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0">
                    <TableCellsIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark truncate">
                      Worklance_QA_Test_Cases.xlsx
                    </span>
                    <span className="block text-[11px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark mt-0.5 font-mono">
                      280+ documented test cases
                    </span>
                  </div>
                </div>

                <p className="text-xs text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark italic leading-normal">
                  Coverage across Candidate, Recruiter, Authentication, Jobs, and Profile modules.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border-light/60 dark:border-brand-border-dark/40">
                <Button 
                  href="/Worklance_QA_Test_Cases.xlsx" 
                  download="Worklance_QA_Test_Cases.xlsx"
                  className="w-full text-xs py-2 px-4 font-semibold flex items-center justify-center gap-2"
                >
                  <ArrowDownTrayIcon className="w-3.5 h-3.5" />
                  View Test Cases
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Playwright HTML Report */}
          <ScrollReveal delay={100} className="flex">
            <div className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between group w-full">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
                  Evidence 02 - Report Output
                </span>
                
                <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200">
                  Playwright HTML Report
                </h3>

                {/* Clickable Image Container */}
                <div 
                  onClick={() => setLightbox({ type: 'image', src: playwrightReportImg, alt: 'Playwright HTML Report' })}
                  className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 p-3 aspect-video cursor-zoom-in relative group/img"
                >
                  <img 
                    src={playwrightReportImg} 
                    alt="Playwright HTML Report" 
                    loading="lazy"
                    className="w-full h-full object-contain rounded-lg border border-slate-200/50 dark:border-slate-800/50 shadow-sm transition-transform duration-500 group-hover/img:scale-[1.02]" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 m-3 rounded-lg pointer-events-none">
                    <PhotoIcon className="w-5 h-5 text-white" />
                    <span className="text-xs font-medium text-white">Click to Zoom</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                  225 automated tests executed successfully with Playwright reporting.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border-light/60 dark:border-brand-border-dark/40">
                <Button 
                  onClick={() => setLightbox({ type: 'image', src: playwrightReportImg, alt: 'Playwright HTML Report' })}
                  variant="outline"
                  className="w-full text-xs py-2 px-4 font-semibold"
                >
                  Open Playwright Report
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Test Execution Results */}
          <ScrollReveal delay={150} className="flex">
            <div className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between group w-full">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
                  Evidence 03 - Terminal Output
                </span>
                
                <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200">
                  Test Execution Results
                </h3>

                {/* Clickable Image Container */}
                <div 
                  onClick={() => setLightbox({ type: 'image', src: testExecutionImg, alt: 'Test Execution Results' })}
                  className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 p-3 aspect-video cursor-zoom-in relative group/img"
                >
                  <img 
                    src={testExecutionImg} 
                    alt="Test Execution Results" 
                    loading="lazy"
                    className="w-full h-full object-contain rounded-lg border border-slate-200/50 dark:border-slate-800/50 shadow-sm transition-transform duration-500 group-hover/img:scale-[1.02]" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 m-3 rounded-lg pointer-events-none">
                    <PhotoIcon className="w-5 h-5 text-white" />
                    <span className="text-xs font-medium text-white">Click to Zoom</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                  Playwright execution summary showing successful automated test runs.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border-light/60 dark:border-brand-border-dark/40">
                <Button 
                  onClick={() => setLightbox({ type: 'image', src: testExecutionImg, alt: 'Test Execution Results' })}
                  variant="outline"
                  className="w-full text-xs py-2 px-4 font-semibold"
                >
                  View Test Execution
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Automation Framework */}
          <ScrollReveal delay={200} className="flex">
            <div className="qa-dashboard-card rounded-xl p-6 flex flex-col justify-between group w-full">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider block">
                  Evidence 04 - Code Architecture
                </span>
                
                <h3 className="text-base font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors duration-200">
                  Automation Framework
                </h3>

                {/* Directory tree block */}
                <pre className="font-mono text-[11px] p-4 bg-slate-50 dark:bg-[#0d0d0f]/60 rounded-lg border border-brand-border-light dark:border-brand-border-dark/85 text-left overflow-x-auto text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed select-none">
{`tests/
+-- applicant-profile/
+-- applicants/
+-- browse-jobs/
+-- candidate-dashboard/
+-- hr-dashboard/
+-- jobseeker/
+-- login/
+-- manage-jobs/`}
                </pre>

                <p className="text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed">
                  Automation framework structured using Page Object Model for maintainability and scalability.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border-light/60 dark:border-brand-border-dark/40">
                <Button 
                  onClick={() => setLightbox({ type: 'framework' })}
                  variant="outline"
                  className="w-full text-xs py-2 px-4 font-semibold flex items-center justify-center gap-1.5"
                >
                  <CommandLineIcon className="w-3.5 h-3.5" />
                  View Framework Structure
                </Button>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* Lightbox / POM Framework Modal Overlay */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[210] flex items-center justify-center bg-black/85 backdrop-blur-xs p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2.5 rounded-full bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer z-[220]"
              aria-label="Close details modal"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === 'image' ? (
                /* Image Lightbox View */
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="max-w-full max-h-[82vh] rounded-lg border border-slate-800/85 shadow-2xl object-contain bg-slate-950/20"
                />
              ) : (
                /* Framework POM detailed view */
                <div className="w-full max-w-2xl bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[82vh] text-left">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-brand-accent-blue">
                      <FolderOpenIcon className="w-6 h-6" />
                      <h3 className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                        Playwright Test Suite Structure
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      {/* Left: Interactive Directory Tree representation */}
                      <div className="md:col-span-5">
                        <pre className="font-mono text-[11px] p-4 bg-slate-50 dark:bg-[#0d0d0f]/60 rounded-lg border border-brand-border-light dark:border-brand-border-dark/80 text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed select-none overflow-y-auto max-h-[300px]">
{`tests/
+-- applicant-profile/
|   +-- applicant-profile.spec.ts
+-- applicants/
|   +-- applicants.spec.ts
+-- browse-jobs/
|   +-- filters.spec.ts
|   +-- search.spec.ts
+-- candidate-dashboard/
|   +-- dashboard-stats.spec.ts
+-- employer/
|   +-- account-creation.spec.ts
|   +-- google-signup.spec.ts
+-- hr-dashboard/
|   +-- hr-dashboard.spec.ts
+-- jobseeker/
|   +-- account-creation.spec.ts
|   +-- register.spec.ts
+-- login/
|   +-- login-auth.spec.ts
|   +-- google-login.spec.ts
+-- manage-jobs/
|   +-- manage-jobs.spec.ts
+-- ... (13 more modules)`}
                        </pre>
                      </div>

                      {/* Right: Architectural details */}
                      <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark">
                        <div>
                          <h4 className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-blue shrink-0" />
                            Modular Spec Structure
                          </h4>
                          <p className="leading-relaxed">
                            Organized into 22 dedicated module directories targeting isolation of tests for clean execution context, easy troubleshooting, and scalability.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-blue shrink-0" />
                            Page Object Model (POM) Design
                          </h4>
                          <p className="leading-relaxed">
                            Separates assertion specs from page selector elements and action handlers, reducing code duplication and ensuring that changes to the UI require updates only in page objects.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-blue shrink-0" />
                            Best Practices & Stability
                          </h4>
                          <p className="leading-relaxed">
                            Leverages parallel test execution workers, persistent storage state (pre-authenticated sessions) to optimize test run speeds, dynamic timeouts, and detailed HTML reporters.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-brand-border-light/60 dark:border-brand-border-dark/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <a
                        href="https://github.com/nikilvarghese/Worklance/tree/main/tests"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent-blue hover:underline"
                      >
                        <span>View Repository on GitHub</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      
                      <Button onClick={() => setLightbox(null)} className="text-xs py-1.5 px-4 font-semibold">
                        Close Overview
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
