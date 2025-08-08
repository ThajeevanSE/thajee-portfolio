import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, Code, Users, Download } from "lucide-react";

const About = () => {
  const skills = {
    programming: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    frontend: ["React", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
    backend: ["Django", "Node.js", "Express.js", "REST APIs"],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Arduino IDE"],
    soft: ["Problem Solving", "Creativity", "Teamwork", "Adaptability", "Communication"]
  };

  const education = [
    {
      degree: "BSc. (Hons) in Information Technology",
      institution: "University of Moratuwa, Sri Lanka",
      period: "2022 - Present",
      status: "Third Year Undergraduate"
    },
    {
      degree: "Advanced Level (A/L)",
      institution: "Mathematics Stream",
      period: "2019 - 2021",
      status: "Completed"
    },
    {
      degree: "Ordinary Level (O/L)",
      institution: "Secondary Education",
      period: "2019",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="flex flex-col space-y-8 h-full">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="text-primary" size={24} />
                  My Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I am a dedicated Information Technology undergraduate with a strong passion for 
                  full-stack development. My goal is to grow as a versatile developer who can 
                  contribute to innovative projects that make a positive impact. I believe in 
                  continuous learning, staying updated with the latest technologies, and building 
                  solutions that prioritize user experience and functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="text-primary" size={24} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                        <Badge variant="outline">{edu.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="text-primary" size={24} />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">English</Badge>
                  <Badge variant="secondary">Tamil</Badge>
                  <Badge variant="secondary">Sinhala</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="flex flex-col h-full">
            <Card className="card-professional flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="text-primary" size={24} />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Frontend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Backend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Database & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.database, ...skills.tools].map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;