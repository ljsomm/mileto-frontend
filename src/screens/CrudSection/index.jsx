import { useState } from "react";
import Section from "../../components/Section";
import Course from "../../services/Course";
import { useParams, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useEffect } from "react";

const CrudSection = () => {
  const [sections, setSections] = useState([]);
  const [notification, setNotification] = useState({
    fadeOut: false,
    none: false,
  });
  const { id } = useParams();
  const [{ __token }] = useCookies();
  const { course } = useLocation().state;

  function createSection() {
    setSections([...sections, { name: "" }]);
  }

  async function getSections() {
    try {
      const response = await Course.getSections(id, __token);
      setSections(response.data);
    } catch (err) {
      console.error(err.response.data);
    }
  }

  useEffect(() => {
    getSections();
    setTimeout(() => {
      setNotification({
        fadeOut: true,
      });
    }, 4000);
  }, []);

  useEffect(() => {
    notification.fadeOut &&
      setTimeout(() => {
        setNotification({
          none: true,
          ...notification,
        });
      }, 1000);
  }, [notification]);

  return (
    <>
      <h1>{"Adicionar "}Seções</h1>
      <div className={styles["section-container"]}>
        <div
          className={classNames({
            [styles["created-course"]]: true,
            [styles["created-course__fade-out"]]: notification.fadeOut,
            [styles["created-course__none"]]: notification.none,
          })}
        >
          <span>Curso "{course.name}" criado com sucesso</span>
        </div>
        {sections.map((item, key) => {
          return (
            <Section key={key} item={item} initialEditingState={!item.id} />
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
    </>
  );
};

export default CrudSection;
