import React from 'react';
import '../styles.css';

const ResponsiveWrapper = ({ children }) => {
  return (
    <div className="video-responsive">
      {children}
    </div>
  );
};

export default ResponsiveWrapper;
