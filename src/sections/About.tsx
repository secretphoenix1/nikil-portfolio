import { ScrollReveal } from '../components/ScrollReveal';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg-light dark:bg-[#070709] border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-start">
        
        {/* Left Column: Clean label & Title */}
        <ScrollReveal className="md:col-span-5">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-brand-accent-blue uppercase tracking-wider block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
              Testing software with <br />
              structured evidence.
            </h2>
            
            <div className="h-[2px] w-12 bg-brand-accent-blue mt-6" />
            
            <p className="text-xs sm:text-sm text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark max-w-sm mt-4 leading-relaxed font-normal">
              Focused on Test Case Design, Manual Testing, Automation Testing, Playwright, QA documentation, and software reliability.
            </p>
          </div>
        </ScrollReveal>

        {/* Right Column: Clean Copy */}
        <ScrollReveal delay={100} className="md:col-span-7">
          <div className="space-y-6 text-brand-text-secondary-light dark:text-brand-text-secondary-dark text-[15px] sm:text-base leading-[1.7] font-normal">
            <p>
              I am a BSc IT graduate specializing in QA, functional testing, test case design, bug reporting, and automation testing. My work centers on validating requirements, checking real user workflows, and documenting test evidence clearly enough for engineering and recruitment teams to trust.
            </p>
            <p>
              I use Playwright to automate end-to-end journeys, regression checks, smoke tests, and workflow validation. For manual testing, I design structured test cases with expected results, boundary conditions, reproduction steps, and clear pass/fail outcomes.
            </p>
            <p>
              I also validate REST APIs with Postman-style thinking: request payloads, JSON responses, status codes, and data consistency. My goal is simple: improve software reliability through disciplined QA, practical automation, and evidence-backed reporting.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              {['Functional Testing', 'API Testing', 'Bug Reporting', 'Regression Testing'].map((item) => (
                <span
                  key={item}
                  className="text-[10px] font-bold text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark uppercase tracking-wider font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
