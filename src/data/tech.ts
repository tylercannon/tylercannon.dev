import type { LucideIcon } from "lucide-react";
import { Cloud, Database, Globe, Layers, Server } from "lucide-react";

export type TechDomain = {
    description: string;
    id: string;
    name: string;
    icon: LucideIcon;
    technologies: string[];
    orbitalRadiusPercentage: number;
    orbitalAngle: number; // 0-360
};

export const coreExpertise: Pick<TechDomain, "description" | "icon" | "name" | "technologies"> = {
    description:
        "Over eight years of experience in architecting scalable, high-performance, real-time backend systems and APIs.",
    icon: Layers,
    name: "Core",
    technologies: [],
};

export const techDomains: TechDomain[] = [
    {
        description: "Building performant user interfaces with modern frameworks and tooling.",
        icon: Globe,
        id: "frontend",
        name: "Frontend",
        orbitalAngle: 340,
        orbitalRadiusPercentage: 90,
        technologies: ["React", "TypeScript", "TailwindCSS", "TanStack Start", "Vite", "esbuild"],
    },
    {
        description: "Designing scalable APIs and services that power mission-critical applications.",
        icon: Server,
        id: "backend",
        name: "Backend",
        orbitalAngle: 45,
        orbitalRadiusPercentage: 95,
        technologies: ["TypeScript / Express", "Elixir / Phoenix", "REST APIs", "WebSocket APIs", "Kotlin"],
    },
    {
        description: "Orchestrating infrastructure and deployments with modern cloud platforms.",
        icon: Cloud,
        id: "cloud",
        name: "Cloud & DevOps",
        orbitalAngle: 115,
        orbitalRadiusPercentage: 80,
        technologies: ["AWS", "IaC / Pulumi", "Serverless Framework", "Docker", "GitHub Actions", "Datadog"],
    },
    {
        description: "Working with relational and NoSQL databases at scale.",
        icon: Database,
        id: "data",
        name: "Data",
        orbitalAngle: 180,
        orbitalRadiusPercentage: 50,
        technologies: ["DynamoDB", "Redis", "MySQL", "SQL Server"],
    },
];
