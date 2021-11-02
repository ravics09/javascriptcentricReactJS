// If there is a logged in user with accessToken (JWT), this service will return HTTP Authorization header. Otherwise, return an empty object.
const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("token", user.accessToken);

  if (user && user.accessToken) {
    const header = { Authorization: "Bearer " + user.accessToken };
    return header;
  } else {
    return {};
  }
};

export default authHeader;
