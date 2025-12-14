import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
            borderRadius: '20px',
            marginBottom: '20px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
        }}>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ fontSize: '3rem', display: 'block' }}>👋</span>
                <h1 style={{ color: '#d63031', fontSize: '2.5rem', margin: '10px 0' }}>
                    Hey Amrita!
                </h1>
                <h2 style={{ fontSize: '1.2rem', color: '#636e72', fontWeight: 400 }}>
                    (aka Takli 🤭)
                </h2>
            </motion.div>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: '15px', fontSize: '1.1rem', color: '#2d3436' }}
            >
                I heard you were feeling a bit down, so I made this little corner of the internet just for you.
            </motion.p>
        </div>
    );
};

export default Hero;
