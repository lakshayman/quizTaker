import React, { useState } from 'react';
import './index.css';
var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function LoginPage(){
  const [loginData, setLoginData] = useState({
    lemail: "",
    lpass: ""
  });
  const [isEmailCorrect, setEmailCorrect] = useState(false);
  const [isPassCorrect, setPassCorrect] = useState(false);
  const [isError, setError] = useState(false);

  const checkValidity = (event)=>{
    if(event.target.id === "lemail"){
      if(event.target.value.length === 0){
        event.target.style.border = "none";
        setEmailCorrect(false);
      }
      else if(event.target.value.match(mailformat)){
        event.target.style.border = "solid";
        event.target.style.borderColor = "lightgreen";
        setEmailCorrect(true);
      }else{
        event.target.style.border = "solid";
        event.target.style.borderColor = "red";
        setEmailCorrect(false);
      }
    }else if(event.target.id === "lpass"){
      if(event.target.value.length === 0){
        event.target.style.border = "none";
        setPassCorrect(false);
      }
      else {
        event.target.style.border = "solid";
        event.target.style.borderColor = "lightgreen";
        setPassCorrect(true);
      }
    }
  }
  const change = (event)=>{
    checkValidity(event)
    setLoginData((prev)=>({...prev, [event.target.id]: event.target.value}));
  }

  const handleSubmit = ()=>{
    setError(true);
    console.log(loginData);
  }
    return (
        <div className="container-fluid louter-container align-items-center flex-column d-flex justify-content-center">
        <h1 className="display-1 lname position-static">Quiz Taker</h1>
      <div id="lform" className="position-static d-flex flex-column align-items-center">
        <h2 id="lheading" className="my-2 justify-content-center">Login</h2>

      <input
        id="lemail"
        type="email"
        onChange={change}
        placeholder="Enter Email Id*"
        required
        className="my-2 form-control form-control-lg"
      />

      <input
        id="lpass"
        type="password"
        onChange={change}
        placeholder="Enter Password*"
        required
        className="my-2 form-control form-control-lg"
      />
      {isError && <p style={{color: "brown"}}>E-Mail/Password is Wrong</p>}

      <input
        id="lbutton"
        type="button"
        value="SUBMIT"
        disabled={!isEmailCorrect || !isPassCorrect}
        onClick={handleSubmit}
        className="my-2 form-control form-control-lg"
      />
    
    </div>
    </div>
    );
}

export default LoginPage;