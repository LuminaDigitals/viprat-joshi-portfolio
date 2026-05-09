"use client";

import styles from './page.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
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
    <main>
      <Navbar />

      <section className={styles.hero}>
        {/* Full-width Cinematic Image/Video */}
        <div className={styles.heroVideoWrapper}>
          <Image 
            src="/hero.png" /* Replace with high-res portrait or video */
            alt="Dr. Viprat Joshi"
            fill
            className={styles.heroBg}
            priority
          />
        </div>
        <div className={styles.ambientBackground}></div>

        <div className={styles.container}>
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
        </div>
      </section>

      {/* Multi-Location Hub */}
      <section className={styles.locationsSection}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className={styles.sectionHeader}>
            <motion.span variants={revealUp} className={styles.sectionSubtitle}>Where To Find Us</motion.span>
            <motion.h2 variants={revealUp} className={styles.sectionTitle}>Surgical Hubs</motion.h2>
          </div>
          
          <motion.div className={styles.locationGrid} variants={staggerContainer}>
            {/* Photographic Tiles */}
            {[
              { city: 'Langley', clinic: 'Douglas Park Dental', img: '/shapes.png' }, 
              { city: 'North Van', clinic: 'Infinity Dental', img: '/shapes.png' }, 
              { city: 'Coquitlam', clinic: 'Aark Dental', img: '/shapes.png' }
            ].map((loc, i) => (
              <motion.div key={i} variants={revealUp} className={styles.locationCard}>
                <Image src={loc.img} alt={loc.clinic} fill className={styles.locationImage} />
                <div className={styles.locationContent}>
                  <h3 className={styles.locationCity}>{loc.city}</h3>
                  <p className={styles.locationClinic}>{loc.clinic}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Social Wall */}
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

      {/* Sticky Booking Bar */}
      <motion.div 
        className={styles.stickyBar}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      >
        <span className={styles.stickyText}>Ready to redefine your smile?</span>
        <Link href="/contact" style={{ width: 'auto' }}>
          <button className={styles.stickyButton}>Request Appointment</button>
        </Link>
      </motion.div>

    </main>
  );
}
