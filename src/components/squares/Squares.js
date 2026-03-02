import React, { useEffect, useRef } from 'react';
import './Squares.scss';

const Squares = ({ 
  speed = 0.5, 
  size = 40, 
  direction = 'diagonal', 
  borderColor = '#271E37', 
  hoverColor = '#222222' 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createGrid = () => {
      const cols = Math.ceil(window.innerWidth / size);
      const rows = Math.ceil(window.innerHeight / size);

      container.innerHTML = '';

      for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.border = `1px solid ${borderColor}`;
        
        square.addEventListener('mouseenter', () => {
          square.style.backgroundColor = hoverColor;
        });
        
        square.addEventListener('mouseleave', () => {
          square.style.backgroundColor = 'transparent';
        });
        
        container.appendChild(square);
      }
    };

    createGrid();
    window.addEventListener('resize', createGrid);

    return () => {
      window.removeEventListener('resize', createGrid);
    };
  }, [size, borderColor, hoverColor]);

  return <div ref={containerRef} className="squares-container" />;
};

export default Squares;
