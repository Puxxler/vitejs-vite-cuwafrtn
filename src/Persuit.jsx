// Persuit Game Component (Placeholder for full version)
// You should replace this with your latest full version of the Persuit component.

import { useState } from 'react';

export default function Persuit() {
  const [xp, setXp] = useState(0);
  const [message, setMessage] = useState("Welcome to Persuit!");

  const handleCatch = () => {
    setXp(xp + 10);
    setMessage("Caught a criminal! +10 XP");
  };

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'lime',
      fontFamily: 'monospace',
      height: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>🚓 Persuit - Retro Arcade</h1>
      <p>{message}</p>
      <p>XP: {xp}</p>
      <button onClick={handleCatch} style={{ fontSize: '20px', marginTop: '20px' }}>
        Catch Criminal
      </button>
    </div>
  );
}
