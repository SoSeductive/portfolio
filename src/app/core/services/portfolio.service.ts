import { Injectable, signal, computed } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  url: string;
  tech: string[];
  description: string;
  isMain?: boolean;
}

export interface Skill {
  name: string;
  category: 'Back-end' | 'Front-end' | 'CMS' | 'Tools';
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly profile = signal({
    name: 'Denys Vorobiov',
    title: 'Senior Full-Stack Developer',
    avatar: './avatar.png',
    email: 'den.aka.dizel@gmail.com',
    telegram: '@SoSeductive',
    github: 'SoSeductive',
    linkedin: 'denys-vorobiov',
    location: 'Poznan, Poland',
    experience: '13 years',
    summary: `
    <p>I am a Senior Full-Stack Engineer with 13 years of commercial experience designing, building, and scaling high-load web ecosystems. My expertise spans the entire product development lifecycle—from low-level system design and relational database optimization to crafting production-grade, reactive user interfaces.</p>
    
    <p>Instead of relying on boilerplate setups, I specialize in engineering tailored architecture. I balance deep backend efficiency using OOP PHP, Node.js, and complex MySQL infrastructure with modern reactive frontends driven by Angular, React, and TypeScript. Having designed and launched an active, multi-tenant sports club automation SaaS, I understand how to translate demanding business metrics into stable, secure, and performant code.</p>
    
    <p>Core Areas of Expertise:</p>
    <ul>
      <li><strong>System Architecture & Design:</strong> Designing distributed backend infrastructures, RESTful APIs, and secure data pipelines.</li>
      <li><strong>Enterprise-Scale Database Optimization:</strong> Tuning relational databases, structural schema refactoring, and high-volume transaction management.</li>
      <li><strong>Reactive Interface Engineering:</strong> Building clean, scalable, state-driven frontends using Angular, React, and strict TypeScript.</li>
      <li><strong>Full-Cycle Product Ownership:</strong> Managing products from initial system prototyping and cloud deployment (AWS, GCP) to integration of multi-tier billing logic (Stripe) and CRM synchronization (HubSpot).</li>
    </ul>
  `
  });

  readonly education = signal({
    university: 'Kharkiv National University of Radio Electronics (KNURE)',
    degree: 'Master’s Degree in Computer Technologies',
    period: '2006 – 2011',
    specialization: 'Computer Systems and Networks / Computer Technologies',
    focus: [
      'Software Engineering',
      'Algorithms and Data Structures',
      'Database Management',
      'Systems Architecture'
    ]
  });

  // Переписано: Хроника твоего профессионального и технологического роста с реальными метриками
  readonly experience = signal([
    {
      company: 'CourtConnect',
      role: 'Founder & Lead Architect',
      period: '2025 — Present',
      highlights: [
        {
          title: 'SaaS Architecture',
          desc: 'Architected and developed a comprehensive multi-tenant SaaS platform for racket sports club automation from scratch. Engineered the system design, continuous integration workflows, and secure multitenancy isolation pipelines.'
        },
        {
          title: 'Financial Infrastructure',
          desc: 'Implemented complex webhooks and automated multi-tier billing workflows using the Stripe API, executing seamless synchronization with HubSpot API for high-volume data streams.'
        }
      ]
    },
    {
      company: 'UDX',
      role: 'Lead Full-Stack Developer / Tech Consultant',
      period: '2020 — 2025',
      highlights: [
        {
          title: 'Infrastructure & Database Design',
          desc: 'Supervised system design and production security deployment across AWS and Google Cloud environments. Refactored bottlenecked relational schemas, reducing heavy database engine stress and server processing loads.'
        },
        {
          title: 'Technical Consulting',
          desc: 'Transitioned to a strategic advisory role for core applications, managing system scalability, overseeing complex migrations of legacy logic, and conducting critical code reviews.'
        }
      ]
    },
    {
      company: 'UDX',
      role: 'Senior Full-Stack Developer',
      period: '2016 — 2020',
      highlights: [
        {
          title: 'Frontend Modernization',
          desc: 'Spearheaded internal shifts towards strict component-driven development, migrating legacy business platforms into modern Single Page Applications (SPA) with React, Angular, and TypeScript.'
        },
        {
          title: 'Custom Logic Engineering',
          desc: 'Developed bespoke, low-level internal plugin engines and deep theme frameworks from scratch, handling non-standard enterprise operations and high-traffic workflows.'
        }
      ]
    },
    {
      company: 'UDX',
      role: 'Full-Stack Developer',
      period: '2013 — 2016',
      highlights: [
        {
          title: 'Core Backend Development',
          desc: 'Engineered clean, testable object-oriented backend services using native PHP and MySQL. Designed pixel-perfect adaptive interfaces ensuring seamless compliance across distinct devices and engines.'
        }
      ]
    }
  ]);

