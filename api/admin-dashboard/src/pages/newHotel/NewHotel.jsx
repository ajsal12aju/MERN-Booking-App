import React, { useState } from "react";
import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProfileImage from "../../images/pro-removebg-preview (1).png";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { hotelInputs } from "../../formsorce";
import useFetch from "../../hooks/useFetch";

function NewHotel({ inputs, title }) {
  const [files, setFiles] = useState("")
  const { data, loading, error, refetch } = useFetch('/rooms'); 
console.log(data, 'datssxxas')
  const [info , setInfo] = useState({})

  const handleChange = (e) =>{
    setInfo(prev => ({...prev, [e.target.id]: e.target.value}))
  }
  const handleSelect = (e) =>{

  }
  
  console.log(info, 'data is came here')
  console.log(files)
  
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={ files ? URL.createObjectURL(files[0]) : ProfileImage} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  {" "}
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input multiple type="file" id="file" onChange={(e) => setFiles(e.target.files)} style={{ display: "none" }} />
              </div> 

              {hotelInputs.map((input) => 
              (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input onChange={handleChange} id={input.id} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                 <label>Featured</label>
                 <select name="" id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                 </select>
              </div>
              <div className="selectRooms">
                 <label>Rooms</label>
                 <select multiple
                  name="" id="rooms" onChange={handleSelect}>
                    {
                      loading ? "loading" : data && data.map(room => (
                        <option value={room._id}>
                          {room.title}
                        </option>
                      ))
                    }
                 </select>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
        data table
      </div>
    </div>
  );
}

export default NewHotel;
