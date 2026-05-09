"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Link href="/" className={styles.logo}>
          Dr. Viprat Joshi
        </Link>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={styles.navLinks}
      >
        <Link href="/philosophy">Philosophy</Link>
        <Link href="/expertise">Expertise</Link>
        <Link href="/#locations">Clinics</Link>
        <Link href="/contact">Contact</Link>
      </motion.div>
    </nav>
  );
}
