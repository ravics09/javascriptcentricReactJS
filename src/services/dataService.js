import axios from "axios";
import AuthHeader from "./authHeader";

const API_URL = "http://localhost:9090/user";

const editUserProfile = (id, formValues) => {
  const {
    fullName,
    email,
    userName,
    mobile,
    location,
    bio,
    work,
    education,
    skills,
  } = formValues;
  
  const url = `${API_URL}/editprofile/${id}`;
  const payload = {
    fullName,
    email,
    userName,
    mobile,
    location,
    bio,
    work,
    education,
    skills,
  };

  return axios.put(url, payload, { headers: AuthHeader() }).then(
    (response) => {
      return {
        status: "success",
        message: "Your Profile Updated Successfully",
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

const getUserProfile = (id) => {
  const url = `${API_URL}/profile/${id}`;
  console.log("id for user==",id);

  return axios.get(url, { headers: AuthHeader() }).then(
    (response) => {
      console.log("response.data.user user==",response.data.user);
      return {
        status: "success",
        user: response.data.user,
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

const dataService = {
  getUserProfile,
  editUserProfile,
};

export default dataService;
