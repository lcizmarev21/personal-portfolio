import  { useEffect } from "react";
import type { RefObject } from "react";
import {setupWaves, drawWaves, drawGlowWave} from "./useWaves";
import {setupParticles, drawParticles} from "./useParticles";

export function useBackground( canvasRef: RefObject<HTMLCanvasElement | null>) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return

        if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return

        let animationID: number;
        let t = 0;

        const waveColor = "rgba(120,200,255,1)";

        function resize(canvas: HTMLCanvasElement) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resize(canvas);
        window.addEventListener("resize", () => resize(canvas));

        const waves = setupWaves();
        const particles = setupParticles(canvas);

        const animate = ()  =>{

            ctx.fillStyle = "#1e293b";

            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for(const layer of waves) {
                drawWaves(ctx, layer, t, waveColor);
                drawGlowWave(ctx, layer, t, waveColor);
            }

            drawParticles( particles, ctx);

            t += 0.02;
            animationID = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animationID);
            window.removeEventListener("resize",() => resize(canvas));
        }
    }, [canvasRef]);
}

        