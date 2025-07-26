import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Animated Blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Animated Name */}
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl font-black leading-tight animate-slide-up">
              <span className="relative inline-block">
                <span 
                  className="bg-gradient-to-r from-accent via-primary to-accent bg-300% bg-clip-text text-transparent animate-gradient-shift"
                  style={{ backgroundSize: '300% 100%' }}
                >
                  Adrien
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/60 to-white/30 bg-clip-text text-transparent animate-text-shimmer" 
                      style={{ backgroundSize: '200% 100%' }}>
                  Adrien
                </span>
              </span>
              <br />
              <span className="relative inline-block animate-float">
                <span 
                  className="bg-gradient-to-r from-primary via-accent to-primary bg-300% bg-clip-text text-transparent animate-gradient-shift"
                  style={{ backgroundSize: '300% 100%', animationDelay: '0.5s' }}
                >
                  Shrestha
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/60 to-white/30 bg-clip-text text-transparent animate-text-shimmer"
                      style={{ backgroundSize: '200% 100%', animationDelay: '0.8s' }}>
                  Shrestha
                </span>
              </span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              A passionate <span className="text-primary font-semibold animate-pulse">BCsIT student</span> at 
              <span className="text-accent font-semibold"> Softwarica College</span>, 
              exploring the intersection of technology and creativity through 
              <span className="text-primary font-semibold"> sketching</span> and 
              <span className="text-accent font-semibold"> guitar</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 shadow-glow-primary hover:shadow-glow-primary hover:scale-110 transition-spring group"
            >
              <span className="group-hover:animate-pulse">Get In Touch</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent font-semibold px-8 py-3 hover:scale-110 transition-spring group"
            >
              <span className="group-hover:animate-bounce">View My Work</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}