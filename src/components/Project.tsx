import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  image?: string;
  bullets?: string[];
  badges?: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

const Project = ({ title, image, bullets, badges, links }: ProjectProps) => {
  const badgeColorMap: { [key: string]: string } = {
    React: "bg-blue-500",
    Electron: "bg-purple-500",
    Go: "bg-teal-500 text-black",
    Docker: "bg-blue-700",
    Flask: "bg-teal-300 text-black",
    Python: "bg-yellow-500 text-black",
    TypeScript: "bg-blue-600",
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="text-muted-foreground relative flex items-center justify-between text-sm">
        <span className="text-lg text-white">{title}</span>
        {links && (
          <span className="flex gap-3 text-xs">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground flex flex-row items-center gap-1 transition hover:text-white"
              >
                {link.label} <ExternalLink size={12} />
              </a>
            ))}
          </span>
        )}
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          {bullets?.map((bullet) => (
            <span key={bullet} className="text-muted-foreground text-xs">
              - {bullet}
            </span>
          ))}
          {badges && (
            <span className="text-muted-foreground flex flex-wrap gap-2 pt-1 text-xs">
              {badges.map((badge) => (
                <Badge
                  key={badge}
                  className={cn(
                    "text-white",
                    badgeColorMap[badge] ?? "bg-blue-500",
                  )}
                >
                  {badge}
                </Badge>
              ))}
            </span>
          )}
        </div>
        {image && (
          <div className="mt-1 flex h-full items-center overflow-hidden rounded-md border">
            <img
              src={image}
              alt={title}
              className="border-border h-auto w-[250px] object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
