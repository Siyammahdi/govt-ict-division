import React, { ReactNode } from 'react';

interface ComponentLayoutProps {
  children: ReactNode;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto'>
      {children}
    </div>
  );
};

export default ComponentLayout;
