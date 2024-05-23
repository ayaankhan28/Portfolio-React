import React, { useState, useEffect, useRef } from 'react';
import './cursor.css';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorPosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updatePosition = () => {
      const { x, y } = cursorPosition.current;
      followerPosition.current = {
        x: followerPosition.current.x + (x - followerPosition.current.x) * 0.1,
        y: followerPosition.current.y + (y - followerPosition.current.y) * 0.1,
      };

      setPosition(followerPosition.current);
      requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-follower"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorFollower;
