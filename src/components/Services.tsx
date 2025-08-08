import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Database, 
  Globe, 
  Palette, 
  Zap,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="text-primary" size={32} />,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies like Next.js, React, Django, and Node.js. Building scalable, responsive, and user-friendly applications.",
      features: [
        "Frontend Development (React, Next.js)",
        "Backend Development (Django, Node.js)",
        "Database Design & Integration",
        "API Development & Integration",
        "Responsive Web Design"
      ]
    },
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "Web Application Development",
      description: "Creating modern, fast, and SEO-optimized web applications with clean code, best practices, and optimal performance.",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "Performance Optimization"
      ]
    },
    {
      icon: <Database className="text-primary" size={32} />,
      title: "Backend & Database Solutions",
      description: "Robust backend systems with efficient database design, API development, and server-side logic implementation.",
      features: [
        "RESTful API Development",
        "Database Design (MySQL, PostgreSQL)",
        "Server Configuration",
        "Data Migration & Management",
        "Security Implementation"
      ]
    },
    {
      icon: <Palette className="text-primary" size={32} />,
      title: "UI/UX Implementation",
      description: "Converting designs into functional, interactive user interfaces with attention to detail and user experience.",
      features: [
        "Responsive Design Implementation",
        "Modern CSS Frameworks",
        "Interactive Components",
        "Cross-browser Compatibility",
        "Accessibility Standards"
      ]
    }
  ];

  const workingProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and target audience to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating technical specifications, database design, and system architecture for optimal performance."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Implementing features with clean, maintainable code and thorough testing throughout the process."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Deploying the application and providing ongoing support, maintenance, and optimizations."
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive full-stack development services to bring your ideas to life with modern technologies and best practices
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="card-professional h-full">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Working Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            How I <span className="text-primary">Work</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((process, index) => (
              <Card key={index} className="card-professional text-center relative overflow-hidden">
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
                
                {/* Connector line for desktop */}
                {index < workingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-card to-muted/50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-primary">Project?</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with modern, scalable, and user-friendly solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="btn-hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2" size={20} />
              Get Started
            </Button>
            <Button 
              variant="outline"
              className="btn-outline"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;