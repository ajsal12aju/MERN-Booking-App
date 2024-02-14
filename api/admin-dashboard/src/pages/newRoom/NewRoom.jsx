import React, { useState } from "react";
import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProfileImage from "../../images/pro-removebg-preview (1).png";
import { roomInputs } from "../../formsorce";
import useFetch from "../../hooks/useFetch";

function NewRoom() {
  const [info, setInfo] = useState({})
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);


  const {data, loading, error} = useFetch("/hotels");
  
  
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form action="">
              {roomInputs.map((input) => 
              (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input id={input.type} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label> Rooms </label>
                <textarea placeholder="give comma between room" name="" id="" cols="30" rows="10"></textarea>
              </div>
                <div className="formInput">
                  <label htmlFor="">Choose a Hotel</label>
                  <select name="" id="hotelId" onChange={e=>setHotelId(e.target.value)}>
                    {loading ? "Loading" : data && data.map(hotel =>(
                    <option value={hotel._id}>{hotel.name}</option>
                    ))}                    
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

export default NewRoom;
