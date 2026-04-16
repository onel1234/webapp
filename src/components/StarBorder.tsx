/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'cyan',
  speed = '6s',
  thickness = 2,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`relative overflow-hidden rounded-[24px] ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px`,
        ...(rest as any).style
      }}
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute animate-spin origin-center z-0"
          style={{
            top: '-150%',
            left: '-150%',
            width: '400%',
            height: '400%',
            background: `conic-gradient(from 0deg, transparent 70%, ${color} 85%, transparent 100%)`,
            animationDuration: speed,
          }}
        ></div>
      </div>
      <div className="relative z-[1] bg-gradient-to-b from-gray-900 to-black border border-gray-800/80 rounded-[22px] h-full w-full flex flex-col">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
