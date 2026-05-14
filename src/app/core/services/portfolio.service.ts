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
    title: 'Full-Stack Developer',
    avatar: './avatar.png',
    email: 'den.aka.dizel@gmail.com',
    telegram: '@SoSeductive',
    github: 'SoSeductive',
    linkedin: 'denys-vorobiov',
    location: 'Poznan, Poland',
    experience: '12+ years',
    summary: `
    <p>I'm a seasoned Full-Stack Developer with over 12 years of hands-on experience in crafting robust and scalable web solutions. My journey has equipped me with a deep understanding of the entire development lifecycle, from sophisticated backend architecture to dynamic, modern frontends.</p>
    
    <p>While my core expertise lies in PHP, MySQL, and the WordPress ecosystem, I've rapidly expanded my frontend capabilities. I'm now leveraging Angular, React, and TypeScript to build highly interactive, enterprise-grade user interfaces. My strong background in OOP and JavaScript (ES6+) has made this transition seamless and highly effective.</p>
    
    <p>My passion is to bridge complex technical challenges with elegant, user-centric design. I excel at:</p>
    <ul>
      <li>Designing and implementing efficient backend APIs and data structures.</li>
      <li>Developing custom WordPress plugins and themes that extend functionality.</li>
      <li>Building responsive, pixel-perfect frontends using Angular, React, Tailwind CSS, and modern JavaScript.</li>
      <li>Integrating diverse external services (e.g., Stripe, HubSpot, AWS, Google Cloud).</li>
      <li>Solving critical performance bottlenecks and optimizing code.</li>
    </ul>
    
    <p>This portfolio showcases my work, from intricate API integrations to dynamic applications built with Angular. I am committed to turning visionary ideas into tangible, successful web applications.</p>
    <p>Let's create something impactful together!</p>
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

  readonly experience = signal([
    {
      company: 'UDX',
      role: 'Full-Stack Developer',
      period: '2013 — 2025',
      highlights: [
        {
          title: 'Role Evolution',
          desc: 'Transitioned from a lead developer to a strategic partner, scaling complex projects on a flexible basis.'
        },
        {
          title: 'Backend Excellence',
          desc: 'Engineered robust web applications and complex systems using PHP and MySQL.'
        },
        {
          title: 'Frontend Innovation',
          desc: 'Architected high-performance interfaces using Native JS, Angular, and React.'
        },
        {
          title: 'Custom Solutions',
          desc: 'Developed bespoke WordPress plugins and themes from scratch.'
        }
      ]
    },
    {
      company: 'UDX',
      role: 'Full-Stack Developer (Part-time)',
      period: '2025 - Present',
      highlights: [
        {
          title: 'Role Evolution',
          desc: 'Transitioned from a lead developer to a strategic partner, scaling complex projects on a flexible basis.'
        },
        {
          title: 'Backend Excellence',
          desc: 'Engineered robust web applications and complex systems using PHP and MySQL.'
        },
        {
          title: 'Frontend Innovation',
          desc: 'Architected high-performance interfaces using Native JS, Angular, and React.'
        },
        {
          title: 'Custom Solutions',
          desc: 'Developed bespoke WordPress plugins and themes from scratch.'
        }
      ]
    }
  ]);

  readonly skills = signal<Skill[]>([
    // BACK-END & DB
    { name: 'Node.js (TypeScript)', category: 'Back-end' },
    { name: 'PHP', category: 'Back-end' },
    { name: 'PostgreSQL', category: 'Back-end' },
    { name: 'MySQL', category: 'Back-end' },
    { name: 'Prisma ORM', category: 'Back-end' },
    { name: 'RESTful API Design', category: 'Back-end' },

    // FRONT-END
    { name: 'Angular', category: 'Front-end' },
    { name: 'React', category: 'Front-end' },
    { name: 'TypeScript', category: 'Front-end' },
    { name: 'JavaScript (ES6+)', category: 'Front-end' },
    { name: 'Tailwind CSS', category: 'Front-end' },
    { name: 'HTML5/CSS/SCSS', category: 'Front-end' },
    { name: 'Timber/Twig', category: 'Front-end' },
    { name: 'jQuery', category: 'Front-end' },

    // CMS & PLATFORMS
    { name: 'WordPress', category: 'CMS' },
    { name: 'Firebase', category: 'Tools' },

    // INFRASTRUCTURE & TOOLS
    { name: 'Cloudflare (DNS & Edge)', category: 'Tools' },
    { name: 'Google Cloud (GCS)', category: 'Tools' },
    { name: 'AWS', category: 'Tools' },
    { name: 'Linux/Ubuntu Server', category: 'Tools' },

    // INTEGRATIONS & ANALYTICS
    { name: 'Stripe API (Payments)', category: 'Tools' },
    { name: 'Salesforce API', category: 'Tools' },
    { name: 'HubSpot API', category: 'Tools' },
    { name: 'Google Maps/Calendar API', category: 'Tools' },
    { name: 'Google Analytics/GTM', category: 'Tools' },
]);

  readonly skillGroups = computed(() => {
    const groups = {
      'Backend & DB': this.skills().filter(s => s.category === 'Back-end'),
      'Frontend & UI': this.skills().filter(s => s.category === 'Front-end'),
      'CMS & Architecture': this.skills().filter(s => s.category === 'CMS'),
      'Tools & Cloud': this.skills().filter(s => s.category === 'Tools')
    };
    return Object.entries(groups);
  });

  readonly projects = signal<Project[]>([
    {
      id: '001',
      title: 'PeakCLT',
      url: 'https://peakclt.com/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'TailwindCSS', 'Stripe API', 'HubSpot API', 'CourtReserve API'],
      description: 'A comprehensive high-performance platform for a sports and heavy equipment complex, built as a fully custom, lightweight WordPress solution.',
      isMain: true,
    },
    {
      id: '002',
      title: 'UDX.io',
      url: 'https://udx.io',
      tech: ['WordPress', 'PHP', 'JavaScript', 'React', 'HTML', 'CSS', 'REST API'],
      description: 'The flagship corporate website for UDX agency, designed to showcase high-end technical capabilities.',
      isMain: true
    },
    {
      id: '003',
      title: 'Financial Social Work',
      url: 'https://financialsocialwork.com',
      tech: ['WordPress', 'PHP', 'JavaScript', 'React', 'HTML', 'CSS', 'REST API'],
      description: 'An expansive educational and certification platform for social work professionals. Built modular React components to manage complex educational content flows and dynamic user certification paths.',
      isMain: true
    },
    {
      id: '004',
      title: 'ICA Miami',
      url: 'https://icamiami.org/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Salesforce', 'Firebase', 'Timber', 'Twig'],
      description: 'Complex data integration between Salesforce, Firebase and WordPress.',
      isMain: true
    },
    {
      id: '005',
      title: 'ArtWithMe Miami',
      url: 'https://artwithmemiami.com/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'TailwindCSS', 'Spotify API', 'Imgix'],
      description: 'Developed a modular theme framework for high-traffic event websites. Built a proprietary mu-plugin to register custom SiteOrigin modules; integrated Imgix API for real-time cloud image compression; previously implemented a seamless music streaming bridge via Spotify API.',
      isMain: true
    },
    {
      id: '006',
      title: 'Destination Pickleball',
      url: 'https://destinationpickleball.com/',
      tech: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'TailwindCSS', 'Imgix'],
      description: 'High-performance event site with custom modules and media optimization.',
      isMain: true
    },
    {
      id: '007',
      title: 'WP Stateless',
      url: 'https://wordpress.org/plugins/wp-stateless/',
      tech: ['Google API', 'PHP', 'GCP'],
      description: 'Open-source WP plugin for offloading media to Google Cloud Storage.',
      isMain: true
    }
  ]);
}