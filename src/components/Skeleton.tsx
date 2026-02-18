import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse'
}) => {
  const baseClasses = 'bg-white/10';
  
  const variantClasses = {
    text: 'rounded',
    rectangular: 'rounded-[8px]',
    circular: 'rounded-full'
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'skeleton-wave',
    none: ''
  };

  const style: React.CSSProperties = {
    width: width,
    height: height
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  );
};

// Skeleton presets for common use cases
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    <Skeleton variant="rectangular" className="w-full h-[180px]" />
    <Skeleton variant="text" className="w-3/4 h-4" />
    <Skeleton variant="text" className="w-1/2 h-4" />
  </div>
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        variant="text" 
        className={`h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} 
      />
    ))}
  </div>
);

export const SkeletonAvatar: React.FC<{ size?: number; className?: string }> = ({ 
  size = 48, 
  className = '' 
}) => (
  <Skeleton 
    variant="circular" 
    width={size} 
    height={size} 
    className={className}
  />
);

export const SkeletonSection: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`py-16 ${className}`}>
    <div className="max-w-[1112px] mx-auto px-[20px]">
      {/* Header */}
      <div className="text-center mb-8">
        <Skeleton variant="text" className="w-48 h-8 mx-auto mb-4" />
        <Skeleton variant="text" className="w-64 h-4 mx-auto" />
      </div>
      
      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default Skeleton;
