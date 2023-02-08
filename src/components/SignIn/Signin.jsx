import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CButton from "../CButton/CButton";
import CInput from "../CInput/CInput";
import GoogleButton from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import "./styled.scss";

const Signin = ({ setTab }) => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const onHandleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleLogIn = () => {
    navigate("/profile");
  };

  return (
    <>
      <form data-aos="fade-up-left">
        <CInput type="text" forLabel="username" label="Username" />
        <CInput type="password" forLabel="password" label="Password" />

        <div className="check" style={{ marginBottom: "10px" }}>
          <div className="box">
            <input type="checkbox" id="remembr" />
            <label for="remember">Remember me</label>
          </div>
          <span>Forgot Password</span>
        </div>
        <CButton onClick={onHandleLogIn} label="Sign In" />

        <GoogleButton
          type="dark"
          style={{
            width: "99%",
            borderRadius: "6px",
            overflow: "hidden",
            margin: "0 auto",
          }}
          onClick={onHandleGoogleSignIn}
        />
        <h4>
          Do not have an account?<b onClick={setTab}> Sign up</b>
        </h4>
        <span className="forgot">Forgot Password</span>
      </form>
    </>
  );
};

export default Signin;
