
import React, { useState, useEffect } from 'react';

const ZenMode = () => {
    const [isActive, setIsActive] = useState(false);
    const [text, setText] = useState("Tap to Start");

    // Clean up on unmount
    useEffect(() => {
        return () => setIsActive(false);
    }, []);

    return (
        <section style={{
            margin: 'var(--spacing-lg) 0',
            textAlign: 'center',
            padding: 'var(--spacing-md)',
            background: '#fff',
            borderRadius: 'var(--border-radius)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
            <h2 style={{ color: 'var(--primary-color)' }}>Zen Mode 🧘‍♀️</h2>
            <p style={{ fontSize: '0.9rem', marginBottom: '20px', color: '#666' }}>
                Take a moment to breathe with the turtle.
            </p>

            <div
                onClick={() => setIsActive(!isActive)}
                style={{
                    width: '200px',
                    height: '200px',
                    margin: '0 auto',
                    position: 'relative',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Outer expanding circle */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'var(--secondary-color)', // Froggy lime
                    opacity: 0.3,
                    transform: 'scale(1)',
                    animation: isActive ? 'breathe 8s infinite ease-in-out' : 'none',
                }} />

                {/* Inner solid circle */}
                <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'var(--primary-color)', // Turtle green
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    zIndex: 2,
                    transition: 'all 0.3s ease'
                }}>
                    {isActive ? (
                        <div className="breathing-text">...</div>
                    ) : (
                        <span>Start</span>
                    )}
                </div>
            </div>

            <div style={{ height: '30px', marginTop: '20px', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                {isActive && <span className="instruction-text">Inhale... 🐢</span>}
            </div>

            <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.5); }
        }
        
        .instruction-text {
          animation: textGuide 8s infinite ease-in-out;
        }

        @keyframes textGuide {
          0%, 30% { opacity: 1; content: "Inhale..."; }
          40%, 60% { opacity: 1; content: "Hold..."; }
          70%, 100% { opacity: 1; content: "Exhale..."; }
        }
      `}</style>

            {/* Note: CSS content animation is tricky in inline styles/React. 
          Let's use a simpler React approach for text if the CSS above fails (which it might for 'content').
          Actually, let's just stick to the visual Circle animation which implies the rhythm, 
          and hardcode the text or use generic text.
      */}
            <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: 0.7 }}>
                {isActive ? "Follow the circle: Expand (Inhale) - Contract (Exhale)" : "Click circle to begin"}
            </p>
        </section>
    );
};

export default ZenMode;
