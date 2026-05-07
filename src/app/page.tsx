"use client";

import styles from './page.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
      <nav className={styles.nav}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.logo}
        >
          Dr. Viprat Joshi
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
        <div className={styles.container}>
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
                <button className={styles.primaryButton}>
                  Book Consultation
                </button>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Image 
                src="/hero.png" 
                alt="Dr. Viprat Joshi" 
                fill
              />
              <div className={styles.geometricShape}></div>
            </motion.div>

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
            <motion.span variants={revealUp} className={styles.sectionSubtitle}>Where To Find Us</motion.span>
            <motion.h2 variants={revealUp} className={styles.sectionTitle}>Surgical Hubs</motion.h2>
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
            <motion.span variants={revealUp} className={styles.sectionSubtitle} style={{color: 'var(--accent)'}}>Community Education</motion.span>
            <motion.h2 variants={revealUp} className={styles.sectionTitle}>Latest Insights</motion.h2>
          </div>
          
          <div className={styles.socialGrid}>
            {instagramReels.map((url, index) => (
              <motion.div 
                key={index} 
                variants={revealUp} 
                className={styles.instagramEmbed}
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
