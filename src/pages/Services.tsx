import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Eye, MessageCircle, Settings, ChevronRight, Check } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      subtitle: "Intelligent Data Solutions",
      description: "Advanced machine learning algorithms that learn from your data to provide predictive insights, automated decision-making, and intelligent pattern recognition.",
      features: ["Predictive Analytics", "Classification Models", "Regression Analysis", "Ensemble Methods", "Deep Learning Networks"],
      useCases: ["Customer Behavior Prediction", "Fraud Detection", "Demand Forecasting", "Risk Assessment"]
    },
    {
      icon: MessageCircle,
      title: "Natural Language Processing",
      subtitle: "Understanding Human Language",
      description: "State-of-the-art NLP solutions that enable machines to understand, interpret, and generate human language with remarkable accuracy and context awareness.",
      features: ["Sentiment Analysis", "Text Classification", "Named Entity Recognition", "Language Translation", "Conversational AI"],
      useCases: ["Chatbots & Virtual Assistants", "Document Analysis", "Social Media Monitoring", "Content Generation"]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      subtitle: "AI-Powered Visual Intelligence",
      description: "Cutting-edge computer vision systems that can analyze, understand, and interpret visual information from images and videos with human-level accuracy.",
      features: ["Object Detection", "Image Classification", "Facial Recognition", "Optical Character Recognition", "Video Analytics"],
      useCases: ["Quality Control", "Security Systems", "Medical Imaging", "Autonomous Vehicles"]
    },
    {
      icon: Settings,
      title: "AI Consulting",
      subtitle: "Strategic AI Implementation",
      description: "Comprehensive AI strategy and implementation consulting to help organizations navigate their digital transformation journey with confidence.",
      features: ["AI Strategy Development", "Technology Assessment", "Implementation Planning", "Team Training", "Performance Optimization"],
      useCases: ["Digital Transformation", "Process Automation", "Data Strategy", "AI Governance"]
    }
  ];

  const techStack = [
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "Neural Networks" },
    { name: "Hugging Face", category: "NLP" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "AWS SageMaker", category: "Cloud ML" },
    { name: "Azure ML", category: "Cloud AI" },
    { name: "Kubernetes", category: "Deployment" },
    { name: "Docker", category: "Containerization" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 hero-gradient neural-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
            <p className="text-accent font-accent text-lg">AI Services & Technology</p>
            <h1 className="heading-hero gradient-text">
              Transformative AI Solutions for Every Business Need
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From machine learning to computer vision, our comprehensive suite of AI services 
              empowers organizations to harness the full potential of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Services Tabs */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section text-foreground mb-6">
              Our AI Services Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of AI services designed to drive innovation 
              and accelerate your digital transformation journey.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  activeTab === index 
                    ? "glass-card shadow-glow" 
                    : "bg-muted/20 hover:bg-muted/40"
                }`}
              >
                <service.icon className={`w-6 h-6 ${
                  activeTab === index ? "text-primary" : "text-muted-foreground"
                }`} />
                <span className={`font-medium ${
                  activeTab === index ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Service Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-button rounded-2xl flex items-center justify-center">
                    {React.createElement(services[activeTab].icon, { className: "w-8 h-8 text-background" })}
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground">{services[activeTab].title}</h3>
                    <p className="text-primary font-medium">{services[activeTab].subtitle}</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {services[activeTab].description}
                </p>
                
                {/* Features */}
                <div>
                  <h4 className="heading-card text-foreground mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {services[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right: Use Cases */}
              <div className="space-y-6">
                <h4 className="heading-card text-foreground">Use Cases</h4>
                <div className="space-y-4">
                  {services[activeTab].useCases.map((useCase, index) => (
                    <div key={index} className="bg-surface-elevated rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground font-medium">{useCase}</span>
                        <ChevronRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="neural" className="w-full mt-6">
                  Learn More About {services[activeTab].title}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 neural-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section text-foreground mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to deliver 
              robust, scalable, and efficient AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="glass-card glass-hover rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-button rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-background font-bold text-lg">
                    {tech.name.substring(0, 2)}
                  </span>
                </div>
                <h3 className="heading-card text-foreground mb-2">{tech.name}</h3>
                <p className="text-primary text-sm font-medium">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient neural-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 fade-in">
            <h2 className="heading-section gradient-text">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let our experts help you identify the perfect AI solution for your unique challenges. 
              Schedule a consultation to discuss your project requirements.
            </p>
            <Button variant="hero" size="xl" className="group">
              Talk to Our Experts
              <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;