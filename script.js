// Language translations
const translations = {
  es: {
    title: "Raúl Zamudio - Lead Software Engineer & Technology Leader",
    heroTagline: "Más de 25 años diseñando, integrando y liderando sistemas seguros, escalables y centrados en el cumplimiento global para la industria de remesas, servicios financieros y tecnología empresarial.",
    aboutTitle: "Sobre mí",
    aboutPara1: "Soy ingeniero de software con más de 25 años de experiencia en el desarrollo e integración de sistemas críticos para la industria financiera, especialmente en remesas transnacionales, cumplimiento regulatorio (AML/OFAC/SDN) y arquitecturas de pago global.",
    aboutPara2: "Mi carrera ha estado marcada por la capacidad de liderar equipos técnicos internacionales, transformar procesos manuales en soluciones automatizadas y construir plataformas robustas que operan en múltiples jurisdicciones.",
    aboutPara3: "He desempeñado roles clave como analista, arquitecto, desarrollador, negociador y líder técnico en empresas como Mastercard, Transfast y OrderExpress, donde he impulsado la modernización de infraestructuras legacy, la adopción de prácticas DevOps y la implementación de APIs centralizadas que reducen costos y aceleran el tiempo de entrega.",
    aboutPara4: "Cuento con una Maestría en Tecnologías de la Información y la Comunicación, y mi enfoque siempre ha sido entregar soluciones que no solo funcionen, sino que generen impacto medible en eficiencia, seguridad y cumplimiento.",
    skillsTitle: "Habilidades clave",
    skillsLang: "Lenguajes y Plataformas",
    skillsDB: "Bases de datos",
    skillsArch: "Arquitectura y DevOps",
    skillsLead: "Liderazgo técnico",
    skillsDomain: "Dominios de negocio",
    skillsTools: "Herramientas",
    expTitle: "Experiencia profesional",
    exp1Title: "Lead Software Engineer - Mastercard",
    exp1Desc: "Lideró la implementación de sistemas globales, reduciendo tiempos de desarrollo en 90% mediante API centralizada.",
    exp2Title: "Senior Developer & DBA - Transfast",
    exp2Desc: "Desarrolló integraciones bancarias y cumplimientos OFAC/SDN para remesas transnacionales.",
    exp3Title: "Consultor Externo - VPA Templadora",
    exp3Desc: "Lideró y desarrolló el ERP de la empresa, Cotizaciones, Caja, Pedidos, Procesos, Almacen, Flotillas, y Reportes",
    exp4Title: "Technical Lead & DBA - OrderExpress",
    exp4Desc: "Implementó sistema en 100% de oficinas en EE.UU., mejorando eficiencia operativa.",
    exp5Title: "Developer - Diproyect",
    exp5Desc: "Inició carrera en desarrollo de software, enfocándose en bases de datos y la integracion de sistemas con compañias pagadoras de remesas.",
    projectsTitle: "Proyectos destacados",
    proj1Title: "Sistema Integral ORDER EXPRESS",
    proj1Desc: "Plataforma completa para gestión de órdenes, integrada con sistemas bancarios y de cumplimiento.",
    proj2Title: "RSP Connector API",
    proj2Desc: "API para conectores de pagos, facilitando migraciones a plataformas modernas como DX1.5.",
    proj3Title: "Sistema de Horarios Automatizado",
    proj3Desc: "Automatización de horarios para mejorar productividad en operaciones diarias.",
    proj4Title: "Integración Bancaria Global",
    proj4Desc: "Soluciones para remesas internacionales con alto cumplimiento regulatorio.",
    proj5Title: "Plataforma de Monitoreo AML en Tiempo Real",
    proj5Desc: "Monitoreo continuo de transacciones con alertas inteligentes para equipos de cumplimiento.",
    proj6Title: "Migración Cloud de Sistemas Legacy",
    proj6Desc: "Estrategia completa para trasladar aplicaciones críticas a infraestructura cloud híbrida.",
    proj7Title: "Portal de Reportes Regulatorios",
    proj7Desc: "Portal seguro para consolidar y entregar reportes regulatorios multi-jurisdicción.",
    proj8Title: "Motor Centralizado de Reglas de Cumplimiento",
    proj8Desc: "Motor configurable que unifica reglas AML/KYC para múltiples canales de pago.",
    proj9Title: "Framework de Integración de Pagos",
    proj9Desc: "Framework reutilizable que acelera la integración con redes de pago globales.",
    educationTitle: "Educación",
    educationItems: [
      "Maestría en Tecnologías de la Información y Comunicación — UNID (2022-2024)",
      "Licenciatura en Informática — Instituto Tecnológico de Roque (1996-2001)"
    ],
    langToggle: "EN",
    tocAbout: "Sobre mí",
    tocSkills: "Habilidades",
    tocExperience: "Experiencia profesional",
    tocProjects: "Proyectos destacados",
    tocEducation: "Educación"
  },
  en: {
    title: "Raúl Zamudio - Lead Software Engineer & Technology Leader",
    heroTagline: "More than 25 years designing, integrating, and leading secure, scalable systems focused on global compliance for the remittances, financial services, and enterprise technology industry.",
    aboutTitle: "About Me",
    aboutPara1: "I am a software engineer with over 25 years of experience in developing and integrating critical systems for the financial industry, particularly in transnational remittances, regulatory compliance (AML/OFAC/SDN), and global payment architectures.",
    aboutPara2: "My career has been marked by the ability to lead international technical teams, transform manual processes into automated solutions, and build robust platforms that operate across multiple jurisdictions.",
    aboutPara3: "I have held key roles as analyst, architect, developer, negotiator, and technical leader in companies such as Mastercard, Transfast, and OrderExpress, where I have driven the modernization of legacy infrastructures, the adoption of DevOps practices, and the implementation of centralized APIs that reduce costs and accelerate delivery times.",
    aboutPara4: "I hold a Master's in Information Technology and Communication, and my focus has always been to deliver solutions that not only work, but generate measurable impact on efficiency, security, and compliance.",
    skillsTitle: "Key Skills",
    skillsLang: "Languages and Platforms",
    skillsDB: "Databases",
    skillsArch: "Architecture and DevOps",
    skillsLead: "Technical Leadership",
    skillsDomain: "Business Domains",
    skillsTools: "Tools",
    expTitle: "Professional Experience",
    exp1Title: "Lead Software Engineer - Mastercard",
    exp1Desc: "Led the implementation of global systems, reducing development times by 90% through centralized API.",
    exp2Title: "Senior Developer & DBA - Transfast",
    exp2Desc: "Developed banking integrations and OFAC/SDN compliances for transnational remittances.",
    exp3Title: "External consultor - VPA Templadora",
    exp3Desc: "Led and developed the company's ERP, Quotations, Cashier, Orders, Processes, Warehouse, Fleets, and Reports.",
    exp4Title:  "Technical Lead & DBA - OrderExpress",
    exp4Desc: "Implemented system in 100% of US offices, improving operational efficiency.",
    exp5Title: "Developer - Diproyect",
    exp5Desc: "Started career in software development, focusing on databases and system integration with remittance paying companies.",
    projectsTitle: "Featured Projects",
    proj1Title: "Comprehensive ORDER EXPRESS System",
    proj1Desc: "Complete platform for order management, integrated with banking systems and compliance.",
    proj2Title: "RSP Connector API",
    proj2Desc: "API for payment connectors, facilitating migrations to modern platforms like DX1.5.",
    proj3Title: "Automated Scheduling System",
    proj3Desc: "Scheduling automation to improve productivity in daily operations.",
    proj4Title: "Global Banking Integration",
    proj4Desc: "Solutions for international remittances with high regulatory compliance.",
    proj5Title: "Real-time AML Monitoring Platform",
    proj5Desc: "Continuous transaction monitoring with intelligent alerts for compliance teams.",
    proj6Title: "Legacy Systems Cloud Migration",
    proj6Desc: "End-to-end strategy to move critical applications to hybrid cloud infrastructure.",
    proj7Title: "Regulatory Reporting Portal",
    proj7Desc: "Secure portal to consolidate and deliver multi-jurisdiction regulatory reports.",
    proj8Title: "Centralized Compliance Rules Engine",
    proj8Desc: "Configurable engine that unifies AML/KYC rules across payment channels.",
    proj9Title: "Payment Integration Framework",
    proj9Desc: "Reusable framework that accelerates integration with global payment networks.",
    educationTitle: "Education",
    educationItems: [
      "Master's in Information & Communication Technologies — UNID (2022-2024)",
      "Bachelor's in Informatics — Instituto Tecnológico de Roque (1996-2001)"
    ],
    langToggle: "ES",
    tocAbout: "About",
    tocSkills: "Skills",
    tocExperience: "Professional Experience",
    tocProjects: "Featured Projects",
    tocEducation: "Education"
  }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'es';

// Function to update language content
function updateLanguage() {
  document.documentElement.lang = currentLang;
  document.title = translations[currentLang].title;

  // Update toggle button
  document.getElementById('lang-toggle').textContent = translations[currentLang].langToggle;

  // Update hero
  document.querySelector('#hero p').textContent = translations[currentLang].heroTagline;

  // Update about
  document.querySelector('#about h2').textContent = translations[currentLang].aboutTitle;
  const aboutPs = document.querySelectorAll('#about p');
  aboutPs[0].textContent = translations[currentLang].aboutPara1;
  aboutPs[1].textContent = translations[currentLang].aboutPara2;
  aboutPs[2].textContent = translations[currentLang].aboutPara3;
  aboutPs[3].textContent = translations[currentLang].aboutPara4;

  // Update skills
  document.querySelector('#skills h2').textContent = translations[currentLang].skillsTitle;
  const skillCats = document.querySelectorAll('.skill-category h3');
  skillCats[0].textContent = translations[currentLang].skillsLang;
  skillCats[1].textContent = translations[currentLang].skillsDB;
  skillCats[2].textContent = translations[currentLang].skillsArch;
  skillCats[3].textContent = translations[currentLang].skillsLead;
  skillCats[4].textContent = translations[currentLang].skillsDomain;
  skillCats[5].textContent = translations[currentLang].skillsTools;

  // Update experience
  document.querySelector('#experience h2').textContent = translations[currentLang].expTitle;
  const expItems = document.querySelectorAll('.timeline-item');
  expItems[0].querySelector('h3').textContent = translations[currentLang].exp1Title;
  expItems[0].querySelectorAll('p')[1].textContent = translations[currentLang].exp1Desc;
  expItems[1].querySelector('h3').textContent = translations[currentLang].exp2Title;
  expItems[1].querySelectorAll('p')[1].textContent = translations[currentLang].exp2Desc;
  expItems[2].querySelector('h3').textContent = translations[currentLang].exp3Title;
  expItems[2].querySelectorAll('p')[1].textContent = translations[currentLang].exp3Desc;
  expItems[3].querySelector('h3').textContent = translations[currentLang].exp4Title;
  expItems[3].querySelectorAll('p')[1].textContent = translations[currentLang].exp4Desc;

  // Update projects
  document.querySelector('#projects h2').textContent = translations[currentLang].projectsTitle;
  const projCards = document.querySelectorAll('.project-card');
  const projectKeys = ['proj1', 'proj2', 'proj3', 'proj4', 'proj5', 'proj6', 'proj7', 'proj8', 'proj9'];
  projCards.forEach((card, index) => {
    const key = projectKeys[index];
    if (!key) {
      return;
    }
    const title = translations[currentLang][`${key}Title`];
    const desc = translations[currentLang][`${key}Desc`];
    const titleEl = card.querySelector('h3');
    if (titleEl && title) {
      titleEl.textContent = title;
    }
    const descEl = card.querySelector('p');
    if (descEl && desc) {
      descEl.textContent = desc;
    }
    const imgEl = card.querySelector('img');
    if (imgEl && title) {
      imgEl.setAttribute('alt', title);
    }
  });

  // Update education
  document.querySelector('#education h2').textContent = translations[currentLang].educationTitle;
  const educationList = document.querySelector('.education-list');
  if (educationList) {
    const items = translations[currentLang].educationItems || [];
    educationList.innerHTML = '';
    items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      educationList.appendChild(li);
    });
  }

  // Update TOC
  const tocLinks = document.querySelectorAll('#toc-list a');
  const tocMap = [
    { key: 'tocAbout', esLabel: 'Ir a Sobre mí', enLabel: 'Go to About' },
    { key: 'tocSkills', esLabel: 'Ir a Habilidades', enLabel: 'Go to Skills' },
    { key: 'tocExperience', esLabel: 'Ir a Experiencia profesional', enLabel: 'Go to Professional Experience' },
    { key: 'tocProjects', esLabel: 'Ir a Proyectos destacados', enLabel: 'Go to Featured Projects' },
    { key: 'tocEducation', esLabel: 'Ir a Educación', enLabel: 'Go to Education' }
  ];
  tocLinks.forEach((link, index) => {
    const { key, esLabel, enLabel } = tocMap[index];
    link.textContent = translations[currentLang][key];
    link.setAttribute('aria-label', currentLang === 'es' ? esLabel : enLabel);
  });
}

// Function to switch language
function switchLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', currentLang);
  updateLanguage();
}

// Simple interactions
document.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  updateLanguage();

  // Language toggle
  document.getElementById('lang-toggle').addEventListener('click', switchLanguage);

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Fade in sections on scroll
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});
