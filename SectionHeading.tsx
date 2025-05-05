import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-24 h-1 bg-terracotta ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;