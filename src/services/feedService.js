import axios from "axios";
import AuthHeader from "./authHeader";

const API_URL = "http://localhost:9090/feed";

const createPost = async (payload) => {
  const url = `${API_URL}/createpost`;
  return axios
    .post(url, payload)
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

const getAllPosts = async () => {
  const url = `${API_URL}/getPosts`;
  return axios
    .get(url)
    .then((response) => {
      return {
        status: "success",
        posts: response.data.posts,
      };
    })
    .catch((error) => {
      return {
        status: "failed",
        message: error.response.data.message,
      };
    });
};

const getPost = async (id) => {
  const url = `${API_URL}/getpost/${id}`;
  const payload = {
    id,
  };
  return axios
    .get(url, payload)
    .then((response) => {
      if (response.status === 200) {
        return { status: "success", post: response.data.post };
      }
    })
    .catch((error) => {
      return {
        status: "failed",
        message: error.response.data.message,
      };
    });
};

const addComment = (postId, userId, comment) => {
  const url = `${API_URL}/createnewcomment/${postId}`;
  const payload = {
    comment,
    userId,
  };

  return axios.put(url, payload).then(
    (response) => {
      console.log("after comment ==", response.data);
      return {
        status: "success",
        message: "Your Comment Added Successfully.",
        comments: response.data.comments,
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

const getUserPosts = (userId) => {
  const url = `${API_URL}/getuserposts/${userId}`;
  return axios.get(url, { headers: AuthHeader() }).then(
    (response) => {
      if (response.status === 200) {
        return { status: "success", posts: response.data.posts.Feed };
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

const editPost = async (id, payload) => {
  const url = `${API_URL}/editpost/${id}`;
  return axios
    .put(url, payload)
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

const deletePost = async (id) => {
  const url = `${API_URL}/deletepost/${id}`;
  return axios
    .delete(url, { headers: AuthHeader() })
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

const feedService = {
  createPost,
  getAllPosts,
  getPost,
  addComment,
  getUserPosts,
  editPost,
  deletePost,
};

export default feedService;
