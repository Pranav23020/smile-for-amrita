
import React, { useState } from 'react';

const answers = [
    "Definitely yes! 🐢",
    "The frog says no 🐸",
    "Ask again later... I'm eating lettuce 🥬",
    "Outlook is shiny ✨",
    "My turtle senses are tingling... YES! 🐢✨",
    "Don't count on it 🌧️",
    "Yes, and you'll look great doing it! 💅",
    "Focus and ask again 🧘‍♀️"
];

const WiseTurtle = () => {
    const [answer, setAnswer] = useState(null);
    const [isShaking, setIsShaking] = useState(false);

    const askTurtle = () => {
        setIsShaking(true);
        setAnswer(null);

        setTimeout(() => {
            const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            setAnswer(randomAnswer);
            setIsShaking(false);
        }, 1000);
    };

    return (
        <section style={{
            margin: 'var(--spacing-lg) 0',
            textAlign: 'center',
            padding: 'var(--spacing-md)',
            background: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)',
            borderRadius: 'var(--border-radius)',
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ marginBottom: '10px' }}>Ask Wise Turtle 🐢</h2>
            <p style={{ marginBottom: '20px', fontSize: '0.9rem' }}>Think of a yes/no question, then tap the turtle!</p>

            <div
                onClick={askTurtle}
                style={{
                    fontSize: '5rem',
                    cursor: 'pointer',
                    userSelect: 'none',
                    marginBottom: '20px',
                    display: 'inline-block',
                    animation: isShaking ? 'shake 0.5s infinite' : 'float 3s infinite ease-in-out'
                }}
            >
                🐢
            </div>

            <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {answer ? (
                    <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        background: 'white',
                        color: '#00b894',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        animation: 'popIn 0.3s'
                    }}>
                        {answer}
                    </div>
                ) : (
                    isShaking && <span style={{ fontSize: '1.2rem' }}>Thinking... 🤔</span>
                )}
            </div>

            <style>{`
        @keyframes shake {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-10deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </section>
    );
};

export default WiseTurtle;
