import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-400' },
    { name: 'React', level: 85, color: 'bg-blue-400' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-400' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Python', level: 75, color: 'bg-blue-600' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="border-b-4 border-blue-500 pb-2">Technical Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
