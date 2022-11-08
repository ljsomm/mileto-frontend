import classNames from "classnames";
import { useState } from "react";
import { useContext, useEffect } from "react";
import NotificationContext from "../../contexts/NotificationContext";
import styles from "./styles.module.scss";

const Notification = () => {
  const { state } = useContext(NotificationContext);
  const [notification, setNotification] = useState({
    closed: true,
    none: true,
  });

  useEffect(() => {
    if (state.title) {
      setNotification({
        closed: false,
        none: false,
      });
      setTimeout(() => {
        setNotification({
          closed: true,
          ...state,
        });
        setTimeout(() => {
          setNotification({
            ...state,
            none: true,
          });
        }, 500);
      }, 4000);
    }
  }, [state]);

  return (
    <div
      className={classNames({
        [styles["notification__none"]]: notification.none,
        [styles["notification__closed"]]: notification.closed,
        [styles["notification"]]: true,
      })}
    >
      <span>{state.title}</span>
      {state.closeButton && (
        <span
          onClick={() => {
            setNotification({
              closed: true,
            });
          }}
        >
          x
        </span>
      )}
    </div>
  );
};

export default Notification;
