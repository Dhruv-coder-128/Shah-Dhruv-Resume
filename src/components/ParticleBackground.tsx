import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;
      fadeSpeed: number = 0;
      color: string = '';

      constructor() {
        this.reset();
        this.y = Math.random() * canvas!.height;
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = canvas!.height + Math.random() * 20;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -(Math.random() * 0.6 + 0.2);
        this.opacity = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        
        // Luxury gold palette
        const goldTones = [
          'rgba(212, 175, 55, ', // Standard Gold
          'rgba(243, 229, 171, ', // Soft Vanilla Gold
          'rgba(153, 101, 21, ',  // Deep Bronze Gold
          'rgba(255, 215, 0, '    // Bright Gold
        ];
        this.color = goldTones[Math.floor(Math.random() * goldTones.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Add subtle wave movement
        this.x += Math.sin(this.y / 30) * 0.1;

        if (this.y < -10) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.opacity})`;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a subtle radial gradient background to enhance the luxury black depth
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        10,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(1, '#050505');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    // Mouse interactive effect (adds particles on click or move)
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.1 && particles.length < 100) {
        const p = new Particle();
        p.x = e.clientX;
        p.y = e.clientY;
        p.speedY = (Math.random() - 0.5) * 0.5;
        p.speedX = (Math.random() - 0.5) * 0.5;
        particles.push(p);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
