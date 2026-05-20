import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="loading-spinner"></div>
      <p className="mt-3" style={{ color: 'var(--sepia)' }}>Chargement...</p>
    </div>
  );
};

export default LoadingSpinner;