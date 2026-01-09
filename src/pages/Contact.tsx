import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Globe, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Cerebro AI-Powered Solutions", "0196 Benue Crescent", "Makurdi, Benue State, Nigeria"],
      primary: true
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["08142929058"],
      link: "tel:08142929058"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cerebroai.com"],
      link: "mailto:info@cerebroai.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon–Fri: 8 AM – 6 PM", "Sat: 9 AM – 2 PM", "Sun: Closed"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 hero-gradient neural-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
            <p className="text-accent font-accent text-lg">Get In Touch</p>
            <h1 className="heading-hero text-white">
              Let's Build the Future Together
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with AI? Our team of experts is here to help you 
              navigate your AI journey and unlock new possibilities for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Information */}
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <h2 className="heading-section text-foreground">
                  Connect With CEREBRO
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you have a specific AI project in mind or just want to explore the possibilities, 
                  we're here to help. Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-card glass-hover rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-button rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-background" />
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-card text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {info.link && idx === 0 ? (
                                <a href={info.link} className="hover:text-primary transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="heading-card text-foreground mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="group p-3 bg-surface-elevated rounded-xl hover:bg-primary/20 transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="#" className="group p-3 bg-surface-elevated rounded-xl hover:bg-primary/20 transition-all duration-300">
                    <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="#" className="group p-3 bg-surface-elevated rounded-xl hover:bg-primary/20 transition-all duration-300">
                    <Globe className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="fade-in">
              <div className="glass-card rounded-3xl p-8 md:p-12">
                <div className="space-y-6 mb-8">
                  <h2 className="heading-section text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Tell us about your project and how we can help. We'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-card border-border/20 bg-surface-elevated focus:border-primary focus:shadow-glow transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-card border-border/20 bg-surface-elevated focus:border-primary focus:shadow-glow transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass-card border-border/20 bg-surface-elevated focus:border-primary focus:shadow-glow transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>

                {/* Form Footer */}
                <div className="mt-8 p-6 bg-surface-elevated rounded-2xl">
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service. 
                    We'll only use your information to respond to your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 neural-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get quick answers to common questions about our AI services and consultation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical AI project take?",
                answer: "Project timelines vary based on complexity, but most implementations range from 3-12 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer: "Yes, we provide comprehensive support packages including monitoring, updates, and optimization to ensure your AI solutions continue performing at their best."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work across various industries including finance, healthcare, agriculture, retail, and manufacturing, adapting our solutions to specific sector needs."
              },
              {
                question: "How do you ensure data privacy and security?",
                answer: "We implement enterprise-grade security measures and comply with international standards like GDPR. Your data privacy and security are our top priorities."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <h3 className="heading-card text-foreground mb-4">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 hero-gradient neural-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8 fade-in">
            <h2 className="heading-section text-white">
              Ready to Embrace the AI Revolution?
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today and take the first step towards transforming your business 
              with cutting-edge artificial intelligence solutions.
            </p>
            <p className="text-accent font-accent text-lg">
              Your AI transformation starts with a single conversation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;