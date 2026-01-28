import { createFileRoute } from "@tanstack/react-router";
import { FolderKanban } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ProjectManifest from "@/components/projects/ProjectManifest";

const Projects = () => {
    return (
        <main className="w-full max-w-xl mx-auto py-12">
            <PageHeader icon={FolderKanban} sector="Projects" title="Current Manifest" />
            <ProjectManifest />
        </main>
    );
};

export const Route = createFileRoute("/projects")({ component: Projects });
