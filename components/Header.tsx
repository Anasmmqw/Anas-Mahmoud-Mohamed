
import React from 'react';

interface HeaderProps {
  language: 'ar' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'ar' | 'en'>>;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, name }) => {
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const navLinks = language === 'ar' ? 
    [{href: '#hero', text: 'الرئيسية'}, {href: '#case-studies', text: 'دراسات الحالة'}, {href: '#skills', text: 'المهارات'}, {href: '#contact', text: 'التواصل'}] :
    [{href: '#hero', text: 'Home'}, {href: '#case-studies', text: 'Case Studies'}, {href: '#skills', text: 'Skills'}, {href: '#contact', text: 'Contact'}];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
              {name}
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
             {navLinks.map(link => (
                 <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">{link.text}</a>
             ))}
          </div>
           <button 
            onClick={toggleLanguage}
            className="bg-teal-500 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            {language === 'ar' ? 'EN' : 'عربي'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
