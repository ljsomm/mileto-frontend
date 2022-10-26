import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const StretchedCard = ({ id, title, image }) => {
  const [showToolBox, setShowToolBox] = useState(false);
  const navigate = useNavigate();

  function handleToolsButton() {
    setShowToolBox(!showToolBox);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <img src={image} alt="Imagem do curso" />
      </div>
      <div className={styles["info-container"]}>
        <b>{title}</b>
      </div>
      <div className={styles["tools-container"]}>
        <button onClick={handleToolsButton}>:</button>
        {showToolBox && (
          <div className={styles.toolbox}>
            <ul>
              <li
                onClick={(e) => {
                  navigate(`/professor/curso/${id}`);
                }}
              >
                Editar
              </li>
              <li>Deletar</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StretchedCard;
