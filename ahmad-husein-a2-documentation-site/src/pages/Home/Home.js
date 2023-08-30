// STYLES
import styles from "/src/pages/Home/home.module.scss";

// Components
import Tour from "./Tour/Tour";
import Hero from "/src/pages/Home/Hero/Hero.js";
import Discography from "./Discography/Discography";
import Photo from "./Photo/Photo";
import Design from "./Design/Design";
import Bio from "./Bio/Bio";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className={styles.body}>
        <Tour />
        <Discography />
        <Bio />   
        <Photo />
        <Design />
      </div>
    </div>
  );
};

export default Home;
