import { Link, type ValidateLinkOptions } from "@tanstack/react-router";
import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navLinks: { label: string; to: ValidateLinkOptions["to"] }[] = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Tech", to: "/tech" },
    { label: "Career", to: "/career" },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-(--header-offset) left-1/2 -translate-x-1/2 z-50",
                "w-full max-w-fit min-w-80 px-4 pointer-events-none",
            )}
        >
            <nav
                className={cn(
                    "relative bg-black/40 backdrop-blur-xl shadow-2xl",
                    "border border-white/10 rounded-full p-1.5",
                    "transition-all duration-300 hover:border-neon-green/30 pointer-events-auto group/nav",
                )}
            >
                <div className="flex items-center justify-between">
                    <Link
                        className="flex items-center gap-3 pl-1 pr-4 group/logo"
                        onClick={() => setOpen(false)}
                        to="/"
                    >
                        <div
                            className={cn(
                                "flex items-center justify-center size-10",
                                "bg-neon-green shadow-neon rounded-full",
                                "transition-transform duration-300",
                                "group-hover/logo:scale-105",
                            )}
                        >
                            <Rocket className="text-black fill-black" size={20} />
                        </div>
                        <span className="text-white font-bold tracking-widest text-sm md:text-base">
                            tylercannon.dev
                        </span>
                    </Link>

                    <DropdownMenu onOpenChange={setOpen} open={open}>
                        <DropdownMenuTrigger
                            className={cn(
                                "flex items-center justify-center size-10",
                                "border border-white/10 rounded-full",
                                "transition-all duration-300",
                                "focus-visible:ring-neon-green focus-visible:ring-2 focus-visible:outline-none",
                                "focus-visible:ring-offset-black focus-visible:ring-offset-2",
                                open
                                    ? "bg-neon-green text-black border-neon-green"
                                    : "bg-white/5 text-white hover:bg-neon-green hover:text-black hover:border-neon-green",
                            )}
                        >
                            {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className={cn(
                                "w-67.5 p-1.5 mt-3",
                                "bg-black backdrop-blur-2xl shadow-2xl",
                                "border border-white/10 rounded-2xl",
                            )}
                        >
                            {navLinks.map(link => (
                                <DropdownMenuItem
                                    className={cn(
                                        "flex items-center justify-between",
                                        "px-4 py-3 rounded-xl",
                                        "text-sm group/link cursor-pointer",
                                        "focus:bg-white/5 focus:text-neon-green",
                                    )}
                                    key={link.to}
                                    render={
                                        <Link
                                            activeProps={{
                                                className: "text-neon-green bg-white/5 font-semibold",
                                            }}
                                            inactiveProps={{
                                                className:
                                                    "text-white font-medium hover:text-neon-green hover:bg-white/5",
                                            }}
                                            onClick={() => setOpen(false)}
                                            to={link.to}
                                        />
                                    }
                                >
                                    {link.label}
                                    <div
                                        className={cn(
                                            "size-1.5 bg-neon-green rounded-full",
                                            "transition-transform duration-200 scale-0",
                                            "in-data-[status='active']:scale-100 group-hover/link:scale-100",
                                        )}
                                    />
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    );
};

export default Header;
