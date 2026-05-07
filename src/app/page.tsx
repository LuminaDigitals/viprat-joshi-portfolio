import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <nav className={styles.nav}>
        <div className={styles.logo}>Viprat.</div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.glow}></div>
        <div className={`${styles.badge} animate-fade-in`}>
          <span style={{ marginRight: '8px' }}>✨</span> Welcome to my creative universe
        </div>
        <h1 className={`${styles.title} animate-fade-in delay-100`}>
          Crafting digital <br />
          <span className={styles.gradientText}>experiences</span> that matter.
        </h1>
        <p className={`${styles.subtitle} animate-fade-in delay-200`}>
          I'm a full-stack developer and designer focused on building beautiful, performant, and accessible web applications.
        </p>
        <div className={`${styles.ctaGroup} animate-fade-in delay-300`}>
          <button className={styles.primaryButton}>View My Work</button>
          <button className={styles.secondaryButton}>Get In Touch</button>
        </div>
      </section>

      <section id="services" className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What I do</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💻</div>
              <h3 className={styles.cardTitle}>Web Development</h3>
              <p className={styles.cardDesc}>
                Building fast, responsive, and maintainable web applications using modern technologies like Next.js, React, and TypeScript.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>✨</div>
              <h3 className={styles.cardTitle}>UI/UX Design</h3>
              <p className={styles.cardDesc}>
                Creating intuitive, accessible, and visually stunning user interfaces that provide exceptional user experiences.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🚀</div>
              <h3 className={styles.cardTitle}>Performance Optimization</h3>
              <p className={styles.cardDesc}>
                Optimizing web applications for maximum speed, accessibility, and SEO to ensure the best possible reach and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Viprat Joshi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
