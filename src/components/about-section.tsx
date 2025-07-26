import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Palette, Music } from "lucide-react";

export function AboutSection() {
  const interests = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Computer Science",
      description: "Currently pursuing BCsIT at Softwarica College, diving deep into software development and technology innovation.",
      accent: "primary"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Sketching",
      description: "Expressing creativity through visual art, capturing ideas and imagination on paper with pencil and passion.",
      accent: "accent"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Guitar",
      description: "Finding harmony in music, sometimes strumming melodies that complement the rhythm of code and creativity.",
      accent: "primary"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a creative technologist who believes in the power of combining analytical thinking 
            with artistic expression to create meaningful experiences.
          </p>
        </div>

        {/* Interest Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-spring hover:scale-105 hover:-translate-y-2 hover:shadow-elegant"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full mb-6 transition-spring group-hover:scale-110 ${
                  interest.accent === 'primary' 
                    ? 'bg-primary/10 text-primary group-hover:shadow-glow-primary' 
                    : 'bg-accent/10 text-accent group-hover:shadow-glow-accent'
                }`}>
                  {interest.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-smooth">
                  {interest.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </CardContent>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-smooth" />
            </Card>
          ))}
        </div>

        {/* Personal Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-xl md:text-2xl font-medium text-foreground/80 italic max-w-3xl mx-auto">
            "Every line of code is a brushstroke, every algorithm a melody. 
            I'm crafting a symphony of technology and creativity."
          </blockquote>
          <cite className="text-accent font-semibold mt-4 block">- Adrien Shrestha</cite>
        </div>
      </div>
    </section>
  );
}