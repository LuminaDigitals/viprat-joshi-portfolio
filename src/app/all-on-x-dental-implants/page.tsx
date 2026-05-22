"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AllOnX() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const features = [
    {
      title: "Teeth In A Day",
      subtitle: "Immediate Transformation",
      desc: "Experience a full mouth transformation in just a single visit. Walk in with missing or failing teeth and walk out with a brand-new, functional smile.",
      bullet: "The Speed: Minimized recovery time with instant results."
    },
    {
      title: "Full Arch Restoration",
      subtitle: "Comprehensive Solution",
      desc: "Using just four to six strategically placed implants, we can secure an entire arch of beautiful, natural-looking teeth.",
      bullet: "The Efficiency: Fewer implants needed for a complete restoration."
    },
    {
      title: "Enhanced Comfort",
      subtitle: "No More Dentures",
      desc: "Say goodbye to the discomfort, slipping, and dietary restrictions of traditional dentures. All-on-X provides a fixed, permanent solution.",
      bullet: "The Confidence: Eat, speak, and laugh without hesitation."
    },
    {
      title: "Advanced Planning",
      subtitle: "Precision Surgery",
      desc: "Every procedure is meticulously planned using CBCT 3D Imaging to ensure maximum safety, optimal implant placement, and aesthetic perfection.",
      bullet: "The Technology: State-of-the-art tools for flawless execution."
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
              Full Mouth,<br />
              <span className={styles.titleAccent}>Speed & Transformation.</span>
            </motion.h1>
            <motion.p variants={revealUp} className={styles.subtitle}>
              Revitalize Your Smile in a Single Visit with All-on-X Implants
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
            The Power of All-on-X
          </motion.h2>
          <motion.p variants={revealUp} className={styles.introText}>
            For patients facing significant tooth loss or failing dentition, Dr. Joshi specializes in the innovative "Teeth In A Day" procedure. The All-on-X technique offers a revolutionary approach to full-mouth restoration, providing a fixed, permanent arch of teeth secured by a minimal number of implants. This life-changing procedure delivers unmatched speed, function, and aesthetic transformation.
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
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              variants={revealUp}
            >
              <h2 className={styles.cardTitle}>{feature.title}</h2>
              <span className={styles.cardSubtitle}>{feature.subtitle}</span>
              <p className={styles.cardDesc}>{feature.desc}</p>
              <div className={styles.cardBullet}>
                <strong>{feature.bullet.split(':')[0]}:</strong>{feature.bullet.split(':')[1]}
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
            Begin Your Transformation Today
          </motion.h2>
          <motion.p variants={revealUp} style={{ marginBottom: '3rem', color: 'var(--foreground-light)', fontSize: '1.2rem' }}>
            Schedule your consultation to see if All-on-X is the right solution for you.
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
