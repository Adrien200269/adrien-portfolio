import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ProjectsSection() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: reactRef, isInView: reactInView } = useScrollAnimation({ delay: 0.2 });
  const { ref: kotlinRef, isInView: kotlinInView } = useScrollAnimation({ delay: 0.4 });

  const reactProjects = [
    {
      title: "Blissful Cakes",
      description: "A delightful cake ordering platform built with React and Vite, featuring a modern UI for browsing and ordering custom cakes.",
      url: "https://github.com/Adrien200269/Blissful_Cakes",
      tech: ["React", "Vite", "TypeScript"]
    },
    {
      title: "Whisper Box",
      description: "An anonymous messaging platform created with React and Vite, allowing users to send and receive messages securely.",
      url: "https://github.com/Visnusah/WHISPER_BOX",
      tech: ["React", "Vite", "JavaScript"]
    }
  ];

  const kotlinProjects = [
    {
      title: "Blissful Kotlin",
      description: "A native Android application built with Kotlin, showcasing modern Android development practices and beautiful UI design.",
      url: "https://github.com/Adrien200269/blissful_kotlin",
      tech: ["Kotlin", "Android", "Material Design"]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-300% bg-clip-text text-transparent animate-gradient-shift">
              My Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey, featuring web applications built with React & Vite, 
            and mobile apps crafted with Kotlin.
          </p>
        </motion.div>

        {/* React + Vite Projects */}
        <motion.div 
          ref={reactRef}
          initial={{ opacity: 0, x: -100 }}
          animate={reactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center animate-float">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              React + Vite Projects
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reactProjects.map((project, index) => {
              const { ref, isInView } = useScrollAnimation({ delay: 0.1 + index * 0.1 });
              return (
                <motion.div
                  key={project.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                >
                  <Card 
                    className="group bg-gradient-card border-accent/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:scale-105"
                  >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-glow-primary transition-all"
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Kotlin Projects */}
        <motion.div 
          ref={kotlinRef}
          initial={{ opacity: 0, x: 100 }}
          animate={kotlinInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center animate-float delay-500">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Kotlin Projects
            </h3>
          </div>
          
          <div className="grid md:grid-cols-1 max-w-2xl">
            {kotlinProjects.map((project, index) => {
              const { ref, isInView } = useScrollAnimation({ delay: 0.2 + index * 0.1 });
              return (
                <motion.div
                  key={project.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                >
                  <Card 
                    className="group bg-gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-glow-accent hover:scale-105"
                  >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full border-accent/50 text-accent hover:bg-accent/10 hover:border-accent group-hover:shadow-glow-accent transition-all"
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Floating Code Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 right-20 animate-float delay-1000"
        >
          <div className="text-6xl">{'<>'}</div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-40 left-10 animate-float delay-2000"
        >
          <div className="text-4xl font-mono">{'{ }'}</div>
        </motion.div>
      </div>
    </section>
  );
}