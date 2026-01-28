import { coreExpertise, type TechDomain, techDomains } from "@/data/tech";
import { cn } from "@/lib/utils";

// Convert polar coordinates to x,y position (rounded to avoid hydration mismatch)
const getPosition = (radius: number, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const x = Math.round(50 + (radius / 2) * Math.cos(rad));
    const y = Math.round(50 + (radius / 2) * Math.sin(rad));
    return { x, y };
};

type TechPlanetarySystemProps = {
    selectedDomain: TechDomain | null;
    onSelectDomain: (domain: TechDomain | null) => void;
};

const TechPlanetarySystem = ({ selectedDomain, onSelectDomain }: TechPlanetarySystemProps) => {
    return (
        <div className="relative aspect-square w-full max-w-xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute size-11/12 border rounded-full border-white/5" />
                <div className="absolute size-3/4 border rounded-full border-white/5" />
                <div className="absolute size-1/2 border rounded-full border-white/8" />
            </div>

            <button
                aria-label="View core expertise and technologies"
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-1/2 z-20",
                    "flex flex-col items-center justify-center size-28 rounded-full",
                    "transition-all duration-500 cursor-pointer",
                    "focus-visible:ring-neon-green focus-visible:ring-2 focus-visible:outline-none",
                    "focus-visible:ring-offset-cosmic-depth focus-visible:ring-offset-2",
                    selectedDomain === null
                        ? "bg-neon-green shadow-[0_0_60px_var(--color-neon-green)] border-2 border-transparent"
                        : "bg-black/80 border-2 border-white/20 hover:border-neon-green/50",
                )}
                onClick={() => onSelectDomain(null)}
                type="button"
            >
                <coreExpertise.icon
                    aria-hidden="true"
                    className={cn("size-8", selectedDomain === null ? "text-black" : "text-white/60")}
                />
                <span
                    className={cn(
                        "mt-2 text-[10px] font-bold tracking-wider uppercase",
                        selectedDomain === null ? "text-black/80" : "text-white/40",
                    )}
                >
                    Core
                </span>
            </button>

            {techDomains.map(domain => {
                const position = getPosition(domain.orbitalRadiusPercentage, domain.orbitalAngle);
                const isSelected = selectedDomain?.id === domain.id;

                return (
                    <button
                        aria-label={`View ${domain.name} technologies`}
                        className={cn(
                            "absolute -translate-1/2 z-10",
                            "flex flex-col items-center group cursor-pointer",
                            "transition-all duration-500",
                            "focus-visible:ring-neon-green focus-visible:ring-2 focus-visible:outline-none",
                            "focus-visible:ring-offset-cosmic-depth focus-visible:ring-offset-2",
                        )}
                        key={domain.id}
                        onClick={() => onSelectDomain(domain)}
                        style={{ left: `${position.x}%`, top: `${position.y}%` }}
                        type="button"
                    >
                        <div
                            className={cn(
                                "flex items-center justify-center size-16 rounded-full",
                                "transition-all duration-300",
                                isSelected
                                    ? "bg-neon-green shadow-[0_0_40px_var(--color-neon-green)] border-2 border-transparent"
                                    : "bg-black/80 shadow-lg border-2 border-white/10 hover:border-neon-green/50",
                            )}
                        >
                            <domain.icon
                                aria-hidden="true"
                                className={cn(
                                    "size-6 transition-colors duration-300",
                                    isSelected ? "text-black" : "text-white/60 group-hover:text-neon-green",
                                )}
                            />
                        </div>
                        <div
                            className={cn(
                                "px-3 py-1 mt-3 border rounded-full",
                                "text-[9px] font-bold tracking-[0.15em] uppercase",
                                "transition-all duration-300 whitespace-nowrap",
                                isSelected
                                    ? "bg-neon-green/10 border-neon-green/30 text-neon-green"
                                    : "bg-white/5 border-white/10 text-white/40 group-hover:text-white/60",
                            )}
                        >
                            {domain.name}
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

export default TechPlanetarySystem;
