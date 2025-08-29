import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";

const ClosingBanner = () => {
  return (
    <section className="py-24 hero-gradient neural-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-accent-glow rounded-full animate-pulse delay-1000 opacity-60" />
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000 opacity-60" />
        <div className="absolute top-40 right-1/3 w-2.5 h-2.5 bg-accent rounded-full animate-pulse delay-500 opacity-60" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Rocket className="w-20 h-20 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/30" />
            </div>
          </div>

          {/* Main Text */}
          <h2 className="heading-section gradient-text">
            Your AI Transformation Starts Here
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to unlock the full potential of artificial intelligence for your business? 
            Join hundreds of companies already transforming with CEREBRO's cutting-edge AI solutions.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
            {[
              { value: "75+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "$10M+", label: "ROI Generated" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="heading-card gradient-text text-3xl md:text-4xl mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button variant="hero" size="xl" className="group shadow-neural">
              <Rocket className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Get Started Today
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Supporting Text */}
          <p className="text-accent font-accent text-lg mt-6">
            Free consultation • Custom AI solutions • Proven results
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingBanner;