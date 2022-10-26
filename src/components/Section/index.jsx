import { useEffect } from "react";
import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import Course from "../../services/Course";
import styles from "./styles.module.scss";

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

const Section = ({ item, initialEditingState = false }) => {
  const [editingText, setEditingText] = useState(initialEditingState);
  const [section, setSection] = useState(item);
  const { id } = useParams();
  const [{ __token }] = useCookies();

  async function editSection(ev) {
    console.log("Editando");
  }

  async function saveSection(ev) {
    const response = await Course.storeSection(__token, id, section);
    handleEditingText();
  }

  function handlerSectionInput(ev) {
    if (ev.code === "Enter") {
      section.id ? editSection(ev) : saveSection(ev);
    }
  }

  function handleEditingText() {
    setEditingText(!editingText);
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
            {section.videos &&
              section.videos.map((video, key) => {
                return <li key={key}> {video.title} </li>;
              })}
          </ul>
        </details>
      )}
    </>
  );
};

export default Section;
