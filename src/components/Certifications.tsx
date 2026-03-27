import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

export function Certifications() {
  const certifications = [
    {
      title: "Programming with Python",
      issuer: "E & ICT Academy, IIT Kanpur",
      date: "December 2020",
      description: "Successfully completed 4 weeks Summer Training with 'Excellent' performance level.",
      skills: ["Python", "Core Programming", "Logic Building"],
      gradient: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "CCNAv7 Introduction to the Network",
      issuer: "CISCO Networking Academy",
      date: "2021",
      description: "Foundational certification covering networking principles, security, and IP addressing.",
      skills: ["Networking", "Security", "IP Connectivity"],
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Certifications & Training
          </h2>
          <p className="text-gray-400 text-lg">
            Professional recognitions and technical milestones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/90 backdrop-blur-sm border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 h-full overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl bg-gray-800 border border-gray-700 ${cert.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Award size={24} />
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-2" />
                      {cert.date}
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-yellow-400 transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-blue-400 font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <div key={skill} className="flex items-center text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-md border border-gray-700">
                        <CheckCircle2 size={12} className="mr-1 text-yellow-400/70" />
                        {skill}
                      </div>
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
