import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';

const skills = [
  { name: "React", level: 95, icon: "react" },
  { name: "JavaScript", level: 95, icon: "javascript" },
  { name: "HTML", level: 100, icon: "html" },
    { name: "CSS", level: 100, icon: "html" },

  { name: "Tailwind CSS", level: 90, icon: "tailwind" },
  { name: "Php", level: 90, icon: "php" },
  { name: "Laravel", level: 85, icon: "laravel" },
    { name: "Mysql", level: 90, icon: "laravel" },





  
];

const About = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Get to know more about my skills, experience, and what I can bring to your project.
        </p>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
          <p className="text-gray-400 mb-4">
            I'm a passionate frontend developer with 2+ years of experience creating 
            beautiful and functional web applications. My journey in web development 
            started when I was in college, and since then I've been constantly learning 
            and improving my skills.
          </p>
          <p className="text-gray-400 mb-4">
            I specialize in React.js and modern JavaScript frameworks, with a strong 
            focus on creating responsive, accessible, and performant user interfaces. 
            I believe that great design and functionality should go hand in hand.
          </p>
          <p className="text-gray-400 mb-6">
            I also have done some work on php and laravel using database Mysql and also created some projects in php
          </p>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">Experience</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium">Frontend Developer at CREXED</h5>
                <p className="text-sm text-gray-400">2025 - Present</p>
                <p className="text-gray-400 mt-1">
                  Developed and maintained multiple React applications, improved performance by 40%, 
                  and implemented new features based on user feedback.
                </p>
              </div>
              {/* <div>
                <h5 className="font-medium">UI Developer at Another Company</h5>
                <p className="text-sm text-gray-400">2019 - 2021</p>
                <p className="text-gray-400 mt-1">
                  Created responsive web interfaces and collaborated with designers to implement 
                  pixel-perfect UIs.
                </p>
              </div> */}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-800 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">Education</h4>
            <div>
              <h5 className="font-medium">Bachelor's in software engineering</h5>
              <p className="text-sm text-gray-400">The Islamia University of Bahawalpur , Pakistan  | 2023-2027</p>
              <p className="text-gray-400 mt-1">
  Continuously expanding my knowledge through ongoing education and professional development
</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;