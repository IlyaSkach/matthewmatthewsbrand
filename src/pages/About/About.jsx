import React from "react";
import styles from "./About.module.scss";
import contactPageImage from "../../assets/images/contactpage.png";

const About = () => {
  return (
    <>
      <section class={styles.aboutsection}>
        <div class={styles.aboutsection__content}>
          <h1>Contact Us </h1>
          <h3>Все наши контакты</h3>

          <p>
            Администрация{" "}
            <a
              href="mailto:contact@matthewmatthewsbrand.com"
              className={styles.email}
            >
              contact@matthewmatthewsbrand.com
            </a>{" "}
          </p>
          <p>
            Поддержка магазина{" "}
            <a
              href="mailto:support@matthewmatthewsbrand.store"
              className={styles.email}
            >
              support@matthewmatthewsbrand.store
            </a>
          </p>
          <p>
            Отдел претензий{" "}
            <a
              href="mailto:claim@matthewmatthewsbrand.com"
              className={styles.email}
            >
              claim@matthewmatthewsbrand.com
            </a>
          </p>
          <p>
            Поддержка лейбла{" "}
            <a
              href="mailto:support@matthewmatthewsbrand.store"
              className={styles.email}
            >
              support@matthewmatthewsbrand.store
            </a>
          </p>

          <div class={styles.discl}>
            Все почтовые ящики проверяются раз в сутки.
          </div>
        </div>
        <div class={styles.aboutsection__img}>
          <img src={contactPageImage} alt="contact" />
        </div>
      </section>
    </>
  );
};

export default About;
