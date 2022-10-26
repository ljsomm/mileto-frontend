import { createContext, useReducer } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    if (action.type === "GET_USER") {
      return action.payload;
    } else if (action.type === "REMOVE_USER") return {};
  }, {});
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
