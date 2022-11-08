import styles from "./styles.module.scss";

const Progress = ({ max = 100, value = 0 }) => {
  return (
    <div className={styles["progress-container"]}>
      <div
        style={{
          width: `${(value * 100) / max}%`,
        }}
        className={styles["progress"]}
      ></div>
    </div>
  );
};

export default Progress;
