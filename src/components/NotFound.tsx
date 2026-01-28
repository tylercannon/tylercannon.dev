import { Link } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const NotFound = () => {
    return (
        <main className="flex flex-1 items-center justify-center text-neon-green">
            <div className="relative flex flex-col items-center gap-8 w-full text-center">
                <div className="relative h-48 w-full overflow-x-hidden">
                    <div
                        className="absolute -left-25 top-1/2 size-16"
                        style={{
                            animation: "float-horizontal 60s linear infinite",
                        }}
                    >
                        <Rocket
                            aria-hidden="true"
                            className="size-full"
                            style={{
                                animation: "spin 10s linear infinite",
                                filter: "drop-shadow(0 0 20px rgba(57, 255, 20, 0.6))",
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-2xl font-semibold animate-pulse">Houston, we have a problem...</p>
                    <p className="max-w-md text-lg">It looks like you're lost in space.</p>
                </div>
                <Link
                    className={cn(
                        "px-8 py-3 bg-cosmic-void",
                        "border-neon-green border rounded-lg",
                        "hover:bg-neon-green hover:text-cosmic-depth",
                    )}
                    to="/"
                >
                    Return to Safety
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
