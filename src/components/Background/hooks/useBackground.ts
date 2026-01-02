import  { useEffect } from "react";
import type { RefObject } from "react";
import {setupWaves, drawWaves} from "./useWaves";
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

        function resize(canvas: HTMLCanvasElement) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resize(canvas);
        window.addEventListener("resize", () => resize(canvas));

        const waves = setupWaves(canvas);
        const particles = setupParticles(canvas);

        const animate = ()  =>{

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawWaves( waves , t, ctx);
            drawParticles(particles, ctx);

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

        