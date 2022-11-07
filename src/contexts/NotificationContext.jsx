import { useReducer } from "react";
import { createContext } from "react";

const NotificationContext = createContext({});

export const NotificationProvider = ({ children }) => {
  const reducer = (state, action) => {

      return {
        ...action.payload,
      };

  };

  const [state, dispatch] = useReducer(reducer, {
    title: "",
    closeButton: true,
  });

  return (
    <NotificationContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
