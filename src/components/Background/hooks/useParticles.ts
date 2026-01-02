interface Particle {
  x: number
  y: number
  r: number
  speed: number
}



export function setupParticles(canvas: HTMLCanvasElement) : Particle[] {
  
  return Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    speed: Math.random() * 0.2 + 0.5
  }))
 
}

export function drawParticles(particles: Particle[], ctx: CanvasRenderingContext2D) {
  
  for (const p of particles) {
    p.y -= p.speed
    if (p.y < 0) p.y = ctx.canvas.height

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(255,255,255,0.08)"
    ctx.fill()
  }
}
