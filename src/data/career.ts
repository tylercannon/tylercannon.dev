import { Moon, Satellite, Terminal, Zap } from "lucide-react";

export type Milestone = {
    title: string;
    company: string;
    period: string;
    details: string[];
    icon: React.ElementType;
    isCurrent?: boolean;
};

export const milestones: Milestone[] = [
    {
        company: "Gravity Payments",
        details: [
            "Architected and built a real-time, Elixir-based payment processing solution capable of handling millions of concurrent terminal connections",
            "Built automated workflows for parsing, validating, and updating vendor data to eliminate third-party dependencies in the request hot path",
            "Used Pulumi to ensure consistent deployments across environments",
            "Mentored other engineers",
        ],
        icon: Terminal,
        isCurrent: true,
        period: "2021 - Present",
        title: "Senior Software Engineer",
    },
    {
        company: "Gravity Payments",
        details: [
            "Created an Elixir-based payment gateway that achieved certification with a major payment processor",
            "Iterated on TypeScript-based microservices",
            "Built unified operational dashboard providing real-time visibility into application reliability",
        ],
        icon: Satellite,
        period: "2018 - 2021",
        title: "Software Engineer II",
    },
    {
        company: "Gravity Payments",
        details: [
            "Built iframe-based hosted payment forms with TypeScript and React",
            "Developed and published a payments SDK for platform integration",
        ],
        icon: Moon,
        period: "2017 - 2018",
        title: "Software Engineer",
    },
    {
        company: "HPE",
        details: ["Improved performance of internal business intelligence web application by 88%"],
        icon: Zap,
        period: "2015 - 2017",
        title: "Software Engineering Intern",
    },
];
