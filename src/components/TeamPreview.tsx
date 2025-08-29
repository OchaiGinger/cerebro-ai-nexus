import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const TeamPreview = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Adebayo Okonkwo",
      role: "Chief AI Officer",
      image: teamMember1,
      bio: "Leading AI researcher with 15+ years in machine learning and neural networks. PhD in Computer Science from MIT.",
      linkedin: "#",
      email: "adebayo@cerebroai.com"
    },
    {
      id: 2,
      name: "Amina Hassan",
      role: "Head of Data Science",
      image: teamMember2,
      bio: "Expert in predictive analytics and big data solutions. Former Senior Data Scientist at Google AI.",
      linkedin: "#",
      email: "amina@cerebroai.com"
    },
    {
      id: 3,
      name: "Chukwudi Okoro",
      role: "ML Engineering Lead",
      image: teamMember3,
      bio: "Specialized in deep learning and computer vision systems. 10+ years in AI model deployment.",
      linkedin: "#",
      email: "chukwudi@cerebroai.com"
    },
    {
      id: 4,
      name: "Fatima Al-Rashid",
      role: "NLP Research Director",
      image: teamMember4,
      bio: "Pioneer in natural language processing and conversational AI. Published researcher with 50+ papers.",
      linkedin: "#",
      email: "fatima@cerebroai.com"
    }
  ];

  return (
    <section className="py-24 neural-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-accent font-accent text-lg mb-4">Our Expert Team</p>
          <h2 className="heading-section text-foreground mb-6">
            Meet the Minds Behind CEREBRO
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of world-class AI experts brings together decades of experience 
            in machine learning, data science, and artificial intelligence research.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Glass Card */}
              <div className="glass-card glass-hover rounded-3xl overflow-hidden">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Glow Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-t-3xl transition-all duration-500" />
                  
                  {/* Social Links Overlay */}
                  <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-500 ${
                    hoveredMember === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}>
                    <a
                      href={member.linkedin}
                      className="p-2 bg-primary/80 rounded-full hover:bg-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-background" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-accent/80 rounded-full hover:bg-accent transition-colors"
                    >
                      <Mail className="w-4 h-4 text-background" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="heading-card text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  
                  {/* Bio (appears on hover) */}
                  <div className={`transition-all duration-500 ${
                    hoveredMember === member.id 
                      ? 'opacity-100 max-h-32 translate-y-0' 
                      : 'opacity-0 max-h-0 translate-y-4'
                  } overflow-hidden`}>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-in">
          <Button variant="neural" size="lg" className="group">
            Meet the Full Team
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;