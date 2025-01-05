import React, { useState } from 'react';
import VisionBoard from './VisionBoard';
import CryptoJS from 'crypto-js';

const HASHED_PASSWORD = '5d14b9d4207d39c0d3f73c6c74e83f90a46280601da76fdd65629bf32837785c';

export default function ProtectedVisionBoard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Add a small delay to show the loading animation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const hashedInput = CryptoJS.SHA256(password).toString();
    
    if (hashedInput === HASHED_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    // Inject required styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .animated-bg {
        background: linear-gradient(-45deg, #0a0f1c, #1a1f2c, #2a2f3c, #1a1f2c);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
      }

      .glass-effect {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      }

      .input-focus {
        transition: all 0.3s ease;
      }

      .input-focus:focus {
        border-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
      }

      .btn-hover {
        transition: all 0.3s ease;
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      }

      .btn-hover:hover {
        transform: translateY(-2px);
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .loading-spinner {
        animation: spin 1s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (isAuthenticated) {
    return <VisionBoard />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center animated-bg">
      <div className="max-w-md w-full mx-4">
        <div className="glass-effect rounded-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">Vision Board</h2>
            <p className="text-gray-400">Enter the password to access your future vision</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg glass-effect text-white input-focus outline-none"
                  placeholder="Enter password"
                  disabled={isLoading}
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg btn-hover text-white font-medium flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="loading-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeDasharray="50" strokeDashoffset="20"/>
                  </svg>
                  Verifying...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Access Vision Board
                </>
              )}
            </button>
          </form>

          <div className="text-center text-sm text-gray-500">
            <p>Your vision is protected and private</p>
          </div>
        </div>
      </div>
    </div>
  );
} 