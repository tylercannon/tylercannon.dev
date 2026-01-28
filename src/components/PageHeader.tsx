import type { LucideIcon } from "lucide-react";

type PageHeaderProps = {
    icon: LucideIcon;
    sector: string;
    title: string;
};

const PageHeader = ({ icon: Icon, sector, title }: PageHeaderProps) => {
    return (
        <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
                <Icon aria-hidden="true" className="text-neon-green size-5" />
                <span className="text-muted-foreground text-[10px] font-bold tracking-[0.2em] uppercase">
                    Sector: {sector}
                </span>
            </div>
            <h1 className="text-neon-green text-4xl font-bold font-heading">{title}</h1>
        </header>
    );
};

export default PageHeader;
