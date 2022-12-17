import React from "react";
import styles from "./style.module.css";

const About = () => {
  return (
    <div>
      <section className={styles.section}>
        <h1>How To Use?</h1>
        <p>
          Open any youtube video and when you want to take a snapshot of the
          video click
          <span>
            <code>CTRL</code>
            <span>+</span>
            <code>I</code>
          </span>
        </p>
      </section>

      <section className={styles.section}>
        <h1>Report Issues</h1>
        <p>
          To report crashes or bugs you can open an issue on{" "}
          <a href="https://github.com/AhmedIbrahim336/youtube-snapshot">
            GitHub
          </a>
        </p>
        <p>
          Or you can email me directly at{" "}
          <a href="mailto:me@ahmedibrahim.dev">me@ahmedibrahim.dev</a>
        </p>
      </section>

      <section>
        <h1>Thanks ❤️ — By Ahmed Ibrahim</h1>
      </section>
    </div>
  );
};

export default About;
