import Stars from "./Stars";

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none bg-cosmic-depth overflow-hidden">
            <Stars starColor="--color-neon-green" starCount={400} />
        </div>
    );
};

export default GlobalBackground;
