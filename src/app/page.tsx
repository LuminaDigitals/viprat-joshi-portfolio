import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  // Replace these with Dr. Joshi's actual Instagram reel URLs
  const instagramReels = [
    "https://www.instagram.com/p/C-xyz123/embed", 
    "https://www.instagram.com/p/C-abc456/embed",
    "https://www.instagram.com/p/C-def789/embed"
  ];

  return (
    <main>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          Dr. Viprat Joshi <span className={styles.logoAccent}>.</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#about">Philosophy</a>
          <a href="#expertise">Expertise</a>
          <a href="#locations">Clinics</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            
            {/* Left Content */}
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span></span> Greater Vancouver Area
              </div>
              <h1 className={styles.title}>
                <span>Precision Surgery.</span>
                <span className={styles.titleAccent}>Compassionate Care.</span>
              </h1>
              <p className={styles.subtitle}>
                Positioning specialized surgical excellence at the intersection of advanced technology, artistry, and human connection.
              </p>
              <div>
                <button className={styles.primaryButton}>
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className={styles.heroVisual}>
              <div className={styles.visualGrid}>
                <div className={styles.visualColumn}>
                  <div className={`${styles.visualBox} ${styles.large}`}>
                    <Image 
                      src="/hero.png" 
                      alt="Dr. Viprat Joshi" 
                      fill
                    />
                  </div>
                  <div className={`${styles.visualBox} ${styles.small}`}>
                     <Image 
                      src="/shapes.png" 
                      alt="Abstract clinical elements" 
                      fill
                    />
                  </div>
                </div>
                <div className={`${styles.visualColumn} ${styles.offset}`}>
                  <div className={`${styles.visualBox} ${styles.small}`}>
                    <div style={{ width: '100%', height: '100%', background: 'var(--primary)', opacity: 0.1 }}></div>
                  </div>
                  <div className={`${styles.visualBox} ${styles.large}`}>
                    <Image 
                      src="/shapes.png" 
                      alt="Abstract clinical elements" 
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="locations" className={styles.locationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionSubtitle}>Where To Find Us</span>
              <h2 className={styles.sectionTitle}>Surgical Hubs</h2>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: '0.9rem' }}>
                Operating across the Greater Vancouver area, bringing advanced maxillofacial and implant surgery to your community.
              </p>
            </div>
          </div>
          
          <div className={styles.locationGrid}>
            <div className={styles.locationCard}>
              <h3 className={styles.locationCity}>Langley</h3>
              <p className={styles.locationClinic}>Douglas Park Dental</p>
            </div>
            <div className={styles.locationCard}>
              <h3 className={styles.locationCity}>North Van</h3>
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
            <div>
              <span className={styles.sectionSubtitle}>Community Education</span>
              <h2 className={styles.sectionTitle}>Latest Insights</h2>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: '0.9rem' }}>
                Follow Dr. Joshi's surgical Q&As, prevention tips, and behind-the-scenes transformations.
              </p>
            </div>
          </div>
          
          <div className={styles.socialGrid}>
            {instagramReels.map((url, index) => (
              <div key={index} className={styles.instagramEmbed}>
                <iframe 
                  src={url} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency={true}
                  title={`Instagram Reel ${index + 1}`}
                ></iframe>
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
