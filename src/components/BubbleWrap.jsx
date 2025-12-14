import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Bubble = () => {
    const [popped, setPopped] = useState(false);

    const pop = () => {
        if (!popped) {
            setPopped(true);
            // Optional: Add simple pop sound effect here if desired
        }
    };

    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={pop}
            style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: popped ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.8)',
                boxShadow: popped ? 'inset 0 2px 5px rgba(0,0,0,0.1)' : '0 2px 5px rgba(0,0,0,0.1), inset -2px -2px 5px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {popped && <span style={{ fontSize: '10px', color: '#636e72', fontWeight: 600 }}>POP</span>}
        </motion.div>
    );
};

const BubbleWrap = () => {
    const bubbles = Array.from({ length: 25 }); // 5x5 grid

    const refresh = () => {
        // Force re-render key
        window.location.reload(); // Simple way to reset for now, or could use key state
    };

    return (
        <div style={{
            margin: '20px 0',
            padding: '20px',
            backgroundColor: '#74b9ff',
            borderRadius: '20px',
            textAlign: 'center',
            color: 'white'
        }}>
            <h3 style={{ marginBottom: '15px' }}>Stress Relief Bubble Wrap</h3>
            <p style={{ marginBottom: '20px', fontSize: '0.9rem' }}>Pop them all!</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '10px',
                justifyItems: 'center',
                maxWidth: '300px',
                margin: '0 auto'
            }}>
                {bubbles.map((_, i) => (
                    <Bubble key={i} />
                ))}
            </div>
        </div>
    );
};

export default BubbleWrap;
