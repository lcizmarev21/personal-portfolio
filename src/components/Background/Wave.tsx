import { Line } from "@react-three/drei";
import { useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

interface WaveLayerProps {
  y: number; // vertical offset
  amplitude: number;
  speed: number;
  color?: string;
  opacity?: number;
  frequency?: number;
}

 function WaveLayer({
  y,
  amplitude,
  speed,
  color = "#3b82f6",
  opacity = 0.4,
  frequency = 2,
}: WaveLayerProps) {
  const segments = 400;
  const length = 100;

  const basePoints = useMemo(
    () =>
      Array.from({ length: segments }, (_, i) => {
        const x = (i / (segments - 1)) * length - length / 2;
        return [x, 0, 0] as [number, number, number];
      }),
    []
  );

  const [points, setPoints] = useState(basePoints);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    const newPoints = basePoints.map(([x, _unused, z]) => [
      x,
      Math.sin(x * frequency + t) * amplitude,
      z,
    ] as [number, number, number]);
    setPoints(newPoints);
  });

  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={opacity}
      position={[0, y, -4]}
    />
  );
}

export function Waves() {
  return (
    <>
      <WaveLayer y={-0.5} amplitude={0.5} speed={1} opacity={0.5} color="#3b82f6" frequency={1.5} />
      <WaveLayer y={-1} amplitude={0.3} speed={1.3} opacity={0.3} color="#60a5fa" frequency={1.8} />
      <WaveLayer y={-1.5} amplitude={0.4} speed={0.8} opacity={0.4} color="#93c5fd" frequency={1.2} />
      <WaveLayer y={-2} amplitude={0.2} speed={1.5} opacity={0.25} color="#bfdbfe" frequency={1.6} />
    </>
  );
}