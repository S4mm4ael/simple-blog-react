import React from "react";
import styles from "./styles.module.css";
import react from "../../assets/react.png";
import gh from "../../assets/gh.png";
import ulbi from "../../assets/ulbi.jpg";

function About() {
  return (
    <div className={styles.About}>
      <h1>About</h1>
      <p>
        Hi! My name is <b>Semion</b>. I am repeating basics of React here.
      </p>
      <p className={styles.About__logo}>
        <a href="https://react.dev/" target="”_blank”">
          <img src={react} alt="react" height="120px" />
        </a>
      </p>
      <p>Project created with a help of a great channel UlbiTV:</p>
      <p className={styles.About__logo}>
        <a
          className={styles.About__link}
          href="https://www.youtube.com/@UlbiTV"
          target="”_blank”"
        >
          <img
            src={ulbi}
            className={styles.About__ulbi}
            alt="Ulbi"
            height="100px"
            title="Ulbi TV"
          />
        </a>
      </p>
      <p>You can see more of my projects here:</p>
      <p className={styles.About__logo}>
        <a href="https://github.com/S4mm4ael" target="”_blank”">
          <img src={gh} alt="GitHub" height="80px" title="My GitHub" />
        </a>
      </p>
      <p>
        <a href="https://github.com/S4mm4ael/simple-blog-vue"></a>
      </p>
    </div>
  );
}

export default About;
