import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award, Users, Target, TrendingUp } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpg";
import teamMember6 from "@/assets/team-member-6.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Adebayo Okonkwo",
      role: "Chief AI Officer & Co-Founder",
      image: teamMember1,
      bio: "Leading AI researcher with 15+ years in machine learning and neural networks. PhD in Computer Science from MIT. Published 100+ research papers in top-tier journals and conferences. Previously led AI initiatives at Google and Microsoft.",
      expertise: ["Deep Learning", "Neural Networks", "AI Strategy", "Research Leadership"],
      linkedin: "#",
      email: "adebayo@cerebroai.com",
      achievements: ["50+ Patents Filed", "MIT AI Research Fellow", "IEEE Fellow"]
    },
    {
      id: 2,
      name: "Amina Hassan",
      role: "Head of Data Science",
      image: teamMember2,
      bio: "Expert in predictive analytics and big data solutions with a passion for turning complex data into actionable insights. Former Senior Data Scientist at Google AI with extensive experience in large-scale machine learning systems.",
      expertise: ["Predictive Analytics", "Big Data", "Statistical Modeling", "MLOps"],
      linkedin: "#",
      email: "amina@cerebroai.com",
      achievements: ["Kaggle Grandmaster", "Google AI Excellence Award", "DataScienceAfrica Speaker"]
    },
    {
      id: 3,
      name: "Chukwudi Okoro",
      role: "ML Engineering Lead",
      image: teamMember3,
      bio: "Specialized in deep learning and computer vision systems with 10+ years of experience in AI model deployment at scale. Expert in building production-ready AI systems that serve millions of users daily.",
      expertise: ["Computer Vision", "Deep Learning", "System Architecture", "Model Deployment"],
      linkedin: "#",
      email: "chukwudi@cerebroai.com",
      achievements: ["10M+ Models Deployed", "AWS ML Hero", "TensorFlow Certified"]
    },
    {
      id: 4,
      name: "Fatima Al-Rashid",
      role: "NLP Research Director",
      image: teamMember4,
      bio: "Pioneer in natural language processing and conversational AI with expertise in transformer architectures and large language models. Published researcher with 50+ papers in NLP and computational linguistics.",
      expertise: ["Natural Language Processing", "Transformers", "Conversational AI", "Language Models"],
      linkedin: "#",
      email: "fatima@cerebroai.com",
      achievements: ["50+ Research Papers", "ACL Best Paper Award", "Hugging Face Contributor"]
    },
    {
      id: 5,
      name: "Dr. Kemi Adebisi",
      role: "AI Ethics & Governance Lead",
      image: teamMember5,
      bio: "Ensuring responsible AI development and deployment through comprehensive ethics frameworks and governance policies. PhD in AI Ethics from Oxford University with focus on algorithmic fairness and bias mitigation.",
      expertise: ["AI Ethics", "Algorithmic Fairness", "Bias Mitigation", "AI Governance"],
      linkedin: "#",
      email: "kemi@cerebroai.com",
      achievements: ["UNESCO AI Ethics Advisor", "Oxford AI Ethics Fellow", "WHO AI Guidelines Contributor"]
    },
    {
      id: 6,
      name: "Ibrahim Musa",
      role: "AI Solutions Architect",
      image: teamMember6,
      bio: "Designing and implementing scalable AI architectures for enterprise clients. Expert in cloud-native AI solutions and distributed computing with focus on performance optimization and cost efficiency.",
      expertise: ["Solution Architecture", "Cloud Computing", "Distributed Systems", "Performance Optimization"],
      linkedin: "#",
      email: "ibrahim@cerebroai.com",
      achievements: ["AWS Certified Solutions Architect", "Microsoft AI MVP", "GCP Professional Architect"]
    }
  ];

  const metrics = [
    { value: "75+", label: "Projects Delivered", icon: Target },
    { value: "50+", label: "Happy Clients", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: Award },
    { value: "$10M+", label: "ROI Generated", icon: TrendingUp }
  ];

  const caseStudies = [
    {
      title: "Financial Fraud Detection",
      client: "Leading Nigerian Bank",
      challenge: "Traditional rule-based fraud detection missing 30% of fraudulent transactions",
      solution: "Implemented deep learning ensemble with real-time scoring engine",
      result: "Reduced fraud losses by 85% while decreasing false positives by 60%",
      impact: "Saved ₦2.4B annually"
    },
    {
      title: "Agricultural Yield Prediction",
      client: "West African Agriculture Consortium",
      challenge: "Unpredictable crop yields affecting food security and farmer income",
      solution: "Satellite imagery analysis with weather and soil data integration",
      result: "Prediction accuracy improved from 65% to 94%",
      impact: "Increased farmer income by 40%"
    },
    {
      title: "Healthcare Diagnostic Assistant",
      client: "Regional Medical Network",
      challenge: "Limited specialist availability in rural areas causing diagnostic delays",
      solution: "AI-powered diagnostic support system with medical imaging analysis",
      result: "Reduced diagnostic time by 70% with 95% accuracy",
      impact: "Improved healthcare access for 2M+ patients"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 hero-gradient neural-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
            <p className="text-accent font-accent text-lg">Our Expert Team</p>
            <h1 className="heading-hero text-white">
              Meet the Visionaries Behind CEREBRO
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto">
              Our world-class team of AI researchers, data scientists, and engineers brings together 
              decades of experience from leading institutions and technology companies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="glass-card glass-hover rounded-3xl overflow-hidden group">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-button opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  
                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href={member.linkedin} className="p-2 bg-primary rounded-full hover:bg-primary-glow transition-colors">
                      <Linkedin className="w-4 h-4 text-background" />
                    </a>
                    <a href={`mailto:${member.email}`} className="p-2 bg-accent rounded-full hover:bg-accent-glow transition-colors">
                      <Mail className="w-4 h-4 text-background" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="heading-card text-white mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                  </div>
                  
                  <p className="text-white leading-relaxed text-sm">
                    {member.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="text-foreground font-medium mb-2">Key Achievements</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, index) => (
                        <p key={index} className="text-xs text-muted-foreground flex items-center">
                          <Award className="w-3 h-3 text-accent mr-2" />
                          {achievement}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 neural-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section text-foreground mb-6">
              Our Track Record of Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional AI solutions 
              and driving measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center glass-card glass-hover rounded-3xl p-8">
                <metric.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="heading-section gradient-text text-4xl md:text-5xl mb-2">
                  {metric.value}
                </div>
                <p className="text-muted-foreground font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Awards & Growth Timeline */}
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <h3 className="heading-section text-foreground text-center mb-12">
              Our Journey of Excellence
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { year: "2020", milestone: "Company Founded", achievement: "Raised $2M seed funding" },
                { year: "2021", milestone: "First AI Patent", achievement: "10 successful deployments" },
                { year: "2022", milestone: "50+ Clients", achievement: "AI Excellence Award" },
                { year: "2023", milestone: "Research Lab", achievement: "Global AI Top 100" },
                { year: "2024", milestone: "Series A", achievement: "Industry Leadership Award" }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-button rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-background font-bold">{item.year}</span>
                  </div>
                  <h4 className="heading-card text-foreground mb-2">{item.milestone}</h4>
                  <p className="text-sm text-muted-foreground">{item.achievement}</p>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-button opacity-30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section text-foreground mb-6">
              Success Stories That Define Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world impact through innovative AI solutions that transform businesses 
              and create lasting value for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass-card glass-hover rounded-3xl p-8 space-y-6">
                <div>
                  <h3 className="heading-card text-foreground mb-2">{study.title}</h3>
                  <p className="text-primary font-medium">{study.client}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground font-medium mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground font-medium mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-foreground font-medium mb-2">Result</h4>
                    <p className="text-sm text-muted-foreground">{study.result}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/20">
                  <p className="text-accent font-accent font-medium">
                    Impact: {study.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient neural-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 fade-in">
            <h2 className="heading-section text-white">
              Ready to Work with Our Experts?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let our world-class team of AI experts help you transform your business 
              with cutting-edge artificial intelligence solutions.
            </p>
            <Button variant="hero" size="xl" className="group">
              Work With Our Experts
              <Mail className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;