import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://localhost:9090/user";

const Profile = () => {
  const [userId, setUserId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [work, setWork] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    //userId will passed as props and than will use it to fetch user details. 
    const url = `${API_URL}/profile/${userId}`;

    axios.get(url).then(
      (response) => {
        console.log("Profile Data: ", response.data);
        // set all user information on loading this page.
        
        // setFullName(response.data.user.fullName);
        // setMobile(response.data.user.mobile);
        // setUsername(response.data.user.username);
      },
      (error) => {
        console.log("Error while getting profile data: ", error);
      }
    );
  }, []);

  return <div>Hello World this is Profile page.</div>;
};
export default Profile;
