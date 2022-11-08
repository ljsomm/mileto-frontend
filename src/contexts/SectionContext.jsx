import { createContext, useReducer } from "react";

const SectionContext = createContext({});

export const SectionProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    if(action.type === "SECTION_REPLACE"){
      let result = [...state];
      result[action.payload.sectionkey] = { ...result[action.payload.sectionkey], Videos: [...action.payload.Videos] };
      return result;
    }
    else if(action.type === "ADD_SECTION"){
      let result = [...state];
      result[action.payload.sectionkey] = { ...action.payload, Videos: [...action.payload.Videos] };
      return result;
    }
    else if(action.type === "SELECT_VIDEO"){
      let sections = state.map(section => {
        return {
          ...section,
          Videos: section.Videos.map((video, key)=> {
            return {...video, active: false, key}
          })
        };
      })
      let filtered = sections[action.payload.sectionkey];
      filtered.Videos[action.payload.key].active = true;
      sections[sections.indexOf(filtered)] = filtered;
      return sections;
    }
    else if(action.type === "REPLACE_VIDEO"){
      let result = [...state];
      let index = result.indexOf(result.find(section => (section.id === action.payload.sectionId)));
      result[index].Videos[action.payload.key] = action.payload;
      return result;
    }
    return [ ...state, ...action.payload ];
  }, []);
  return (
    <SectionContext.Provider value={{ state, dispatch }}>
      { children }
    </SectionContext.Provider>
  );
};

export default SectionContext;
