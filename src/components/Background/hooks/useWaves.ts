export type Wave = {
    yOffset: number,
    amp: number,
    speed: number,
    wavelength: number,
    opacity:number,
    blur:number
}

export function setupWaves(): Wave[] {

    return [
   
    { amp: 22, wavelength: 700, speed: 0.1, opacity: 0.02, blur: 6, yOffset: -100 },
    { amp: 35, wavelength: 1200, speed: 0.18, opacity: 0.035, blur: 6, yOffset: -60 },
    { amp: 48, wavelength: 800, speed: 0.26, opacity: 0.055, blur: 6, yOffset: 20 },
];

    
}

export function drawWaves(
    ctx: CanvasRenderingContext2D,
    layer: Wave ,
    time: number,
    color: string
) {
    
    const midY = ctx.canvas.height / 2;
    ctx.save();

    ctx.lineWidth = 6;
    ctx.strokeStyle = color;
    ctx.globalAlpha = layer.opacity;
    ctx.shadowBlur = layer.blur;
    ctx.shadowColor = color;
    

    ctx.beginPath();

    for( let x= 0; x <= ctx.canvas.width; x += 12 ) {
        const y =
            midY +
            layer.yOffset +
            Math.sin( (( x / layer.wavelength ) +  time * layer.speed ) ) * layer.amp;

        if (x === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

        
       
        
        ctx.stroke();
        ctx.restore();
    }
}

export function drawGlowWave(
    ctx: CanvasRenderingContext2D,
    layer: Wave ,
    time: number,
    color: string
) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = layer.opacity * 1.2;
    ctx.shadowBlur = layer.blur * 1.6;
    ctx.shadowColor = color;

    drawWaves(ctx, layer, time, color);

    ctx.restore();
}