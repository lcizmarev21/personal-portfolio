interface Wave {
    yOffset: number,
    amp: number,
    speed: number,
    color: string,
}

export function setupWaves(canvas: HTMLCanvasElement,): Wave[] {

    
    return [
        { yOffset: canvas.height * 0.4, amp: 40, speed: 0.5, color: "rgba(0, 200, 255, 0.5)" },
        { yOffset: canvas.height * 0.5, amp: 30, speed: 0.3, color: "rgba(0, 150, 255, 0.3)" },
        { yOffset: canvas.height * 0.6, amp: 20, speed: 0.7, color: "rgba(0, 100, 255, 0.2)" },
    ];
    
}

export function drawWaves(waves: Wave[], t: number, ctx: CanvasRenderingContext2D) {
    
    for (const wave of waves) {
        ctx.beginPath();
        ctx.strokeStyle = wave.color ;
        ctx.lineWidth = 5;

        for (let x = 0; x <= ctx.canvas.width; x += 2) {
            const y = wave.yOffset + Math.sin(x * 0.02 + t * wave.speed) * wave.amp;
            ctx.lineTo(x, y);
        }

        ctx.stroke();
    }
}