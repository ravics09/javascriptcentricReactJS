import axios from "axios";

const API_URL = "http://localhost:9090/user";

const signIn = (formValues) => {
  const { email, password } = formValues;
  const url = `${API_URL}/signin`;
  const payload = {
    email,
    password,
  };

  return axios.post(url, payload).then(
    (response) => {
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return {
        status: "success",
        message: "You are redirecting to home page"
      };
    },
    (error) => {
      if (error.response) {
        return { status: "failed", message: error.response.data };
      } else {
        return { status: "failed", message: "Server Not Responding" };
      }
    }
  );
};

const signUp = (formValues) => {
  const { fullName, email, password } = formValues;
  
  const url = `${API_URL}/signup`;
  const payload = {
    fullName,
    email,
    password,
  };

  return axios.post(url, payload).then(
    (response) => {
      return {
        status: "success",
        message: "You have successfully signed up! Now you should be able to sign in."
      };
    },
    (error) => {
        if (error.response) {
          return { status: "failed", message: error.response.data };
        } else {
          return { status: "failed", message: "Server Not Responding" };
        }
      }
  );
};

const signOut = () => {
  localStorage.removeItem("user");
  return true;
};

const authService = {
  signUp,
  signIn,
  signOut,
};

export default authService;
