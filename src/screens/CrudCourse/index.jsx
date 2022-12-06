import { useCookies } from "react-cookie";
import styles from "./styles.module.scss";
import UploadIcon from "../../assets/icons/upload.svg";
import { useState } from "react";
import classNames from "classnames";
import Course from "../../services/Course";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const CrudCourse = ({ title }) => {
  const [cookies] = useCookies();
  const [file, setFile] = useState(null);
  const [course, setCourse] = useState({});
  const courseId = useParams().id;
  const navigate = useNavigate();

  async function getCourse(courseId) {
    const res = await Course.get(courseId);
    setCourse(res);
  }

  useEffect(() => {
    document.title = title;
    courseId && getCourse(courseId);
  }, [courseId]);

  function handleChangeFileInput(ev) {
    const reader = new FileReader();
    reader.addEventListener("load", (ev) => {
      setFile(ev.target.result);
    });
    reader.readAsDataURL(ev.target.files[0]);
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await Course.create(
        cookies.__token,
        new FormData(ev.target)
      );
      navigate(`${response.data.id}/secoes`, {
        state: {
          course: response.data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>{courseId ? "Editar " : "Adicionar "}Curso</h1>
      <div className={styles["create-course-container"]}>
        <div className={styles["side"]}>
          <label>Miniatura</label>
          <label
            className={styles["thumbnail-label"]}
            htmlFor="input-thumbnail"
          >
            <img
              src={classNames({
                [UploadIcon]: !file,
                [file]: file,
              })}
              className={classNames({
                [styles["setted-thumbnail"]]: file,
              })}
            />
            {!file ? (
              <span>Clique aqui para definir uma miniatura</span>
            ) : (
              <div className={styles["update-thumbnail"]}>Alterar imagem</div>
            )}
          </label>
          <p>As miniaturas devem seguir um formato de imagem (JPG ou PNG)</p>
        </div>
        <div className={styles["side"]}>
          <form onSubmit={handleSubmit}>
            <div className={styles["input-container"]}>
              <label>Nome do curso</label>
              <input
                type="text"
                name="name"
                value={course.name}
                onChange={(event) => {
                  setCourse({
                    ...course,
                    name: event.target.value,
                  });
                }}
              />
              <label>Descrição do Curso</label>
              <textarea
                name="description"
                type="text"
                value={course.description}
                onChange={(event) => {
                  setCourse({
                    ...course,
                    description: event.target.value,
                  });
                }}
              />
              <input
                name="course-picture"
                onChange={handleChangeFileInput}
                type="file"
                accept="image/*"
                id="input-thumbnail"
              />
            </div>
            <div className={styles["nav-container"]}>
              <button>Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CrudCourse;
