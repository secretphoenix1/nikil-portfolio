import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { ScrollReveal } from '../components/ScrollReveal';

// Import Screenshots
import flirtyfyHome from "../assets/flirtyfy/home.png";
import flirtyfyOCR from "../assets/flirtyfy/OCR.png";
import flirtyfyReply from "../assets/flirtyfy/Reply Results (Funny).png";

import landingPage from "../assets/screenshots/landing-page.png";
import postJobRestriction from "../assets/screenshots/postjob-restriction.png";
import applyJob from "../assets/screenshots/applyjob.png";

import infrastructureArchitecture from "../assets/vmware/infrastructure-architecture.png";
import loadBalancerSwitching from "../assets/vmware/load-balancer-switching.png";
import htopMonitoring from "../assets/vmware/htop-monitoring.png";

const ZoomIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
  </svg>
);

const ImageCard = ({
  src,
  alt,
  caption,
  title,
  onClick
}: {
  src: string;
  alt: string;
  caption: string;
  title?: string;
  onClick?: () => void;
}) => (
  <div className="group flex flex-col gap-2.5 h-full cursor-pointer" onClick={onClick}>
    <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 relative flex items-center justify-center p-3 aspect-video sm:aspect-auto">
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
        <div className="p-2 bg-zinc-900/80 rounded-full border border-zinc-800 backdrop-blur-xs shadow-md">
          <ZoomIcon />
        </div>
      </div>
      <img src={src} alt={alt} loading="lazy" className="max-h-48 object-contain transform group-hover:scale-[1.02] transition-transform duration-300 rounded-lg border border-slate-200/50 dark:border-slate-800/50 shadow-sm" />
    </div>
    <div className="border-l-2 border-brand-accent-blue pl-2.5 flex flex-col gap-0.5">
      {title && <h4 className="text-xs font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors">{title}</h4>}
      <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark group-hover:text-brand-text-primary-light dark:group-hover:text-brand-text-primary-dark transition-colors leading-normal font-normal">{caption}</p>
    </div>
  </div>
);

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  heroImage: string;
  isFeatured: boolean;
  businessValue: string;
  complexity: string;
  decisions: string;
  scalability: string;
}

const projectsData: Project[] = [
  {
    id: 'worklance',
    title: 'Worklance Recruitment Hub',
    subtitle: 'A full-stack role-based recruitment system with gatekeeping guards.',
    description: 'A job portal platform that bridges candidates and hiring managers. It enforces profile verification steps, roles isolation (RBAC), and validation patterns to maintain operational data quality.',
    category: 'Web & Full-Stack',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/nikilvarghese/Worklance',
    liveDemo: 'https://worklance-nu.vercel.app/',
    heroImage: landingPage,
    isFeatured: true,
    businessValue: 'Reduces manual review cycles by ensuring applicant profiles meet complete verification requirements before database entries.',
    complexity: 'Designed global Axios interceptors coupled with Express middleware to process candidate and manager routing securely.',
    decisions: 'Chose token-based validation over local cookies to secure user sessions and route permissions.',
    scalability: 'Stores references rather than nested collections, maintaining fast query speeds as candidate records expand.'
  },
  {
    id: 'flirtyfy',
    title: 'Flirtyfy Conversationalist',
    subtitle: 'An AI-powered helper built for vision parsing and mobile clients.',
    description: 'A mobile application that generates icebreakers and profile rewrites. The app processes chat screenshots using OCR extraction, cleans textual buffers, and formats prompt values.',
    category: 'Mobile & AI',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Gemini OCR', 'OpenRouter API', 'Serverless Functions', 'i18n'],
    github: 'https://github.com/nikilvarghese/flirtyfy',
    heroImage: flirtyfyHome,
    isFeatured: true,
    businessValue: 'Accelerates conversation setups by replacing manual text inputs with quick image processing.',
    complexity: 'Developed text parsing filters to clean raw image data and isolate speakers from screenshot files.',
    decisions: 'Decided on serverless function configurations to hide private LLM keys and configurations from client bundles.',
    scalability: 'Separates layout states from the heavy OCR processing pipelines, maintaining fast client loads.'
  },
  {
    id: 'vmware',
    title: 'Virtualized High-Availability Lab',
    subtitle: 'A redundant system environment illustrating virtualization, load balancing, and shell scripts.',
    description: 'A local multi-server virtualization environment featuring isolated web servers and active proxy controllers. Implements scripted provisioning, resource tracking, and high-availability operations.',
    category: 'Systems & Infrastructure',
    technologies: ['VMware', 'Ubuntu Server', 'Apache', 'Nginx Proxy', 'Bash Automation', 'Linux Network'],
    github: 'https://github.com/nikilvarghese/virtualized-ha-infrastructure',
    heroImage: infrastructureArchitecture,
    isFeatured: true,
    businessValue: 'Models zero-downtime service design patterns locally using bridged virtual networking.',
    complexity: 'Established bridged virtual networks with static IP assignments and Nginx load configurations.',
    decisions: 'Implemented Round-Robin proxy routing over single-server routing to split server queries.',
    scalability: 'Designed custom Bash scripts to provision and join new server nodes to the load balancer pool dynamically.'
  }
];

