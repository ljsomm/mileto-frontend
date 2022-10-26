import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Card = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  function descriptionFilter(description) {
    if (description.length > 60) {
      let newDescription = "";
      for (let i = 0; i < 60; i++) {
        newDescription += description[i];
      }
      return newDescription + "...";
    }
    return description;
  }

  return (
    <div className={styles["card-container"]} onClick={() => navigate(link)}>
      <div className={styles["card-image-container"]}>
        <img
          className={styles["card-image"]}
          src={image}
          alt="curso"
          draggable={false}
        />
      </div>
      <div className={styles["card-info-section"]}>
        <h3 className={styles["card-title"]}>{title}</h3>
        <p className={styles["card-description"]}>
          {descriptionFilter(description)}
        </p>
      </div>
    </div>
  );
};

export default Card;
