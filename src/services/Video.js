import api from "./api";

const Video = {
  get: async (courseId, token) => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BACKEND}/course/${courseId}/sections`,
        {
          headers: { token },
        }
      );
      return response.data;
    } catch (e) {
      throw new Error("ERRO");
    }
  },
  getLastWatched: async (courseId, token) => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BACKEND}/course/${courseId}/video`,
        {
          headers: { token },
        }
      );
      return response.data;
    } catch (e) {
      throw new Error("ERRO");
    }
  },
  setLastWatched: async (videoId, watchedTime = 0, token) => {
    const response = await api.post(
      `${process.env.REACT_APP_BACKEND}/video/${videoId}/user`,
      { watchedTime },
      {
        headers: { token },
      }
    );
    return response.data;
  },
  updateVideo: async (id, token) => {
    const response = await api.get(
      `${process.env.REACT_APP_BACKEND}/video/${id}/user`,
      { headers: { token } }
    );
    return response.data;
  },
  setMinute: async (id, watchedTime, token) => {
    const response = await api.put(
      `${process.env.REACT_APP_BACKEND}/video/${id}/user`,
      { watchedTime },
      { headers: { token } }
    );
    return response.data;
  },
  store: async (token, sectionId, formData) => {
    const response = await api.post(`${process.env.REACT_APP_BACKEND}/section/${sectionId}/video`, formData, { headers: { token }, onUploadProgress: (ev) => {console.log(ev);} })
    return response;
  }
};

export default Video;
