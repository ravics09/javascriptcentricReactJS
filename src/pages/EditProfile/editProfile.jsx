import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./editProfile.css";

const API_URL = "http://localhost:9090/user";

const EditProfile = () => {
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
    
    //user information will be passed as props from profile page.

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${API_URL}/editprofile/${userId}`;
    const payload = {
      fullName,
      email,
      username,
      mobile,
      location,
      bio,
      work,
      education,
      skills,
    };

    axios.put(url, payload).then(
      (response) => {
        if (response.data.statusCode === 200) {
          alert(`Retrieve Message ${response.data.message}`);
        } else {
          alert(`Retrieve Message ${response.data.message}`);
        }
      },
      (error) => {
        alert(`Server not responding or check your internet connection`);
      }
    );
  };

  return <div>Hello World this is Edit Profile page.</div>;
};
export default EditProfile;
