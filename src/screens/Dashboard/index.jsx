import { useContext } from "react";
import { useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import UserUtil from "../../utils/UserUtil";
import styles from "./styles.module.scss";

const Dashboard = ({ title }) => {

  const { state } = useContext(UserContext);

  useEffect(() => {
    document.title = `Mileto - ${title}`;
  }, [title]);

  return (
  <>
    <h1>{UserUtil.grettings(state.name)}</h1>
    <div className={styles.grid}>
      <div></div>
      <div></div>
      <div>1</div>
      <div>2</div>
      <div>2</div>
      <div>2</div>
    </div>
  </>
  );
};

export default Dashboard;
