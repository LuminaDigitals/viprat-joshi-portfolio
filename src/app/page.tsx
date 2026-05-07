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
        <div className={styles.heroImageWrapper}>
          {/* Abstract backdrop representing high-end clinical aesthetic */}
          <Image 
            src="/shapes.png" 
            alt="Cinematic background" 
            fill
            className={styles.heroImage}
            priority
          />
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.showreelWrapper}>
            <button className={styles.playButton} aria-label="Play Showreel">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className={styles.showreelText}>Play Showreel</span>
          </div>

          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              Precision Surgery.<br />
              Compassionate Care.
            </h1>
            <p className={styles.subtitle}>
              Positioning specialized surgical excellence at the intersection of advanced technology and human connection.
            </p>
          </div>
        </div>
      </section>

      <section id="locations" className={styles.locationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Where To Find Us</span>
            <h2 className={styles.sectionTitle}>Greater Vancouver</h2>
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
                {/* Fallback pattern block until real Instagram images are connected */}
                <div style={{ width: '100%', height: '100%', background: 'var(--background-alt)' }}></div>
                <div className={styles.playIconOverlay}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Dr. Viprat Joshi. All rights reserved.</p>
      </footer>
    </main>
  );
}
