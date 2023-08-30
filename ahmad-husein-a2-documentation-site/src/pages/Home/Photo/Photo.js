// STYLES
import styles from "/src/pages/Home/Photo/photo.module.scss";

// IMAGES
import photo1 from "/src/images/photo1.jpg";
import photo2 from "/src/images/photo2.jpg";
import photo3 from "/src/images/photo3.jpg";
import photo4 from "/src/images/photo4.jpg";
import photo5 from "/src/images/photo5.jpg";

// COMPONENTS
import Typography from "/src/components/Typography/Typography";
import Image from "/src/components/Image/Image";
import Button from "/src/components/Button/Button";

const Photo = () => {
  return (
    <div className={styles.photo}>
      <div className={styles.row1}>
        <div>
          <Image src={photo1} alt="photography" />
        </div>
        <div>
          <Image src={photo4} alt="photography" />
        </div>
      </div>

      <div className={styles.column2}>
        <div className={styles.heading}>
          <Typography variant="h1">Photo</Typography>
        </div>

        <div className={styles.row2}>
          <div>
            <Image src={photo3} alt="photography" />
          </div>
          <div>
            <Image src={photo2} alt="photography" />
          </div>
          <div>
            <Image src={photo5} alt="photography" />
          </div>
        </div>
        <div>
          <Button>More</Button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
