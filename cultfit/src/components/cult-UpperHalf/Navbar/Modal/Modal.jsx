import { useState } from "react";
import Modal from "react-modal";
import { Loginform } from "./Loginform";
import { Signupform } from "./Signupform";
import { Socialpage } from "./Socialpage";

import cross from "./images/cross.svg";
import google from "./images/google.svg";
import fb from "./images/fb.svg";

import "./Modal.css";
import { shallowEqual, useSelector } from "react-redux";

const customStyles = {
  content: {
    width: "374px",
    height: "572px",
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fffff",
    borderRadius: "10px",
    zIndex:"200",
  },
};

export const ModalInFunctionalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [val, setVal] = useState(true);
  const [social, setSocial] = useState(true);
  const { isAuth,user } = useSelector(store => store.auth, shallowEqual)

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
    setVal(true);
    setSocial(true);
  };

  return val ? (
    <>
      {isAuth?<img src="/workoutimages/drop.svg"/>:<button id="login-button" onClick={setModalIsOpenToTrue}>Login</button>}

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancel" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="cross-icon" />
        </button>
        <Loginform closeModal={setModalIsOpenToFalse}/>
        <button
          id="page-one-social"
          onClick={() => {
            setVal(false);
            setSocial(true);
          }}
        >
          Continue with  &ensp;<img src={google} alt="google-icon" />&ensp;<img src={fb} alt="fb-icon" />
        </button>
        <div id="sign-up">
          Don’t have an account?
          <button
            onClick={() => {
              setVal(false);
              setSocial(false);
            }}
          >
            Sign up
          </button>
        </div>
      </Modal>
    </>
  ) : social ? (
    <>
      <button id="login-button" onClick={setModalIsOpenToTrue}>login</button>

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancel" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="cross-icon" />
        </button>
        <Socialpage />
      </Modal>
    </>
  ) : (
    <>
      <button id="login-button" onClick={setModalIsOpenToTrue}>login</button>

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancel" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="cross-icon" />
        </button>
        <Signupform />
        <button
          id="page-one-social"
          onClick={() => {
            setVal(false);
            setSocial(true);
          }}
          className="social-two"
        >
          Continue with&ensp;<img src={google} alt="google-icon" />&ensp;<img src={fb} alt="fb-icon" />
        </button>
      </Modal>
    </>
  );
};
