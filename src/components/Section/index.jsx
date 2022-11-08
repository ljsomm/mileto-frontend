import { useContext } from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import SectionContext from "../../contexts/SectionContext";
import Course from "../../services/Course";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { VideoUtil } from "../../utils/VideoUtil";

const SectionInput = ({ section, setSection, handlerSectionInput }) => {
  const inputRef = useRef();

  useEffect(() => inputRef.current.focus(), []);

  return (
    <div className={styles["section-container"]}>
      <summary className={styles.section}>
        <input
          placeholder="Insira aqui o nome da Seção..."
          ref={inputRef}
          value={section.name}
          onChange={(e) => setSection({ ...section, name: e.target.value })}
          onKeyDown={handlerSectionInput}
        />
      </summary>
    </div>
  );
};

const Section = ({ item, initialEditingState = false, sectionkey, blockChangeVideo = false }) => {
  const [editingText, setEditingText] = useState(initialEditingState);
  const [section, setSection] = useState(item);
  const { id } = useParams();
  const [{ __token }] = useCookies();
  const { dispatch } = useContext(SectionContext);

  useEffect(()=>{
    setSection(item);
  }, [item]);

  async function editSection() {
    const response = await Course.editSection(__token, section.id, section);
    setSection(response.data);
    handleEditingText();
  }

  async function saveSection() {
    const response = await Course.storeSection(__token, id, section);
    dispatch({
      type: "ADD_SECTION",
      payload: { ...response.data, sectionkey }
    });
    handleEditingText();
  }

  function handlerSectionInput(ev) {
    if (ev.code === "Enter") {
      section.id ? editSection() : saveSection();
    }
  }

  function handleEditingText() {
    setEditingText(!editingText);
  }

  function addVideo() {
    dispatch({
      type: "SECTION_REPLACE",
      payload: { ...section, Videos: [...section.Videos, {title: "", sectionId: section.id  }], sectionkey }
    });
  }

  function selectVideo(video, key) {
    dispatch({ 
      type: "SELECT_VIDEO",
      payload:  { ...video, key, sectionkey } 
    });
  }

  return (
    <>
      {editingText ? (
        <SectionInput
          section={section}
          setSection={setSection}
          handlerSectionInput={handlerSectionInput}
        />
      ) : (
        <details className={styles["section-container"]}>
          <summary onDoubleClick={handleEditingText} className={styles.section}>
            {section.name}
          </summary>
          <ul>
            {section.Videos &&
              section.Videos.map((video, key) => {
                return (
                  <li
                    key={key}
                    onClick={() => { !blockChangeVideo && selectVideo(video, key) }}
                    className={classNames({
                      [styles.video]: true,
                      [styles.video__not_selected]:
                        !video.active,
                      [styles.video__selected]:
                        video.active,
                    })}
                  >
                    {video.title ? video.title : "Aula sem título"}
                  </li>
                );
              })}
            <li onClick={() =>  addVideo()}>+ Adicionar aula</li>
          </ul>
        </details>
      )}
    </>
  );
};

export default Section;
