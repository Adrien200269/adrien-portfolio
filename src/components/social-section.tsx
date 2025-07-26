import { SocialButton } from "@/components/ui/social-button";
import { Instagram, Music, Camera, PaintBucket } from "lucide-react";

export function SocialSection() {
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/adrixn_stha",
      variant: "default" as const
    },
    {
      icon: <Music className="w-5 h-5" />,
      label: "TikTok",
      href: "https://tiktok.com/@adrien_stha",
      variant: "accent" as const
    },
    {
      icon: <PaintBucket className="w-5 h-5" />,
      label: "Sketches",
      href: "https://www.pinterest.com/yourmomfavnoodles",
      variant: "accent" as const
    },
    {
      icon: <Camera className="w-5 h-5" />,
      label: "Snapchat",
      href: "https://snapchat.com/add/its_adrien69",
      variant: "default" as const
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Let's <span className="bg-gradient-accent bg-clip-text text-transparent animate-pulse">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Follow my journey through technology, art, and music. 
            Let's build something amazing together!
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
          {socialLinks.map((social, index) => (
            <SocialButton
              key={index}
              icon={social.icon}
              label={social.label}
              href={social.href}
              variant={social.variant}
            />
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 p-8 bg-gradient-card rounded-2xl border border-border/50 backdrop-blur-sm animate-slide-up hover:shadow-elegant transition-spring group" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">Get In Touch</h3>
          <p className="text-muted-foreground mb-6">
            Have a project in mind or just want to chat about tech and creativity? 
            I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:shresthasabja0@gmail.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-spring hover:scale-110 hover:shadow-glow-primary group"
            >
              <span className="group-hover:animate-bounce">Send Email</span>
            </a>
            <a 
              href="tel:+9779841271385" 
              className="inline-flex items-center justify-center px-6 py-3 border border-accent/50 text-accent rounded-lg font-medium hover:bg-accent/10 transition-spring hover:scale-110 hover:shadow-glow-accent group"
            >
              <span className="group-hover:animate-pulse">Call Me</span>
            </a>
          </div>
          <div className="mt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p>📧 shresthasabja0@gmail.com</p>
            <p>📱 +977 9841271385</p>
          </div>
        </div>
      </div>
    </section>
  );
}