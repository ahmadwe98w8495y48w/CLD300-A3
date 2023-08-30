// STYLES
import styles from "/src/pages/Home/Design/design.module.scss";

// IMAGES
import design1 from "/src/images/design1.png";
import design2 from "/src/images/design2.jpg";
import design3 from "/src/images/design3.jpg";
import design4 from "/src/images/design4.jpg";
import design5 from "/src/images/design5.jpg";
import design6 from "/src/images/design6.jpg";

// COMPONENTS
import Typography from "/src/components/Typography/Typography";
import Image from "/src/components/Image/Image";
import Button from "/src/components/Button/Button";

const Design = () => {
  return (
    <div className={styles.design}>
      <div className={styles.heading}>
        <Typography variant="h1">Design</Typography>
      </div>

      <div className={styles.column1}>
        <div className={styles.row1}>
          <div>
            <Image src={design1} alt="desigm" />
          </div>
          <div>
            <Image src={design2} alt="design" />
          </div>
          <div>
            <Image src={design3} alt="design" />
          </div>
        </div>

        <div className={styles.column2}>
          <div className={styles.row2}>
            <div>
              <Image src={design4} alt="design" />
            </div>
            <div>
              <Image src={design5} alt="design" />
            </div>
            <div>
              <Image src={design6} alt="design" />
            </div>
          </div>
          <div>
            <Button>More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
