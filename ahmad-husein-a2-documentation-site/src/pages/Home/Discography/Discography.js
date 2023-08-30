// STYLES
import styles from "/src/pages/Home/Discography/discography.module.scss";

// IMAGES
import album_2 from "/src/images/album_2.png";
import album_3 from "/src/images/album_3.png";
import album_4 from "/src/images/album_4.png";
import album_5 from "/src/images/album_5.png";
import album_6 from "/src/images/album_6.png";
import album_7 from "/src/images/album_7.png";

// COMPONENTS
import Typography from "/src/components/Typography/Typography";
import Image from "/src/components/Image/Image";
import Button from "/src/components/Button/Button";

const Discography = () => {
  return (
    <div className={styles.discography}>
      <div className={styles.albums}>
        <div>
          <div className={styles.row1}>
            <div>
              <Image src={album_2} alt="album cover" />
            </div>
            <div>
              <Image src={album_3} alt="album cover" />
            </div>
          </div>

          <div className={styles.big_one}>
            <div className={styles.heading}>
              <p > Other </p>
              <p className={styles.heading2}> releases </p>
            </div>
            
            <Image src={album_4} alt="album cover" />
          </div>
        </div>

        <div>
          <div>
            <Image src={album_5} alt="album cover" />
          </div>

          <div className={styles.row2}>
            <div>
              <Image src={album_6} alt="album cover" />
            </div>
            <div>
              <Image src={album_7} alt="album cover" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.button}>
        <Button> More </Button>
      </div>
    </div>
  );
};

export default Discography;
