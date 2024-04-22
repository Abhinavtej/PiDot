import React from 'react';
import { Link } from 'react-router-dom';

export default function MyComponent() {
  const errorContainer = {
    width: '100%',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const errorHead = {
    marginTop: '1.5em',
    fontSize: '10em',
    fontWeight: 'bold',
  };

  const errorP = {
    fontSize: '2em',
    fontWeight: 'bold',
  };

  return (
    <div style={errorContainer}>
      <h1 style={errorHead}>404</h1>
      <p style={errorP}>Page Not Found</p> <br />
      <button className="w-40 h-20 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"><Link to="/">Go Back to Home</Link></button>
    </div>
  );
}
