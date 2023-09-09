import React from 'react';
import styles from "./StyleTime.module.css"
import Options from './Options';

const Timeline = () => {
  const about = "A dedicated data analyst with a passion for harnessing the power of OpenCV and machine learning to unlock insights from complex datasets. Committed to driving data-driven decision-making with a strong analytical skillset."
  return (
    <div  className={styles.main}>
      <div className={styles.heading}>
          About Me 
      </div>
      <div className={styles.about}>
        {about}
      </div>
      <div className={styles.container}>
          <Options/>
      </div>
    </div>
  );
};

export default Timeline;
