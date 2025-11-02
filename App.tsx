
import React, { useState, useEffect } from 'react';
import { portfolioData } from './constants';
import { CaseStudy } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudyCard from './components/CaseStudyCard';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const data = portfolioData[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className={`bg-gray-900 text-gray-100 min-h-screen ${language === 'ar' ? 'font-cairo' : 'font-poppins'}`}>
      <Header language={language} setLanguage={setLanguage} name={data.name} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Hero data={data} />
        
        <section id="case-studies" className="my-16 md:my-24 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-400">{data.caseStudies.title}</h2>
          <div className="space-y-12">
            {data.caseStudies.studies.map((study: CaseStudy) => (
              <CaseStudyCard key={study.id} study={study} lang={language} />
            ))}
          </div>
        </section>

        <Skills data={data.skillsAndCourses} />

        <Contact data={data} />
      </main>

      <footer className="text-center py-6 border-t border-gray-700 text-gray-400">
        <p>&copy; {new Date().getFullYear()} {data.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
