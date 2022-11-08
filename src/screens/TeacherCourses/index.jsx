import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import StretchedCard from "../../components/StretchedCard";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import Course from "../../services/Course";
import { useCookies } from "react-cookie";
import { useRef } from "react";

const TeacherCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [{ __token }] = useCookies();
  const [showAll, setShowAll] = useState(false);
  const [coursesCount, setCoursesCount] = useState(9);

  async function getTeacherCourses() {
    setCourses(await Course.getTeacherCourses(__token));
  }

  useEffect(() => {
    getTeacherCourses();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Meus cursos</h1>
      <div className={styles["nav"]}>
        <button
          className={styles["btn-success"]}
          onClick={() => {
            navigate("/professor/curso");
          }}
        >
          Criar curso
        </button>
      </div>
      <div className={styles["parent"]}>
        {courses.length ? (
          <>
            {courses
              .filter((item, key) => {
                return showAll || (!showAll && key < coursesCount);
              })
              .map((item, key) => {
                return (
                  <StretchedCard
                    key={key}
                    id={item.id}
                    title={item.name}
                    image={`${
                      process.env.REACT_APP_BACKEND
                    }/${item.Images[0].path.replace(/tmp/, "")}`}
                  />
                );
              })}
          </>
        ) : (
          <Loading label="Carregando seus cursos" />
        )}
      </div>
      {!showAll && courses.length > coursesCount && (
        <div className={styles.showmore}>
          <span onClick={() => setShowAll(!showAll)}>Ver mais</span>
        </div>
      )}
    </div>
  );
};

export default TeacherCourses;
