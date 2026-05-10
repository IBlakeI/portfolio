import { MapPin, Linkedin, Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Header from "./Header";
import { Card } from "./ui/card";
import JobTitle from "./JobTitle";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div className="dark flex min-h-screen w-full flex-col items-center overflow-y-auto px-4 py-6 text-white">
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
                    "Architected the Electron application with a focus on modularity and maintainability based on Figma designs",
                    "Worked closely with the customer and SE team to ensure requirements were met",
                    "Served as the Software Product Owner, where I was responsible for prioritizing the backlog and ensuring timely delivery of features",
                  ]}
                  badges={["Typescript", "React", "Electron", "Go", "Docker"]}
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
        <div className="flex flex-col gap-2">
          <Header label="Projects" />
          <Card className="flex h-fit w-full flex-col gap-6 px-5">
            <Project
              title="Shadow Cap"
              image="shadow-cap.png"
              bullets={[
                "Built a ShadowPlay-inspired desktop screen recorder using Electron, React, and TypeScript",
                "Implemented a rolling buffer system to continuously capture the last X minutes of screen activity",
                "Added global hotkey system for screenshot capture, buffer save, and recording control",
                "Implemented export pipeline with customizable output directory",
              ]}
              badges={["React", "Electron", "TypeScript"]}
              links={[
                {
                  label: "GitHub",
                  url: "https://github.com/IBlakeI/shadow-cap",
                },
              ]}
            />
            <Project
              title="Home Lab"
              image="stats-ui.png"
              bullets={[
                "Raspberry Pi-based homelab with Pi-hole DNS filtering",
                "Full-stack system monitoring dashboard (React + Vite + TypeScript + FastAPI)",
                "Custom systemd service exposing real-time system metrics",
                "Live tracking of CPU, RAM, storage, and uptime",
                "Self-hosted infrastructure monitoring UI",
              ]}
              badges={["React", "TypeScript", "Python", "Docker"]}
            />
            <Project
              title="Valorant Overlay"
              image="valorant-overlay.png"
              bullets={[
                "Electron-based Valorant stream overlay showing rank, Elo, and recent match changese",
                "Integrated public API for live player stats and match history",
                "Configurable Riot ID, region, fonts, and background styling",
                "Lightweight overlay optimized for streaming (OBS-friendly)",
                "Real-time updates for rank and Elo tracking",
              ]}
              badges={["React", "Electron", "TypeScript"]}
              links={[
                {
                  label: "GitHub",
                  url: "https://github.com/IBlakeI/valorantoverlay",
                },
              ]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
