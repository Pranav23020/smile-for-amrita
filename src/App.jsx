import React from 'react';
import './index.css';
import Hero from './components/Hero';
import OpenWhen from './components/OpenWhen';
import MoodBooster from './components/MoodBooster';
import ZenMode from './components/ZenMode';
import VirtualHug from './components/VirtualHug';
import BubbleWrap from './components/BubbleWrap';
import EmergencySmile from './components/EmergencySmile';
import Diary from './components/Diary';
import ConfettiButton from './components/ConfettiButton';

function App() {
  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      <Hero />
      <OpenWhen />
      <MoodBooster />
      <VirtualHug />
      <ZenMode />
      <BubbleWrap />
      <EmergencySmile />
      <Diary />

      <ConfettiButton />

      <footer style={{ marginTop: '50px', textAlign: 'center', opacity: 0.7, fontSize: '0.9rem' }}>
        <p>Made with 🐢 & 🐸 for Amrita</p>
        <p>Stay Smiling!</p>
      </footer>
    </div>
  );
}

export default App;
