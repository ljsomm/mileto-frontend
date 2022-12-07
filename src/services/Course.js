import api from "./api";

const Course = {
  getAll: async () => {
    try {
      const response = await api.get("/courses");
      return response;
    } catch (err) {
      throw err.response.err;
    }
  },
  get: async (id) => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BACKEND}/course/${id}`
      );
      return response.data;
    } catch (e) {
      throw e.response.err;
    }
  },
  subscribe: async (id, token) => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_BACKEND}/course/${id}`,
        token,
        { headers: { token } }
      );
      return response.data;
    } catch (e) {
      throw e.response.err;
    }
  },
  getCurrentVideo: async (token, id) => {
    try {
      const response = await api.get(
        `${process.env.REACT_APP_BACKEND}/course/${id}/current`,
        { headers: { token } }
      );
      return response.data;
    } catch (e) {
      throw e.response;
    }
  },
  create: async (token, formData) => {
    const response = await api.post("/course", formData, {
      headers: {
        token,
      },
    });
    return response;
  },
  getTeacherCourses: async (token) => {
    const response = await api.get("/teacher/courses", { headers: { token } });
    return response.data;
  },
  getSections: async (id, token) => {
    const response = await api.get(`/course/${id}/sections`, {
      headers: {
        token,
      },
    });
    return response;
  },

  /**
   * Salva secao no banco de dados
   * @param {string} token
   * @param {string | id} courseId
   * @param {Section} section
   */
  storeSection: async (token, courseId, section) => {
    const response = await api.post(`/course/${courseId}/section`, section, {
      headers: {
        token,
      },
    });
    return response;
  },

  /**
   * Metodo de edicao de secao de um determinado curso
   *
   * @param {*} token
   * @param {*} section
   */
  editSection: async (token, sectionId, section) => {
    const response = await api.put(`/section/${sectionId}`, section, {
      headers: {
        token,
      },
    });
    return response;
  },
  delete: async (token, id) => {
    const response = await api.delete(`${process.env.REACT_APP_BACKEND}/course/${id}`, { headers: { token } });
    return response;
  }
};

export default Course;
