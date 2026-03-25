import React from 'react';
import { motion } from 'motion/react';
import { Code, Coffee, Heart } from 'lucide-react';
import profileImage from '../assets/1000101311.png';

export function About() {
  return (
    <section className="py-10 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <img 
              src={profileImage} 
              alt="Aditya Kaushik" 
              className="w-full max-w-md h-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Graduate AI Engineer passionate about building intelligent systems
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in creating AI-powered solutions that bridge the gap between complex algorithms 
              and real-world applications. My expertise spans machine learning, natural language processing, 
              and deep learning technologies.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              With experience as a Data Analyst at the University of West London and Protrainy, I've developed 
              a strong foundation in data analysis, visualization, and machine learning implementation. I'm 
              passionate about making AI accessible and impactful.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={20} />
                <span>Fluent in algorithms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="text-purple-400" size={20} />
                <span>Powered by caffeine</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-400" size={20} />
                <span>Passionate about AI</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "Engineering the future with AI, one neural network at a time."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}