import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "CEREBRO – AI-Powered Solutions for Tomorrow's World",
      subtitle: "Transforming Businesses Through Intelligent Innovation",
      accent: "Revolutionary AI Technology"
    },
    {
      title: "Machine Learning Solutions That Drive Results",
      subtitle: "Unlock the Power of Data-Driven Intelligence",
      accent: "Advanced Analytics"
    },
    {
      title: "Computer Vision & Neural Networks",
      subtitle: "See the Future with AI-Enhanced Vision Systems",
      accent: "Visual Intelligence"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient neural-bg circuit-pattern overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse delay-2000" />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-accent-glow rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Accent Text */}
          <div className="fade-in">
            <p className="text-accent font-accent text-lg md:text-xl">
              {slides[currentSlide].accent}
            </p>
          </div>
          
          {/* Main Headline */}
          <div className="fade-in">
            <h1 className="heading-hero gradient-text leading-tight">
              {slides[currentSlide].title}
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="fade-in">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="fade-in flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              Discover Our Solutions
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Zap className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-primary shadow-glow" 
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;