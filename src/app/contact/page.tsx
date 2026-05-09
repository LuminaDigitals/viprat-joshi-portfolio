"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Contact() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.ambientBackground}></div>
        <div className={styles.container}>
          
          <motion.div 
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={revealUp} className={styles.title}>
              Begin your <span className={styles.titleAccent}>Journey.</span>
            </motion.h1>
            <motion.p variants={revealUp} className={styles.subtitle}>
              Whether you need complex surgical rehabilitation or a consultation for a single extraction, our team is ready to guide you.
            </motion.p>
            
            <motion.div variants={revealUp} className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <h3>Consultations</h3>
                <p>We operate out of multiple surgical hubs across Greater Vancouver. Please contact us to find the location most convenient for you.</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Direct Inquiry</h3>
                <p>concierge@vipratjoshi.com</p>
                <p>(604) 555-0198</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={styles.input} placeholder="John Doe" />
              </div>
              
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={styles.input} placeholder="john@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={styles.input} placeholder="(604) 555-0000" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>How can we help?</label>
                <textarea className={styles.textarea} placeholder="Please describe your surgical needs..." />
              </div>

              <button className={styles.submitBtn}>
                Request Consultation
              </button>
            </form>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
