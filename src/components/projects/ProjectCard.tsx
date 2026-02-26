import { ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { type Project, statuses } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
    index: number;
    project: Project;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const status = statuses[project.status];

    return (
        <Card
            className={cn(
                "gap-4 bg-white/3 hover:bg-white/5",
                "border border-white/10 rounded-2xl hover:border-white/20",
                "transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 fill-mode-both",
            )}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <CardHeader>
                <Badge className={cn("rounded-md py-1.5 h-auto", status.className)} variant="outline">
                    {status.label}
                </Badge>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div
                        className={cn(
                            "flex items-center justify-center size-14 shrink-0",
                            "bg-neon-green/10 border-neon-green/20 border rounded-2xl",
                        )}
                    >
                        <project.icon aria-hidden="true" className="text-neon-green size-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-white text-lg font-bold">{project.title}</h3>
                        <span className="text-neon-green/60 text-xs font-mono">{project.subtitle}</span>
                    </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                        <Badge
                            className="h-auto py-1 rounded-md bg-white/5 border-white/10 text-white/60"
                            key={tech}
                            variant="outline"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="gap-3">
                {project.liveUrl ? (
                    <a
                        className={cn(
                            buttonVariants(),
                            "gap-2 rounded-lg font-bold uppercase",
                            "bg-neon-green hover:bg-neon-green/90 text-black",
                        )}
                        href={project.liveUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <ExternalLink aria-hidden="true" className="size-4" />
                        Launch
                    </a>
                ) : null}
                {project.githubUrl ? (
                    <a
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "gap-2 text-white font-bold uppercase",
                            "border-white/10 rounded-lg hover:border-white/20",
                            "bg-white/5 hover:bg-white/10",
                        )}
                        href={project.githubUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <GitBranch aria-hidden="true" className="size-4" />
                        Explore GitHub
                    </a>
                ) : null}
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
