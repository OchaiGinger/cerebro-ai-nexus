import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, Lightbulb, Zap } from "lucide-react";
import holographicBrain from "@/assets/holographic-brain.jpg";

const AboutPreview = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Pushing boundaries of AI research"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Accurate, reliable AI solutions"
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Unique approaches to complex problems"
    },
    {
      icon: Zap,
      title: "Impact",
      description: "Transforming businesses worldwide"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: About Text */}
          <div className="space-y-8 fade-in">
            <div>
              <p className="text-accent font-accent text-lg mb-4">About CEREBRO</p>
              <h2 className="heading-section text-foreground mb-6">
                Pioneering the Future of Artificial Intelligence
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At CEREBRO, we are at the forefront of AI innovation, developing intelligent solutions 
                that transform how businesses operate in the digital age. Our team of expert data scientists 
                and AI engineers brings cutting-edge technology to life.
              </p>
              
              <p>
                From machine learning algorithms to neural networks, we harness the power of artificial 
                intelligence to solve complex business challenges and unlock new opportunities for growth.
              </p>
              
              <p className="text-primary font-medium">
                Join us as we shape tomorrow's intelligent world, today.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group p-4 bg-surface-elevated/50 rounded-2xl hover:bg-surface-elevated transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
            
            <Button variant="glass" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right: Holographic Brain */}
          <div className="relative fade-in">
            <div className="relative group">
              <img 
                src={holographicBrain} 
                alt="Holographic AI Brain Visualization" 
                className="w-full h-auto rounded-3xl shadow-glass group-hover:shadow-neural transition-all duration-700"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-button opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-700" />
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-primary rounded-full animate-pulse shadow-glow" />
              <div className="absolute bottom-20 left-10 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000 shadow-glow" />
              <div className="absolute top-1/2 right-6 w-2 h-2 bg-primary-glow rounded-full animate-pulse delay-2000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;