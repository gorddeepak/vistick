import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Caregiver & Daughter",
    content: "Vistick has given my father the independence he thought he'd lost. The real-time alerts give our family peace of mind while he maintains his dignity and freedom.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez", 
    role: "Vistick User",
    content: "The obstacle detection is incredibly accurate. I can navigate my neighborhood confidently, and my family stays informed without being intrusive. Life-changing technology.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Dr. Emily Watson",
    role: "Orientation & Mobility Specialist",
    content: "I recommend Vistick to all my clients. The combination of traditional mobility training with smart technology creates the best outcomes for independent living.",
    rating: 5,
    avatar: "EW"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from users and families who have enhanced their independence with Vistick.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="space-y-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;