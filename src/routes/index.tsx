import { createFileRoute } from "@tanstack/react-router";
import AboutMe from "@/components/home/AboutMe";
import ProfileOrbit from "@/components/home/ProfileOrbit";

const App = () => {
    return (
        <main className="flex flex-col flex-1 justify-center items-center gap-10">
            <ProfileOrbit />
            <AboutMe />
        </main>
    );
};

export const Route = createFileRoute("/")({ component: App });
