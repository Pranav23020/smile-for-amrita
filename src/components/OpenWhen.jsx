
import React, { useState } from 'react';

const messages = [
    {
        id: 1,
        label: "Open when you're stressed 🐢",
        icon: "🧘‍♀️",
        content: "Slow down, little turtle! 🐢 Just like a turtle carries its home, you carry your strength with you. Take a deep breath. This too shall pass. sending you a big froggy hug! 🐸💚",
        bgColor: "#ffeaa7"
    },
    {
        id: 2,
        label: "Open when you miss me 🐸",
        icon: "🥺",
        content: "I'm probably thinking about you right now too! 🐢❤️🐸 Consider this a digital teleportation hug. *Squeeze*",
        bgColor: "#ff7675"
    },
    {
        id: 3,
        label: "Open when you need a laugh 😂",
        icon: "🤪",
        content: "Why are turtles so quiet? Because they have turtle recall! 🐢😹 Also, look at this frog: 🐸 He is just vibing. Be like him.",
        bgColor: "#55efc4"
    },
    {
        id: 4,
        label: "Open when you feel lonely 🌧️",
        icon: "🫂",
        content: "You are never truly alone. You have people who love you (like me!). Look at the sky, we are under the same one. 🐢✨",
        bgColor: "#74b9ff"
    }
];

const OpenWhen = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handleClose = () => setSelectedId(null);

    return (
        <section style={{ margin: 'var(--spacing-lg) 0' }}>
            <h2 style={{ textAlign: 'center', color: 'var(--primary-color)' }}>Open When... 💌</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: 'var(--spacing-md)'
            }}>
                {messages.map((msg) => (
                    <button
                        key={msg.id}
                        onClick={() => setSelectedId(msg.id)}
                        style={{
                            background: 'var(--card-bg)',
                            border: `2px solid ${msg.bgColor}`,
                            borderRadius: 'var(--border-radius)',
                            padding: 'var(--spacing-md)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '120px',
                            transition: 'transform 0.2s',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            cursor: 'pointer'
                        }}
                    >
                        <span style={{ fontSize: '2rem', marginBottom: '8px' }}>{msg.icon}</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-color)' }}>
                            {msg.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Modal / Overlay */}
            {selectedId && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    padding: '20px'
                }} onClick={handleClose}>
                    <div
                        style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: 'var(--border-radius)',
                            maxWidth: '400px',
                            width: '100%',
                            textAlign: 'center',
                            position: 'relative',
                            animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {(() => {
                            const msg = messages.find(m => m.id === selectedId);
                            return (
                                <>
                                    <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{msg.icon}</div>
                                    <h3 style={{ marginBottom: '15px' }}>{msg.label}</h3>
                                    <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6' }}>
                                        {msg.content}
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        style={{
                                            background: 'var(--primary-color)',
                                            color: 'white',
                                            padding: '10px 20px',
                                            borderRadius: '50px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Close 🐢
                                    </button>
                                </>
                            );
                        })()}
                    </div>
                </div>
            )}
            <style>{`
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </section>
    );
};

export default OpenWhen;
