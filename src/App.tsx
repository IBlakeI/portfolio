import { MapPin, Linkedin, Github } from "lucide-react";
import "./App.css";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import { Card } from "./components/ui/card";
import JobTitle from "./components/JobTitle";

const App = () => {
  return (
    <div className="bg-background dark flex min-h-screen w-full flex-col items-center overflow-y-auto px-4 py-6 text-white">
      <div className="flex w-full max-w-2xl flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-5">
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
        <div className="flex items-center gap-2 text-sm md:text-base">
          <MapPin className="text-blue-300" />
          Huntsville, AL
        </div>
      </div>
      <Separator orientation="horizontal" className="my-4 max-w-2xl" />
      <div className="mr-2 flex w-full max-w-2xl flex-col gap-6">
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
          <div className="text-muted-foreground text-left text-sm leading-6 font-normal">
            👋 Hey there! I'm Blake, a passionate software engineer with a knack
            for solving tough problems. I primarily work on front-end
            development using React and Electron. I am always looking to improve
            my skills and take on new challenges. When I'm not coding, you can
            find me fishing or playing video games.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Header label="Education" />
          <Card className="flex w-full flex-row items-center gap-3 px-5">
            <div className="h-9 w-13 overflow-hidden">
              <img
                src="/Auburn.png"
                className="h-full w-full origin-center object-cover"
              />
            </div>
            <div className="flex w-full flex-col justify-center gap-1">
              <div className="flex justify-between">
                Auburn University
                <span className="text-muted-foreground">2019 - 2023</span>
              </div>
              <div className="text-muted-foreground flex justify-between text-sm">
                B.S. in Computer Science
                <span>GPA: 3.96</span>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-2">
          <Header label="Work Experience" />
          <Card className="h-fit w-full gap-2 px-5">
            <div className="flex justify-between">
              Trideum Corporation
              <span className="text-muted-foreground">2022 - Present</span>
            </div>
            <div className="relative flex min-h-full items-stretch gap-4">
              <div className="w-[1px]" />
              <Separator
                orientation="vertical"
                className="bg-accent absolute top-0 bottom-0 left-0 w-px"
              />
              <div className="flex w-full flex-col gap-6">
                <JobTitle
                  title="Software Engineer / UI Lead"
                  dates="August 2025 - Present"
                  bullets={[
                    "Led a team of 3 engineers to develop a mission critical Electron application communicating to a Go backend via websockets",
                    "Architected this Electron application with a focus on modularity and maintainability based on designs from Figma",
                    "Worked closely with the customer to ensure requirements were met and exceeded",
                  ]}
                  badges={["React", "Electron", "Go", "Docker"]}
                />
                <JobTitle
                  title="Junior Software Engineer"
                  dates="May 2023 - August 2025"
                  bullets={[
                    "Spearheaded front-end development for 3 projects using React and Electron",
                    "Completed full-stack tickets using Go and React",
                    "Worked with C# on a blazor web application",
                  ]}
                  badges={["React", "Electron", "Go", "Docker", "C#"]}
                />
                <JobTitle
                  title="Software Engineer Intern"
                  dates="May 2022 - May 2023"
                  bullets={[
                    "Created a front-end web application from scratch using React",
                    "Integrated a python back-end using Gunicorn and Flask",
                  ]}
                  badges={["React", "Flask", "Gunicorn", "Python"]}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
