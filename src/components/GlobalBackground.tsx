import Stars from "./Stars";

const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-cosmic-depth" />
            <Stars starColor="--color-neon-green" starCount={300} />
        </div>
    );
};

export default GlobalBackground;
