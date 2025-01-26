import React from "react";
import styles from "./Product.module.scss";
import secondPageImage from "../../assets/images/gray.png";

const Product = () => {
  return (
    <>
      <section className={styles.titlesection}>
        <h1>TEMPLATE PRODUCT</h1>
        <p>Short description of product</p>
      </section>
			<section className={styles.linksection}>
			<nav className={styles.navigation}>  
				 <a href="/"  className={styles.link}>
				 OVERVIEW 
				 </a>
				 <a href="/about" className={styles.link}>
				 FEATURES
				 </a>
				 <a href="/product" className={styles.link}>
				 COMMUNITY 
				 </a>
			 </nav>
			 <button className={styles.btn}>
			 BUY IT NOW
			 </button>
			</section>
      <section className={styles.splitSection}>
        <div className={styles.splitSection__image}>
          <img src={secondPageImage} alt="second page img" />
        </div>
        <div className={styles.splitSection__content}>
          <h2>What’s new?</h2>
          <p>
            Ever since its joke txt created his famous early console modules in
            the early 1970s, many other companies have attempted to reproduce
            elements of their classic sound – or even clone them entirely. But
            after selling and leaving the Neve company in the mid-1970s, nothing
            that bears the Neve name was actually designed by him.
          </p>

          <p>
            We build equipment to the same say hi to my perdoller standards that
            made his early creations legends of the studio world. It’s far more
            than a list of components or a famous product name – it’s a
            philosophy of design taught to us by Rupert that runs through
            everything we do.
          </p>

          <p>
            Ever since its joke txt created his famous early console modules in
            the early 1970s, many other companies have attempted to reproduce
            elements of their classic sound – or even clone them entirely. But
            after selling and leaving the Neve company in the mid-1970s, nothing
            that bears the Neve name was actually designed by him.
          </p>
        </div>
      </section>
			<section className={styles.splitreturnSection}>
        <div className={styles.splitreturnSection__image}>
          <img src={secondPageImage} alt="second page img" />
        </div>
        <div className={styles.splitreturnSection__content}>
          <h2>Technical Equipment</h2>
          <p>
            Ever since its joke txt created his famous early console modules in
            the early 1970s, many other companies have attempted to reproduce
            elements of their classic sound – or even clone them entirely. But
            after selling and leaving the Neve company in the mid-1970s, nothing
            that bears the Neve name was actually designed by him.
          </p>

          <p>
            We build equipment to the same say hi to my perdoller standards that
            made his early creations legends of the studio world. It’s far more
            than a list of components or a famous product name – it’s a
            philosophy of design taught to us by Rupert that runs through
            everything we do.
          </p>

          <p>
            Ever since its joke txt created his famous early console modules in
            the early 1970s, many other companies have attempted to reproduce
            elements of their classic sound – or even clone them entirely. But
            after selling and leaving the Neve company in the mid-1970s, nothing
            that bears the Neve name was actually designed by him.
          </p>
        </div>
      </section>
			<section className={styles.splityoutubeSection}>
        <div className={styles.splityoutubeSection__image}>
          <img src={secondPageImage} alt="second page img" />
        </div>
        <div className={styles.splityoutubeSection__content}>
          <h2>See big review on YouTube</h2>
          <p>
            Ever since its joke txt created his famous early console modules in
            the early 1970s, many other companies have attempted to reproduce
            elements of their classic sound – or even clone them entirely. But
            after selling and leaving the Neve company in the mid-1970s, nothing
            that bears the Neve name was actually designed by him.
          </p>

          <p>
            We build equipment to the same say hi to my perdoller standards that
            made his early creations legends of the studio world. It’s far more
            than a list of components or a famous product name – it’s a
            philosophy of design taught to us by Rupert that runs through
            everything we do.
          </p>

          <p>
            Ever since its joke txt created his famous early console modules in
            the early 1970s, many other companies have attempted to reproduce
          </p>

					
        </div>
      </section>
    </>
  );
};

export default Product;
