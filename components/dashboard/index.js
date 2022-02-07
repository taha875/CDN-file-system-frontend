import React, { useEffect, useState, useRef } from "react";
const axios = require("axios");
import { urlPath } from "../../config";
import Upload from "./upload";
import Spinner from "../reusableUI/spinner";
function index() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const value = localStorage.getItem("user");
    const user = !!value ? JSON.parse(value) : undefined;
    setUser(user);
  }, []);

  const [selectedFile, setSelectedFile] = useState();
  const [uploaded, setUploaded] = useState(false);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmission = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("document", selectedFile);

    axios
      .post(urlPath + "/document", formData, {
        "Content-Type": "application/json",
        Authorization: "JWT fefege...",
      })
      .then(function (response) {
        setUploaded(true);
        setLoading(true);
        setInterval(() => {
          setLoading(false);
          setMessage(true);
        }, [2000]);
      })
      .catch(function (error) {
        console.log(error, "error");
      });
  };

  const getSubmission = () => {
    axios
      .get("https://whispering-brook-16778.herokuapp.com/documents", {
        "Content-Type": "application/json",
        Authorization: "JWT fefege...",
      })
      .then(function (res) {
        const dataDetails = res.data.data;
        setDetails(dataDetails);
      })
      .catch(function (res) {
        console.log(res, "error");
      });
  };

  return (
    <div className="py-6">
      <div className="text-2xl flex items-center justify-center">
        Welcome {user.email}
      </div>
      <div className="mt-12">
        <div className="flex flex-col items-center justify-center gap-x-5">
          <label className="px-6 py-2 bg-indigo-600 text-white focus:outline-none rounded-md cursor-pointer">
            <input type="file" onChange={changeHandler} />
            {loading ? <Spinner /> : "Upload File"}
          </label>

          <div className="mt-3 flex flex-col items-center justify-center">
            <button
              className="px-6 py-2 bg-indigo-600 text-white focus:outline-none rounded-md"
              onClick={handleSubmission}
            >
              Submit
            </button>
            {message && (
              <p className="text-gray-600 text-base my-2">
                File Uploaded Please Check
              </p>
            )}
          </div>
        </div>
        {uploaded && (
          <div className="flex flex-col items-center justify-center mt-3">
            <button
              className="px-6 py-2 bg-indigo-600 text-white focus:outline-none rounded-md"
              onClick={getSubmission}
            >
              Show Data
            </button>
            {details.map((data) => {
              return <Upload name={data.filename} dc={data.createdAt} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default index;
