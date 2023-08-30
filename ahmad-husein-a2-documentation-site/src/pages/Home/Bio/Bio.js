// STYLES
import styles from "/src/pages/Home/Bio/bio.module.scss";

// IMAGES
import artistimg from "/src/images/artistimg.png";

// COMPONENTS
import Typography from "/src/components/Typography/Typography";
import Image from "/src/components/Image/Image";

const Bio = () => {
  return (
    <div className={styles.bio}>
      <div className={styles.heading}>
        <div className={styles.heading_text}>
          <Typography variant="h1">About</Typography>
        </div>

        <div className={styles.heading_text}>
          <Typography variant="h1">the</Typography>
        </div>

        <div>
          <Typography variant="h1">artist</Typography>
        </div>
      </div>

      <div className={styles.image}>
        <Image src={artistimg} alt="artist" />
      </div>

      <div className={styles.description}>
        <Typography variant="h6">
          Patrick Holland (fka Project Pablo) is a Canadian musician, producer,
          and DJ. His newest album, and first foray into guitar-driven indie
          pop, You’re The Boss was released on July 29th, 2022. Prior to his
          Debut album, Holland established himself as a producer and DJ under
          the name Project Pablo. Records like “I Want to Believe” and “Closer”
          defined the underground sound of dance music in the 2010s, all while
          DJing iconic venues and festivals such as Berghain, Montreaux Jazz
          Festival, MOMA PS1, Sonar, MUTEK, DOUR, MELT, Zhao Dai and more. In
          2021/2022 he toured as TOPS' bassist, and debuted his solo live show.
          Holland also makes up half of Jump Source with Priori.
        </Typography>
      </div>
    </div>
  );
};

export default Bio;
