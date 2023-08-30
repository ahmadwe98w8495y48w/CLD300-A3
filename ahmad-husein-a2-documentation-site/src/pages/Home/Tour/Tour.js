// STYLES
import styles from "/src/pages/Home/Tour/tour.module.scss";

// COMPONENTS
import Button from "/src/components/Button/Button";
import Typography from "/src/components/Typography/Typography";

const Tour = () => {
  return (
    <div className={styles.tour}>
      
      <Typography variant="h6">Tour dates </Typography>

      <div className={styles.location}>
        <Typography variant="h2">Seattle </Typography>
        <div className={styles.date}>
          <div>
            <Typography variant="h6">21.09.23 </Typography>
          </div>
          <Button> Tickets </Button>
        </div>
      </div>

      <div className={styles.location}>
        <Typography variant="h2">Las Vegas </Typography>
        <div className={styles.date}>
          <div>
            <Typography variant="h6">23.09.23 </Typography>
          </div>
          <Button> Tickets </Button>
        </div>
      </div>

      <div className={styles.location}>
        <Typography variant="h2">Chicago </Typography>
        <div className={styles.date}>
          <div>
            <Typography variant="h6">25.09.23 </Typography>
          </div>
          <Button> Tickets </Button>
        </div>
      </div>

      <div className={styles.location}>
        <Typography variant="h2">New York </Typography>
        <div className={styles.date}>
          <div>
            <Typography variant="h6">27.09.23 </Typography>
          </div>
          <Button> Tickets </Button>
        </div>
      </div>


    </div>
  );
};

export default Tour;
