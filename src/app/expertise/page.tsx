"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Expertise() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const services = [
    {
      title: "1. Teeth In A Day (All-on-X)",
      subtitle: "Revitalizing Smiles in a Single Visit",
      desc: "For patients facing significant tooth loss or failing dentition, Dr. Joshi specializes in the innovative \"Teeth In A Day\" procedure. Using the All-on-X technique, a full arch of beautiful, functional teeth is secured using just four to six precision-placed dental implants.",
      bullet: "The Precision: Every case is planned using CBCT 3D Imaging for maximum safety and aesthetic perfection."
    },
    {
      title: "2. Advanced Dental Implants",
      subtitle: "Foundation for a Lifetime of Smiles",
      desc: "Dr. Joshi provides comprehensive implant solutions, from single-tooth replacements to full-mouth reconstructions. His surgical approach focuses on preserving bone health and restoring natural function.",
      bullet: "Technology-Driven: We utilize iTero 3D scanning to eliminate messy impressions and ensure a perfect fit for your final restorations."
    },
    {
      title: "3. Maxillofacial & Corrective Surgery",
      subtitle: "Restoring Function and Harmony",
      desc: "Dr. Joshi’s expertise extends beyond standard dentistry into complex Maxillofacial Surgery. He addresses intricate conditions affecting the jaw and facial structures, including TMJ therapy and corrective jaw procedures.",
      bullet: "A Personal Note: Dr. Joshi is frequently sought out to correct complex cases, with patients praising his ability to resolve long-standing issues with meticulous care."
    },
    {
      title: "4. Wisdom Teeth Extraction",
      subtitle: "Comfort-First Surgical Care",
      desc: "Impacted or crowded wisdom teeth can cause significant pain and shifting. Dr. Joshi performs extractions with a focus on Patient Comfort First, utilizing advanced sedation dentistry options to ensure a painless experience.",
      bullet: "The Benefit: Walk out of our Langley or North Vancouver clinics confident, comfortable, and on the fast track to recovery."
    }
  ];

  const technologies = [
    {
      title: "CBCT 3D Imaging",
      desc: "Captures highly detailed, three-dimensional images of your jaw and bone structure for safer, more accurate surgical planning."
    },
    {
      title: "iTero 3D Scanning",
      desc: "Unparalleled accuracy for digital impressions, ensuring your implants and crowns feel exactly like natural teeth."
    },
    {
      title: "Digital X-Rays",
      desc: "Provides faster, sharper results with 90% less radiation exposure than traditional film X-rays."
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
              Surgical Mastery &<br />
              <span className={styles.titleAccent}>Advanced Reconstruction.</span>
            </motion.h1>
            <motion.p variants={revealUp} className={styles.subtitle}>
              Precision Surgery Meets Compassionate Care in Langley and North Vancouver
            </motion.p>
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
            The Specialist Edge: Why Choose a Dental Surgeon?
          </motion.h2>
          <motion.p variants={revealUp} className={styles.introText}>
            When it comes to complex restorative and reconstructive procedures, experience and precision are paramount. Dr. Viprat Joshi brings a meticulously detailed approach to every procedure, combining advanced surgical training with a commitment to patient comfort. By integrating state-of-the-art technology with a "Gentle Expert" touch, Dr. Joshi ensures that even the most complex surgeries are stress-free and result in long-term oral health.
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
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              className={styles.card}
              variants={revealUp}
            >
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <span className={styles.cardSubtitle}>{service.subtitle}</span>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.cardBullet}>
                <strong>{service.bullet.split(':')[0]}:</strong>{service.bullet.split(':')[1]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className={styles.techSection}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={revealUp} className={styles.techTitle}>
            The Future of Surgery: Our Technology
          </motion.h2>
          <div className={styles.techGrid}>
            {technologies.map((tech, idx) => (
              <motion.div key={idx} variants={revealUp} className={styles.techItem}>
                <h3>{tech.title}</h3>
                <p>{tech.desc}</p>
              </motion.div>
            ))}
          </div>
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
            Dr. Joshi provides specialized surgical care across three convenient locations:
          </motion.p>
          
          <motion.div variants={revealUp} className={styles.clinicLinks}>
            <a href="https://douglasparkdental.ca/" target="_blank" rel="noopener noreferrer" className={styles.clinicLink}>Langley: Douglas Park</a>
            <a href="https://infinitydentalcare.ca/" target="_blank" rel="noopener noreferrer" className={styles.clinicLink}>North Vancouver: Infinity</a>
            <a href="https://aarkdentalatcoquitlamcentre.com/" target="_blank" rel="noopener noreferrer" className={styles.clinicLink}>Coquitlam: AARK</a>
          </motion.div>

          <motion.div variants={revealUp}>
            <Link href="/contact">
              <button className={styles.primaryButton}>
                Request Your Surgical Consultation
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
