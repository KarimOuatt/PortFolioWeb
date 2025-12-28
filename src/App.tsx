import { useState } from 'react';
import { Github, Linkedin, Mail, BarChart3, Brain, Download, Terminal, Cpu, Globe } from 'lucide-react';

// 1. On définit exactement ce qu'est une langue pour rassurer TypeScript
type Language = 'fr' | 'en';

function App() {
  // 2. On précise que 'lang' ne peut être QUE 'fr' ou 'en'
  const [lang, setLang] = useState<Language>('fr');

  const content = {
    fr: {
      heroTitle: "PortFolioWeb",
      heroDesc: "Étudiant en Mathématiques et Informatique à l'Université de Montréal (orientation science des données). Passionné par le Machine Learning, l'IA générative et l'analyse de données complexes.",
      btnCVFr: "CV Français",
      btnCVEn: "English Resume",
      sectionSkills: "Compétences Techniques",
      sectionProjects: "Projets Récents",
      footerRights: "© 2025 Abdoul Karim Ouattara. Tous droits réservés.",
      projects: [
        {
          title: "Prédiction de Churn (Telco)",
          description: "Projet de Data Science complet : Nettoyage de données, analyse exploratoire et modélisation ML pour prédire le désabonnement client.",
          tags: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
          github: "https://github.com/KarimOuatt/Telco_churn",
          image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          title: "Interview Helper IA",
          description: "Outil interactif d'aide à la préparation d'entrevues. Utilise l'IA pour simuler des questions et analyser les réponses en temps réel.",
          tags: ["Python", "Groq API", "Hugging Face","LangChain"],
          github: "https://github.com/KarimOuatt/Interview_Helper", 
          image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      skills: [
        { title: "Langages", items: ["Python", "SQL", "Java", "R"] },
        { title: "Apprentissage Automatique & IA", items: ["PyTorch", "Scikit-learn", "TensorFlow", "OpenCV", "Groq API", "RLHF", "Hugging Face"] },
        { title: "Bibliothèques Science des Données", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
        { title: "Outils de Développement", items: ["Git", "Docker", "Linux", "VS Code", "Streamlit", "n8n", "MatLab"] }
      ]
    },
    en: {
      heroTitle: "PortFolioWeb",
      heroDesc: "Mathematics and Computer Science student at the University of Montreal (Data Science track). Passionate about Machine Learning, Generative AI, and complex data analysis.",
      btnCVFr: "French Resume",
      btnCVEn: "English Resume",
      sectionSkills: "Technical Skills",
      sectionProjects: "Recent Projects",
      footerRights: "© 2025 Abdoul Karim Ouattara. All rights reserved.",
      projects: [
        {
          title: "Churn Prediction (Telco)",
          description: "End-to-end Data Science project: Data cleaning, exploratory analysis (EDA), and ML modeling to predict customer churn.",
          tags: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
          github: "https://github.com/KarimOuatt/Telco_churn",
          image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          title: "AI Interview Helper",
          description: "Interactive interview preparation tool. Uses AI to simulate questions and analyze user responses in real-time.",
          tags: ["Python", "Groq API", "Hugging Face", "LangChain"],
          github: "https://github.com/KarimOuatt/Interview_Helper", 
          image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      skills: [
        { title: "Languages", items: ["Python", "SQL", "Java", "R"] },
        { title: "Machine Learning & AI", items: ["PyTorch", "Scikit-learn", "TensorFlow", "OpenCV", "Groq API", "RLHF", "Hugging Face"] },
        { title: "Data Science Libraries", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
        { title: "Development Tools", items: ["Git", "Docker", "Linux", "VS Code", "Streamlit", "n8n", "MatLab"] }
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

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>

      <div className="relative">
        {/* --- HEADER --- */}
        <header className="border-b border-zinc-800/50 backdrop-blur-sm bg-zinc-950/80 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight hidden sm:block">Abdoul Karim Ouattara</h1>
            <h1 className="text-xl font-bold tracking-tight sm:hidden">A.K. Ouattara</h1>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              
              {/* BOUTON LANGUE */}
              <button 
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="flex items-center space-x-1 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors border border-zinc-700"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
              </button>

              <div className="w-px h-6 bg-zinc-800 mx-1"></div>

              <a
                href="https://github.com/KarimOuatt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/abdoulkaouatt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:trkarimouatt@gmail.com"
                className="hidden sm:block px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors font-medium text-sm"
              >
                Contact
              </a>
              <a
                href="mailto:trkarimouatt@gmail.com"
                className="sm:hidden p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          
          {/* Section Introduction */}
          <section className="mb-32">
            <div className="max-w-3xl">
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                {t.heroTitle}
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                {t.heroDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="Abdoul_Karim_Ouattara_cv_FR.pdf"
                  download="Abdoul_Karim_Ouattara_cv_FR.pdf"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg transition-all font-medium"
                >
                  <Download className="w-5 h-5" />
                  <span>{t.btnCVFr}</span>
                </a>

                <a
                  href="Abdoul_Karim_Ouattara_cv_EN.pdf"
                  download="Abdoul_Karim_Ouattara_cv_EN.pdf"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white rounded-lg transition-all font-medium"
                >
                  <Download className="w-5 h-5" />
                  <span>{t.btnCVEn}</span>
                </a>
              </div>
            </div>
          </section>

          {/* Section Compétences */}
          <section className="mb-32">
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">
              {t.sectionSkills}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700/50 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-zinc-400">{skillIcons[index]}</div>
                    <h4 className="font-semibold text-lg">{skill.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="text-sm text-zinc-400 bg-zinc-800/50 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section Projets */}
          <section>
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">
              {t.sectionProjects}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.projects.map((project, index) => (
                <a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold group-hover:text-zinc-100 transition-colors">
                        {project.title}
                      </h4>
                      <Github className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-zinc-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>

        {/* --- FOOTER --- */}
        <footer className="border-t border-zinc-800/50 mt-32">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-zinc-500">
                {t.footerRights}
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/KarimOuatt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/abdoulkaouatt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:trkarimouatt@gmail.com"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;