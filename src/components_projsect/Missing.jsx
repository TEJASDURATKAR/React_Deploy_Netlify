import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', color: 'red' }}>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default Missing;
