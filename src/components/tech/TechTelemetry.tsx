import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { coreExpertise, type TechDomain } from "@/data/tech";
import { cn } from "@/lib/utils";

type TechTelemetryProps = {
    selectedDomain: TechDomain | null;
};

const TechTelemetry = ({ selectedDomain }: TechTelemetryProps) => {
    const displayData = selectedDomain ?? coreExpertise;

    return (
        <section className="mt-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-neon-green text-sm font-bold tracking-[0.2em] uppercase">Telemetry</h2>
                <div className="text-white/30 text-[10px] uppercase tracking-widest">
                    {selectedDomain ? `${displayData.technologies.length} Technologies` : "Overview"}
                </div>
            </div>
            <Card
                className={cn(
                    "bg-white/3 transition-all duration-500",
                    "border border-white/10 rounded-3xl ring-0 shadow-none",
                )}
            >
                <CardContent>
                    <div className="flex items-start gap-4">
                        <div
                            className={cn(
                                "flex items-center justify-center size-14 shrink-0 bg-neon-green/10",
                                "border border-neon-green/20 rounded-2xl",
                            )}
                        >
                            <displayData.icon aria-hidden="true" className="text-neon-green size-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white text-xl font-bold">{displayData.name}</h3>
                            <p className="mt-1 text-white/50 text-sm leading-relaxed line-clamp-3">
                                {displayData.description}
                            </p>
                            {displayData.technologies.length > 0 ? (
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {displayData.technologies.map((tech, index) => (
                                        <Badge
                                            className={cn(
                                                "h-auto py-1.5 rounded-lg text-sm",
                                                "bg-white/5 border-white/10 text-white/70 hover:border-neon-green/50",
                                                "animate-in fade-in slide-in-from-bottom-1 fill-mode-both",
                                            )}
                                            key={tech}
                                            style={{ animationDelay: `${index * 50}ms` }}
                                            variant="outline"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default TechTelemetry;
