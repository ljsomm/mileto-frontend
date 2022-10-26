import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useSearchParams } from "react-router-dom";
import classNames from "classnames";
import Loading from "../../components/Loading";
import User from "../../services/User";
import styles from "./styles.module.css";
import Video from "../../services/Video";
import Course from "../../services/Course";

const MyCourses = ({ title }) => {
  const [courses, setCourses] = useState(0);
  const [videos, setWatchedVideos] = useState([]);
  const [cookies] = useCookies();
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  async function myCourses() {
    const data = await User.showCourses(cookies.__token);
    setCourses(data.Courses);
    setWatchedVideos(data.Videos);
  }

  function paginationNumber() {
    let number = parseInt(courses.length / 10);
    if (courses.length % 10 !== 0) {
      number++;
    }
    let pageNumbers = [];
    for (let i = 0; i < number; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={classNames({
            [styles["navigation-number__active"]]: page === i + 1,
            [styles["navigation-number"]]: true,
          })}
          onClick={() => navigate(`/meus-cursos?page=${i + 1}`)}
        >
          {(i + 1).toString()}
        </div>
      );
    }
    return pageNumbers;
  }

  useEffect(() => {
    document.title = `Mileto - ${title}`;
    myCourses();
  }, [title]);

  const page = parseInt(params.get("page"));
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Meus cursos</h2>
        {courses !== 0 ? (
          courses.length > 0 ? (
            <div className={styles["grid-container"]}>
              {courses.slice((page - 1) * 10, page * 10).map((item, key) => (
                <div
                  key={key}
                  className={styles.card}
                  onClick={() => navigate(`/watch/${item.id}`)}
                >
                  <img
                    className={styles["card-icon"]}
                    src={`http://localhost:3030${
                      item.Images[0].path.split("tmp")[1]
                    }`}
                    alt="meus cursos"
                  />
                  <div className={styles["card-details"]}>
                    <h3>{item.name}</h3>
                    <p>
                      {videos.length > 0 &&
                      videos.find(
                        (videoItem) => videoItem.Sections.courseId === item.id
                      ) ? (
                        <>
                          <b className={styles.highlight}> Continuar aula: </b>{" "}
                          {
                            videos.find(
                              (videoItem) =>
                                videoItem.Sections.courseId === item.id
                            ).title
                          }
                        </>
                      ) : (
                        <b className={styles.highlight}>Novo Curso</b>
                      )}
                    </p>
                  </div>
                </div>
              ))}
              <div className={styles.pagination}>
                {courses.length > 10 && paginationNumber()}
              </div>
            </div>
          ) : (
            <span className={styles.warning}>
              Você ainda não possui cursos :(
            </span>
          )
        ) : (
          <Loading label="Carregando cursos" />
        )}
      </div>
    </div>
  );
};

export default MyCourses;
