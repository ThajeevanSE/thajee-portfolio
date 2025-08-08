import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive and modern personal portfolio website showcasing my skills, projects, and professional journey. Built with clean design principles and optimized for performance.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/ThajeevanSE",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Juice-Maker-Machine",
      description: "An automated juice-making machine system built with Arduino. Features sensor integration, motor control, user interface with keypad and LCD display for a complete automated beverage dispensing solution.",
      technologies: ["Arduino Mega 2560", "Sensors", "Motors", "Keypad", "LCD Display", "C++"],
      githubUrl: "https://github.com/ThajeevanSE/ThajeevanSE-Automatic_Juice_Maker_Machine.git",
      featured: true
    },
    {
      title: "Habitro App Admin Dashboard",
      description: "A comprehensive admin dashboard for the Habitro mobile application. Features real-time data management, user analytics, and administrative controls with a modern, intuitive interface.",
      technologies: ["Next.js", "Django REST", "TypeScript", "TailwindCSS", "API Integration"],
      githubUrl: "https://github.com/ThajeevanSE/HABITRO-APP-Admin-Dashboard.git",
      featured: true
    },
    {
      title: "Online Ticket Booking System",
      description: "A complete web-based ticket booking platform with user authentication, seat selection, payment processing, and booking management. Designed for seamless user experience and reliable performance.",
      technologies: ["HTML", "JavaScript", "CSS", "Local Storage", "Form Validation"],
      githubUrl: "https://github.com/ThajeevanSE/online-ticket-booking.git",
      liveUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my projects demonstrating full-stack development skills and innovative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-professional group cursor-pointer ${
                project.featured ? 'border-primary/50' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Code className="text-primary" size={24} />
                    {project.title}
                    {project.featured && (
                      <Badge variant="secondary" className="ml-2">Featured</Badge>
                    )}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                    Code
                  </Button>
                  
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="btn-outline"
            onClick={() => window.open('https://github.com/ThajeevanSE', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;