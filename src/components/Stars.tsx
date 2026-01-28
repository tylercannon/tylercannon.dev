import { useEffect, useMemo, useRef } from "react";
import { getRandomInt } from "@/lib/utils";

type StarsProps = {
    starColor?: string;
    starCount?: number;
};

const Stars = ({ starColor = "#fff", starCount = 200 }: StarsProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const stars = useMemo(() => {
        const baseRadius = 2000;
        const sizes = [1, 1.5, 2];

        return Array.from({ length: starCount }, () => {
            const r = Math.sqrt(Math.random()) * baseRadius;
            const theta = Math.random() * 2 * Math.PI;
            return {
                size: sizes[getRandomInt(0, 2)],
                x: r * Math.cos(theta),
                y: r * Math.sin(theta),
            };
        });
    }, [starCount]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const computedStyle = getComputedStyle(document.documentElement);
        const resolvedColor = starColor.startsWith("--") ? computedStyle.getPropertyValue(starColor) : starColor;

        let animationFrameId: number;
        let rotation = 0;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Setup canvas dimensions with device pixel ratio
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        };

        // Use ResizeObserver for efficient resizing
        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(canvas);
        resizeCanvas();

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = resolvedColor;

            // Center the coordinate system
            ctx.save();
            ctx.translate(width / 2, height / 2);

            // Apply rotation only if user doesn't prefer reduced motion
            if (!prefersReducedMotion) {
                rotation += (2 * Math.PI) / (60 * 480);
            }
            ctx.rotate(rotation);

            for (const star of stars) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, [starColor, stars]);

    return <canvas className="absolute inset-0 size-full pointer-events-none" ref={canvasRef} />;
};

export default Stars;
