import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Brain, ShoppingCart, Zap, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "AK Store",
      description: "Robust e-commerce platform with a React frontend and FastAPI backend. Features AWS DynamoDB storage and optimized deployment on EC2.",
      icon: ShoppingCart,
      tech: ["React", "FastAPI", "AWS DynamoDB", "EC2"],
      gradient: "from-blue-500 to-indigo-600",
      demo: "#",
      github: "https://github.com/kaushikaditya2202/ak_store"
    },
    {
      title: "PromptVerse",
      description: "Curated platform for GenAI prompts with a live Google Sheets CMS. Real-time prompt management without redeployment.",
      icon: Zap,
      tech: ["React", "Google Sheets API", "GenAI", "Tailwind"],
      gradient: "from-purple-500 to-pink-500",
      demo: "https://promptverse-ak.vercel.app",
      github: "https://github.com/kaushikaditya2202/prompt-verse"
    },
    {
      title: "Clinical Data Collector",
      description: "Mobile-first web app for medical data collection. Captures multi-angle photos/videos with direct device storage via File System API.",
      icon: Smartphone,
      tech: ["JavaScript", "File System API", "Medical-IT", "Vercel"],
      gradient: "from-green-500 to-emerald-600",
      demo: "https://data-collection-snowy-five.vercel.app/",
      github: "https://github.com/kaushikaditya2202/data_collection"
    },
    {
      title: "PharmaOracle AI",
      description: "Advanced AI drug and health intelligence platform built for health intelligence and data-driven optimization.",
      icon: Brain,
      tech: ["Python", "NLP", "Health-AI", "Production ML"],
      gradient: "from-orange-500 to-red-600",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/90 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400" disabled={project.demo === "#"}>
                          <ExternalLink size={16} />
                        </Button>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400" disabled={project.github === "#"}>
                          <Github size={16} />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}