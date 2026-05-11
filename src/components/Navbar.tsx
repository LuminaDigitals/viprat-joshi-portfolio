"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href="/" className={styles.logo}>
            Dr. Viprat Joshi
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          <Link href="/philosophy">Philosophy</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/clinics">Clinics</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`${styles.mobileToggle} ${isOpen ? styles.active : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/philosophy" onClick={() => setIsOpen(false)}>Philosophy</Link>
              <Link href="/expertise" onClick={() => setIsOpen(false)}>Expertise</Link>
              <Link href="/clinics" onClick={() => setIsOpen(false)}>Clinics</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
