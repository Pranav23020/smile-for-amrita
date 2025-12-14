import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)', // Soft Mint/Lime gradient
            borderRadius: 'var(--border-radius)',
            marginBottom: 'var(--spacing-lg)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
        }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
                    <span role="img" aria-label="turtle">🐢</span>
                    <span role="img" aria-label="wave" style={{ margin: '0 10px' }}>👋</span>
                    <span role="img" aria-label="frog">🐸</span>
                </div>
                <h1 style={{ color: 'var(--text-color)', fontSize: '2.5rem', margin: '10px 0' }}>
                    Hey Amrita!
                </h1>
                <h2 style={{ fontSize: '1.2rem', color: '#555', fontWeight: 400 }}>
                    (aka Takli 🤭)
                </h2>
            </motion.div>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: '15px', fontSize: '1.1rem', color: 'var(--text-color)' }}
            >
                I heard you needed a smile, so the turtles and frogs helped me build this for you.
            </motion.p>
        </div>
    );
};

export default Hero;
