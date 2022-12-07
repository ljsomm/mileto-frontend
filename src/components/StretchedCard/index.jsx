import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import ModalContext from "../../contexts/ModalContext";
import Course from "../../services/Course";
import { useCookies } from "react-cookie";

const StretchedCard = ({ id, title, image, setLastDeleted }) => {
  const [showToolBox, setShowToolBox] = useState(false);
  const navigate = useNavigate();
  const {dispatch} = useContext(ModalContext);
  const [{__token}] = useCookies();

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
              <li onClick={() => {
                dispatch({
                  type: "OPEN",
                  modal: {
                      Header: () => <h3>Confirmar deleção</h3>,
                      Body: () => <p>Tem certeza que deseja deletar?</p>,
                      Footer: () => <div className={styles["modal-footer"]}><button className={styles["modal-button__cancel"]} onClick={()=>dispatch({type:"CLOSE"})}>Cancelar</button><button onClick={async ()=>{ 
                        const response = await Course.delete(__token, id);
                        setLastDeleted(response.data);
                        dispatch({type:"CLOSE"});
                      }} className={styles["modal-button"]}>Confirmar</button></div>
                  }
                });
              }}>Deletar</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StretchedCard;
