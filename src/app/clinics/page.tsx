"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Clinics() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const clinics = [
    {
      city: "Langley",
      name: "Douglas Park Dental",
      address: "20445 Douglas Cres",
      phone: "(604) 534-7121"
    },
    {
      city: "North Van",
      name: "Infinity Dental",
      address: "1441 St Georges Ave",
      phone: "(604) 985-0210"
    },
    {
      city: "Coquitlam",
      name: "Aark Dental",
      address: "2918 Glen Dr #210",
      phone: "(604) 464-4131"
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
              Surgical <span className={styles.titleAccent}>Hubs.</span>
            </motion.h1>
            <motion.p variants={revealUp} className={styles.subtitle}>
              Operating across the Greater Vancouver area, bringing advanced maxillofacial and implant surgery directly to your community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className={styles.locationsSection}>
        <motion.div 
          className={styles.locationGrid}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {clinics.map((clinic, idx) => (
            <motion.div 
              key={idx} 
              className={styles.locationCard}
              variants={revealUp}
            >
              <h3 className={styles.locationCity}>{clinic.city}</h3>
              <p className={styles.locationClinic}>{clinic.name}</p>
              <div className={styles.details}>
                <p>{clinic.address}</p>
                <p>{clinic.phone}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}
