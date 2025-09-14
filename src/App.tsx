import { MapPin, Linkedin, Github } from "lucide-react";
import "./App.css";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

function App() {
  return (
    <div className="bg-background dark flex h-full w-full flex-col items-center p-10 text-white">
      <div className="flex justify-center">
        <div className="flex h-20 w-120 items-center gap-5">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/BLogo.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-2xl font-bold">
            Blake Herren
            <div className="text-muted-foreground text-sm font-normal">
              Software Engineer
            </div>
          </div>
        </div>
        <div className="flex h-20 items-center gap-2">
          <MapPin className="text-blue-300" />
          Huntsville, AL
        </div>
      </div>
      <Separator orientation="horizontal" className="my-4 !w-180" />
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex items-center rounded-[4px]"
            onClick={() =>
              window.open("https://www.linkedin.com/in/blake-herren/", "_blank")
            }
          >
            <Linkedin /> LinkedIn
          </Button>

          <Button
            variant="outline"
            className="flex items-center rounded-[4px]"
            onClick={() => window.open("https://github.com/IBlakeI", "_blank")}
          >
            <Github /> GitHub
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Header label="About Me" />
          <div className="text-muted-foreground max-w-2xl text-start text-sm leading-6 font-normal">
            👋 Hey there! I'm Blake, a passionate software engineer with a knack
            for solving tough problems. I am always looking to improve my skills
            and take on new challenges. When I'm not coding, you can find me
            fishing or playing video games.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Header label="Education" />
          <Card className="gap-2 px-5">
            <div className="flex justify-between">
              Auburn University
              <span className="text-muted-foreground">2019 - 2023</span>
            </div>
            <div className="text-muted-foreground flex justify-between text-sm">
              B.S. in Computer Science
              <span>GPA: 3.96</span>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-2">
          <Header label="Work Experience" />
          <Card className="gap-2 px-5">
            <div className="flex justify-between">
              Trideum Corporation
              <span className="text-muted-foreground">2022 - Present</span>
            </div>
            <div className="relative flex gap-4">
              <Separator orientation="vertical" className="bg-accent !h-70" />
              <div className="absolute top-[5px] left-[-4px] h-2 w-2 bg-white/70" />
              <div className="absolute top-[85px] left-[-4px] h-2 w-2 bg-white/70" />
              <div className="absolute top-[195px] left-[-4px] h-2 w-2 bg-white/70" />
              <div className="flex w-160 flex-col gap-6">
                <div className="flex w-full flex-col">
                  <div className="text-muted-foreground flex justify-between text-sm">
                    <span className="text-white">Software Engineer</span>
                    <span>August 2025 - Present</span>
                  </div>
                  <span className="text-muted-foreground pt-1 text-xs">
                    - Led a team of 3 engineers to develop a mission critical
                    Electron application communicating to a Go backend via
                    websockets
                  </span>
                </div>
                <div className="flex w-full flex-col">
                  <div className="text-muted-foreground flex justify-between text-sm">
                    <span className="text-white">Junior Software Engineer</span>
                    <span>May 2023 - August 2025</span>
                  </div>
                  <span className="text-muted-foreground pt-1 text-xs">
                    - Spearheaded front-end development for 3 projects using
                    React and Electron
                  </span>
                  <span className="text-muted-foreground pt-1 text-xs">
                    - Completed full-stack tickets using Go and React
                  </span>
                  <span className="text-muted-foreground flex gap-2 pt-1 text-xs">
                    <Badge className="bg-blue-600 text-white">React</Badge>
                    <Badge className="bg-blue-600 text-white">
                      TailwindCSS
                    </Badge>
                    <Badge className="bg-blue-600 text-white">Electron</Badge>
                    <Badge className="bg-blue-600 text-white">Go</Badge>
                    <Badge className="bg-blue-600 text-white">Docker</Badge>
                  </span>
                </div>
                <div className="flex w-full flex-col">
                  <div className="text-muted-foreground flex justify-between text-sm">
                    <span className="text-white">Software Engineer Intern</span>
                    <span>May 2022 - May 2023</span>
                  </div>
                  <span className="text-muted-foreground pt-1 text-xs">
                    - Created a front-end web application from scratch using
                    React
                  </span>
                  <span className="text-muted-foreground pt-1 text-xs">
                    - Integrated a python back-end using Gunicorn and Flask
                  </span>
                  <span className="text-muted-foreground flex gap-2 pt-1 text-xs">
                    <Badge className="bg-blue-600 text-white">React</Badge>
                    <Badge className="bg-blue-600 text-white">Flask</Badge>
                    <Badge className="bg-blue-600 text-white">Gunicorn</Badge>
                    <Badge className="bg-blue-600 text-white">Python</Badge>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
