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

      <section className={styles.heroRhona}>
        <div className={styles.heroRhonaText}>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={revealUp} className={styles.rhonaQuote}>
              "Precision surgery.<br />
              <span className={styles.titleAccent}>Compassionate care."</span>
            </motion.h1>
            <motion.p variants={revealUp} className={styles.rhonaSub}>
              Dedicated to restoring function and confidence through advanced oral and maxillofacial surgery.
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
        <div className={styles.heroRhonaImage}>
          <Image 
            src="/hero.png" /* Portrait Image */
            alt="Dr. Viprat Joshi Portrait"
            fill
            className={styles.rhonaPortrait}
            priority
          />
        </div>
      </section>

      {/* Trust Banner / As Seen In */}
      <section className={styles.trustBanner}>
        <div className={styles.trustLogos}>
          <span>Douglas Park Dental</span>
          <span className={styles.dot}>•</span>
          <span>Infinity Dental Care</span>
          <span className={styles.dot}>•</span>
          <span>AARK Dental</span>
        </div>
      </section>

      {/* About Dr Joshi Snippet */}
      <section className={styles.aboutSnippet}>
        <motion.div 
          className={styles.aboutContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className={styles.aboutImageWrapper}>
            <Image src="/Excellence.jpeg" alt="Dr Joshi in Clinic" fill className={styles.aboutImage} />
          </div>
          <div className={styles.aboutTextContent}>
            <motion.h2 variants={revealUp} className={styles.sectionTitle}>Meet Dr. Joshi</motion.h2>
            <motion.p variants={revealUp} className={styles.aboutParagraph}>
              Dr. Viprat Joshi is a highly skilled dental surgeon serving the Greater Vancouver area. Known as the "Gentle Expert", he specializes in complex restorative procedures, including All-on-X full arch rehabilitations, advanced implantology, and maxillofacial surgery.
            </motion.p>
            <motion.p variants={revealUp} className={styles.aboutParagraph}>
              His philosophy is simple: surgical excellence is merely the baseline. The true craft lies in human connection, ensuring every patient feels heard, comfortable, and confident in their care.
            </motion.p>
            <motion.div variants={revealUp} style={{ marginTop: '2rem' }}>
              <Link href="/philosophy" className={styles.secondaryLink}>
                Read Full Philosophy →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Google Reviews Marquee */}
      <section className={styles.reviewsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSubtitle}>Patient Stories</span>
          <h2 className={styles.sectionTitle}>Words of Trust</h2>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeContent}>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className={styles.reviewCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.reviewText}>
                  "Absolutely incredible experience. Dr. Joshi made a complex surgery feel completely painless and stress-free. The entire team was so compassionate."
                </p>
                <span className={styles.reviewAuthor}>- Sarah M., Google Review</span>
              </div>
            ))}
          </div>
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
