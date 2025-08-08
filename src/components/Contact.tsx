import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  MessageCircle 
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_bkv6bmi';
  const EMAILJS_TEMPLATE_ID = 'template_hfozn6g';
  const EMAILJS_PUBLIC_KEY = 'tmlevB0ueQR3jC2iC';

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "vasanththajeevan@gmail.com",
      href: "mailto:vasanththajeevan@gmail.com"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      value: "0761115854",
      href: "tel:0761115854"
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: "LinkedIn",
      value: "Thajeevan Vasanthakumar",
      href: "https://www.linkedin.com/in/thajeevan-vasanthakumar-9b3a0a285"
    },
    {
      icon: <Github className="text-primary" size={24} />,
      title: "GitHub",
      value: "ThajeevanSE",
      href: "https://github.com/ThajeevanSE"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      value: "Sri Lanka",
      href: null
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
          to_name: 'Vasanthakumar Thajeevan',
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start a project or have questions? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <Card className="card-professional flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="text-primary" size={24} />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities, collaborating on interesting projects, 
                  or just having a chat about technology and development.
                </p>
                
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                      {info.icon}
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-medium hover:text-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions - Integrated into the same card */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('mailto:vasanththajeevan@gmail.com', '_blank')}
                    >
                      <Mail className="mr-2" size={16} />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://www.linkedin.com/in/thajeevan-vasanthakumar-9b3a0a285', '_blank')}
                    >
                      <Linkedin className="mr-2" size={16} />
                      Connect on LinkedIn
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://github.com/ThajeevanSE', '_blank')}
                    >
                      <Github className="mr-2" size={16} />
                      View GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <Card className="card-professional flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Send className="text-primary" size={24} />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or question..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full" disabled={isSubmitting}>
                    <Send className="mr-2" size={16} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;