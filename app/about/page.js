"use client";
import { useEffect, useState } from "react";
import styles from "./About.module.css";

export default function AboutPage() {

  /*
  useEffect(() => {
    This is the effect callback function.
    Here you perform your side effect.
  
    Optionally, return a cleanup function.
  return () => {
      This cleanup function will run when the component unmounts
      or before the effect runs again if its dependencies change.
  };
}, [ dependency array ]);

  */
 


  useEffect(() => {
    // Fade-in animation using IntersectionObserver


    /*
    - The callback is executed whenever a change is detected in the intersection status of any observed element. 
    - When observed elements change their visibility at roughly the same time, the browser batches the changes and calls the callback once with an array of entries.
    */

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
    
   

    const elements = document.querySelectorAll(`.${styles.fadeIn}`); // Create a set of elements that have the CSS class associated with styles.fadeIn
    elements.forEach((el) => observer.observe(el)); 

    // Cleanup observer on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="container">

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
              in Mathematics & Computer Science.
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
