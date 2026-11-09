
import { useEffect, useRef } from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Overview from './components/Overview.jsx';
import Why from './components/Why.jsx';
import Pillars from './components/Pillars.jsx';
import How from './components/How.jsx';
import Hardware from './components/Hardware.jsx';
import Uses from './components/Uses.jsx';
import Lab from './components/Lab.jsx';
import Future from './components/Future.jsx';
import Myths from './components/Myths.jsx';
import Path from './components/Path.jsx';
import Practice from './components/Practice.jsx';
import Projects from './components/Projects.jsx';
import Resources from './components/Resources.jsx';
import PartTwoDivider from './components/PartTwoDivider.jsx';
import Course from './components/Course.jsx';
import PartThreeDivider from './components/PartThreeDivider.jsx';
import Studio from './components/Studio.jsx';
import Footer from './components/Footer.jsx';

// SEO Component
import SEO from './components/SEO.jsx';

import { initTheme } from './scripts/initTheme.js';
import { initStudyPlanner } from './scripts/initStudyPlanner.js';
import { initEngine } from './scripts/initEngine.js';
import { initCourse } from './scripts/initCourse.js';

export default function App() {
  const started = useRef(false);

  // Initialize website scripts after React renders the DOM.
  useEffect(() => {
    if (started.current) return;
    started.current = true;

    [initTheme, initStudyPlanner, initEngine, initCourse].forEach((init) => {
      try {
        init();
      } catch (err) {
        console.error(`[QuantumHub] ${init.name} failed:`, err);
      }
    });
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <SEO />

      <canvas id="bg3d" />

      <Navbar />

      <div className="qh-b">
        <Hero />

        <main>
          <Overview />
          <Why />
          <Pillars />
          <How />
          <Hardware />
          <Uses />
          <Lab />
          <Future />
          <Myths />
          <Path />
          <Practice />
          <Projects />
          <Resources />
        </main>
      </div>

      <PartTwoDivider />
      <Course />

      <PartThreeDivider />
      <Studio />

      <div className="qh-b">
        <Footer />
      </div>
    </>
  );
}
