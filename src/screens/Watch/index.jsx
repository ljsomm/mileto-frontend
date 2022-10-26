import { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import Video from "../../services/Video";
import styles from "./styles.module.css";
import classNames from "classnames";
import Loading from "../../components/Loading";

const Watch = () => {
  const { id } = useParams();
  const [cookies] = useCookies();
  const [section, setSection] = useState([]);
  const [video, setVideo] = useState({ path: "", watchedTime: 0 });
  const [active, setActive] = useState(-1);
  const videoRef = useRef();

  async function getCourseVideos(id) {
    const data = await Video.get(id, cookies.__token);
    setSection(data);
  }

  async function getLastVideoWatched(id) {
    try {
      const data = await Video.getLastWatched(id, cookies.__token);
      setActive(data.id);
      setVideo({
        path: data.path,
        watchedTime: data.Users[0].UserVideo.watchedTime,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function setLastVideoWatched(id, time) {
    await Video.setLastWatched(id, time, cookies.__token);
  }

  async function updateVideo(id, path) {
    const data = await Video.updateVideo(id, cookies.__token);
    if (data) {
      setVideo({ ...video, path: path, watchedTime: data.watchedTime });
    } else {
      setVideo({ ...video, path: path, watchedTime: 0 });
    }
  }

  async function setWatchedTime(id, watchedTime) {
    await Video.setMinute(id, watchedTime, cookies.__token);
  }

  useEffect(() => {
    getCourseVideos(id, cookies.__token);
  }, [cookies.__token]);

  useEffect(() => {
    section.length > 0 && getLastVideoWatched(id);
  }, [section]);

  useEffect(() => {
    if (video.path !== "") {
      videoRef.current.load();
      videoRef.current.currentTime = parseFloat(video.watchedTime);
    }
  }, [video.path]);

  return (
    <div className={styles.grid}>
      <h2>{section.length > 0 ? section[0].Courses.name : "Carregando..."}</h2>
      <div className={styles.sections}>
        {section.length > 0 ? (
          section.map((item, key) => (
            <details key={key}>
              <summary>
                {key + 1}. {item.name}
              </summary>
              <ol>
                {item.Videos.map((item, key) => {
                  return (
                    <li
                      key={item.id}
                      className={classNames({
                        [styles["section-video"]]: true,
                        [styles["section-video__active"]]: item.id === active,
                      })}
                      onClick={() => {
                        setLastVideoWatched(
                          item.id,
                          videoRef.current.currentTime
                        );
                        updateVideo(item.id, item.path);
                        setActive(item.id);
                      }}
                    >
                      {key + 1}. {item.title}
                    </li>
                  );
                })}
              </ol>
            </details>
          ))
        ) : (
          <Loading label="Carregando Seções" />
        )}
      </div>
      <div className={styles["video-container"]}>
        <video
          onSeeked={(event) => {
            setWatchedTime(active, event.target.currentTime);
          }}
          ref={videoRef}
          className={styles.video}
          controls
        >
          {video.path !== "" && (
            <source
              src={`${process.env.REACT_APP_BACKEND}${
                video.path.split("tmp")[1]
              }`}
              type="video/mp4"
            />
          )}
        </video>
      </div>
      <div className={styles.feedback}>
        <div className={styles["course-menu"]}>
          <button>Avaliar Curso</button>
        </div>
      </div>
    </div>
  );
};

export default Watch;
