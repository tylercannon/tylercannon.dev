import { milestones } from "@/data/career";
import { cn } from "@/lib/utils";

const CareerTrajectory = () => {
    return (
        <section className="relative">
            {milestones.map((milestone, index) => (
                <div className="relative flex items-center gap-12" key={milestone.title}>
                    <div className="self-stretch flex flex-col items-center w-12 shrink-0">
                        <div className={cn("grow w-0.5 bg-white/10", index === 0 && "invisible")} />
                        <div
                            className={cn(
                                "relative z-10 shrink-0 size-12 rounded-full",
                                "flex items-center justify-center border-2 bg-cosmic-depth",
                                milestone.isCurrent ? "border-neon-green shadow-neon" : "border-white/20",
                            )}
                        >
                            <milestone.icon
                                aria-hidden="true"
                                className={cn(
                                    "size-6",
                                    milestone.isCurrent ? "text-neon-green" : "text-muted-foreground",
                                )}
                            />
                        </div>
                        <div className={cn("w-0.5 grow bg-white/10", index === milestones.length - 1 && "invisible")} />
                    </div>
                    <div className="flex-1 py-6">
                        <div
                            className={cn(
                                "bg-white/3 border rounded-2xl p-6 backdrop-blur-sm",
                                "hover:bg-white/5 transition-colors duration-300",
                                milestone.isCurrent ? "border-neon-green shadow-neon" : "border-white/10",
                            )}
                        >
                            {milestone.isCurrent && (
                                <div className="text-neon-green text-[10px] font-bold tracking-widest uppercase mb-2">
                                    Current Role
                                </div>
                            )}
                            <h3 className="text-white text-xl font-bold mb-1">{milestone.title}</h3>
                            <div className="text-muted-foreground text-sm mb-4">
                                {milestone.company} • {milestone.period}
                            </div>
                            <ul className="pl-4 list-disc space-y-2 text-muted-foreground/80 text-sm leading-relaxed">
                                {milestone.details.map(detail => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CareerTrajectory;
