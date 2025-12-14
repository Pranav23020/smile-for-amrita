import React from 'react';
import './index.css';
import Hero from './components/Hero';
import MoodBooster from './components/MoodBooster';
import VirtualHug from './components/VirtualHug';
import BubbleWrap from './components/BubbleWrap';
import EmergencySmile from './components/EmergencySmile';
import Diary from './components/Diary';

function App() {
  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <Hero />
      <MoodBooster />
      <VirtualHug />
      <BubbleWrap />
      <EmergencySmile />
      <Diary />

      <footer style={{ marginTop: '50px', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
        <p>Made with ❤️ for Amrita</p>
        <p>Stay Smiling!</p>
      </footer>
    </div>
  );
}

export default App;
