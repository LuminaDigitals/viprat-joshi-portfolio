"use client";

import styles from './page.module.css';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
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
    <main ref={containerRef} style={{ overflow: 'hidden' }}>
      <Navbar />

      <section className={styles.hero} style={{ position: 'relative' }}>
        <div className={styles.ambientBackground}></div>
        {/* Cinematic Background Video Component */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', opacity: 0.05 }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
              <motion.h1 variants={revealUp} className={styles.title}>
                Precision.<br />
                <span className={styles.titleAccent}>Compassion.</span>
              </motion.h1>
              <motion.p variants={revealUp} className={styles.subtitle}>
                Positioning specialized surgical excellence at the intersection of advanced technology, artistry, and human connection.
              </motion.p>
              <motion.div variants={revealUp}>
                <Link href="/contact">
                  <button className={styles.primaryButton}>
                    Book Consultation
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual Grid with Parallax (Mixing Luca Aesthetic motion with Grand Street style) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', height: '100%', alignItems: 'center' }}>
              <motion.div style={{ y: yParallaxSlow, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  style={{ position: 'relative', height: '400px', background: 'var(--background-alt)', borderRadius: '4px', overflow: 'hidden' }}
                >
                  <Image src="/hero.png" alt="Dr. Viprat Joshi" fill style={{ objectFit: 'cover' }} />
                </motion.div>
                <div style={{ position: 'relative', height: '200px', background: 'var(--accent)', borderRadius: '4px', opacity: 0.2 }}></div>
              </motion.div>

              <motion.div style={{ y: yParallaxFast, display: 'flex', flexDirection: 'column', gap: '2rem', transform: 'translateY(10%)' }}>
                <div style={{ position: 'relative', height: '200px', background: 'var(--primary)', borderRadius: '4px', opacity: 0.2 }}></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  style={{ position: 'relative', height: '400px', background: 'var(--background-alt)', borderRadius: '4px', overflow: 'hidden' }}
                >
                  <Image src="/shapes.png" alt="Abstract elements" fill style={{ objectFit: 'cover' }} />
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
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
            <motion.span variants={revealUp} className={styles.sectionSubtitle} style={{color: 'var(--accent)'}}>Community Education</motion.span>
            <motion.h2 variants={revealUp} className={styles.sectionTitle}>Latest Insights</motion.h2>
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
