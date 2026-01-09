import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Cerebro by AY OLOLO LIMITED",
      subtitle: "AI-Powered Solutions for Tomorrow's World",
      description: "Transforming Businesses Through Intelligent Innovation",
      accent: "Revolutionary AI Technology"
    },
    {
      title: "Cerebro by AY OLOLO LIMITED",
      subtitle: "Machine Learning Solutions That Drive Results",
      description: "Unlock the Power of Data-Driven Intelligence",
      accent: "Advanced Analytics"
    },
    {
      title: "Cerebro by AY OLOLO LIMITED",
      subtitle: "Computer Vision & Neural Networks",
      description: "See the Future with AI-Enhanced Vision Systems",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}} />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-50" style={{animationDelay: '0.5s'}} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pb-24">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Accent Text */}
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-in_0.2s_forwards]">
            <p className="text-cyan-400 font-semibold text-base md:text-lg tracking-wide uppercase">
              {slides[currentSlide].accent}
            </p>
          </div>
          
          {/* Main Headline */}
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-in_0.4s_forwards]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {slides[currentSlide].title}
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-in_0.6s_forwards]">
            <p className="text-2xl md:text-3xl font-semibold text-white max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          {/* Description */}
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-in_0.8s_forwards]">
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-in_1s_forwards] flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center">
              <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              Discover Our Solutions
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 group flex items-center">
              <Zap className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white"
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
                  ? "bg-cyan-400 shadow-lg shadow-cyan-400/50" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;