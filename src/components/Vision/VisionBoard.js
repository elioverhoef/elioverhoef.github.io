import React from 'react';
import { okrs } from './visionData';

// Inline SVG icons to remove lucide-react dependency
const icons = {
  Star: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Heart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  Mountain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
    </svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Diamond: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
    </svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  RefreshCw: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
      <path d="M21 3v5h-5"/>
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
      <path d="M8 16H3v5"/>
    </svg>
  )
};

export default function VisionBoard() {
  // Inject required styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      
      body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background: #0a0f1c;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      * {
        box-sizing: border-box;
      }

      .vision-board {
        padding: 2rem;
        max-width: 80rem;
        margin: 2rem auto;
      }

      .vision-board h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: white;
        text-align: center;
      }

      .vision-board .subtitle {
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
        font-size: 1.125rem;
        margin-bottom: 2rem;
      }

      .letter {
        margin: 2rem auto;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
        max-width: 42rem;
        color: rgba(255, 255, 255, 0.9);
        text-align: center;
        font-style: italic;
        line-height: 1.6;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .grid {
        display: grid;
        gap: 1.5rem;
        margin-top: 2rem;
        grid-template-columns: 1fr;
      }

      @media (min-width: 768px) {
        .grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .card.daily-essence {
          grid-column: 1 / -1;
        }
      }

      @media (min-width: 1024px) {
        .grid {
          grid-template-columns: repeat(3, 1fr);
        }
        
        .card.daily-essence {
          grid-column: 1 / -1;
        }
      }

      .card {
        position: relative;
        padding: 1.75rem;
        border-radius: 1rem;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        height: 100%;
        display: flex;
        flex-direction: column;
        color: white;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .card.physical-mastery {
        background: linear-gradient(135deg, rgba(69, 39, 28, 0.95), rgba(43, 24, 17, 0.95));
      }

      .card.inner-cultivation {
        background: linear-gradient(135deg, rgba(88, 28, 91, 0.95), rgba(45, 14, 47, 0.95));
      }

      .card.life-design {
        background: linear-gradient(135deg, rgba(20, 83, 73, 0.95), rgba(10, 42, 37, 0.95));
      }

      .card.health-innovation {
        background: linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(15, 29, 69, 0.95));
      }

      .card.wealth-foundation {
        background: linear-gradient(135deg, rgba(67, 56, 202, 0.95), rgba(34, 28, 101, 0.95));
      }

      .card.deep-connection {
        background: linear-gradient(135deg, rgba(109, 40, 217, 0.95), rgba(55, 20, 109, 0.95));
      }

      .card.daily-essence {
        background: linear-gradient(135deg, rgba(190, 24, 93, 0.95), rgba(95, 12, 47, 0.95));
      }

      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.3);
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .card-header svg {
        width: 1.75rem;
        height: 1.75rem;
        color: currentColor;
        opacity: 0.9;
      }

      .card-header h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
        margin: 0;
      }

      .card-theme {
        color: rgba(255, 255, 255, 0.8);
        font-style: italic;
        margin-bottom: 1rem;
        font-size: 0.95rem;
      }

      .card-content {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .card-content h3 {
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 1.25rem 0 0.75rem;
      }

      .bullet-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        color: rgba(255, 255, 255, 0.8);
      }

      .bullet-item::before {
        content: "•";
        color: rgba(255, 255, 255, 0.6);
      }

      .quote-section {
        margin-top: auto;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      .quote {
        color: rgba(255, 255, 255, 0.9);
        font-style: italic;
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
      }

      .reflection {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.875rem;
      }

      .expand-prompt {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.875rem;
        margin-top: 1rem;
        text-align: center;
      }

      .footer-quote {
        margin-top: 3rem;
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        font-style: italic;
        font-size: 1.1rem;
      }

      .hidden {
        display: none;
      }

      .block {
        display: block;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="vision-board">
      <h1>Elio's Extraordinary Vision 2034 ✨</h1>
      <p className="subtitle">Living with Purpose, Impact & Joy at Age 32</p>
      
      <div className="letter">
        "Dear Future Elio,
        
        Remember that you are the creator of your reality. Each day is a blank canvas for your highest expression. 
        Let love guide your actions, joy fuel your pursuits, and peace be your companion.
        
        With unwavering faith in your journey,
        Your Past Self 🌟"
      </div>

      <div className="grid">
        {okrs.map((okr) => (
          <div
            key={okr.id}
            className={`card ${
              okr.id === 1 ? 'physical-mastery' :
              okr.id === 2 ? 'inner-cultivation' :
              okr.id === 3 ? 'life-design' :
              okr.id === 4 ? 'health-innovation' :
              okr.id === 5 ? 'wealth-foundation' :
              okr.id === 6 ? 'deep-connection' :
              'daily-essence'
            }`}
          >
            <div className="card-header">
              {icons[okr.iconName]()}
              <h2>{okr.title}</h2>
            </div>

            <p className="card-theme">{okr.theme}</p>

            <div className="card-content">
              {okr.id === 1 && (
                <>
                  {okr.objectives.mainGoals.map((goal, idx) => (
                    <div key={idx}>
                      <h3>{goal.title}</h3>
                      {goal.items.map((item, i) => (
                        <div key={i} className="bullet-item">{item}</div>
                      ))}
                    </div>
                  ))}
                  <div className="bullet-item">Sleep: {okr.objectives.sleepMastery}</div>
                </>
              )}

              {okr.id === 2 && (
                <>
                  <h3>Meditation Practice</h3>
                  <div className="bullet-item">Daily: {okr.objectives.meditationProgress.daily}</div>
                  <div className="bullet-item">Advanced: {okr.objectives.meditationProgress.advanced}</div>
                  <h3>Mastery</h3>
                  {okr.objectives.mastery.map((item, idx) => (
                    <div key={idx} className="bullet-item">{item}</div>
                  ))}
                  <div className="bullet-item">{okr.objectives.impact}</div>
                </>
              )}

              {okr.id === 3 && (
                <>
                  <h3>Dream Home</h3>
                  <div className="bullet-item">{okr.objectives.home.location}</div>
                  {okr.objectives.home.features.map((feature, idx) => (
                    <div key={idx} className="bullet-item">{feature}</div>
                  ))}
                  <h3>{okr.objectives.sleepSpace.title}</h3>
                  {okr.objectives.sleepSpace.elements.map((element, idx) => (
                    <div key={idx} className="bullet-item">{element}</div>
                  ))}
                  <div className="bullet-item">{okr.objectives.lifestyle}</div>
                </>
              )}

              {okr.id === 4 && (
                <>
                  <h3>Impact Goals</h3>
                  <div className="bullet-item">{okr.objectives.impact.direct}</div>
                  <div className="bullet-item">{okr.objectives.impact.breakthroughs}</div>
                  <h3>Systems</h3>
                  {okr.objectives.systems.map((system, idx) => (
                    <div key={idx} className="bullet-item">{system}</div>
                  ))}
                </>
              )}

              {okr.id === 5 && (
                <>
                  <h3>Financial Freedom</h3>
                  <div className="bullet-item">{okr.objectives.wealth.passive}</div>
                  {okr.objectives.wealth.investments.map((investment, idx) => (
                    <div key={idx} className="bullet-item">{investment}</div>
                  ))}
                  <h3>Business & Purpose</h3>
                  <div className="bullet-item">{okr.objectives.businesses}</div>
                  <div className="bullet-item">{okr.objectives.purpose}</div>
                </>
              )}

              {okr.id === 6 && (
                <>
                  <h3>Core Relationships</h3>
                  <div className="bullet-item">{okr.objectives.coreRelationships.partner}</div>
                  <div className="bullet-item">{okr.objectives.coreRelationships.friends}</div>
                  <div className="bullet-item">{okr.objectives.coreRelationships.family}</div>
                  <h3>Community</h3>
                  {okr.objectives.community.map((item, idx) => (
                    <div key={idx} className="bullet-item">{item}</div>
                  ))}
                </>
              )}

              {okr.id === 7 && (
                <>
                  <h3>States of Being</h3>
                  <div className="bullet-item">{okr.objectives.states.primary}</div>
                  <div className="bullet-item">{okr.objectives.states.impact}</div>
                  <h3>Daily Practices</h3>
                  {okr.objectives.practices.map((practice, idx) => (
                    <div key={idx} className="bullet-item">{practice}</div>
                  ))}
                  <div className="bullet-item">{okr.objectives.essence}</div>
                </>
              )}
              
              <div className="quote-section">
                <p className="quote">"{okr.quote}"</p>
                <p className="reflection">🤔 {okr.reflection}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="footer-quote">
        "Create a life so beautiful that you fall in love with it every single day ❤️"
      </div>
    </div>
  );
} 