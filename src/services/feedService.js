import axios from "axios";
import AuthHeader from "./authHeader";

const API_URL = "http://localhost:9090/feed";

const getAllPosts = () => {
  const url = `${API_URL}/getPosts`;
  return axios.get(url).then(
    (response) => {
      return {
        status: "success",
        posts: response.data.posts,
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

const getPost = (id) => {
  const url = `${API_URL}/getpost/${id}`;
  const payload = {
    id,
  };
  return axios.get(url, payload).then(
    (response) => {
      if (response.status === 200) {
        return { status: "success", post: response.data.post };
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

const addComment = (postId, userId, comment) => {
  const url = `${API_URL}/createnewcomment/${postId}`;
  const payload = {
    comment,
    userId,
  };

  return axios.put(url, payload, { headers: AuthHeader() }).then(
    (response) => {
      console.log("after comment ==",response.data);
      return {
        status: "success",
        message: "Your Comment Added Successfully.",
        comments: response.data.comments
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
  return axios.get(url).then(
    (response) => {
      console.log("user posts data =",response.data.posts.Feed[0]);
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
  )
}

const feedService = { getAllPosts, getPost, addComment, getUserPosts };

export default feedService;
