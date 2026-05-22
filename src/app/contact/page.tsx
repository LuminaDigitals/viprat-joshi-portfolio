"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', clinic: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', clinic: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
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
                <p>vipratjoshi@gmail.com</p>
              </div>
              <div className={styles.infoItem}>
                <h3>Multilingual Care</h3>
                <p>To best serve the diverse Vancouver community, our clinical and concierge team is fluent in English, Hindi, Gujarati and Punjabi.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  className={styles.input}
                  placeholder="(604) 555-0000"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Preferred Clinic</label>
                <select
                  className={styles.select}
                  required
                  value={formData.clinic}
                  onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                >
                  <option value="" disabled>Select a location</option>
                  <option value="Douglas Park Dental (Langley)">Douglas Park Dental (Langley)</option>
                  <option value="Infinity Dental Care (North Vancouver)">Infinity Dental Care (North Vancouver)</option>
                  <option value="AARK Dental (Coquitlam)">AARK Dental (Coquitlam)</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>How can we help?</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Please describe your surgical needs..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button className={styles.submitBtn} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Request Consultation'}
              </button>

              {status === 'error' && (
                <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
                  There was an error sending your message. Please try again.
                </p>
              )}

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                🔒 This form is secured and HIPAA-compliant. Your health information is strictly confidential.
              </p>
            </form>
          </motion.div>

        </div>
      </section>

      {status === 'success' && (
        <div className={styles.popupOverlay}>
          <motion.div 
            className={styles.popupContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className={styles.popupTitle}>Thank You.</h2>
            <p className={styles.popupText}>
              Your consultation request has been successfully submitted. Our team will review your details and reach out to you shortly.
            </p>
            <button className={styles.popupButton} onClick={() => setStatus('idle')}>
              Close
            </button>
          </motion.div>
        </div>
      )}

    </main>
  );
}
