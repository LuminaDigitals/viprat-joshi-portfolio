"use client";

import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Philosophy() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const principles = [
    {
      title: "Compassionate Care",
      text: "Every surgical journey begins with empathy. We prioritize your emotional comfort as much as your physical well-being, ensuring you feel heard and supported at every step.",
      image: "/Compassionate Care.jpeg"
    },
    {
      title: "Unwavering Trust",
      text: "Trust is the foundation of surgery. We build it through absolute transparency, detailed education, and a commitment to setting realistic, achievable expectations.",
      image: "/shapes.png" // Fallback since only 4 images were provided
    },
    {
      title: "Human Connection",
      text: "Beyond the clinical environment, we are people treating people. Our approach centers on building a genuine relationship rather than just a patient-doctor transaction.",
      image: "/HumanConnection.jpeg"
    },
    {
      title: "Optimal Comfort",
      text: "We redefine the surgical experience by minimizing anxiety and maximizing comfort. Our environment and techniques are designed to put you at complete ease.",
      image: "/Patient Comfort First.jpeg"
    },
    {
      title: "Clinical Excellence",
      text: "Precision is our baseline. Utilizing advanced technology and master-level surgical techniques, we deliver predictable, world-class aesthetic and functional outcomes.",
      image: "/Excellence.jpeg"
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
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h1 variants={revealUp} className={styles.title}>
              Beyond the <span className={styles.titleAccent}>Scalpel.</span>
            </motion.h1>
            <motion.p variants={revealUp} className={styles.subtitle}>
              Surgical excellence is merely the baseline. Our true craft lies in the art of human connection, transforming clinical precision into a deeply personal, restorative experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className={styles.principleGrid}>
          {principles.map((principle, idx) => (
            <motion.div 
              key={idx} 
              className={styles.principleItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealUp}
            >
              <div className={styles.principleImageWrapper}>
                <Image src={principle.image} alt={principle.title} fill className={styles.principleImage} />
                <div className={styles.principleNumber}>0{idx + 1}</div>
              </div>
              <div className={styles.principleContent}>
                <h2 className={styles.principleTitle}>{principle.title}</h2>
                <p className={styles.principleText}>{principle.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
