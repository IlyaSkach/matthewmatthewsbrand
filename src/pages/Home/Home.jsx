import React from "react";
import styles from "./Home.module.scss";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <section class={styles.herosection}>
        <div class={styles.herocontent}>
          <h1>My best ideas brought to life are now available to the world.</h1>
          <p>Matthew Matthews, CEO and Sound Engineer</p>
        </div>
      </section>
      <section class={styles.aboutsection}>
        <h1>What is a Matthew Matthews Brand?</h1>
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
          than a list of components or a famous product name – it’s a philosophy
          of design taught to us by Rupert that runs through everything we do.
        </p>
        <button>Learn More</button>
      </section>
      <section class={styles.productsection}>
        <div class={styles.productsound}>
          <button>
          GO TO HYBRID SOUND
          </button>
        </div>
        <div class={styles.productmusic}>
          <button>
          GO TO CREATING MUSIC
          </button>
        </div>

      </section>
    </>
  );
};

export default Home;
