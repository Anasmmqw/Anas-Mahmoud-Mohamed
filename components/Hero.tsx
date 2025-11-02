
import React from 'react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
}

const LocationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const EmailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);

const LinkedInIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);


const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="hero" className="text-center scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4">{data.name}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-8">{data.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-gray-300 mb-12">
            <div className="flex items-center"><LocationIcon /> {data.location}</div>
            <a href={`mailto:${data.email}`} className="flex items-center hover:text-white transition-colors"><EmailIcon /> {data.email}</a>
            <a href={`https://www.${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors"><LinkedInIcon /> {data.linkedin}</a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">{data.aboutMe.title}</h3>
                <p className="text-gray-300 leading-relaxed">{data.aboutMe.description}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-teal-400">{data.achievements.title}</h3>
                <div className="space-y-4">
                    {data.achievements.items.map(item => (
                        <div key={item.label} className="flex justify-between items-baseline bg-gray-700 p-3 rounded-md">
                            <span className="font-medium text-gray-200">{item.label}</span>
                            <span className="font-bold text-xl text-teal-300">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
