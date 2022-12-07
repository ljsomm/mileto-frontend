import { useContext } from "react";
import { useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import UserUtil from "../../utils/UserUtil";
import styles from "./styles.module.scss";
import ThumbNotebook  from "../../assets/images/thumb-notebook.svg";
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const Dashboard = ({ title }) => {

  const { state } = useContext(UserContext);

  useEffect(() => {
    document.title = `Mileto - ${title}`;
  }, [title]);

  
  let dates = [];
  const currentMonth = new Date().getUTCMonth();
  for(let i = 0; i < 3; i++){
    let currentDate = new Date();
    currentDate.setMonth(currentMonth - (2 - i));
    dates.push(currentDate.toLocaleDateString('pt-br', {
      month: 'long'
    }));
  }

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
      <div className={styles.item}>

        <Line          
          data={{
            labels: dates.map(item=>item.toUpperCase()),
            datasets: [
              {

              }
            ]
          }}
        />
      </div>
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
