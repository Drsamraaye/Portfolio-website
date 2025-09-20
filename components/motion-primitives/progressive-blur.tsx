import React from 'react';

interface ProgressiveBlurProps {
  children?: React.ReactNode;
  className?: string;
  direction?: 'horizontal' | 'vertical' | 'left' | 'right'; // allow left/right for your use case
  blurIntensity?: number; // control how much blur
}

export const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  children,
  className,
  direction = 'horizontal', // default
  blurIntensity = 0,        // default no blur
}) => {
  return (
    <div
      className={className}
      data-direction={direction}
      data-blur-intensity={blurIntensity}
      style={{
        filter: `blur(${blurIntensity}px)`,
        transition: 'filter 0.3s ease-in-out',
        pointerEvents: 'none', // optional if you want it not to block clicks
      }}
    >
      {children}
    </div>
  );
};
