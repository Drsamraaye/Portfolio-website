import React from 'react';

interface InfiniteSliderProps {
  children?: React.ReactNode;
  className?: string;
  direction?: 'horizontal' | 'vertical';
  speedOnHover?: number;
  speed?: number;
  gap?: number;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  className,
  direction = 'horizontal',
  speedOnHover = 0,
  speed = 0,
  gap = 0,
}) => {
  return (
    <div
      className={className}
      data-direction={direction}
      data-speed-on-hover={speedOnHover}
      data-speed={speed}
      data-gap={gap}
      style={{
        display: 'flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        gap: gap,
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};
