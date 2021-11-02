import axios from "axios";
import AuthHeader from "./authHeader";
import FeedService from "./feedService";

const API_URL = "http://localhost:9090/user";
const OTHER_API_URL = "http://localhost:9090/other";

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

  return axios.get(url, { headers: AuthHeader() }).then(
    (response) => {
      console.log("response.data.user user==", response.data.user);
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

const contactUsMessage = (formValues) => {
  const { fullName, email, subject, message } = formValues;
  const url = `${OTHER_API_URL}/sendmessage`;
  const payload = {
    fullName,
    email,
    subject,
    message,
  };

  return axios.post(url, payload).then(
    (response) => {
      if (response.status === 200) {
        return { status: "success", message: "Your message sent successfully" };
      }
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

const uploadProfilePhoto = (id, formData, options) => {
  const url = `${API_URL}/uploadprofileimage/${id}`;
  const payload = formData;

  return axios.put(url, payload, { headers: AuthHeader() }, options).then(
    (response) => {
      if (response.status === 200) {
        return {
          image: response.data.results.profilePhoto,
          status: "success",
          message: "Your photo uploaded successfully",
        };
      }
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

const addToReadingList = (id, postId) => {
  const url = `${API_URL}/addtoreadinglist/${id}`;
  const payload = {
    postId,
  };

  return axios.put(url, payload, { headers: AuthHeader() }).then(
    (response) => {
      if (response.status === 200) {
        return {
          status: "success",
          message: "New Article Added To Reading List!",
        };
      }
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

const fetchReadingList = async (id) => {
  const url = `${API_URL}/fetchReadingList/${id}`;
  const readingListId = await axios.get(url, { headers: AuthHeader() });
  const idList = readingListId.data.readingList;

  let readingList = [];
  if (idList.length > 0) {
    for (let i = 0; i < idList.length; i++) {
      let result = await FeedService.getPost(idList[i].postId);
      if (result.post !== null) readingList.push(result.post);
    }
    return {
      status: "success",
      readingList: readingList,
    };
  } else {
    return {
      status: "failed",
      message: "There are no item in the reading list",
    };
  }
};

const removeFromReadingList = async(id, postId) => {
  const url = `${API_URL}/removefromreadinglist/${id}`;
  const payload = {
    postId,
  };

  return axios.put(url, payload, { headers: AuthHeader() }).then(
    (response) => {
      if (response.status === 200) {
        return {
          status: "success",
          message: "Selected Article Removed From Reading List!",
        };
      }
    },
    (error) => {
      if (error.response) {
        return { status: "failed", message: error.response.data };
      } else {
        return { status: "failed", message: "Server Not Responding" };
      }
    }
  );
}

const dataService = {
  getUserProfile,
  editUserProfile,
  contactUsMessage,
  uploadProfilePhoto,
  addToReadingList,
  fetchReadingList,
  removeFromReadingList
};

export default dataService;
