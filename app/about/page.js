"use client";
import { useEffect, useState } from "react";
import styles from "./About.module.css";

export default function AboutPage() {

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

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <section className={`${styles.hero} ${styles.fadeIn}`}>
          <img
            src="/me.png"
            alt="Profile"
            className={styles.profileImage}
          />
        </section>

        <section className={`${styles.content} ${styles.fadeIn}`}>
          <div className={styles.intro}>
            <h1>About Me</h1>
            <p className={styles.description}>
              I'm Nelsin. A recent graduate from McGill University with a background 
              in Mathematics & Computer Science. I love learning.
            </p>
          </div>

          <ul className={`${styles.timeline} ${styles.fadeIn}`}>
            <li>Joint-Honours Mathematics & Computer Science (B.Sc.)</li>
            <li>Prev. Teaching Assistant @ McGill University</li>
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

    </div>
  );
}
