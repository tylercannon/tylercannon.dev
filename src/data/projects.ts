import type { LucideIcon } from "lucide-react";
import { AppWindow, Trophy } from "lucide-react";

export type Project = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    status: "complete" | "development" | "planned";
    technologies: string[];
    icon: LucideIcon;
    liveUrl?: string;
    githubUrl?: string;
};

export const statuses: Record<Project["status"], { className: string; label: string }> = {
    complete: {
        className: "bg-neon-green/20 text-neon-green border-neon-green/30",
        label: "Mission Complete",
    },
    development: {
        className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        label: "In Development",
    },
    planned: {
        className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        label: "Planned",
    },
} as const;

export const projects: Project[] = [
    {
        description: "Real-time family card game score tracking web application.",
        githubUrl: "https://github.com/tylercannon/scoretracker",
        icon: Trophy,
        id: "scoretracker",
        liveUrl: "https://scoretracking.app",
        status: "complete",
        subtitle: "001-ALPHA",
        technologies: ["Elixir", "Phoenix", "Valkey", "LiveView", "Tailwind"],
        title: "Score Tracker",
    },
    {
        description: "This website",
        githubUrl: "https://github.com/tylercannon/tylercannon.dev",
        icon: AppWindow,
        id: "personal-site",
        status: "development",
        subtitle: "002-BETA",
        technologies: ["TypeScript", "React", "TanStack Start", "Tailwind", "Bun"],
        title: "Personal Website",
    },
];
