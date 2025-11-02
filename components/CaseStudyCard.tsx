
import React from 'react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  study: CaseStudy;
  lang: 'ar' | 'en';
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, lang }) => {
    const strategyTitle = lang === 'ar' ? '💡 الاستراتيجية' : '💡 Strategy';
    const goalTitle = lang === 'ar' ? '🎯 الهدف' : '🎯 Goal';
    const resultsTitle = lang === 'ar' ? '📊 النتائج' : '📊 Results';
    const adPlaceholder = lang === 'ar' ? 'لقطة شاشة للإعلان' : 'Ad Screenshot Placeholder';
    const descriptionTitle = lang === 'ar' ? '🏷️ نبذة' : '🏷️ About';

  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-teal-500/20 hover:scale-[1.02]">
      <div className="p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-white">{study.brand}</h3>
          <p className="text-lg text-teal-400 font-medium">{study.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
                <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-200">{descriptionTitle}</h4>
                    <p className="text-gray-300">{study.description}</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-200">{goalTitle}</h4>
                    <p className="text-gray-300">{study.goal}</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-200">{strategyTitle}</h4>
                    <ul className={`space-y-2 ${lang === 'ar' ? 'pr-5' : 'pl-5'}`}>
                        {study.strategy.map((item, index) => (
                        <li key={index} className="flex">
                            <span className="text-teal-400 font-bold mr-2">▪</span>
                            <span className="text-gray-300">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-200">{resultsTitle}</h4>
                    <div className="space-y-2">
                        {study.results.map(result => (
                            <div key={result.metric} className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg">
                                <span className="text-sm font-medium text-gray-300">{result.metric}</span>
                                <span className="text-lg font-bold text-teal-300">{result.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">{adPlaceholder}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
