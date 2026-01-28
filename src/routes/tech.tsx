import { createFileRoute } from "@tanstack/react-router";
import { Cpu } from "lucide-react";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import TechPlanetarySystem from "@/components/tech/TechPlanetarySystem";
import TechTelemetry from "@/components/tech/TechTelemetry";
import type { TechDomain } from "@/data/tech";

const TechStack = () => {
    const [selectedDomain, setSelectedDomain] = useState<TechDomain | null>(null);

    return (
        <main className="w-full max-w-xl mx-auto py-12">
            <PageHeader icon={Cpu} sector="Tech" title="Skills" />
            <TechPlanetarySystem onSelectDomain={setSelectedDomain} selectedDomain={selectedDomain} />
            <TechTelemetry selectedDomain={selectedDomain} />
        </main>
    );
};

export const Route = createFileRoute("/tech")({ component: TechStack });
