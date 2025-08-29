import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "CEREBRO's AI solutions transformed our entire business process. We saw a 40% increase in efficiency within the first quarter.",
      author: "Sarah Johnson",
      position: "CEO, TechFlow Industries",
      company: "TechFlow",
      rating: 5
    },
    {
      quote: "The machine learning models they developed for us are incredibly accurate. Our customer satisfaction has never been higher.",
      author: "Michael Chen",
      position: "CTO, DataStream Corp",
      company: "DataStream",
      rating: 5
    },
    {
      quote: "Working with CEREBRO was a game-changer. Their NLP solutions revolutionized how we handle customer interactions.",
      author: "Dr. Amara Okafor",
      position: "Head of Innovation, Future Systems",
      company: "Future Systems",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-surface border-y border-border/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="flex justify-center mb-6">
            <Quote className="w-16 h-16 text-primary opacity-20" />
          </div>
          <p className="text-accent font-accent text-lg mb-4">Client Success Stories</p>
          <h2 className="heading-section text-foreground">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-button opacity-5 blur-3xl" />
            
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </div>

              {/* Author */}
              <div className="text-center">
                <h4 className="heading-card text-foreground mb-1">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-primary font-medium mb-2">
                  {testimonials[currentTestimonial].position}
                </p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center">
                    <span className="text-background font-bold text-sm">
                      {testimonials[currentTestimonial].company[0]}
                    </span>
                  </div>
                  <span className="text-muted-foreground">
                    {testimonials[currentTestimonial].company}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-primary shadow-glow" 
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;