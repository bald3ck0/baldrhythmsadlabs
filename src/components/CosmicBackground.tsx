interface CosmicBackgroundProps {
  scrollY: number;
}

export default function CosmicBackground({ scrollY }: CosmicBackgroundProps) {
  return (
    <div
      className="fixed inset-0"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #1B0036 0%, #0B0B10 50%, #000000 100%)',
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    />
  );
}
