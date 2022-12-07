const CourseUtil = {
  thumbnailFilter: (src) => {
    return `${process.env.REACT_APP_BACKEND}/${src.replace(/(tmp\\|\.\/public\/)/, "")}`;
  }
}


export default CourseUtil;