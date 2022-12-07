import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import Pencil from "../../assets/icons/pencil.png";
import classNames from "classnames";
import Progress from "../Progress";
import VideoContext from "../../contexts/SectionContext";
import { VideoUtil } from "../../utils/VideoUtil";
import Service from "../../services/Video";
import { useCookies } from "react-cookie";
import NotificationContext from '../../contexts/NotificationContext';

const Video = () => {
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const [isTitleDisabled, setIsTitleDisabled] = useState(true);
  const [loadState, setLoadState] = useState({ loaded: 0, total: -1 });
  const Notification = useContext(NotificationContext);

  const { state, dispatch } = useContext(VideoContext);
  const [ video, setVideo ] = useState({});
  const [{__token}] = useCookies();
  const [uploadProgress, setUploadProgress] = useState({loaded: 0, total: 0});

  async function handleSubmit(ev) {
    ev.preventDefault();
    if(video.path){
      disableTitleInputState();
      setVideo({...video, toSave: false});
      console.log(await Service.store(__token, video.sectionId, new FormData(ev.target), video.title, setUploadProgress));
    }
  }

  function enableTitleInput() {
    setIsTitleDisabled(false);
  }

  function disableTitleInputState() {
    setIsTitleDisabled(true);
  }

  useEffect(() => {
    state.forEach((item) => {
      if(item.Videos && item.Videos.length){
        let selected = item.Videos.find(video => video.active)
        selected && setVideo(selected);
      }
    })
  }, [state]);

  useEffect(() => {
      !!uploadProgress.total && uploadProgress.total === uploadProgress.loaded && Notification.dispatch({
        payload: {
          title: "Aula cadastrada com sucesso",
          closeButton: true
        }
      });
  }, [uploadProgress]);

  useEffect(() => {
    !isTitleDisabled && titleRef.current.focus();
  }, [isTitleDisabled]);

  function handleVideoPreview(ev) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(ev.target.files[0]);
    fileReader.onloadstart = (data) =>
      setLoadState({ loaded: data.loaded, total: data.total });
    fileReader.onprogress = (data) =>
      setLoadState({ loaded: data.loaded, total: data.total });
    fileReader.onloadend = (data) => {
      setVideo({...video, path: data.target.result});
      videoRef.current.oncanplay = (data) => {
        setLoadState({
          loaded: 0,
          total: -1,
        });
      };
    };
  }

  useEffect(()=>{
    if(video.title){
      dispatch({
        type: "REPLACE_VIDEO",
        payload: video
      });
    }  
  }, [video.title, video.toSave]);


  function handleTitleInput(ev){
    setVideo({ ...video, title: ev.target.value, toSave: true });
  }

  return (
    <>
      {
      !!video.sectionId || !!video.sectionKey ? 
        <form className={styles["class-form"]} onSubmit={handleSubmit}>
          <div
            onDoubleClick={enableTitleInput}
            className={classNames({
              [styles["title-input-container"]]: true,
              [styles["title-input-container__not_editing"]]: isTitleDisabled,
              [styles["title-input-container__editing"]]: !isTitleDisabled,
            })}
          >
            <input
              name="title"
              placeholder={"Insira um título..."}
              className={classNames({
                [styles["editing"]]: !isTitleDisabled,
                [styles["not_editing"]]: isTitleDisabled,
              })}
              ref={titleRef}
              disabled={isTitleDisabled}
              value={video.title}
              onChange={handleTitleInput}
              onKeyDown={(ev) => {
                if(ev.key === "Enter"){
                  disableTitleInputState()
                }
              }}
            />
            <button type="button" onClick={enableTitleInput}>
              <img className={styles["button-icon"]} src={Pencil} alt="Lapis" />
            </button>
          </div>
          <video ref={videoRef} src={VideoUtil.pathFilter(video.path)} controls />
          {loadState.total !== -1 && (
            <Progress max={loadState.total} value={loadState.loaded} />
          )}
          <label className={styles.upload}>
            <span>{ classNames({ ["Upload"]: !video.path, ["Alterar vídeo"]: video.path }) } da aula</span>
            <input
              name="course-video"
              accept="video/*"
              type="file"
              id="video"
              onChange={handleVideoPreview}
              hidden
            />
          </label>
          { 
            video.toSave && 
            <div className={styles.save}>
              <div>
                <button>Salvar</button>
              </div>
            </div>
          }
          {
            uploadProgress.total !== uploadProgress.loaded && <Progress max={uploadProgress.total} value={uploadProgress.loaded}/>
          }
        </form> 
        : 
        <div className={styles.select}>
          <span>Selecione uma aula</span>
        </div>
        }
    </>
  );
};

export default Video;
