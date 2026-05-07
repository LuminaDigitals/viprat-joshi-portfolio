"use client";

import styles from './page.module.css';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Reveal variants
  const revealUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const instagramReels = [
    "https://www.instagram.com/p/C-xyz123/embed", 
    "https://www.instagram.com/p/C-abc456/embed",
    "https://www.instagram.com/p/C-def789/embed"
  ];

  return (
    <main ref={containerRef}>
      <nav className={styles.nav}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={styles.logo}
        >
          Dr. Viprat Joshi <span className={styles.logoAccent}>.</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.navLinks}
        >
          <a href="#about">Philosophy</a>
          <a href="#expertise">Expertise</a>
          <a href="#locations">Clinics</a>
          <a href="#contact">Contact</a>
        </motion.div>
      </nav>

      <section className={styles.hero}>
        {/* Cinematic Background Video Component */}
        <div className={styles.heroVideoWrapper} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', zIndex: 1 }}></div> {/* Light overlay */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
          >
            {/* Add actual video file to public folder and uncomment source */}
            {/* <source src="/hero-background.mp4" type="video/mp4" /> */}
          </video>
        </div>

        <div className={styles.container} style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.heroGrid}>
            
            <motion.div 
              className={styles.heroContent}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={revealUp} className={styles.heroBadge}>
                <span></span> Greater Vancouver Area
              </motion.div>
              <motion.h1 variants={revealUp} className={styles.title}>
                <span>Precision Surgery.</span>
                <span className={styles.titleAccent}>Compassionate Care.</span>
              </motion.h1>
              <motion.p variants={revealUp} className={styles.subtitle}>
                Positioning specialized surgical excellence at the intersection of advanced technology, artistry, and human connection.
              </motion.p>
              <motion.div variants={revealUp}>
                <button className={styles.primaryButton}>
                  <span>Book Consultation</span>
                </button>
              </motion.div>
            </motion.div>

            <div className={styles.heroVisual}>
              <div className={styles.visualGrid}>
                <motion.div className={styles.visualColumn} style={{ y: yParallaxSlow }}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className={`${styles.visualBox} ${styles.large}`}
                  >
                    <Image src="/hero.png" alt="Dr. Viprat Joshi" fill />
                  </motion.div>
                  <div className={`${styles.visualBox} ${styles.small}`}>
                    <Image src="/shapes.png" alt="Abstract clinical elements" fill />
                  </div>
                </motion.div>

                <motion.div className={`${styles.visualColumn} ${styles.offset}`} style={{ y: yParallaxFast }}>
                  <div className={`${styles.visualBox} ${styles.small}`}>
                    <div style={{ width: '100%', height: '100%', background: 'var(--primary)', opacity: 0.1 }}></div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className={`${styles.visualBox} ${styles.large}`}
                  >
                    <Image src="/shapes.png" alt="Abstract clinical elements" fill />
                  </motion.div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="locations" className={styles.locationsSection}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className={styles.sectionHeader}>
            <motion.div variants={revealUp}>
              <span className={styles.sectionSubtitle}>Where To Find Us</span>
              <h2 className={styles.sectionTitle}>Surgical Hubs</h2>
            </motion.div>
            <motion.div variants={revealUp}>
              <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: '0.9rem' }}>
                Operating across the Greater Vancouver area, bringing advanced maxillofacial and implant surgery to your community.
              </p>
            </motion.div>
          </div>
          
          <motion.div className={styles.locationGrid} variants={staggerContainer}>
            {['Langley', 'North Van', 'Coquitlam'].map((city, i) => (
              <motion.div key={city} variants={revealUp} className={styles.locationCard}>
                <h3 className={styles.locationCity}>{city}</h3>
                <p className={styles.locationClinic}>
                  {i === 0 ? 'Douglas Park Dental' : i === 1 ? 'Infinity Dental' : 'Aark Dental'}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="social" className={styles.socialSection}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.sectionHeader}>
            <motion.div variants={revealUp}>
              <span className={styles.sectionSubtitle}>Community Education</span>
              <h2 className={styles.sectionTitle}>Latest Insights</h2>
            </motion.div>
            <motion.div variants={revealUp}>
              <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: '0.9rem' }}>
                Follow Dr. Joshi's surgical Q&As, prevention tips, and behind-the-scenes transformations.
              </p>
            </motion.div>
          </div>
          
          <div className={styles.socialGrid}>
            {instagramReels.map((url, index) => (
              <motion.div 
                key={index} 
                variants={revealUp} 
                className={styles.instagramEmbed}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <iframe 
                  src={url} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency={true}
                  title={`Instagram Reel ${index + 1}`}
                ></iframe>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Dr. Viprat Joshi. All rights reserved.</p>
      </footer>
    </main>
  );
}
