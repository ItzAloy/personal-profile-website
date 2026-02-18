import React, { useRef, useEffect, useState, useMemo } from 'react';

interface VariableProximityProps {
  label: string;
  className?: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef: React.RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: 'linear' | 'exponential' | 'gaussian';
}

const VariableProximity: React.FC<VariableProximityProps> = ({
  label,
  className = '',
  fromFontVariationSettings = "'wght' 400",
  toFontVariationSettings = "'wght' 900",
  containerRef,
  radius = 100,
  falloff = 'linear'
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [charPositions, setCharPositions] = useState<Array<{ x: number; y: number }>>([]);

  // Parse font variation settings
  const parseSettings = (settings: string) => {
    const match = settings.match(/'wght'\s*(\d+)/);
    return match ? parseInt(match[1], 10) : 400;
  };

  const fromWeight = useMemo(() => parseSettings(fromFontVariationSettings), [fromFontVariationSettings]);
  const toWeight = useMemo(() => parseSettings(toFontVariationSettings), [toFontVariationSettings]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef]);

  useEffect(() => {
    if (!textRef.current) return;

    const updatePositions = () => {
      const chars = textRef.current?.querySelectorAll('.var-char');
      if (!chars) return;

      const positions: Array<{ x: number; y: number }> = [];
      chars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const parentRect = textRef.current?.getBoundingClientRect();
        if (parentRect) {
          positions.push({
            x: rect.left - parentRect.left + rect.width / 2,
            y: rect.top - parentRect.top + rect.height / 2
          });
        }
      });
      setCharPositions(positions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, [label]);

  const calculateWeight = (charIndex: number) => {
    if (charPositions.length === 0 || charIndex >= charPositions.length) {
      return fromWeight;
    }

    const charPos = charPositions[charIndex];
    const textRect = textRef.current?.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (!textRect || !containerRect) return fromWeight;

    const relativeCharX = textRect.left - containerRect.left + charPos.x;
    const relativeCharY = textRect.top - containerRect.top + charPos.y;

    const distance = Math.sqrt(
      Math.pow(mousePos.x - relativeCharX, 2) + 
      Math.pow(mousePos.y - relativeCharY, 2)
    );

    if (distance > radius) return fromWeight;

    let factor: number;
    switch (falloff) {
      case 'exponential':
        factor = Math.pow(1 - distance / radius, 2);
        break;
      case 'gaussian':
        factor = Math.exp(-Math.pow(distance / (radius * 0.5), 2));
        break;
      case 'linear':
      default:
        factor = 1 - distance / radius;
    }

    return Math.round(fromWeight + (toWeight - fromWeight) * factor);
  };

  return (
    <span ref={textRef} className={className}>
      {label.split('').map((char, index) => (
        <span
          key={index}
          className="var-char"
          style={{
            fontVariationSettings: `'wght' ${calculateWeight(index)}`,
            display: 'inline-block',
            transition: 'font-variation-settings 0.1s ease-out'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default VariableProximity;
