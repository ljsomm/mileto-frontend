export const VideoUtil = {
  pathFilter: (path = "") => {
    return path.match(/tmp\\course-videos/) ? `${process.env.REACT_APP_BACKEND}/${path.replace(/tmp/, "")}` : path;
  },
  needsSave(sections) { 
    let r = sections.find(section => {
      return section.Videos.find(video => {
        return video.toSave === true;
      });
    }) ?? false;
    return r;
  }
};