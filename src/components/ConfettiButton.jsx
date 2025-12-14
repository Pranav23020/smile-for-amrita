
import React from 'react';
import confetti from 'canvas-confetti';

const ConfettiButton = () => {
    const handleClick = () => {
        // Basic colorful confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#27ae60', '#badc58', '#ffeaa7', '#ff7675']
        });

        // Attempt to fire Emoji confetti (Turtles & Frogs)
        try {
            const scalar = 3;
            const turtle = confetti.shapeFromText({ text: '🐢', scalar });
            const frog = confetti.shapeFromText({ text: '🐸', scalar });

            confetti({
                shapes: [turtle, frog],
                scalar: 3,
                particleCount: 10,
                spread: 100,
                origin: { y: 0.6 },
                startVelocity: 35,
            });
        } catch (e) {
            // Fallback or older browser support ignore
            console.log("Emoji confetti not supported or error", e);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999
        }}>
            <button
                onClick={handleClick}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--secondary-color)',
                    color: 'var(--text-color)',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.1s, background-color 0.2s',
                    border: '3px solid white'
                }}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.9)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f6e58d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--secondary-color)'}
                title="Instant Party!"
            >
                🎉
            </button>
        </div>
    );
};

export default ConfettiButton;
