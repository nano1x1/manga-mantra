import { BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const WelcomeScreen = () => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-background via-secondary/30 to-primary/5 p-6 no-scrollbar overflow-y-auto">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center animate-fade-in">
        <div className="w-32 h-32 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 animate-float">
          <BookOpen className="w-16 h-16 text-primary" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-3">
          Manga
          <span className="text-primary ml-2 relative">
            Tracker
            <Sparkles className="w-6 h-6 absolute -top-2 -right-6 text-primary/60 animate-pulse" />
          </span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-sm leading-relaxed">
          Track your manga collection with beautiful simplicity. Never lose track of your reading progress again.
        </p>

        {/* Feature highlights */}
        <div className="w-full max-w-sm space-y-3 mb-12">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm">Track ongoing & completed manga</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm">Beautiful, clean interface</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm">Sync across all your devices</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 animate-slide-up">
        <Button className="btn-hero w-full group">
          Get Started
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
          Already have an account? Sign In
        </Button>
      </div>
    </div>
  );
};