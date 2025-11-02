
import React from 'react';

interface SkillsProps {
  data: {
    title: string;
    courses: { title: string; items: string[] };
    skills: { title: string; items: string[] };
  };
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="my-16 md:my-24 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-400">{data.title}</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-5 text-center text-white">{data.courses.title}</h3>
          <ul className="space-y-3">
            {data.courses.items.map((course, index) => (
              <li key={index} className="bg-gray-700 p-3 rounded-md text-gray-200 text-center font-medium">
                {course}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-5 text-center text-white">{data.skills.title}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.items.map((skill, index) => (
              <span key={index} className="bg-teal-500/20 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
