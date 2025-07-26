import { Button } from "./button";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  variant?: "default" | "accent";
}

export function SocialButton({ icon, label, href, variant = "default" }: SocialButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className={cn(
        "group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm",
        "hover:border-primary/50 hover:shadow-glow-primary transition-spring",
        "hover:scale-105 hover:-translate-y-1",
        variant === "accent" && "hover:border-accent/50 hover:shadow-glow-accent"
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
      >
        <span className="transition-spring group-hover:scale-110 group-hover:rotate-12">
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </a>
    </Button>
  );
}