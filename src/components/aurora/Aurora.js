import React, { useEffect, useRef } from 'react';
import './Aurora.scss';

const Aurora = ({ colorStops = ["#bdffb3", "#7eafdd", "#5227FF"], amplitude = 1, blend = 0.5 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      colorStops.forEach((color, index) => {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2 + Math.sin(time + index) * 200 * amplitude,
          canvas.height / 2 + Math.cos(time + index) * 200 * amplitude,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width / 2
        );

        gradient.addColorStop(0, color + Math.floor(blend * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorStops, amplitude, blend]);

  return <canvas ref={canvasRef} className="aurora-canvas" />;
};

export default Aurora;
