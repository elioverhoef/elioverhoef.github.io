import React, { useState } from 'react';
import VisionBoard from './VisionBoard';
import CryptoJS from 'crypto-js';

const HASHED_PASSWORD = '5d14b9d4207d39c0d3f73c6c74e83f90a46280601da76fdd65629bf32837785c';

export default function ProtectedVisionBoard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const hashedInput = CryptoJS.SHA256(password).toString();
    
    if (hashedInput === HASHED_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (isAuthenticated) {
    return <VisionBoard />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1c]">
      <div className="max-w-md w-full p-6 bg-opacity-20 bg-white backdrop-blur-lg rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Enter Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-opacity-20 bg-white backdrop-blur-lg border border-white/20 text-white"
            placeholder="Password"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
          >
            Access Vision Board
          </button>
        </form>
      </div>
    </div>
  );
} 