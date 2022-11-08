import { useContext, useState } from "react";
import Section from "../../components/Section";
import Course from "../../services/Course";
import { useParams, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import NotificationContext from "../../contexts/NotificationContext";
import Video from "../../components/Video";
import SectionContext, { SectionProvider } from "../../contexts/SectionContext";
import { VideoUtil } from "../../utils/VideoUtil";

const CrudSectionVideo = () => {
  const [sections, setSections] = useState([]);
  const { id } = useParams();
  const [{ __token }] = useCookies();
  const { course } = useLocation().state;
  const { dispatch } = useContext(NotificationContext);
  const SectionManager = useContext(SectionContext);
  const [blockChangeVideo, setBlockChangeVideo] = useState(false);

  function createSection() {
    SectionManager.dispatch({ payload: [ { name: "", Videos: [] }] });
  }

  useEffect(() => { 
    setSections(SectionManager.state);
    setBlockChangeVideo(VideoUtil.needsSave(SectionManager.state) !== false);
  }, [SectionManager.state]);

  async function getSections() {
    try {
      const response = await Course.getSections(id, __token);
      SectionManager.dispatch({ payload: response.data});
    } catch (err) {
      console.error(err.response.data);
    }
  }

  useEffect(() => {
    getSections();
    dispatch({
      payload: {
        title: `Curso "${course.name}" criado com sucesso`,
        closeButton: true,
      },
    });
  }, []);

  return (
    <>
      <h1>{"Adicionar "}Seções</h1>
      <div className={styles["section-container"]}>
        <div className={styles["course-grid"]}>
          <div className={styles["class-controls"]}>
            <Video />
          </div>
          <div className={styles["section-controls"]}>
            {sections.length !== 0 && sections.map((item, key) => {
              return (
                <Section blockChangeVideo={blockChangeVideo} sectionkey={key} key={key} item={item} initialEditingState={!item.id} />
              );
            })}
            <div className={styles["btn-add-section-container"]}>
              <div className={styles["centralizer"]}>
                <button
                  className={styles["btn-add-section"]}
                  onClick={createSection}
                >
                  +
                </button>
                <span onClick={createSection}>Adicionar Seção</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrudSectionVideo;
