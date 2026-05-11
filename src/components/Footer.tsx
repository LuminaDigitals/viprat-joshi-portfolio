"use client";

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.brandName}>Dr. Viprat Joshi</h2>
          <p className={styles.brandDesc}>
            Specialized surgical excellence at the intersection of advanced technology, artistry, and human connection.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h4>Menu</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/philosophy">Philosophy</Link></li>
            <li><Link href="/expertise">Expertise</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Surgical Hubs</h4>
          <ul>
            <li><Link href="/clinics">Douglas Park Dental (Langley)</Link></li>
            <li><Link href="/clinics">Infinity Dental Care (North Van)</Link></li>
            <li><Link href="/clinics">AARK Dental (Coquitlam)</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Connect</h4>
          <p>vipratjoshi@gmail.com</p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Dr. Viprat Joshi. All rights reserved.</p>
        <p>HIPAA Compliant & Secure</p>
      </div>
    </footer>
  );
}
