"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DentalImplants() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const benefits = [
    {
      title: "Permanent Solution",
      subtitle: "A Lifetime of Smiles",
      desc: "Unlike dentures or bridges, implants fuse with your jawbone to provide a stable, long-lasting foundation for artificial teeth.",
      bullet: "The Benefit: You can eat, speak, and smile with absolute confidence."
    },
    {
      title: "Preserves Bone Health",
      subtitle: "Stop Bone Loss",
      desc: "Missing teeth can lead to bone deterioration in the jaw. Implants stimulate the bone, preventing this loss and maintaining facial structure.",
      bullet: "The Result: Maintain your natural facial contours."
    },
    {
      title: "Natural Appearance",
      subtitle: "Flawless Aesthetics",
      desc: "Custom-crafted to match the color, shape, and size of your natural teeth, ensuring a seamless and beautiful smile.",
      bullet: "The Design: Precision engineered to look exactly like your own teeth."
    },
    {
      title: "Easy Maintenance",
      subtitle: "Simple Care",
      desc: "Care for your implants just as you would your natural teeth—with regular brushing, flossing, and dental check-ups.",
      bullet: "The Routine: No special cleaning solutions or adhesives required."
    }
  ];

  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.ambientBackground}></div>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={revealUp} className={styles.title}>
              Missing Teeth? <br />
              <span className={styles.titleAccent}>A Long-Term Solution.</span>
            </motion.h1>
            <motion.p variants={revealUp} className={styles.subtitle}>
              Restore your smile, confidence, and oral health with advanced dental implants.
            </motion.p>
            <motion.div variants={revealUp} className={styles.ctaGroupHero}>
              <Link href="/contact">
                <button className={styles.primaryButton}>Book Consultation</button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.introSection}>
        <motion.div
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={revealUp} className={styles.introTitle}>
            Why Choose Dental Implants?
          </motion.h2>
          <motion.p variants={revealUp} className={styles.introText}>
            Dental implants are the gold standard for replacing missing teeth. They provide a permanent foundation that looks, feels, and functions just like your natural teeth. Dr. Viprat Joshi utilizes advanced surgical techniques to ensure precise placement, promoting long-term bone health and a flawless, enduring smile.
          </motion.p>
        </motion.div>
      </section>

      <section className={styles.servicesSection}>
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              variants={revealUp}
            >
              <h2 className={styles.cardTitle}>{benefit.title}</h2>
              <span className={styles.cardSubtitle}>{benefit.subtitle}</span>
              <p className={styles.cardDesc}>{benefit.desc}</p>
              <div className={styles.cardBullet}>
                <strong>{benefit.bullet.split(':')[0]}:</strong>{benefit.bullet.split(':')[1]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className={styles.ctaSection}>
        <motion.div
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={revealUp} className={styles.ctaTitle}>
            Ready to Restore Your Smile?
          </motion.h2>
          <motion.p variants={revealUp} style={{ marginBottom: '3rem', color: 'var(--foreground-light)', fontSize: '1.2rem' }}>
            Schedule your consultation today or give us a call to discuss your personalized implant options.
          </motion.p>

          <motion.div variants={revealUp} className={styles.ctaGroup}>
            <Link href="/contact">
              <button className={styles.primaryButton}>
                Book Consultation
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
