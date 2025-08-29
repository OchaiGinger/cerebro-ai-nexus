import React, { useState } from "react";
import { Brain, Eye, MessageSquare, BarChart3, Cpu, Database, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced ML algorithms that learn and adapt to your business needs",
      details: [
        "Custom neural network architectures",
        "Automated feature engineering",
        "Real-time model optimization",
        "Continuous learning systems"
      ],
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "AI-powered visual recognition and analysis systems",
      details: [
        "Object detection and tracking",
        "Facial recognition systems",
        "Medical imaging analysis",
        "Quality control automation"
      ],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Human-like text understanding and generation capabilities",
      details: [
        "Conversational AI chatbots",
        "Sentiment analysis tools",
        "Document processing automation",
        "Multi-language translation"
      ],
      gradient: "from-cyan-600 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights for informed business decisions",
      details: [
        "Demand forecasting models",
        "Risk assessment algorithms",
        "Customer behavior prediction",
        "Market trend analysis"
      ],
      gradient: "from-green-600 to-yellow-600"
    }
  ];

  const technologies = [
    { name: "TensorFlow", icon: Cpu },
    { name: "PyTorch", icon: Brain },
    { name: "AWS", icon: Database },
    { name: "Azure", icon: Shield },
    { name: "Kubernetes", icon: Rocket },
    { name: "Docker", icon: Database }
  ];

  return (
    <section className="py-24 bg-background circuit-pattern">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-accent font-accent text-lg mb-4">AI Capabilities</p>
          <h2 className="heading-section text-foreground mb-6">
            Cutting-Edge AI Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of artificial intelligence solutions designed to transform your business
          </p>
        </div>

        {/* Features Tabs */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center px-6 py-3 rounded-2xl transition-all duration-300 ${
                    activeFeature === index
                      ? 'glass-card shadow-glow'
                      : 'bg-surface/50 hover:bg-surface'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-3 ${
                    activeFeature === index ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                  <span className={`font-medium ${
                    activeFeature === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {feature.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Feature Content */}
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} opacity-5 blur-3xl`} />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${features[activeFeature].gradient} rounded-2xl flex items-center justify-center`}>
                      {React.createElement(features[activeFeature].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="heading-card text-foreground">
                        {features[activeFeature].title}
                      </h3>
                      <p className="text-primary font-medium">Advanced AI Solution</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                  
                  <ul className="space-y-3">
                    {features[activeFeature].details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="neural" size="lg" className="mt-8">
                    Learn More
                  </Button>
                </div>

                {/* Right: Visual Element */}
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-surface to-surface-elevated rounded-3xl flex items-center justify-center relative overflow-hidden">
                    {React.createElement(features[activeFeature].icon, { className: "w-32 h-32 text-primary/30" })}
                    
                    {/* Animated Particles */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${features[activeFeature].gradient} rounded-full animate-pulse`}
                          style={{
                            top: `${20 + (i * 15)}%`,
                            left: `${15 + (i * 12)}%`,
                            animationDelay: `${i * 300}ms`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Neural Network Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      {[...Array(4)].map((_, i) => (
                        <line
                          key={i}
                          x1={`${20 + i * 20}%`}
                          y1="20%"
                          x2={`${40 + i * 15}%`}
                          y2="80%"
                          stroke="url(#gradient)"
                          strokeWidth="1"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 200}ms` }}
                        />
                      ))}
                      <defs>
                        <linearGradient id="gradient">
                          <stop offset="0%" stopColor="hsl(var(--primary))" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center fade-in">
          <h3 className="heading-card text-foreground mb-8">Powered By Industry-Leading Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-6 py-4 bg-surface/50 rounded-2xl hover:bg-surface transition-colors duration-300 group"
                >
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;