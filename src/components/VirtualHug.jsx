import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const VirtualHug = () => {
    const [hugging, setHugging] = useState(false);

    return (
        <div style={{
            margin: '20px 0',
            padding: '30px 20px',
            background: 'linear-gradient(135deg, #ff9ff3 0%, #feca57 100%)',
            borderRadius: '20px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 10px 25px rgba(254, 202, 87, 0.3)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Need a Hug?</h3>

            <div style={{ position: 'relative', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div
                    animate={{
                        scale: hugging ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: hugging ? Infinity : 0,
                        ease: "easeInOut"
                    }}
                    onClick={() => setHugging(!hugging)}
                    style={{
                        cursor: 'pointer',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        padding: '20px',
                        display: 'inline-block'
                    }}
                >
                    <Heart size={60} fill={hugging ? "#ff6b6b" : "white"} color={hugging ? "#ff6b6b" : "white"} />
                </motion.div>

                {hugging && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, scale: [1, 1.5, 2], opacity: [0.8, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100px',
                            height: '100px',
                            border: '2px solid white',
                            borderRadius: '50%',
                            pointerEvents: 'none'
                        }}
                    />
                )}
            </div>

            <p style={{ marginTop: '15px', fontWeight: 500 }}>
                {hugging ? "Sending warm hugs... 🤗" : "Tap the heart!"}
            </p>
        </div>
    );
};

export default VirtualHug;
