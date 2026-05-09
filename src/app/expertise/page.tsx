"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Expertise() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const expertiseAreas = [
    {
      title: "Dental Implants",
      desc: "Replacing missing teeth with titanium precision. Utilizing advanced 3D scanning and virtual planning, we ensure implants are placed with absolute accuracy for a lifetime of natural function and aesthetics."
    },
    {
      title: "Teeth-in-a-Day",
      desc: "A revolutionary approach to full-arch restoration. Walk in with compromised teeth and walk out the same day with a completely new, fixed smile supported by strategically placed implants."
    },
    {
      title: "Wisdom Teeth Extraction",
      desc: "Expert removal of impacted or problematic third molars. We prioritize advanced sedation and atraumatic techniques to ensure a comfortable procedure and rapid recovery."
    },
    {
      title: "Bone Grafting",
      desc: "Rebuilding the foundation. When bone loss occurs, we use sophisticated grafting techniques to restore volume and density, creating a stable base for future implant placement."
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
              Surgical <span className={styles.titleAccent}>Precision.</span>
            </motion.h1>
            <motion.p variants={revealUp} className={styles.subtitle}>
              From complex full-arch rehabilitations to delicate extractions, our practice is dedicated to the highest standard of oral and maxillofacial surgery.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className={styles.expertiseSection}>
        <motion.div 
          className={styles.grid}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {expertiseAreas.map((area, idx) => (
            <motion.div 
              key={idx} 
              className={styles.card}
              variants={revealUp}
            >
              <h2 className={styles.cardTitle}>{area.title}</h2>
              <p className={styles.cardDesc}>{area.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}
