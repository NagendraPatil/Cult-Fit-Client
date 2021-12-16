import { useState } from "react";
import Modal from "react-modal";

import cross from "./images/cross.svg";

import banglore from "./images/banglore.svg";
import delhi from "./images/delhi.svg";
import hyderabad from "./images/hyderabad.svg";
import mumbai from "./images/mumbai.svg";

import "./locationmodal.css";

const customStyles = {
  content: {
    width: "996px",
    height: "478px",
    top: "53%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fffff",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },
};

export const LocationModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button id="login-button" onClick={setModalIsOpenToTrue}>
        location
      </button>

      <Modal id="location-render" style={customStyles} isOpen={modalIsOpen}>
        <div id="select-city">Select your Location</div>
        <div id="popular">POPULAR CITY</div>
        <div id="cities">
          <button onClick={setModalIsOpenToFalse}>
            <img src={banglore} alt="banglore-logo" />
            <div>Bangalore</div>
          </button>
          <button onClick={setModalIsOpenToFalse}>
            <img src={delhi} alt="delhi-logo" />
            <div>Delhi</div>
          </button>
          <button onClick={setModalIsOpenToFalse}>
            <img src={hyderabad} alt="hyderabad-logo" />
            <div>Hyderabad</div>
          </button>
          <button onClick={setModalIsOpenToFalse}>
            <img src={mumbai} alt="mumbai-logo" />
            <div>Mumbai</div>
          </button>
        </div>
        <div id="other">OTHER CITY</div>
        <div id="morecities">
          <ul>
            <li>Ranchi</li>
            <li>Dehradun</li>
            <li>Bhubaneswar</li>
            <li>Jabalpur</li>
          </ul>
          <ul>
            <li>Vijayawada</li>
            <li>Chennai</li>
            <li>Kanpur</li>
            <li>Jaipur</li>
          </ul>

          <ul>
            <li>Vadodara</li>
            <li>Pune</li>
            <li>Kolkata</li>
            <li>Ahmedabad</li>
          </ul>
          <ul>
            <li>Mysore</li>
            <li>Chennai</li>
            <li>Lucknow</li>
            <li>Agra</li>
          </ul>
          <ul>
            <li>Vijayawada</li>
            <li>Nagpur</li>
            <li>Kota</li>
            <li>Kochi</li>
          </ul>
          <ul>
            <li>Ludhiana</li>
            <li>Surat</li>
            <li>Jammu</li>
            <li>Amritsar</li>
          </ul>
          <ul>
            <li>Indore</li>
            <li>Coimbatore</li>
            <li>Mangalore</li>
            <li>Bhopal</li>
          </ul>
        </div>
      </Modal>
    </>
  );
};