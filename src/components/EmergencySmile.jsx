import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const content = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', caption: 'This kitty loves you!' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', caption: 'Stay pawsitive!' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', caption: 'Good vibes only.' },
    { type: 'text', text: 'REMINDER: You are awesome.' },
    { type: 'text', text: 'Take a deep breath. You got this.' }
];

const EmergencySmile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % content.length);
    };

    return (
        <div style={{
            margin: '20px 0',
            textAlign: 'center'
        }}>
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: '#ff4757',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    boxShadow: '0 5px 15px rgba(255, 71, 87, 0.4)',
                    fontWeight: 'bold',
                    width: '100%'
                }}
            >
                {isOpen ? "Close Emergency Kit ❌" : "🚨 EMERGENCY SMILE 🚨"}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden', marginTop: '20px' }}
                    >
                        <div style={{
                            background: 'white',
                            padding: '20px',
                            borderRadius: '20px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {content[currentIndex].type === 'image' ? (
                                        <>
                                            <img
                                                src={content[currentIndex].src}
                                                alt="Cute animal"
                                                style={{ width: '100%', borderRadius: '15px', objectFit: 'cover', maxHeight: '300px' }}
                                            />
                                            <p style={{ marginTop: '10px', fontWeight: 600, color: '#2f3542' }}>{content[currentIndex].caption}</p>
                                        </>
                                    ) : (
                                        <div style={{ padding: '40px 0', fontSize: '1.5rem', fontWeight: 'bold', color: '#74b9ff' }}>
                                            {content[currentIndex].text}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            <button
                                onClick={next}
                                style={{
                                    marginTop: '15px',
                                    background: '#f1f2f6',
                                    color: '#2f3542',
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600
                                }}
                            >
                                Next Dose ➡️
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EmergencySmile;
