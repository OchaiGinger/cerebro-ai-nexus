import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Rocket, Globe, TrendingUp, ArrowRight } from "lucide-react";
import holographicGlobe from "@/assets/holographic-globe.jpg";

const About = () => {
  const missions = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Pioneering breakthrough AI technologies that reshape industries and create new possibilities for business growth."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Delivering AI solutions that transcend borders, connecting businesses worldwide through intelligent technology."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Maintaining the highest standards in AI research, development, and implementation for measurable results."
    }
  ];

  const timeline = [
    { year: "2020", milestone: "Company Founded", description: "Started with a vision to democratize AI technology" },
    { year: "2021", milestone: "First AI Model", description: "Deployed our breakthrough machine learning platform" },
    { year: "2022", milestone: "50+ Clients", description: "Expanded across multiple industries and continents" },
    { year: "2023", milestone: "Research Lab", description: "Established advanced AI research and development facility" },
    { year: "2024", milestone: "Global Leader", description: "Recognized as a top AI solutions provider worldwide" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 hero-gradient neural-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8 fade-in">
              <div>
                <p className="text-accent font-accent text-lg mb-4">About CEREBRO</p>
                <h1 className="heading-hero gradient-text leading-tight">
                  Building the AI Future
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are visionaries, engineers, and innovators united by a common goal: 
                to harness the transformative power of artificial intelligence and make it 
                accessible to businesses worldwide.
              </p>
              
              <Button variant="neural" size="lg" className="group">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Right: Holographic Globe */}
            <div className="relative fade-in">
              <img 
                src={holographicGlobe} 
                alt="Holographic Globe with AI Networks" 
                className="w-full h-auto rounded-3xl shadow-glass hover:shadow-neural transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-button opacity-20 rounded-3xl blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Futuristic Illustration */}
            <div className="relative fade-in">
              <div className="glass-card rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-button rounded-full mx-auto flex items-center justify-center">
                    <Globe className="w-16 h-16 text-background" />
                  </div>
                  <h3 className="heading-card gradient-text">AI-Powered Future</h3>
                  <p className="text-muted-foreground">
                    Connecting minds, data, and possibilities through intelligent technology
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right: Story */}
            <div className="space-y-6 fade-in">
              <h2 className="heading-section text-foreground">Our Story</h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 by a team of AI researchers and industry veterans, CEREBRO emerged 
                  from a simple yet powerful vision: to make artificial intelligence accessible, 
                  practical, and transformative for businesses of all sizes.
                </p>
                
                <p>
                  What started as a small research lab in Nigeria has grown into a global force 
                  in AI innovation, serving clients across continents and industries. Our journey 
                  has been marked by breakthrough discoveries, successful deployments, and the 
                  unwavering belief that AI can solve humanity's greatest challenges.
                </p>
                
                <p className="text-primary font-medium">
                  Today, we continue to push the boundaries of what's possible with artificial 
                  intelligence, always staying true to our core mission of democratizing AI technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 neural-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <p className="text-accent font-accent text-lg mb-4">Our Mission</p>
            <h2 className="heading-section text-foreground mb-6">
              Driving Innovation Through AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to developing AI solutions that not only solve today's challenges 
              but also anticipate tomorrow's opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="glass-card glass-hover rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-button rounded-full mx-auto mb-6 flex items-center justify-center">
                  <mission.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="heading-card text-foreground mb-4">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Human + AI Hands Illustration */}
            <div className="relative fade-in">
              <div className="glass-card rounded-3xl p-12 h-96 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="flex justify-center space-x-4">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div className="text-4xl flex items-center">+</div>
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                  </div>
                  <h3 className="heading-card gradient-text">Human + AI Collaboration</h3>
                </div>
              </div>
            </div>
            
            {/* Right: Vision Points */}
            <div className="space-y-8 fade-in">
              <h2 className="heading-section text-foreground">Our Vision</h2>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-background font-bold">{item.year}</span>
                    </div>
                    <div>
                      <h4 className="heading-card text-foreground mb-2">{item.milestone}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Vision Statement Highlight */}
          <div className="mt-16 glass-card rounded-3xl p-8 md:p-12 text-center">
            <h3 className="heading-section gradient-text mb-6">
              "To create a world where AI amplifies human potential and drives sustainable progress for all."
            </h3>
            <p className="text-xl text-muted-foreground">
              Our vision statement guides every decision, every innovation, and every partnership we forge.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient neural-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 fade-in">
            <h2 className="heading-section gradient-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us on the journey to an AI-powered future. Let's explore how CEREBRO 
              can revolutionize your business operations.
            </p>
            <Button variant="hero" size="xl" className="group">
              Explore Our Services
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;