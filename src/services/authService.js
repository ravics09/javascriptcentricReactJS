import axios from "axios";

const API_URL = "http://localhost:9090/auth";

const signIn = async (payload) => {
  return axios
    .post(`${API_URL}/signin`, payload)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("User", JSON.stringify(response.data.user));
        return {
          status: "success",
          message: "You are redirecting to home page",
          user: response.data.user,
        };
      }
    })
    .catch((error) => {
      return {
        status: "failed",
        message: error.response.data.message,
      };
    });
};

const googleSignIn = async (payload) => {
  return axios
    .post(`${API_URL}/googlesignin`, payload)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("User", JSON.stringify(response.data.user));
        return {
          status: "success",
          message: "You are redirecting to home page",
          user: response.data.user,
        };
      }
    })
    .catch((error) => {
      return {
        status: "failed",
        message: error.response.data.message,
      };
    });
};

const signUp = async (payload) => {
  return axios
    .post(`${API_URL}/signup`, payload)
    .then((response) => {
      if (response.status === 200) {
        return {
          status: "success",
          message: response.data.message,
        };
      }
    })
    .catch((error) => {
      return {
        status: "failed",
        message: error.response.data.message,
      };
    });
};

const signOut = async () => {
  localStorage.clear();
  return {
    status: "success",
  };
};

const authService = {
  signUp,
  signIn,
  googleSignIn,
  signOut,
};

export default authService;
