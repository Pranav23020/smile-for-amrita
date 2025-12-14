import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const messages = [
    "Your smile is contagious! 😄",
    "You're doing better than you think.",
    "Don't worry, be happy! 🎶",
    "Sending you a massive virtual hug! 🤗",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
    "You're amazing, Amrita! ✨",
    "Everything will be okay.",
    "Keep shining! 🌟"
];

const MoodBooster = () => {
    const [index, setIndex] = useState(0);

    const nextMessage = () => {
        setIndex((prev) => (prev + 1) % messages.length);
    };

    return (
        <div style={{
            margin: '20px 0',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            textAlign: 'center'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '15px' }}>
                <Sparkles color="#feca57" />
                <h3 style={{ margin: 0 }}>Instant Mood Booster</h3>
            </div>

            <div style={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode='wait'>
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        style={{ fontSize: '1.2rem', fontWeight: 500, color: '#2d3436' }}
                    >
                        {messages[index]}
                    </motion.p>
                </AnimatePresence>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextMessage}
                style={{
                    marginTop: '15px',
                    padding: '12px 24px',
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '50px',
                    boxShadow: '0 4px 10px rgba(255, 107, 107, 0.4)'
                }}
            >
                Boost Me! 🚀
            </motion.button>
        </div>
    );
};

export default MoodBooster;
