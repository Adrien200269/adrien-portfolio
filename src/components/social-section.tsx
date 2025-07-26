import { SocialButton } from "@/components/ui/social-button";
import { Instagram, Music, Camera } from "lucide-react";

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
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow my journey through technology, art, and music. 
            Let's build something amazing together!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
        <div className="mt-16 p-8 bg-gradient-card rounded-2xl border border-border/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-muted-foreground mb-6">
            Have a project in mind or just want to chat about tech and creativity? 
            I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@adrienshrestha.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth hover:scale-105"
            >
              Send Email
            </a>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center justify-center px-6 py-3 border border-accent/50 text-accent rounded-lg font-medium hover:bg-accent/10 transition-smooth hover:scale-105"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}