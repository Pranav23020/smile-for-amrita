import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Trash2, Save } from 'lucide-react';

const Diary = () => {
    const [entries, setEntries] = useState(() => {
        try {
            const saved = localStorage.getItem('amrita-diary');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Failed to load diary entries", e);
            return [];
        }
    });
    const [newEntry, setNewEntry] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('amrita-diary', JSON.stringify(entries));
    }, [entries]);

    const saveEntry = () => {
        if (!newEntry.trim()) return;

        const entry = {
            id: Date.now(),
            text: newEntry,
            date: new Date().toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };

        setEntries([entry, ...entries]);
        setNewEntry('');
    };

    const deleteEntry = (id) => {
        setEntries(entries.filter(e => e.id !== id));
    };

    return (
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: '#a55eea',
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    boxShadow: '0 5px 15px rgba(165, 94, 234, 0.4)',
                    fontWeight: 'bold',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                }}
            >
                <Book size={20} />
                {isOpen ? "Close Diary 🔒" : "Secret Diary 📔"}
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
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            textAlign: 'left'
                        }}>
                            <textarea
                                value={newEntry}
                                onChange={(e) => setNewEntry(e.target.value)}
                                placeholder="Dear Diary, today I felt..."
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    padding: '15px',
                                    borderRadius: '15px',
                                    border: '2px solid #f1f2f6',
                                    fontSize: '1rem',
                                    fontFamily: 'inherit',
                                    resize: 'none',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#a55eea'}
                                onBlur={(e) => e.target.style.borderColor = '#f1f2f6'}
                            />

                            <button
                                onClick={saveEntry}
                                style={{
                                    marginTop: '10px',
                                    background: '#a55eea',
                                    color: 'white',
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    marginLeft: 'auto'
                                }}
                            >
                                <Save size={16} /> Save
                            </button>

                            <div style={{ marginTop: '20px', maxHeight: '300px', overflowY: 'auto' }}>
                                {entries.length === 0 && (
                                    <p style={{ textAlign: 'center', color: '#b2bec3', fontStyle: 'italic' }}>
                                        No secrets yet...
                                    </p>
                                )}
                                {entries.map(entry => (
                                    <motion.div
                                        key={entry.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        style={{
                                            background: '#f8f9fa',
                                            padding: '15px',
                                            borderRadius: '15px',
                                            marginBottom: '10px',
                                            position: 'relative'
                                        }}
                                    >
                                        <small style={{ color: '#a55eea', fontWeight: 600 }}>{entry.date}</small>
                                        <p style={{ marginTop: '5px', color: '#2d3436', whiteSpace: 'pre-wrap' }}>{entry.text}</p>
                                        <button
                                            onClick={() => deleteEntry(entry.id)}
                                            style={{
                                                position: 'absolute',
                                                top: '15px',
                                                right: '15px',
                                                background: 'none',
                                                color: '#fab1a0',
                                                padding: 0
                                            }}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Diary;
