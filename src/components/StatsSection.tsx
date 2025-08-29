import { useEffect, useState } from "react";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    roi: 0
  });

  const finalCounts = {
    projects: 150,
    clients: 89,
    satisfaction: 98,
    roi: 25
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (key: keyof typeof finalCounts, duration: number) => {
      const start = 0;
      const end = finalCounts[key];
      const increment = end / (duration / 50);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    // Stagger animations
    setTimeout(() => animateCount('projects', 2000), 0);
    setTimeout(() => animateCount('clients', 2200), 300);
    setTimeout(() => animateCount('satisfaction', 1800), 600);
    setTimeout(() => animateCount('roi', 2400), 900);
  }, [isVisible]);

  const stats = [
    {
      icon: Zap,
      value: counts.projects,
      suffix: "+",
      label: "AI Projects Delivered",
      description: "Successfully deployed AI solutions across industries"
    },
    {
      icon: Users,
      value: counts.clients,
      suffix: "+",
      label: "Global Clients",
      description: "Enterprises trusting CEREBRO for AI transformation"
    },
    {
      icon: Award,
      value: counts.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations in AI delivery"
    },
    {
      icon: TrendingUp,
      value: counts.roi,
      suffix: "M+",
      label: "ROI Generated",
      description: "Measurable business value through AI innovation"
    }
  ];

  return (
    <section id="stats-section" className="py-24 bg-surface/50 neural-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-accent font-accent text-lg mb-4">Our Impact</p>
          <h2 className="heading-section text-foreground mb-6">
            Driving Real Results with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and innovation in artificial intelligence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="glass-card glass-hover rounded-3xl p-8 text-center">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-button opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-button rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 mx-auto bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  </div>
                  
                  {/* Value */}
                  <div className="mb-4">
                    <span className="heading-hero gradient-text">
                      {stat.value}{stat.suffix}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="heading-card text-foreground mb-3">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;