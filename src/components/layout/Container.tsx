import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      data-testid="container"
      className={`max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
