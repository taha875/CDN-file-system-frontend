import React, { useEffect, useState, useRef } from "react";
const axios = require("axios");
import { urlPath } from "../../config";
function index() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const value = localStorage.getItem("user");
    const user = !!value ? JSON.parse(value) : undefined;
    setUser(user);
  }, []);

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmission = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("document", selectedFile);
    console.log(selectedFile);
    axios
      .post(urlPath + "/document", formData, {
        "Content-Type": "application/json",
        Authorization: "JWT fefege...",
      })
      .then(function (response) {
        console.log(response, "file uploaded sucessfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex items-center justify-center">{user.email}</div>
      <div>
        <input type="file" name="file" onChange={changeHandler} />

        <p>Select a file to show details</p>

        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default index;