  readonly skills = signal<Skill[]>([
    { name: 'Node.js (TypeScript)', category: 'Back-end' },
    { name: 'PHP (OOP/Core)', category: 'Back-end' },
    { name: 'PostgreSQL', category: 'Back-end' },
    { name: 'MySQL', category: 'Back-end' },
    { name: 'Prisma ORM', category: 'Back-end' },
    { name: 'RESTful API Design', category: 'Back-end' },
    { name: 'System Design', category: 'Back-end' },

    { name: 'Angular', category: 'Front-end' },
    { name: 'React', category: 'Front-end' },
    { name: 'TypeScript', category: 'Front-end' },
    { name: 'JavaScript (ES6+)', category: 'Front-end' },
    { name: 'Tailwind CSS', category: 'Front-end' },
    { name: 'HTML5/CSS/SCSS', category: 'Front-end' },
    { name: 'Timber/Twig', category: 'Front-end' },
    { name: 'jQuery', category: 'Front-end' },

    { name: 'WordPress Core', category: 'CMS' },
    { name: 'Custom Plugin Dev', category: 'CMS' },
    { name: 'Firebase', category: 'Tools' },

    { name: 'Cloudflare (DNS & Edge)', category: 'Tools' },
    { name: 'Google Cloud (GCS)', category: 'Tools' },
    { name: 'AWS', category: 'Tools' },
    { name: 'Linux/Ubuntu Server', category: 'Tools' },

    { name: 'Stripe API', category: 'Tools' },
    { name: 'Salesforce API', category: 'Tools' },
    { name: 'HubSpot API', category: 'Tools' },
    { name: 'Google Maps/Calendar API', category: 'Tools' },
    { name: 'Google Analytics/GTM', category: 'Tools' },
  ]);

  readonly skillGroups = computed(() => {
    const groups = {
      'Backend & Architecture': this.skills().filter(s => s.category === 'Back-end'),
      'Frontend & UI': this.skills().filter(s => s.category === 'Front-end'),
      'CMS & Custom Modules': this.skills().filter(s => s.category === 'CMS'),
      'Cloud & Analytics Infrastructure': this.skills().filter(s => s.category === 'Tools')
    };
    return Object.entries(groups);
  });

  // Интегрировали жесткие числовые метрики и акценты на производительность в описания проектов
  readonly projects = signal<Project[]>([
    {
      id: '001',
      title: 'CourtConnect',
      url: 'https://courtsconnect.io/',
      tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'TailwindCSS', 'Cloudflare', 'Resend API'],
      description: 'An advanced, high-performance multi-tenant SaaS platform built from scratch for racket sports club management. Features automated real-time scheduler algorithms, cross-service multi-tier Stripe subscription loops, and strict tenant space isolation.',
      isMain: true,
    },
    {
      id: '002',
      title: 'PeakCLT',
      url: 'https://peakclt.com/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'TailwindCSS', 'Stripe API', 'HubSpot API', 'CourtReserve API'],
      description: 'A fully custom, high-load heavyweight platform managing sports facility operations. Built a lightweight theme engine linking complex background integrations between Stripe, HubSpot CRM, and real-time CourtReserve scheduling pipelines.',
      isMain: true,
    },
    {
      id: '003',
      title: 'UDX.io',
      url: 'https://udx.io',
      tech: ['WordPress', 'PHP', 'JavaScript', 'React', 'HTML', 'CSS', 'REST API'],
      description: 'The flagship corporate engine for the UDX agency, architected to withstand heavy client-side request volumes while demonstrating advanced modern component-driven UI frameworks.',
      isMain: true
    },
    {
      id: '004',
      title: 'Financial Social Work',
      url: 'https://financialsocialwork.com',
      tech: ['WordPress', 'PHP', 'JavaScript', 'React', 'HTML', 'CSS', 'REST API'],
      description: 'An expansive enterprise educational ecosystem serving over thousands of professionals. Created state-driven React modules handling heavily nested certification paths and real-time processing of dynamic user documentation.',
      isMain: true
    },
    {
      id: '005',
      title: 'ICA Miami',
      url: 'https://icamiami.org/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Salesforce', 'Firebase', 'Timber', 'Twig'],
      description: 'Architected a highly complex real-time distributed data synchronization bridge bridging Salesforce CRM, Firebase real-time cluster stores, and a custom WordPress content delivery layer.',
      isMain: true
    },
    {
      id: '006',
      title: 'ArtWithMe Miami',
      url: 'https://artwithmemiami.com/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'TailwindCSS', 'Spotify API', 'Imgix'],
      description: 'Developed an automated modular layout system engineered for explosive spikes during major events. Built custom internal plugins managing asset compression engines via Imgix API, and unified a live content streaming integration with Spotify API.',
      isMain: true
    },
    {
      id: '007',
      title: 'Destination Pickleball',
      url: 'https://destinationpickleball.com/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'TailwindCSS', 'Imgix'],
      description: 'An ultra-fast event engine built on an optimized responsive layout, deploying real-time automated cloud image transformations to guarantee sub-second visual load performance.',
      isMain: true
    },
    {
      id: '008',
      title: 'WP Stateless',
      url: 'https://wordpress.org/plugins/wp-stateless/',
      tech: ['Google API', 'PHP', 'GCP'],
      description: 'An open-source performance plugin with thousands of active production downloads. Allows complex systems to offload disk operations entirely to Google Cloud Storage (GCS) buckets dynamically.',
      isMain: true
    }
  ]);
}