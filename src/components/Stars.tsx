import { useEffect, useRef } from "react";

type Star = {
    x: number;
    y: number;
    z: number;
    pz: number; // Previous Z for star trail
};

type StarsProps = Partial<{
    starColor: string;
    starCount: number;
}>;

const BASE_FOV = 400;
const UNIVERSE_SIZE = 2000;

const generateStar = (props?: { startFromCenter: boolean }) => {
    const startFromCenter = props?.startFromCenter ?? false;

    const x = (Math.random() - 0.5) * UNIVERSE_SIZE;
    const y = (Math.random() - 0.5) * UNIVERSE_SIZE;
    const z = startFromCenter ? UNIVERSE_SIZE : Math.random() * UNIVERSE_SIZE;

    return { pz: z, x, y, z };
};

const Stars = ({ starColor = "#fff", starCount = 400 }: StarsProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        starsRef.current = Array.from({ length: starCount }, generateStar);

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const computedStyle = getComputedStyle(document.documentElement);
        const resolvedColor = starColor.startsWith("--") ? computedStyle.getPropertyValue(starColor) : starColor;
        const warpSpeed = prefersReducedMotion ? 0 : 1;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(canvas);
        resizeCanvas();

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = resolvedColor;
            ctx.strokeStyle = resolvedColor;

            const centerX = Math.floor(width / 2);
            const centerY = Math.floor(height / 2);

            for (const star of starsRef.current) {
                star.pz = star.z + warpSpeed * 3;
                star.z -= warpSpeed;

                const { pz, x, y, z } = star;

                if (z <= 1) {
                    const resetStar = generateStar({ startFromCenter: true });
                    star.x = resetStar.x;
                    star.y = resetStar.y;
                    star.z = resetStar.z;
                    star.pz = resetStar.pz;
                    continue;
                }

                const projectedX = Math.floor(centerX + (x / z) * BASE_FOV);
                const projectedY = Math.floor(centerY + (y / z) * BASE_FOV);

                const prevProjectedX = Math.floor(centerX + (x / pz) * BASE_FOV);
                const prevProjectedY = Math.floor(centerY + (y / pz) * BASE_FOV);

                const depthPercentage = z / UNIVERSE_SIZE;
                const baseOpacity = 1 - depthPercentage;
                const opacity = Math.min(1, Math.max(0, baseOpacity));

                const distanceToCenter = UNIVERSE_SIZE / 2 - z;
                const sizeScaleFactor = UNIVERSE_SIZE / 4;
                const sizeMultiplier = distanceToCenter / sizeScaleFactor;
                const size = Math.max(0.5, sizeMultiplier);

                ctx.beginPath();
                ctx.moveTo(prevProjectedX, prevProjectedY);
                ctx.lineTo(projectedX, projectedY);
                ctx.lineWidth = size;
                ctx.globalAlpha = opacity;
                ctx.stroke();

                ctx.globalAlpha = opacity * 0.4;
                const glowSize = Math.floor(size * 3);
                const halfGlow = Math.floor(glowSize / 2);
                ctx.fillRect(projectedX - halfGlow, projectedY - halfGlow, glowSize, glowSize);

                ctx.globalAlpha = opacity;
                const coreSize = Math.floor(size * 1.6);
                const halfCore = Math.floor(coreSize / 2);
                ctx.fillRect(projectedX - halfCore, projectedY - halfCore, coreSize, coreSize);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, [starColor, starCount]);

    return (
        <canvas
            aria-hidden="true"
            className="absolute inset-0 size-full pointer-events-none touch-none"
            ref={canvasRef}
            tabIndex={-1}
        />
    );
};

export default Stars;
