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
      
      {/* Floating Computer Elements */}
      <div className="absolute top-20 left-20 opacity-10 animate-float">
        <div className="w-16 h-12 bg-primary/30 rounded-sm relative">
          <div className="absolute inset-1 bg-accent/40 rounded-sm">
            <div className="w-full h-1 bg-primary/60 mt-1 animate-pulse"></div>
            <div className="w-3/4 h-1 bg-accent/60 mt-1 animate-pulse delay-300"></div>
            <div className="w-1/2 h-1 bg-primary/60 mt-1 animate-pulse delay-600"></div>
          </div>
        </div>
      </div>
      
      {/* Circuit Pattern */}
      <div className="absolute top-1/3 right-20 opacity-10 animate-pulse delay-700">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-primary">
          <path d="M20 20 L60 20 L60 60 L20 60 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="20" r="3" fill="currentColor" className="animate-ping"/>
          <circle cx="60" cy="20" r="3" fill="currentColor" className="animate-ping delay-300"/>
          <circle cx="60" cy="60" r="3" fill="currentColor" className="animate-ping delay-600"/>
          <circle cx="20" cy="60" r="3" fill="currentColor" className="animate-ping delay-900"/>
        </svg>
      </div>
      
      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 text-primary/10 text-xs font-mono animate-slide-down">
          <div className="animate-pulse">1010101</div>
          <div className="animate-pulse delay-100">0110010</div>
          <div className="animate-pulse delay-200">1100101</div>
        </div>
        <div className="absolute top-0 right-1/3 text-accent/10 text-xs font-mono animate-slide-down delay-500">
          <div className="animate-pulse delay-300">1011001</div>
          <div className="animate-pulse delay-400">0101110</div>
          <div className="animate-pulse delay-500">1110010</div>
        </div>
      </div>
      
      {/* Floating Laptop */}
      <div className="absolute bottom-20 right-10 opacity-20 animate-float delay-1000">
        <div className="w-20 h-14 bg-gradient-to-br from-primary/40 to-accent/40 rounded-lg relative transform rotate-12">
          <div className="absolute inset-1 bg-black/60 rounded-md">
            <div className="w-full h-1 bg-primary/80 mt-1 animate-pulse"></div>
            <div className="w-2/3 h-1 bg-accent/80 mt-1 animate-pulse delay-200"></div>
            <div className="w-1/2 h-1 bg-primary/80 mt-1 animate-pulse delay-400"></div>
          </div>
          <div className="absolute -bottom-1 left-0 w-20 h-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-b-lg"></div>
        </div>
      </div>
      
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