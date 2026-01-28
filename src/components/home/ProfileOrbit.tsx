import { cn } from "@/lib/utils";

const ProfileOrbit = () => {
    return (
        <div className="relative flex items-center justify-center size-64 md:size-87.5">
            <div className="absolute size-48 md:size-72 rounded-full bg-neon-green/10 blur-3xl -z-10" />
            <div className="absolute inset-0 rounded-full border border-neon-green/10" />
            <div className="absolute size-10/12 rounded-full border border-neon-green/20" />

            <div
                className={cn([
                    "relative size-40 md:size-56 rounded-full p-1",
                    "bg-radial from-neon-green/50 to-transparent",
                ])}
            >
                <div className="size-full overflow-hidden bg-black border-neon-green/30 border-2 rounded-full">
                    <img
                        alt="Tyler - Profile"
                        className="size-full object-cover opacity-80"
                        height={224}
                        loading="lazy"
                        src="https://github.com/tylercannon.png"
                        width={224}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileOrbit;
