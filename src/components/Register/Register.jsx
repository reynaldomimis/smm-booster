import React from "react";
import CButton from "../../components/CButton/CButton";
import CInput from "../../components/CInput/CInput";
import "./styled.scss";

const Register = ({ setTab, onClick }) => {
  return (
    <>
      <form data-aos="fade-up-left">
        <CInput type="text" forLabel="username" label="Username" />
        <CInput type="email" forLabel="email" label="Email" />
        <CInput type="password" forLabel="password" label="Password" />
        <CInput type="password" forLabel="cpassword" label="Confirm Password" />
        <h1></h1>
        <CButton onClick={onClick} label="Sign Up" />
        <h4>
          Already have an account?<b onClick={setTab}> Sign in</b>
        </h4>
      </form>
    </>
  );
};

export default Register;
