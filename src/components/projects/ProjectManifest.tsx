import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectManifest = () => {
    return (
        <section className="flex flex-col gap-6">
            {projects.map((project, index) => (
                <ProjectCard index={index} key={project.id} project={project} />
            ))}
        </section>
    );
};

export default ProjectManifest;
