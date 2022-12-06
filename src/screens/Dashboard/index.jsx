import { useContext } from "react";
import { useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import UserUtil from "../../utils/UserUtil";
import styles from "./styles.module.scss";
import ThumbNotebook  from "../../assets/images/thumb-notebook.svg";

const Dashboard = ({ title }) => {

  const { state } = useContext(UserContext);

  useEffect(() => {
    document.title = `Mileto - ${title}`;
  }, [title]);

  return (
  <>
    <h1>{UserUtil.grettings(state.name)}</h1>
    <div className={styles["flex-container"]}>
      <div className={styles.item}>
        <img src={ThumbNotebook}/>
        <div>
          <h2>Revolucione</h2>
          <p>Aprenda criar engajamento em seus cursos</p>
        </div>
      </div>
      <div className={styles.item}></div>
    </div>
    <div className={styles["flex-container"]}>
     <div className={styles.item}></div>
     <div className={styles.item}></div>
     <div className={styles.item}></div>
     <div className={styles.item}></div>
    </div>

  </>
  );
};

export default Dashboard;
