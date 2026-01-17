import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface JobTitleProps {
  badges?: string[];
  title: string;
  dates: string;
  bullets?: string[];
}
const JobTitle = ({ badges, title, dates, bullets }: JobTitleProps) => {
  const badgeColorMap: { [key: string]: string } = {
    React: "bg-blue-500",
    Electron: "bg-purple-500",
    Go: "bg-teal-500 text-black",
    Docker: "bg-blue-700",
    Flask: "bg-teal-300 text-black",
    Gunicorn: "bg-green-400 text-black",
    Python: "bg-yellow-500 text-black",
    "C#": "bg-purple-700",
  };
  return (
    <div className="flex w-full flex-col">
      <div className="text-muted-foreground relative flex justify-between text-sm">
        <div className="bg-muted-foreground absolute top-[6px] left-[-20px] h-2 w-2" />
        <span className="text-white">{title}</span>
        <span>{dates}</span>
      </div>
      {bullets?.map((bullet) => (
        <span key={bullet} className="text-muted-foreground pt-1 text-xs">
          - {bullet}
        </span>
      ))}
      {badges && (
        <span className="text-muted-foreground flex flex-wrap gap-2 pt-1 text-xs">
          {badges?.map((badge) => (
            <Badge
              key={badge}
              className={cn(
                "text-white",
                badgeColorMap?.[badge] ?? "bg-blue-500",
              )}
            >
              {badge}
            </Badge>
          ))}
        </span>
      )}
    </div>
  );
};

export default JobTitle;
