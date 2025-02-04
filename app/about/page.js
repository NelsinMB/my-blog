// app/about/page.js
"use client"; // Needed because we’re using useEffect (client-side code)
import { useEffect } from "react";
import styles from "./About.module.css";

export default function AboutPage() {
  useEffect(() => {
    // Simple fade-in animation using IntersectionObserver
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
      <header className={styles.header}>
        <h1>About Me</h1>
      </header>

      <section className={styles.hero}>
        {/* Replace "/images/profile.jpg" with the path to your image in the "public" folder */}
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className={styles.profileImage + " " + styles.fadeIn}
        />
      </section>

      <section className={styles.content + " " + styles.fadeIn}>
        <p>
          I'm Nelsin. A recent graduate from McGill University.
        </p>
        <p>
          With a background in Mahematics & Computer Science, I love learning and exploring.
        
        </p>
      </section>
    </div>
  );
}
