"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
          {clinics.map((loc, i) => (
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
      </section>

    </main>
  );
}
