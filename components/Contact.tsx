
import React from 'react';
import { PortfolioData } from '../types';

interface ContactProps {
  data: PortfolioData;
}

const QrCodeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
        <line x1="14" y1="14" x2="14" y2="14.01"></line>
        <line x1="17" y1="14" x2="17" y2="21"></line>
        <line x1="21" y1="17" x2="14" y2="17"></line>
        <line x1="21" y1="21" x2="21" y2="21.01"></line>
        <line x1="14" y1="19" x2="14" y2="19.01"></line>
        <line x1="19" y1="14" x2="19" y2="14.01"></line>
    </svg>
);


const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="my-16 md:my-24 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-teal-400">{data.contact.title}</h2>
        
        <div className="space-y-4 mb-10">
            <p className="text-lg text-gray-300">
                <a href={`mailto:${data.email}`} className="hover:text-teal-300 transition-colors">{data.email}</a>
            </p>
             <div className="flex justify-center items-center gap-x-4 text-lg text-gray-300">
                {data.phones.map(phone => <span key={phone}>{phone}</span>)}
            </div>
            <p className="text-lg">
                <a href={`https://www.${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-300 transition-colors">
                   {data.linkedin}
                </a>
            </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-gray-900 p-6 rounded-lg">
          <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center">
            <QrCodeIcon className="w-20 h-20 text-gray-500" />
          </div>
          <p className="text-lg font-semibold text-gray-200 max-w-xs">{data.contact.qrCodeText}</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
