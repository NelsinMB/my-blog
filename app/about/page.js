"use client";
import { useEffect, useState } from "react";
import styles from "./About.module.css";

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Fade-in animation using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(`.${styles.fadeIn}`);
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
        
          <button 
            className={styles.themeToggle} 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={`${styles.hero} ${styles.fadeIn}`}>
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className={styles.profileImage}
          />
        </section>

        <section className={`${styles.content} ${styles.fadeIn}`}>
          <div className={styles.intro}>
            <h1>About Me</h1>
            <p className={styles.description}>
              I'm Nelsin. A recent graduate from McGill University with a background 
              in Mathematics & Computer Science. I love learning and exploring new technologies
              while building meaningful projects.
            </p>
          </div>

          <ul className={`${styles.timeline} ${styles.fadeIn}`}>
            <li>Recent McGill University graduate</li>
            <li>Mathematics & Computer Science background</li>
            <li>Passionate about learning and exploration</li>
            <li>Building meaningful projects</li>
          </ul>

          <div className={`${styles.socialLinks} ${styles.fadeIn}`}>
            <a href="https://github.com/NelsinMB" className={styles.socialLink}>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/nelsin-martin-burnett-5017461b4/" className={styles.socialLink}>
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Nelsin. All rights reserved.</p>
      </footer>
    </div>
  );
}
