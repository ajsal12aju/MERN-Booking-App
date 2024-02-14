import React, { useState } from "react";
import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProfileImage from "../../images/pro-removebg-preview (1).png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { roomInputs } from "../../formsorce";

function NewRoom() {
  const [file, setFile] = useState("")
  console.log(file)
  
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={ file ? URL.createObjectURL(file) : ProfileImage} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  {" "}
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
              </div> 

              {roomInputs.map((input) => 
              (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input id={input.type} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
        data table
      </div>
    </div>
  );
}

export default NewRoom;