const getProjectProblem = (id: string) => {
  switch (id) {
    case 'worklance':
      return "Online job portals frequently encounter data clutter from dynamic candidate fields and incomplete applications. Hiring teams require a systematic validation gate that locks out bad payloads prior to processing steps.";
    case 'flirtyfy':
      return "Interfacing chat transcripts from dating portals requires users to manually copy screens, which is slow and adds usability blockades on mobile clients.";
    case 'vmware':
      return "Developing infrastructure requires testing host behaviors, traffic routing, and redundancy patterns. Replicating this requires virtual sandbox environments that mimic actual web servers and proxy boundaries.";
    default:
      return "";
  }
};

const getProjectSolution = (id: string) => {
  switch (id) {
    case 'worklance':
      return "Implemented explicit check logic utilizing Express router hooks and schema validations. Candidates must pass complete fields before request operations are executed.";
    case 'flirtyfy':
      return "Built an automated image parser integrating Gemini Vision OCR to translate image pixels into text strings, cleaning conversational lines and feeding them to customized API prompts.";
    case 'vmware':
      return "Configured multi-node Ubuntu Server VMs running on VMware Workstation, routing upstream queries through an Nginx proxy load balancer configured with round-robin traffic routing rules.";
    default:
      return "";
  }
};

export const Projects = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImage) {
          setActiveImage(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    
    if (activeImage || selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage, selectedProject]);

  const filteredProjects = projectsData.filter(project => {
    return selectedCategory === 'All' || project.category === selectedCategory;
  });

  return (
    <section id="work" className="py-24 bg-brand-bg-light dark:bg-brand-bg-dark border-t border-brand-border-light dark:border-brand-border-dark/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 text-left">
              <span className="text-xs font-semibold text-brand-accent-blue uppercase tracking-wider block">
                Projects
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-text-primary-light dark:text-brand-text-primary-dark leading-tight">
                Featured Work <br />
                <span className="font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                  focusing on stability & validation.
                </span>
              </h2>
            </div>

            {/* Filtering tabs */}
            <div className="flex flex-wrap gap-1 bg-brand-surface-light dark:bg-[#121215]/50 border border-brand-border-light dark:border-brand-border-dark p-1 rounded-lg">
              {['All', 'Web & Full-Stack', 'Mobile & AI', 'Systems & Infrastructure'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[11px] font-medium tracking-tight rounded-md transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-brand-text-primary-light text-brand-bg-light dark:bg-[#1f1f23] dark:text-brand-text-primary-dark font-semibold'
                      : 'text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            return (
              <ScrollReveal
                key={project.id}
                delay={idx * 100}
                className="flex"
              >
                <motion.div
                  layout
                  className="qa-dashboard-card rounded-xl overflow-hidden flex flex-col h-full w-full group"
                >
                {/* Cover Image */}
                <div 
                  className="aspect-[16/9] p-3 bg-slate-100/50 border-b border-brand-border-light dark:bg-slate-900/20 dark:border-brand-border-dark/60 flex items-center justify-center relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-brand-accent-blue/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-500 rounded-lg border border-slate-200/50 dark:border-slate-800/50 shadow-sm"
                  />
                </div>

                {/* Info Body */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark">
                      {project.category}
                    </span>
                  </div>
                  <h3 
                    className="text-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark group-hover:text-brand-accent-blue transition-colors cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark mt-1 font-semibold leading-normal">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-xs text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark mt-3 leading-relaxed font-normal flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech list */}
                  <div className="flex flex-wrap gap-1.5 mt-6 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-50 dark:bg-brand-bg-dark border border-brand-border-light dark:border-brand-border-dark/60 text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded text-[10px] font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-grow py-2 px-3 text-xs font-semibold rounded-lg bg-brand-text-primary-light text-brand-bg-light dark:bg-[#1f1f23] dark:text-brand-text-primary-dark hover:opacity-95 dark:hover:bg-zinc-800 transition-colors text-center cursor-pointer shadow-xs active:scale-[0.98]"
                    >
                      Project Details
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-brand-border-light dark:border-brand-border-dark text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:bg-slate-100 dark:hover:bg-brand-surface-dark transition-all"
                        title="GitHub Repository"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
            );
          })}
        </div>

        {/* Detailed Case Study Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/90 backdrop-blur-xs p-4 md:p-6 overflow-y-auto" 
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark w-full max-w-4xl rounded-xl shadow-xl overflow-hidden relative flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Toolbar */}
                <div className="flex-shrink-0 bg-brand-surface-light dark:bg-brand-surface-dark border-b border-brand-border-light dark:border-brand-border-dark/60 px-6 py-4 flex items-center justify-between z-10">
                  <span className="text-xs font-semibold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                    {selectedProject.title}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {selectedProject.liveDemo && (
                      <a 
                        href={selectedProject.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="py-1.5 px-3 rounded bg-brand-text-primary-light text-brand-bg-light dark:bg-[#1f1f23] dark:text-brand-text-primary-dark hover:opacity-95 text-[10px] font-semibold flex items-center gap-1.5 shadow-sm"
                      >
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                        <span>Live Site</span>
                      </a>
                    )}
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="py-1.5 px-3 rounded border border-brand-border-light dark:border-brand-border-dark text-brand-text-secondary-light dark:text-brand-text-secondary-dark hover:bg-slate-50 dark:hover:bg-brand-border-dark/30 text-[10px] font-semibold flex items-center gap-1.5"
                      >
                        <CodeBracketIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-1 rounded hover:bg-brand-surface-hover-light dark:hover:bg-brand-surface-hover-dark/40 text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark hover:text-brand-text-primary-light dark:hover:text-brand-text-primary-dark cursor-pointer transition-colors"
                      aria-label="Close project details modal"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Content - Scrollable narrative flow */}
                <div className="flex-grow overflow-y-auto bg-brand-bg-light dark:bg-[#070709] p-6 sm:p-8 space-y-10">
                  
                  {/* 1. Hero Screenshot */}
                  <div 
                    className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 p-4 flex items-center justify-center aspect-[16/9] max-h-96 cursor-pointer group relative"
                    onClick={() => setActiveImage({ src: selectedProject.heroImage, alt: `${selectedProject.title} Main Screenshot` })}
                  >
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                      <div className="p-2.5 bg-zinc-900/80 rounded-full border border-zinc-800 backdrop-blur-xs shadow-md">
                        <ZoomIcon />
                      </div>
                    </div>
                    <img 
                      src={selectedProject.heroImage} 
                      alt={`${selectedProject.title} Main Screenshot`} 
                      loading="lazy"
                      className="max-w-full max-h-full object-contain rounded-lg border border-slate-200/50 dark:border-slate-800/50 shadow-sm transform group-hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>

                  {/* Executive Summary Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                    {/* Problem */}
                    <div className="p-4 rounded-xl border border-rose-500/10 dark:border-rose-500/5 bg-rose-500/[0.02] dark:bg-rose-500/[0.01] space-y-2 flex flex-col justify-start">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                        <h4 className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">The Problem</h4>
                      </div>
                      <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                        {getProjectProblem(selectedProject.id)}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-4 rounded-xl border border-emerald-500/10 dark:border-emerald-500/5 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] space-y-2 flex flex-col justify-start">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <h4 className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">The Solution</h4>
                      </div>
                      <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                        {getProjectSolution(selectedProject.id)}
                      </p>
                    </div>

                    {/* Key Decisions */}
                    <div className="p-4 rounded-xl border border-indigo-500/10 dark:border-indigo-500/5 bg-indigo-500/[0.02] dark:bg-indigo-500/[0.01] space-y-2 flex flex-col justify-start">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <h4 className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Key Decisions</h4>
                      </div>
                      <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                        {selectedProject.decisions}
                      </p>
                    </div>

                    {/* Business Value */}
                    <div className="p-4 rounded-xl border border-amber-500/10 dark:border-amber-500/5 bg-amber-500/[0.02] dark:bg-amber-500/[0.01] space-y-2 flex flex-col justify-start">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <h4 className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Outcome & Value</h4>
                      </div>
                      <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                        {selectedProject.businessValue}
                      </p>
                    </div>
                  </div>

                  {/* Split Section: Details Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Left 8 columns: Narrative details */}
                    <div className="md:col-span-8 space-y-10">
                      
                      {/* 2. Project Overview */}
                      <div className="space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary-light dark:text-brand-text-primary-dark border-l-2 border-brand-accent-blue pl-3">
                          Project Overview
                        </h3>
                        <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-[1.65] font-normal">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* 3. Problem */}
                      <div className="space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary-light dark:text-brand-text-primary-dark border-l-2 border-brand-accent-blue pl-3">
                          Problem
                        </h3>
                        <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-[1.65] font-normal">
                          {selectedProject.id === 'worklance' && "Online job portals frequently encounter data clutter from dynamic candidate fields and incomplete applications. Hiring teams require a systematic validation gate that locks out bad payloads prior to processing steps."}
                          {selectedProject.id === 'flirtyfy' && "Interfacing chat transcripts from dating portals requires users to manually copy screens, which is slow and adds usability blockades on mobile clients."}
                          {selectedProject.id === 'vmware' && "Developing infrastructure requires testing host behaviors, traffic routing, and redundancy patterns. Replicating this requires virtual sandbox environments that mimic actual web servers and proxy boundaries."}
                        </p>
                      </div>

                      {/* 4. Solution */}
                      <div className="space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary-light dark:text-brand-text-primary-dark border-l-2 border-brand-accent-blue pl-3">
                          Solution
                        </h3>
                        <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-[1.65] font-normal">
                          {selectedProject.id === 'worklance' && "Implemented explicit check logic utilizing Express router hooks and schema validations. Candidates must pass complete fields before request operations are executed."}
                          {selectedProject.id === 'flirtyfy' && "Built an automated image parser integrating Gemini Vision OCR to translate image pixels into text strings, cleaning conversational lines and feeding them to customized API prompts."}
                          {selectedProject.id === 'vmware' && "Configured multi-node Ubuntu Server VMs running on VMware Workstation, routing upstream queries through an Nginx proxy load balancer configured with round-robin traffic routing rules."}
                        </p>
                      </div>

                      {/* 5. Technical Implementation (Visual Diagram) */}
                      <div className="space-y-4 pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary-light dark:text-brand-text-primary-dark border-l-2 border-brand-accent-blue pl-3">
                          Technical Implementation
                        </h3>
                        <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-[1.65] font-normal mb-3">
                          The system architecture routes client traffic through validation, security, and distribution layers:
                        </p>

                        <div className="p-6 bg-slate-50 dark:bg-brand-bg-dark border border-brand-border-light dark:border-brand-border-dark/60 rounded-xl flex flex-col items-center justify-center font-sans text-xs text-brand-text-secondary-light dark:text-brand-text-secondary-dark">
                          {selectedProject.id === 'vmware' && (
                            <div className="w-full flex flex-col items-center gap-3 text-center max-w-sm">
                              <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark px-3 py-1.5 rounded-lg w-full font-semibold">
                                Client Request
                              </div>
                              <div className="text-brand-accent-blue font-bold">↓</div>
                              <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark px-3 py-1.5 rounded-lg w-full font-semibold">
                                Nginx Load Balancer (Round-Robin Proxy)
                              </div>
                              <div className="flex justify-between w-full text-brand-accent-blue font-bold px-10">
                                <span>↙</span>
                                <span>↘</span>
                              </div>
                              <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark p-2 rounded-lg font-semibold">
                                  Web Node 1<br />Ubuntu + Apache VM
                                </div>
                                <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark p-2 rounded-lg font-semibold">
                                  Web Node 2<br />Ubuntu + Apache VM
                                </div>
                              </div>
                            </div>
                          )}

                          {selectedProject.id === 'worklance' && (
                            <div className="w-full flex flex-col items-center gap-3 text-center max-w-sm">
                              <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark px-3 py-1.5 rounded-lg w-full font-semibold">
                                Client UI (React Router)
                              </div>
                              <div className="text-brand-accent-blue font-bold">↓</div>
                              <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark px-3 py-1.5 rounded-lg w-full font-semibold">
                                Authentication Guard & Role Verification Middleware
                              </div>
                              <div className="text-brand-accent-blue font-bold">↓</div>
                              <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark px-3 py-1.5 rounded-lg w-full font-semibold">
                                Express REST API Endpoint
                              </div>
                              <div className="text-brand-accent-blue font-bold">↓</div>
                              <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark px-3 py-1.5 rounded-lg w-full font-semibold">
                                MongoDB Database (Mongoose Validation)
                              </div>
                            </div>
                          )}

                          {selectedProject.id === 'flirtyfy' && (
                            <div className="w-full space-y-6 text-center max-w-2xl mx-auto font-sans text-xs">
                              {/* Top Node: User Entry */}
                              <div className="flex flex-col items-center">
                                <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark px-4 py-2 rounded-lg font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark shadow-sm">
                                  User UI Client (React Native / Expo Mobile App)
                                </div>
                                <div className="text-brand-accent-blue font-bold text-base mt-2">↓</div>
                              </div>

                              {/* Feature Columns Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                                {/* Reply Generator */}
                                <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark/30 p-3.5 rounded-xl space-y-2 flex flex-col">
                                  <div className="font-bold text-[10px] text-brand-accent-blue uppercase tracking-wider text-center border-b border-brand-border-light dark:border-brand-border-dark/60 pb-1.5 mb-1">
                                    Reply Generator
                                  </div>
                                  <ul className="space-y-1 text-[10px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark flex-grow font-normal">
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Text Input & Screenshot Upload</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Gemini Vision OCR Extraction</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Context Data Cleaning</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Tone Selection Filter</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>AI Response Generation</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Conversation Openers */}
                                <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark/30 p-3.5 rounded-xl space-y-2 flex flex-col">
                                  <div className="font-bold text-[10px] text-brand-accent-blue uppercase tracking-wider text-center border-b border-brand-border-light dark:border-brand-border-dark/60 pb-1.5 mb-1">
                                    Conversation Openers
                                  </div>
                                  <ul className="space-y-1 text-[10px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark flex-grow font-normal">
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Profile Page Analysis</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Interest & Tag Extraction</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Dynamic Context Builder</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>AI Opener Generation</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Bio Writer */}
                                <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark/30 p-3.5 rounded-xl space-y-2 flex flex-col">
                                  <div className="font-bold text-[10px] text-brand-accent-blue uppercase tracking-wider text-center border-b border-brand-border-light dark:border-brand-border-dark/60 pb-1.5 mb-1">
                                    Bio Writer
                                  </div>
                                  <ul className="space-y-1 text-[10px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark flex-grow font-normal">
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>User Personal Details</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Style & Vibe Selection</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>Persona Builder Ingestion</span>
                                    </li>
                                    <li className="flex items-start gap-1.5">
                                      <span className="text-brand-accent-blue shrink-0 font-bold">&rarr;</span>
                                      <span>AI Bio Generation</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="text-brand-accent-blue font-bold text-base">↓</div>

                              {/* Shared Services Layer */}
                              <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark p-4 rounded-xl space-y-3">
                                <div className="text-[10px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark font-bold uppercase tracking-wider">
                                  Shared Services Layer
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-semibold text-center">
                                  <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark/50 p-2 rounded-lg">
                                    Gemini Vision OCR
                                  </div>
                                  <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark/50 p-2 rounded-lg">
                                    OpenRouter API
                                  </div>
                                  <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark/50 p-2 rounded-lg">
                                    Supabase Database
                                  </div>
                                  <div className="border border-brand-border-light dark:border-brand-border-dark bg-brand-surface-light dark:bg-brand-surface-dark/50 p-2 rounded-lg">
                                    RevenueCat Billing
                                  </div>
                                </div>
                              </div>

                              <div className="text-brand-accent-blue font-bold text-base">↓</div>

                              {/* Outputs */}
                              <div className="space-y-2.5">
                                <div className="text-[10px] text-brand-text-tertiary-light dark:text-brand-text-tertiary-dark font-bold uppercase tracking-wider">
                                  Outputs (Persona Tone Customizations)
                                </div>
                                <div className="flex flex-wrap justify-center gap-1.5">
                                  {['Flirty', 'Funny', 'Direct', 'Romantic', 'Meme Lord', 'Gen Z'].map((tone) => (
                                    <span 
                                      key={tone} 
                                      className="px-2.5 py-1 bg-brand-surface-light dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded-md text-[10px] font-bold"
                                    >
                                      {tone}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 6. Challenges */}
                      <div className="space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary-light dark:text-brand-text-primary-dark border-l-2 border-brand-accent-blue pl-3">
                          Challenges
                        </h3>
                        <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-[1.65] font-normal">
                          {selectedProject.id === 'worklance' && "Implementing multiple verification paths risked code duplication across separate routers. To resolve this, I consolidated the checking filters into a unified middleware handler and linked it to Express routing rules."}
                          {selectedProject.id === 'flirtyfy' && "Screenshot crops contained various layout signals, timestamps, and network tags that corrupted prompt validations. I developed regex strings to exclude metadata lines and group conversational items prior to sending requests."}
                          {selectedProject.id === 'vmware' && "Virtual machine host records often dropped connections under dynamic IP assignments. To solve this, I assigned static internal IPs and updated the proxy hosts definition layout."}
                        </p>
                      </div>

                      {/* 7. Key Features */}
                      <div className="space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary-light dark:text-brand-text-primary-dark border-l-2 border-brand-accent-blue pl-3">
                          Key Features
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark font-normal">
                          {selectedProject.id === 'worklance' && [
                            "Middleware validation interceptors blocking unverified applicants.",
                            "Token-based user session validation utilizing JWT authorization.",
                            "Role segregation dividing candidates and managers logically."
                          ].map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-brand-accent-blue mt-0.5 shrink-0 font-bold">&rarr;</span>
                              <span className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark font-normal">{feat}</span>
                            </li>
                          ))}
                          {selectedProject.id === 'flirtyfy' && [
                            "Screenshots conversion using Gemini Vision OCR integrations.",
                            "Multiple persona outputs supporting custom response styles.",
                            "Localized structures configuring app texts into distinct language properties."
                          ].map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-brand-accent-blue mt-0.5 shrink-0 font-bold">&rarr;</span>
                              <span className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark font-normal">{feat}</span>
                            </li>
                          ))}
                          {selectedProject.id === 'vmware' && [
                            "Round-Robin query balancing across isolated web servers.",
                            "Local high-availability clustering preventing service outages.",
                            "Bootstrapping configurations using custom install Bash scripts."
                          ].map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-brand-accent-blue mt-0.5 shrink-0 font-bold">&rarr;</span>
                              <span className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark font-normal">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 8. Outcome */}
                      <div className="space-y-3.5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary-light dark:text-brand-text-primary-dark border-l-2 border-brand-accent-blue pl-3">
                          Outcome & Value
                        </h3>
                        <p className="text-sm text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-[1.65] font-normal">
                          {selectedProject.id === 'worklance' && "The implementation of backend interceptors successfully prevented incomplete application submissions. This reduced administrative database cleanups and ensured higher candidate quality."}
                          {selectedProject.id === 'flirtyfy' && "The vision pipeline allowed users to retrieve AI recommendations instantly from image files, improving mobile app usability and speed."}
                          {selectedProject.id === 'vmware' && "The virtualized cluster demonstrated stable fail-over behaviors. Shutting down one server VM had zero impact on website access, showing high-availability routing logic."}
                        </p>
                      </div>

                      {/* Detail Visuals Evidence Grid */}
                      <div className="space-y-3 pt-4 border-t border-brand-border-light dark:border-brand-border-dark/60">
                        <h4 className="text-xs font-bold text-brand-text-primary-light dark:text-brand-text-primary-dark">
                          Project Screenshots
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {selectedProject.id === 'worklance' && (
                            <>
                              <ImageCard src={landingPage} alt="Landing Page" caption="Recruitment landing page layout." onClick={() => setActiveImage({ src: landingPage, alt: "Landing Page" })} />
                              <ImageCard src={postJobRestriction} alt="Gatekeeper Restrictions" caption="Applicant profile validation checks." onClick={() => setActiveImage({ src: postJobRestriction, alt: "Gatekeeper Restrictions" })} />
                              <ImageCard src={applyJob} alt="Apply Workflow" caption="Clean submission form validations." onClick={() => setActiveImage({ src: applyJob, alt: "Apply Workflow" })} />
                            </>
                          )}
                          {selectedProject.id === 'flirtyfy' && (
                            <>
                              <ImageCard src={flirtyfyHome} alt="App Home" caption="Sleek dashboard generator cards." onClick={() => setActiveImage({ src: flirtyfyHome, alt: "App Home" })} />
                              <ImageCard src={flirtyfyOCR} alt="OCR Reading" caption="Extracting conversation text from screenshots." onClick={() => setActiveImage({ src: flirtyfyOCR, alt: "OCR Reading" })} />
                              <ImageCard src={flirtyfyReply} alt="AI Outputs" caption="Personalized reply suggestions." onClick={() => setActiveImage({ src: flirtyfyReply, alt: "AI Outputs" })} />
                            </>
                          )}
                          {selectedProject.id === 'vmware' && (
                            <>
                              <ImageCard src={infrastructureArchitecture} alt="VM Map" caption="VMware virtual networking mapping." onClick={() => setActiveImage({ src: infrastructureArchitecture, alt: "VM Map" })} />
                              <ImageCard src={loadBalancerSwitching} alt="Balancer Logs" caption="Nginx round-robin switching logs." onClick={() => setActiveImage({ src: loadBalancerSwitching, alt: "Balancer Logs" })} />
                              <ImageCard src={htopMonitoring} alt="Htop Monitoring" caption="CPU utilization stress check profiles." onClick={() => setActiveImage({ src: htopMonitoring, alt: "Htop Monitoring" })} />
                            </>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Right 4 columns: Meta info sidebar */}
                    <div className="md:col-span-4 p-6 bg-slate-50/50 dark:bg-brand-surface-dark border border-brand-border-light dark:border-brand-border-dark rounded-xl space-y-6 shadow-xs sticky top-24">
                      
                      {/* Technical Decisions */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-brand-accent-blue font-bold uppercase tracking-wider block">
                          Technical Decisions
                        </span>
                        <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                          {selectedProject.decisions}
                        </p>
                      </div>

                      {/* Complexity */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-brand-accent-blue font-bold uppercase tracking-wider block">
                          Implementation Complexity
                        </span>
                        <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                          {selectedProject.complexity}
                        </p>
                      </div>

                      {/* Scalability */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-brand-accent-blue font-bold uppercase tracking-wider block">
                          Scalability Setup
                        </span>
                        <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                          {selectedProject.scalability}
                        </p>
                      </div>

                      {/* Business Value */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-brand-accent-blue font-bold uppercase tracking-wider block">
                          Value & Outcome
                        </span>
                        <p className="text-[11px] text-brand-text-secondary-light dark:text-brand-text-secondary-dark leading-relaxed font-normal">
                          {selectedProject.businessValue}
                        </p>
                      </div>

                      {/* 9. Technologies Used */}
                      <div className="space-y-2 pt-4 border-t border-brand-border-light dark:border-brand-border-dark/60">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-text-primary-light dark:text-brand-text-primary-dark">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.technologies.map(tech => (
                            <span key={tech} className="px-2.5 py-1 bg-brand-surface-light dark:bg-brand-bg-dark border border-brand-border-light dark:border-brand-border-dark text-brand-text-secondary-light dark:text-brand-text-secondary-dark rounded-md text-[10px] font-semibold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Lightbox screenshot backdrop */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 backdrop-blur-xs p-4"
              onClick={() => setActiveImage(null)}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-full bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer z-[120]"
                aria-label="Close image light box"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-w-full max-h-[85vh] rounded-lg border border-slate-800/85 shadow-2xl object-contain bg-slate-950/20"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
