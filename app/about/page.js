"use client";
import { useEffect, useState } from "react";
import styles from "./About.module.css";
import Link from "next/link";

export default function AboutPage() {

  return (
    <main className={styles.page}>
        <div>
          <h1 className={styles.name}>Nelsin Martin-Burnett</h1>
          <p>
            I'm a recent graduate from McGill University, where I completed the Joint-Honours Maths & CS program.
          </p>
          <p>
            I’m originally from <strong>Singapore</strong> and currently live in <strong>Barcelona</strong>.
          </p>

          <p>From time to time, I will work on this website.</p>

          <p>I hope to have a blog on it, as well as a place to post photos from my trips.</p>

          <div>
            <a href="https://www.linkedin.com/in/nelsin-martin-burnett-5017461b4/">[LinkedIn]  </a>
            <a href="mailto:nelsinmburnett@gmail.com">[Email]  </a>
            <a href="https://www.github.com/nelsinmb">[Github]  </a>
          </div>

      </div>
    </main>
  );
}
