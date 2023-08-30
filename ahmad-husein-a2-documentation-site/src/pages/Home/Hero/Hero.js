// STYLES
import styles from "/src/pages/Home/Hero/hero.module.scss";

// IMAGES
import albumimg from "/src/images/ending-with-1000.jpg";

// COMPONENTS
import Navbar from "/src/components/NavbarComponent/Navbar";
import Typography from "/src/components/Typography/Typography";
import Image from "/src/components/Image/Image";
import Tracklist from "./Tracklist/Tracklist";

const Hero = () => {
  return (
    <div>
      <div className={styles.container}>
        <Navbar>
          <a href="#">Discography</a>
          <a href="#">Tour</a>
          <a href="#">Photo</a>
          <a href="#">Design</a>
          <a href="#">Merch</a>
          <a href="#">Contact</a>
          
        </Navbar>
      </div>
      <Typography variant="h1">Patrick Holland </Typography>

      <div className={styles.imagescontainer}>
        <Image src={albumimg} alt="album cover" />
        <Tracklist />
      </div>
    </div>
  );
};

export default Hero;
