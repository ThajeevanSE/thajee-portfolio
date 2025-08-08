import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-hero">
              Vasanthakumar
              <br />
              <span className="text-accent">Thajeevan</span>
            </h1>
            <p className="text-subtitle">
              Full-Stack Developer & IT Undergraduate
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A driven third-year Information Technology undergraduate at the University of Moratuwa, 
            Sri Lanka, specializing in full-stack development with expertise in Next.js, Django, 
            MySQL, and modern web technologies. Passionate about building user-centric solutions 
            and continuous learning in software development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              className="btn-hero"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="mailto:vasanththajeevan@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/thajeevan-vasanthakumar-9b3a0a285"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/ThajeevanSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center animate-slide-up space-y-6">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl glow-primary">
              <img 
                src={profilePicture} 
                alt="Vasanthakumar Thajeevan"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Download CV Button */}
          <Button 
            variant="outline" 
            size="lg"
            className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => {
              // Create a temporary link to download CV
              const link = document.createElement('a');
              link.href = '/cv.pdf'; // You'll need to add your CV file to the public folder
              link.download = 'Vasanthakumar_Thajeevan_CV.pdf';
              link.click();
            }}
          >
            <Download size={20} />
            Download CV
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={24} />
      </div>
    </section>
  );
};

export default Hero;