import { useEffect, useRef } from "react";

export default function CircuitBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Handle parallax on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (svg) {
        svg.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.3; }
          }
          .circuit-line {
            stroke: #39FF88;
            stroke-width: 2;
            fill: none;
            animation: pulse 3s ease-in-out infinite;
          }
          .circuit-dot {
            fill: #39FF88;
            animation: pulse 2s ease-in-out infinite;
          }
        `}</style>
      </defs>

      {/* Horizontal circuit traces */}
      <path
        className="circuit-line"
        d="M 0 200 L 400 200 L 500 150 L 900 150 L 1000 200 L 1920 200"
      />
      <path
        className="circuit-line"
        d="M 0 400 L 300 400 L 400 450 L 800 450 L 900 400 L 1920 400"
      />
      <path
        className="circuit-line"
        d="M 0 600 L 500 600 L 600 550 L 1100 550 L 1200 600 L 1920 600"
      />
      <path
        className="circuit-line"
        d="M 0 800 L 400 800 L 500 750 L 900 750 L 1000 800 L 1920 800"
      />

      {/* Vertical circuit traces */}
      <path
        className="circuit-line"
        d="M 300 0 L 300 300 L 350 400 L 300 500 L 300 1080"
      />
      <path
        className="circuit-line"
        d="M 800 0 L 800 250 L 750 350 L 800 450 L 800 1080"
      />
      <path
        className="circuit-line"
        d="M 1400 0 L 1400 300 L 1450 400 L 1400 500 L 1400 1080"
      />

      {/* Circuit connection dots */}
      <circle className="circuit-dot" cx="300" cy="200" r="4" />
      <circle className="circuit-dot" cx="500" cy="150" r="4" />
      <circle className="circuit-dot" cx="900" cy="150" r="4" />
      <circle className="circuit-dot" cx="1000" cy="200" r="4" />
      <circle className="circuit-dot" cx="300" cy="400" r="4" />
      <circle className="circuit-dot" cx="400" cy="450" r="4" />
      <circle className="circuit-dot" cx="800" cy="450" r="4" />
      <circle className="circuit-dot" cx="900" cy="400" r="4" />
      <circle className="circuit-dot" cx="500" cy="600" r="4" />
      <circle className="circuit-dot" cx="600" cy="550" r="4" />
      <circle className="circuit-dot" cx="1100" cy="550" r="4" />
      <circle className="circuit-dot" cx="1200" cy="600" r="4" />
    </svg>
  );
}
