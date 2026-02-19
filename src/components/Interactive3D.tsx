import React, { useEffect, useState } from 'react';

export function Interactive3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cameras = [
    { id: 1, x: -400, y: -150, intensity: 1.2 },
    { id: 2, x: 250, y: -280, intensity: 1.0 },
    { id: 3, x: -150, y: 200, intensity: 1.1 },
    { id: 4, x: 380, y: 120, intensity: 1.3 },
    { id: 5, x: -320, y: 80, intensity: 0.9 },
    { id: 6, x: 150, y: -100, intensity: 1.2 },
    { id: 7, x: -80, y: -250, intensity: 1.0 },
    { id: 8, x: 320, y: 280, intensity: 1.1 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ padding: '100px' }}>
      {cameras.map((camera) => {
        const rotateY = mousePosition.x * 35 * camera.intensity;
        const rotateX = -mousePosition.y * 25 * camera.intensity;
        const translateZ = Math.abs(mousePosition.x + mousePosition.y) * 40 * camera.intensity;
        const translateX = mousePosition.x * 30 * camera.intensity;
        const translateY = mousePosition.y * 20 * camera.intensity;

        return (
          <div
            key={camera.id}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${camera.x}px, ${camera.y}px)`,
              perspective: '1000px',
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))',
            }}
          >
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{
                transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${translateZ}px) translateX(${translateX}px) translateY(${translateY}px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Camera Body */}
              <div className="relative w-20 h-14 border-2 border-white/60 rounded-lg bg-transparent shadow-lg" 
                   style={{ boxShadow: '0 0 15px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1)' }}>
                {/* Main Lens */}
                <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 border-2 border-white/70 rounded-full bg-transparent"
                     style={{ boxShadow: '0 0 12px rgba(255, 255, 255, 0.3)' }}>
                  <div className="absolute inset-1 border border-white/50 rounded-full">
                    <div className="absolute inset-1 border border-white/40 rounded-full">
                      <div className="absolute inset-1 bg-white/15 rounded-full" style={{ boxShadow: 'inset 0 0 8px rgba(255, 255, 255, 0.2)' }}></div>
                    </div>
                  </div>
                </div>
                
                {/* Viewfinder */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-4 border border-white/60 rounded-sm bg-transparent"
                     style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}>
                  <div className="absolute inset-1 bg-white/15 rounded-sm"></div>
                </div>
                
                {/* Handle */}
                <div className="absolute -right-2 top-0 w-4 h-full border-l-2 border-t-2 border-b-2 border-white/60 rounded-r-lg bg-transparent"
                     style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}></div>
                
                {/* Recording Light */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full opacity-90 animate-pulse"
                     style={{ boxShadow: '0 0 8px rgba(255, 0, 0, 0.6)' }}></div>
                
                {/* Side Details */}
                <div className="absolute left-2 top-2 w-4 h-1 bg-white/20 rounded-full"></div>
                <div className="absolute left-2 bottom-2 w-6 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}