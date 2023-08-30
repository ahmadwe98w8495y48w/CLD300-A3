// STYLES
import styles from "/src/pages/Home/Hero/Tracklist/tracklist.module.scss";

// COMPONENTS
import Typography from "/src/components/Typography/Typography";

const Tracklist = () => {
  return (
    <div className={styles.tracklist}>
      <Typography variant="h4">Ending With 1000 </Typography>
      <div className={styles.cta}>
        <Typography variant="h5">Out Now </Typography>
      </div>

      <div className={styles.tracks}>
        <div className={styles.track}>
          <Typography variant="h6">Ending With 1000</Typography>
          <div className={styles.time}>
            <Typography variant="h6">3:46</Typography>
            <i className="fa-solid fa-circle-play fa-lg" Style="color: #ffffff;"></i>
          </div>
        </div>

        <div className={styles.track}>
          <Typography variant="h6">Acoustic Serenade</Typography>
          <div className={styles.time}>
            <Typography variant="h6">4:15</Typography>
            <i className="fa-solid fa-circle-play fa-lg" Style="color: #ffffff;"></i>
          </div>
        </div>

        <div className={styles.track}>
          <Typography variant="h6">Fall Abroad</Typography>
          <div className={styles.time}>
            <Typography variant="h6">4:33</Typography>
            <i className="fa-solid fa-circle-play fa-lg" Style="color: #ffffff;"></i>
          </div>
        </div>

        <div className={styles.track}>
          <Typography variant="h6">Shiny Tune</Typography>
          <div className={styles.time}>
            <Typography variant="h6">2:50</Typography>
            <i className="fa-solid fa-circle-play fa-lg" Style="color: #ffffff;"></i>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Tracklist;
