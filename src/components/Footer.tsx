import { Link } from "react-router-dom";
import { Brain, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="neural-bg bg-surface border-t border-border/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-primary" />
              <div>
                <span className="heading-card gradient-text">CEREBRO</span>
                <p className="text-xs text-muted-foreground font-accent">AI-Powered Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Transforming businesses through intelligent AI innovation and cutting-edge technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Our Team" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">Services</h3>
            <div className="space-y-2">
              {[
                "Machine Learning",
                "Natural Language Processing",
                "Computer Vision",
                "AI Consulting",
              ].map((service) => (
                <p key={service} className="text-muted-foreground">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">Connect</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Makurdi, Benue State<br />
                Nigeria
              </p>
              <p className="text-muted-foreground">
                08142929058
              </p>
              <p className="text-muted-foreground">
                info@cerebroai.com
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CEREBRO AI-Powered Solutions. All rights reserved.
          </p>
          <p className="text-accent font-accent text-sm mt-2">
            Ready to embrace the AI revolution? Contact us today.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;