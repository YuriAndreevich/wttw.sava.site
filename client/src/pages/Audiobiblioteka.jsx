import { useState } from "react";
import styles from './Audiobiblioteka.module.css';
import { Text } from "../components/UI";

function Audiobiblioteka() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.leftPanel}>
          <Text className={styles.contentTabs}>Беседа библиотекаря с незрячим читателем</Text>
        </div>
        <div className={styles.rightPanel}>
          <iframe
            src="https://drive.google.com/file/d/1RFX7TqsNhaqsSszA4JNno9NGLf-kFycg/preview"
            width="640"
            height="480"
            className={styles.video}
          ></iframe>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.rightPanel}>
          <embed
            src="https://drive.google.com/file/d/18-t_e3HJ9PVsFZEhsH-7h9VVqsjG0vIb/preview"
            width="640"
            height="480"
            className={styles.video}
          ></embed>
        </div>
        <div className={styles.leftPanel}>
          <Text className={styles.contentTabs}>Взаимодействие медперсонала с незрячим пациентом</Text>
        </div>
      </div>

      {/* <div className={styles.row}>
        <div className={styles.leftPanel}>
          <Text className={styles.contentTabs}>Встреча со знакомым незрячим</Text>
        </div>
        <div className={styles.rightPanel}>
          <embed
            src="https://drive.google.com/file/d/1kr7sk6Dw1GdVWkVpfEnRWCUoLgHjGTJH/preview"
            width="640"
            height="480"
            className={styles.video}
          ></embed>
        </div>
      </div> */}

      <div className={styles.row}>
        <div className={styles.leftPanel}>
          <Text className={styles.contentTabs}>Если Вам нужно что-то передать незрячему</Text>
        </div>
        <div className={styles.rightPanel}>
          <embed
            src="https://drive.google.com/file/d/1dlhaaH0u6PSz8hhYBjnngP_cgmUmNnmC/preview"
            width="640"
            height="480"
            className={styles.video}
          ></embed>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.rightPanel}>
          <embed
            src="https://drive.google.com/file/d/1Nph8sz23S8V3oNJNA830bU-UY89M-Nen/preview"
            width="640"
            height="480"
            className={styles.video}
          ></embed>
        </div>
        <div className={styles.leftPanel}>
          <Text className={styles.contentTabs}>Жесты и мимика в беседе с незрячим</Text>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.leftPanel}>
          <Text className={styles.contentTabs}>Как правильно предложить помощь при сопровождении незрячего</Text>
        </div>
        <div className={styles.rightPanel}>
          <embed
            src="https://drive.google.com/file/d/1i44Z5Jvzta3-pjExAk8ST4meSamIQpEI/preview"
            width="640"
            height="480"
            className={styles.video}
          ></embed>
        </div>
      </div>
    </div>
  );
}

export default Audiobiblioteka;
