import { createFileRoute } from "@tanstack/react-router";
import { Telescope } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CareerTrajectory from "@/components/career/CareerTrajectory";

const Career = () => {
    return (
        <main className="w-full max-w-xl mx-auto py-12">
            <PageHeader icon={Telescope} sector="Mission Log" title="Career Milestones" />
            <CareerTrajectory />
        </main>
    );
};

export const Route = createFileRoute("/career")({ component: Career });
