import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, className = '', children, onClick }) => {
  const baseClassName = "text-gray-800 transition-colors duration-200";
  const combinedClassName = `${baseClassName} ${className}`;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={href} className={combinedClassName} onClick={handleClick}>
      {children}
    </a>
  );
};