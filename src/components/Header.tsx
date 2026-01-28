import { Link, type ValidateLinkOptions } from "@tanstack/react-router";
import { Menu, Rocket, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks: { label: string; to: ValidateLinkOptions["to"] }[] = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Tech", to: "/tech" },
    { label: "Career", to: "/career" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        if (isOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsClosing(false);
            }, 200);
        } else {
            setIsOpen(true);
        }
    };

    const closeMenu = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 200);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, closeMenu]);

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
                ref={navRef}
            >
                <div className="flex items-center justify-between">
                    <Link className="flex items-center gap-3 pl-1 pr-4 group/logo" onClick={closeMenu} to="/">
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

                    <button
                        aria-expanded={isOpen}
                        aria-label="Toggle menu"
                        className={cn(
                            "flex items-center justify-center size-10",
                            "border border-white/10 rounded-full",
                            "transition-all duration-300",
                            "focus-visible:ring-neon-green focus-visible:ring-2 focus-visible:outline-none",
                            "focus-visible:ring-offset-black focus-visible:ring-offset-2",
                            isOpen
                                ? "bg-neon-green text-black border-neon-green"
                                : "bg-white/5 text-white hover:bg-neon-green hover:text-black hover:border-neon-green",
                        )}
                        onClick={toggleMenu}
                        type="button"
                    >
                        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
                    </button>
                </div>
                {isOpen && (
                    <div
                        className={cn(
                            "absolute top-full left-0 right-0 p-1.5 mt-3",
                            "bg-black backdrop-blur-2xl shadow-2xl overflow-hidden",
                            "border border-white/10 rounded-2xl",
                            "origin-top duration-200",
                            isClosing ? "animate-out fade-out zoom-out" : "animate-in fade-in zoom-in",
                        )}
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map(link => (
                                <Link
                                    activeProps={{
                                        className: "text-neon-green bg-white/5 font-semibold",
                                    }}
                                    className={cn(
                                        "flex items-center justify-between",
                                        "px-4 py-3 rounded-xl transition-all duration-200",
                                        "text-sm group/link",
                                    )}
                                    inactiveProps={{
                                        className: "text-white hover:text-neon-green hover:bg-white/5 font-medium",
                                    }}
                                    key={link.to}
                                    onClick={closeMenu}
                                    to={link.to}
                                >
                                    {link.label}
                                    <div
                                        className={cn(
                                            "size-1.5 bg-neon-green rounded-full",
                                            "transition-transform duration-200 scale-0",
                                            "in-data-[status='active']:scale-100 group-hover/link:scale-100",
                                        )}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
