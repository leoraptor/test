import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const nextpage = useNavigate();

  function handelemail(e) {
    setEmail(e.target.value);
  }

  function handelpass(e) {
    setPass(e.target.value);
  }

  const handelsubmit = async function (e) {
    e.preventDefault();
    let response = await axios.post(
      "http://tutorials.smartsight.in:4201/api/signin",
      {
        email: email,
        password: pass,
      },
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    );

    console.log(response);
    let result = await response.data;

    if (result && email === "bella@mailnator.com" && pass === "pass123") {
      console.log(result);
      toast("Wow so easy !");
      nextpage("/content");
      sessionStorage.setItem("result", result.token);
    } else {
      alert("enter email and pass");
    }
  };
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <input type="text" placeholder="enter email" onChange={handelemail} />
        <input type="text" placeholder="enter password" onChange={handelpass} />
        <button className="btn btn-info">click</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
