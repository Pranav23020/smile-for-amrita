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
    const [currentImage, setCurrentImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCuteness = async () => {
        setIsLoading(true);
        try {
            // Randomly choose an API to keep it surprising
            const sources = ['dog', 'cat', 'fox'];
            const randomSource = sources[Math.floor(Math.random() * sources.length)];

            let imageUrl = '';
            let caption = '';

            if (randomSource === 'dog') {
                const res = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await res.json();
                imageUrl = data.message;
                caption = "Who's a good boy? 🐶";
            } else if (randomSource === 'cat') {
                const res = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await res.json();
                imageUrl = data[0].url;
                caption = "Purr-fect! 🐱";
            } else {
                const res = await fetch('https://randomfox.ca/floof/');
                const data = await res.json();
                imageUrl = data.image;
                caption = "What does the fox say? 🦊";
            }

            setCurrentImage({ src: imageUrl, caption });
        } catch (error) {
            console.error("Failed to fetch cuteness:", error);
            // Fallback
            setCurrentImage({
                src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
                caption: 'The internet is shy, but this dog loves you! 🐶'
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch new image when opening
    React.useEffect(() => {
        if (isOpen && !currentImage) {
            fetchCuteness();
        }
    }, [isOpen]);

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
                    width: '100%',
                    cursor: 'pointer'
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

                            <div style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                {isLoading ? (
                                    <div style={{ fontSize: '3rem', animation: 'spin 1s infinite linear' }}>🐢</div>
                                ) : (
                                    currentImage && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            key={currentImage.src}
                                        >
                                            <img
                                                src={currentImage.src}
                                                alt="Cute animal"
                                                style={{
                                                    width: '100%',
                                                    borderRadius: '15px',
                                                    objectFit: 'cover',
                                                    maxHeight: '400px',
                                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                                }}
                                            />
                                            <p style={{ marginTop: '15px', fontWeight: 600, color: '#2f3542', fontSize: '1.1rem' }}>
                                                {currentImage.caption}
                                            </p>
                                        </motion.div>
                                    )
                                )}
                            </div>

                            <button
                                onClick={fetchCuteness}
                                disabled={isLoading}
                                style={{
                                    marginTop: '20px',
                                    background: 'var(--primary-color)',
                                    color: 'white',
                                    padding: '12px 25px',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    opacity: isLoading ? 0.7 : 1,
                                    cursor: isLoading ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isLoading ? "Fetching Cuteness..." : "Next Dose ➡️"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
                @keyframes spin { 100% { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

export default EmergencySmile;
