import { ExternalLink, GitBranch } from "lucide-react";
import { type Project, statuses } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
    project: Project;
    index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const status = statuses[project.status];

    return (
        <article
            className={cn(
                "flex flex-col gap-4",
                "p-6 bg-white/3 hover:bg-white/5",
                "border border-white/10 rounded-2xl hover:border-white/20",
                "transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 fill-mode-both",
            )}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div
                className={cn(
                    "inline-flex items-center self-start px-3 py-1.5 border rounded-md",
                    "text-[10px] font-bold tracking-widest uppercase",
                    status.className,
                )}
            >
                {status.label}
            </div>
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
                    <span
                        className={cn(
                            "px-2.5 py-1 text-white/60 text-xs",
                            "bg-white/5 border-white/10 border rounded-md",
                        )}
                        key={tech}
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-3">
                {project.liveUrl && (
                    <a
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg",
                            "text-black font-bold text-sm uppercase",
                            "bg-neon-green hover:bg-neon-green/90 transition-colors",
                        )}
                        href={project.liveUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <ExternalLink aria-hidden="true" className="size-4" />
                        Launch
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        className={cn(
                            "flex items-center gap-2 px-4 py-2",
                            "text-white font-bold text-sm uppercase",
                            "border-white/10 border rounded-lg hover:border-white/20",
                            "bg-white/5 hover:bg-white/10 transition-colors",
                        )}
                        href={project.githubUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <GitBranch aria-hidden="true" className="size-4" />
                        Explore GitHub
                    </a>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;
