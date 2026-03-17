import { useState } from 'react';
import { Github, Linkedin, Mail, BarChart3, Brain, Download, Terminal, Cpu, Globe, User, Code2, FolderGit2 } from 'lucide-react';

type Language = 'fr' | 'en';
type Section = 'about' | 'skills' | 'projects';

function App() {
  const [lang, setLang] = useState<Language>('fr');
  // Nouvel état pour gérer la section active (barre bleue)
  const [activeSection, setActiveSection] = useState<Section>('about');

  const content = {
    fr: {
      navAbout: "À propos",
      navSkills: "Compétences",
      navProjects: "Projets",
      heroTitle: "Abdoul Karim Ouattara",
      heroDesc: "Étudiant en Mathématiques et Informatique à l'Université de Montréal (orientation science des données). Passionné par le Machine Learning, l'IA générative et l'analyse de données complexes.",
      btnCVFr: "CV Français",
      btnCVEn: "English Resume",
      sectionSkills: "Compétences Techniques",
      sectionProjects: "Projets Récents",
      footerRights: "© 2026 Abdoul Karim Ouattara. Tous droits réservés.",
      projects: [
        {
          title: "Transactions Immobilières (MTL)",
          description: "Pipeline ETL complet exploitant les données ouvertes de Montréal. Nettoyage SQL complexe (RegEx, encodage UTF-8) et création d'un tableau de bord interactif Power BI.",
          tags: ["SQL", "MySQL", "Power BI", "ETL", "Data Cleaning"],
          github: "https://github.com/KarimOuatt/MTL_Immobilier_2023_2024",
          image: "/PortFolioWeb/demo_mtlpro20232024.gif"
        },
        {
          title: "Prédiction de Churn (Telco)",
          description: "Projet de Data Science complet : Nettoyage de données, analyse exploratoire et modélisation ML pour prédire le désabonnement client.",
          tags: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
          github: "https://github.com/KarimOuatt/Telco_churn",
          image: "/PortFolioWeb/demo_churn_project.gif"
        },
        {
          title: "Interview Helper IA",
          description: "Outil interactif d'aide à la préparation d'entrevues. Utilise l'IA pour simuler des questions et analyser les réponses en temps réel.",
          tags: ["Python", "Groq API", "Hugging Face","LangChain"],
          github: "https://github.com/KarimOuatt/Interview_Helper", 
          image: "/PortFolioWeb/demo_interview_helper.gif"
        }
      ],
      skills: [
        { title: "Langages", items: ["Python", "SQL", "Java", "R"] },
        { title: "Apprentissage Automatique & IA", items: ["PyTorch", "Scikit-learn", "TensorFlow", "OpenCV", "Groq API", "RLHF", "Hugging Face"] },
        { title: "Bibliothèques Science des Données", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
        { title: "Outils de Développement", items: ["MySQL", "Git", "Docker", "Linux", "VS Code", "Streamlit", "n8n", "MatLab", "Power BI"] }
      ]
    },
    en: {
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      heroTitle: "Abdoul Karim Ouattara",
      heroDesc: "Mathematics and Computer Science student at the University of Montreal (Data Science track). Passionate about Machine Learning, Generative AI, and complex data analysis.",
      btnCVFr: "French Resume",
      btnCVEn: "English Resume",
      sectionSkills: "Technical Skills",
      sectionProjects: "Recent Projects",
      footerRights: "© 2026 Abdoul Karim Ouattara. All rights reserved.",
      projects: [
        {
          title: "Montreal Real Estate Analysis",
          description: "End-to-end ETL pipeline using Montreal's Open Data. Advanced SQL cleaning (RegEx, UTF-8 encoding fixes) and interactive Power BI dashboard creation.",
          tags: ["SQL", "MySQL", "Power BI", "ETL", "Data Cleaning"],
          github: "https://github.com/KarimOuatt/MTL_Immobilier_2023_2024",
          image: "/PortFolioWeb/demo_mtlpro20232024.gif"
        },
        {
          title: "Churn Prediction (Telco)",
          description: "End-to-end Data Science project: Data cleaning, exploratory analysis (EDA), and ML modeling to predict customer churn.",
          tags: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
          github: "https://github.com/KarimOuatt/Telco_churn",
          image: "/PortFolioWeb/demo_churn_project.gif"
        },
        {
          title: "AI Interview Helper",
          description: "Interactive interview preparation tool. Uses AI to simulate questions and analyze user responses in real-time.",
          tags: ["Python", "Groq API", "Hugging Face", "LangChain"],
          github: "https://github.com/KarimOuatt/Interview_Helper", 
          image: "/PortFolioWeb/demo_interview_helper.gif"
        }
      ],
      skills: [
        { title: "Languages", items: ["Python", "SQL", "Java", "R"] },
        { title: "Machine Learning & AI", items: ["PyTorch", "Scikit-learn", "TensorFlow", "OpenCV", "Groq API", "RLHF", "Hugging Face"] },
        { title: "Data Science Libraries", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
        { title: "Development Tools", items: ["MySQL", "Git", "Docker", "Linux", "VS Code", "Streamlit", "n8n", "MatLab", "Power BI"] }
      ]
    }
  };

  const t = content[lang];

  const skillIcons = [
    <Cpu key="cpu" className="w-6 h-6" />,
    <Brain key="brain" className="w-6 h-6" />,
    <BarChart3 key="chart" className="w-6 h-6" />,
    <Terminal key="term" className="w-6 h-6" />
  ];

  // Fonction pour gérer le clic sur la navigation
  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    // Si la section n'est pas "about", on fait défiler vers l'ID correspondant
    if (section !== 'about') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Composant interne pour les boutons de navigation pour éviter la répétition
  const NavButton = ({ id, icon: Icon, label }: { id: Section, icon: any, label: string }) => {
    const isActive = activeSection === id;
    return (
      <button 
        onClick={() => handleNavClick(id)}
        className={`flex flex-col items-center justify-center pt-2 pb-1 px-4 min-w-[80px] transition-all duration-200 border-b-2 ${
          isActive 
            ? 'border-[#3B82F6] text-white' // Bleu vif et texte blanc pour l'actif
            : 'border-transparent text-[#9290C3] hover:text-white hover:bg-white/5' // Gris clair sinon
        }`}
      >
        <Icon className={`w-5 h-5 mb-1.5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
        <span className={`text-[13px] ${isActive ? 'font-semibold' : 'font-medium'}`}>{label}</span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#070F2B] text-white font-['Inter',sans-serif] scroll-smooth">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B1A55] via-[#070F2B] to-[#070F2B] fixed"></div>

      <div className="relative">
        {/* --- HEADER --- */}
        <header className="border-b border-[#1B1A55]/50 backdrop-blur-md bg-[#070F2B]/90 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            
            {/* GAUCHE: Avatar au lieu du texte */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3B82F6]/50 bg-[#1B1A55] flex items-center justify-center p-0.5 cursor-pointer" onClick={() => handleNavClick('about')}>
                {/* Remplace le src par le lien de ta vraie photo de profil */}
                <img 
                  src="https://api.dicebear.com/8.x/initials/svg?seed=AKO&backgroundColor=1B1A55&textColor=9290c3&fontSize=40&fontWeight=600" 
                  alt="Avatar" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            {/* CENTRE: Navigation Style "App" (Cachée sur très petits écrans) */}
            <nav className="hidden md:flex h-full items-end gap-1">
              <NavButton id="about" icon={User} label={t.navAbout} />
              <NavButton id="skills" icon={Code2} label={t.navSkills} />
              <NavButton id="projects" icon={FolderGit2} label={t.navProjects} />
            </nav>

            {/* DROITE: Langue et Réseaux */}
            <div className="flex items-center space-x-3">
              
              <button 
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="flex items-center space-x-1 px-3 py-1.5 bg-[#1B1A55] hover:bg-[#535C91] rounded-lg text-sm font-medium transition-colors border border-[#535C91]/50 text-[#9290C3] hover:text-white"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
              </button>

              <div className="w-px h-6 bg-[#1B1A55] mx-2 hidden sm:block"></div>

              <div className="hidden sm:flex items-center space-x-1">
                <a href="https://github.com/KarimOuatt" target="_blank" rel="noopener noreferrer" className="p-2 text-[#9290C3] hover:text-white hover:bg-[#1B1A55]/50 rounded-lg transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/abdoulkaouatt" target="_blank" rel="noopener noreferrer" className="p-2 text-[#9290C3] hover:text-white hover:bg-[#1B1A55]/50 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="max-w-6xl mx-auto px-6 pt-36 pb-20">
          
          {/* Section Introduction */}
          <section id="about" className="mb-32 scroll-mt-36">
            <div className="max-w-3xl">
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                {t.heroTitle}
              </h2>
              <p className="text-xl text-[#9290C3] leading-relaxed mb-8">
                {t.heroDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="Abdoul_Karim_Ouattara_cv_FR.pdf" download="Abdoul_Karim_Ouattara_cv_FR.pdf" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#9290C3] text-[#070F2B] hover:bg-white rounded-lg transition-all font-medium">
                  <Download className="w-5 h-5" />
                  <span>{t.btnCVFr}</span>
                </a>
                <a href="Abdoul_Karim_Ouattara_cv_EN.pdf" download="Abdoul_Karim_Ouattara_cv_EN.pdf" className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#1B1A55] hover:bg-[#535C91] border border-[#535C91]/50 text-white rounded-lg transition-all font-medium">
                  <Download className="w-5 h-5" />
                  <span>{t.btnCVEn}</span>
                </a>
              </div>
            </div>
          </section>

          {/* Section Compétences */}
          <section id="skills" className="mb-32 scroll-mt-36">
            <h3 className="text-sm font-semibold text-[#535C91] uppercase tracking-wider mb-8 flex items-center gap-2">
              <Code2 className="w-5 h-5" /> {t.sectionSkills}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.skills.map((skill, index) => (
                <div key={index} className="bg-[#1B1A55]/30 border border-[#1B1A55] rounded-xl p-6 hover:border-[#535C91] transition-colors flex-col h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-[#9290C3]">{skillIcons[index]}</div>
                    <h4 className="font-semibold text-lg">{skill.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-grow">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="text-sm text-[#9290C3] bg-[#1B1A55] px-3 py-1 rounded-full font-['JetBrains_Mono',monospace]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section Projets */}
          <section id="projects" className="scroll-mt-36">
            <h3 className="text-sm font-semibold text-[#535C91] uppercase tracking-wider mb-8 flex items-center gap-2">
              <FolderGit2 className="w-5 h-5" /> {t.sectionProjects}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.projects.map((project, index) => (
                <a key={index} href={project.github} target="_blank" rel="noopener noreferrer" className="group bg-[#1B1A55]/20 border border-[#1B1A55] rounded-xl overflow-hidden hover:border-[#535C91] transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden bg-[#070F2B] flex-shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070F2B] to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold group-hover:text-[#9290C3] transition-colors">{project.title}</h4>
                      <Github className="w-5 h-5 text-[#535C91] group-hover:text-[#9290C3] transition-colors flex-shrink-0 ml-4" />
                    </div>
                    <p className="text-[#9290C3] mb-4 leading-relaxed flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-[#9290C3] bg-[#1B1A55] px-2 py-1 rounded font-['JetBrains_Mono',monospace]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>

        {/* --- FOOTER --- */}
        <footer className="border-t border-[#1B1A55] mt-32 relative z-10 bg-[#070F2B]/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-[#9290C3]">{t.footerRights}</p>
              <div className="flex items-center space-x-6">
                <a href="https://github.com/KarimOuatt" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9290C3] hover:text-white transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/abdoulkaouatt" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9290C3] hover:text-white transition-colors">LinkedIn</a>
                <a href="mailto:trkarimouatt@gmail.com" className="text-sm text-[#9290C3] hover:text-white transition-colors">Email</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;