import React from "react";
import styles from "./Distribution.module.scss";
import secondPageImage from "../../assets/images/gray.png";
import historyPageImage from "../../assets/images/historypage.png";
import DistributionPageImage from "../../assets/images/distpage.png";

const Distribution = () => {
  
  return (
    <>
      <section className={styles.titlesection}>
        <h1>MUSIC DISTRIBUTION</h1>
        <p>MAKE YOUR MUSIC SAFETY AND POPULARITY</p>
      </section>
      <section className={styles.linksection}>
        <nav className={styles.navigation}>
          <a href="#features" className={styles.link}>
            FEATURES
          </a>
          <a href="#song" className={styles.link}>
            REALEASED SONGS
          </a>
        </nav>
        <button className={styles.btn}>GET UNLIMITED ACCESS</button>
      </section>
      <section className={styles.splitSection} id="features" >
        <div className={styles.splitSection__image}>
          <img src={secondPageImage} alt="second page img" />
        </div>
        <div className={styles.splitSection__content}>
          <h2>Whats we can?</h2>
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
          <button className={styles.btnblack}>GET UNLIMITED ACCESS</button>
        </div>
      </section>
      <section class={styles.musicSection} id="song">
        <h2>Our Music and Artists</h2>
        <div class={styles.musicSection__parts}>
          <div class={styles.musicSection__parts_song}>
            <p>Most Popular Released Songs</p>
            <div className={styles.historysection__music}>
              <img src={historyPageImage} alt="history" />
              <div className={styles.historysection__artist}>
                <div className={styles.historysection__first}>Never!</div>
                <div className={styles.historysection__second}>
                  Matthew Matthews
                </div>
              </div>
            </div>
            <div className={styles.historysection__music}>
              <img src={historyPageImage} alt="history" />
              <div className={styles.historysection__artist}>
                <div className={styles.historysection__first}>Never!</div>
                <div className={styles.historysection__second}>
                  Matthew Matthews
                </div>
              </div>
            </div>
            <div className={styles.historysection__music}>
              <img src={historyPageImage} alt="history" />
              <div className={styles.historysection__artist}>
                <div className={styles.historysection__first}>Never!</div>
                <div className={styles.historysection__second}>
                  Matthew Matthews
                </div>
              </div>
            </div>
            <div className={styles.historysection__music}>
              <img src={historyPageImage} alt="history" />
              <div className={styles.historysection__artist}>
                <div className={styles.historysection__first}>Never!</div>
                <div className={styles.historysection__second}>
                  Matthew Matthews
                </div>
              </div>
            </div>
            <div className={styles.historysection__music}>
              <img src={historyPageImage} alt="history" />
              <div className={styles.historysection__artist}>
                <div className={styles.historysection__first}>Never!</div>
                <div className={styles.historysection__second}>
                  Matthew Matthews
                </div>
              </div>
            </div>
            <div className={styles.historysection__music}>
              <img src={historyPageImage} alt="history" />
              <div className={styles.historysection__artist}>
                <div className={styles.historysection__first}>Never!</div>
                <div className={styles.historysection__second}>
                  Matthew Matthews
                </div>
              </div>
            </div>
          </div>

          <div class={styles.musicSection__parts_artist}>
            <p> Most Popular Artists</p>
            <div class={styles.musicSection__parts_img}>
              <div className={styles.imageContainer}>
                <img
                  src={DistributionPageImage}
                  alt="Matthew Matthews"
                  className={styles.image}
                />
                <div className={styles.textOverlay}>MATTHEW MATTHEWS</div>
              </div>
							<div className={styles.imageContainer}>
                <img
                  src={DistributionPageImage}
                  alt="Matthew Matthews"
                  className={styles.image}
                />
                <div className={styles.textOverlay}>MATTHEW MATTHEWS</div>
              </div>
							<div className={styles.imageContainer}>
                <img
                  src={DistributionPageImage}
                  alt="Matthew Matthews"
                  className={styles.image}
                />
                <div className={styles.textOverlay}>MATTHEW MATTHEWS</div>
              </div>
							<div className={styles.imageContainer}>
                <img
                  src={DistributionPageImage}
                  alt="artist"
                  className={styles.image}
                />
                <div className={styles.textOverlay}>MATTHEW MATTHEWS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Distribution;
