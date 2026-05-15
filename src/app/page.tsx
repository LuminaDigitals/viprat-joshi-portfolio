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
    "https://www.instagram.com/reel/DYCdAhUho5y/embed",  // Chocolate & Oral Care
    "https://www.instagram.com/reel/DXjjhYaBYyL/embed",  // Bleeding Gums Awareness
    "https://www.instagram.com/reel/DXrdNvlDlRa/embed"   // Restoring Missing Teeth
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
            src="/potrait2.jpeg" /* Portrait Image */
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
            <Image src="/excellence.jpeg" alt="Dr Joshi in Clinic" fill className={styles.aboutImage} />
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
            {/* First set */}
            {[
              { author: "Sarah H.", text: "Dr. Viprat Joshi is amazing. He did my wisdom teeth extraction and I didn't feel a thing. He is so calm and explained everything perfectly.", clinic: "Douglas Park Dental" },
              { author: "Elena R.", text: "Had a full arch restoration with Dr. Joshi. He is the most compassionate surgeon I've ever met. He really listened to my fears and made me feel safe.", clinic: "Infinity Dental" },
              { author: "Priya S.", text: "Dr. Joshi is incredible with patients who have dental anxiety. He is gentle, patient, and very thorough. Best surgical experience I've had.", clinic: "Aark Dental" },
              { author: "Mark T.", text: "I was referred to Dr. Joshi for a complex implant case. He is truly a master of his craft. The results are perfect and the healing was very fast.", clinic: "Douglas Park Dental" },
              { author: "David L.", text: "Dr. Viprat is a technical genius. My iTero scans and implant placement were so precise. I highly recommend him for any major dental work.", clinic: "Infinity Dental" },
              { author: "Kevin G.", text: "The surgical precision Dr. Joshi brings to the table is unmatched. I had my wisdom teeth out and was back at work the next day. Zero pain.", clinic: "Aark Dental" }
            ].map((review, idx) => (
              <div key={`a-${idx}`} className={styles.reviewCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.reviewText}>"{review.text}"</p>
                <div className={styles.reviewAuthor}>
                  <strong>{review.author}</strong>
                  <span>{review.clinic}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { author: "Sarah H.", text: "Dr. Viprat Joshi is amazing. He did my wisdom teeth extraction and I didn't feel a thing. He is so calm and explained everything perfectly.", clinic: "Douglas Park Dental" },
              { author: "Elena R.", text: "Had a full arch restoration with Dr. Joshi. He is the most compassionate surgeon I've ever met. He really listened to my fears and made me feel safe.", clinic: "Infinity Dental" },
              { author: "Priya S.", text: "Dr. Joshi is incredible with patients who have dental anxiety. He is gentle, patient, and very thorough. Best surgical experience I've had.", clinic: "Aark Dental" },
              { author: "Mark T.", text: "I was referred to Dr. Joshi for a complex implant case. He is truly a master of his craft. The results are perfect and the healing was very fast.", clinic: "Douglas Park Dental" },
              { author: "David L.", text: "Dr. Viprat is a technical genius. My iTero scans and implant placement were so precise. I highly recommend him for any major dental work.", clinic: "Infinity Dental" },
              { author: "Kevin G.", text: "The surgical precision Dr. Joshi brings to the table is unmatched. I had my wisdom teeth out and was back at work the next day. Zero pain.", clinic: "Aark Dental" }
            ].map((review, idx) => (
              <div key={`b-${idx}`} className={styles.reviewCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.reviewText}>"{review.text}"</p>
                <div className={styles.reviewAuthor}>
                  <strong>{review.author}</strong>
                  <span>{review.clinic}</span>
                </div>
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
            {[
              {
                city: 'Langley',
                clinic: 'Douglas Park Dental',
                img: '/douglas-park.png',
                address: '20571 Douglas Cres, Langley, BC V3A 4B6',
                phone: '(778) 726-0125',
                hours: 'Mon–Sat 9am–5pm',
                website: 'https://douglasparkdental.ca/',
                directions: 'https://www.google.com/maps/dir//49.102995,-122.6525408'
              },
              {
                city: 'North Van',
                clinic: 'Infinity Dental Care',
                img: '/infinity-dental.png',
                address: '233 West 1st St, North Vancouver, BC',
                phone: '(778) 488-0815',
                hours: 'Mon–Thu 10am–7pm',
                website: 'https://infinitydentalcare.ca/',
                directions: 'https://www.google.com/maps/search/Infinity+Dental+Care+North+Vancouver'
              },
              {
                city: 'Coquitlam',
                clinic: 'AARK Dental',
                img: '/aark-dental.png',
                address: '2929 Barnet Hwy #2310, Coquitlam, BC V3B 5R5',
                phone: '(604) 554-0244',
                hours: 'Open 7 Days a Week',
                website: 'https://aarkdentistcoquitlamcentre.com/',
                directions: 'https://www.google.com/maps/search/AARK+Dental+Coquitlam+Centre'
              }
            ].map((loc, i) => (
              <motion.div key={i} variants={revealUp} className={styles.locationCard}>
                <Image src={loc.img} alt={loc.clinic} fill className={styles.locationImage} />
                <div className={styles.locationContent}>
                  <h3 className={styles.locationCity}>{loc.city}</h3>
                  <p className={styles.locationClinic}>{loc.clinic}</p>
                  <p className={styles.locationAddress}>{loc.address}</p>
                  <p className={styles.locationHours}>{loc.hours}</p>
                  <div className={styles.locationActions}>
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className={styles.locationBtn}>
                      📞 Call Now
                    </a>
                    <a href={loc.directions} target="_blank" rel="noopener noreferrer" className={styles.locationBtnOutline}>
                      📍 Directions
                    </a>
                  </div>
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
            <motion.span variants={revealUp} className={styles.sectionSubtitle} style={{ color: 'var(--accent)' }}>@vipratj on Instagram</motion.span>
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

          <motion.div variants={revealUp} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="https://www.instagram.com/vipratj/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              Follow @vipratj on Instagram →
            </a>
          </motion.div>
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
