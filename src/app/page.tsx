import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <nav className={styles.nav}>
        <div className={styles.logo}>Dr. Viprat Joshi</div>
        <div className={styles.navLinks}>
          <a href="/about">About</a>
          <a href="/expertise">Expertise</a>
          <a href="/videos">Videos</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container} style={{ width: '100%' }}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.title} animate-fade-in`}>
              Precision Surgery.<br />
              <span className={styles.gradientText}>Compassionate Care.</span>
            </h1>
            <p className={`${styles.subtitle} animate-fade-in delay-100`}>
              Positioning specialized surgical excellence at the intersection of advanced technology and human connection. Serving the Greater Vancouver Area.
            </p>
            <div className={`${styles.ctaGroup} animate-fade-in delay-200`}>
              <button className={styles.primaryButton}>Book Consultation</button>
              <button className={styles.secondaryButton}>View Expertise</button>
            </div>
          </div>
        </div>
        <div className={`${styles.heroImageWrapper} animate-fade-in delay-300`}>
          <Image 
            src="/hero.png" 
            alt="Dr. Viprat Joshi Portrait" 
            width={700} 
            height={900} 
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      <section id="locations" className={styles.locationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Where To Find Us</span>
            <h2 className={styles.sectionTitle}>Greater Vancouver Clinics</h2>
          </div>
          <div className={styles.locationGrid}>
            <div className={styles.locationCard}>
              <h3 className={styles.locationCity}>Langley</h3>
              <p className={styles.locationClinic}>Douglas Park Dental</p>
            </div>
            <div className={styles.locationCard}>
              <h3 className={styles.locationCity}>North Vancouver</h3>
              <p className={styles.locationClinic}>Infinity Dental</p>
            </div>
            <div className={styles.locationCard}>
              <h3 className={styles.locationCity}>Coquitlam</h3>
              <p className={styles.locationClinic}>Aark Dental</p>
            </div>
          </div>
        </div>
      </section>

      <section id="social" className={styles.socialSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Community Education</span>
            <h2 className={styles.sectionTitle}>Latest Insights</h2>
          </div>
          <div className={styles.socialGrid}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={styles.socialPost}>
                <p>Social Video Placeholder</p>
                <div className={styles.socialOverlay}>
                  <span className={styles.playIcon}>▶</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Dr. Viprat Joshi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
