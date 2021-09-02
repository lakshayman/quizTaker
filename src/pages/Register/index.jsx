import './index.css';
import axios from 'axios';
import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
var mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function RegisterPage(){
  const history = useHistory();
  const [registerData, setregisterData] = useState({
    rname: "",
    role: "",
    remail: "",
    rpass: "",
    rcpass: "",
  });
  const [isLoading, setLoading] = useState(false);
    const [isNameCorrect, setNameCorrect] = useState(false);
    const [isEmailCorrect, setEmailCorrect] = useState(false);
    const [isRoleCorrect, setRoleCorrect] = useState(false);
    const [ispassCorrect, setPassCorrect] = useState(false);
    const [isConfirm, setConfirm] = useState(false);
    const checkValidity = (event)=>{
      if(event.target.id === "rname"){
        if(event.target.value.length === 0){
          event.target.style.border = "none";
          setNameCorrect(false);
        }
        else{
          event.target.style.border="solid";
          event.target.style.borderColor = "lightgreen";
          setNameCorrect(true);
        }
      }else if(event.target.id === "role"){
        if(event.target.value.length === 0){
          event.target.style.border = "none";
          setRoleCorrect(false);
        }
        else if(event.target.value.toLowerCase() === "student" || event.target.value.toLowerCase() === "teacher"){
          event.target.style.border="solid";
          event.target.style.borderColor = "lightgreen";
          setRoleCorrect(true);
        }else{
          event.target.style.border="solid";
          event.target.style.borderColor = "red";
          setRoleCorrect(false);
        }
      }else if(event.target.id === "remail"){
        if(event.target.value.length === 0){
          event.target.style.border = "none";
          setEmailCorrect(false);
        }
        else if(event.target.value.match(mailformat)){
          event.target.style.border="solid";
          event.target.style.borderColor = "lightgreen";
          setEmailCorrect(true);
        }else{
          event.target.style.border="solid";
          event.target.style.borderColor = "red";
          setEmailCorrect(false);
        }
      }else if(event.target.id === "rpass"){
        if(event.target.value.length === 0){
          event.target.style.border = "none";
          setPassCorrect(false);
        }
        else {
          event.target.style.border = "solid";
          event.target.style.borderColor = "lightgreen";
          setPassCorrect(true);
        }
      }else if(event.target.id === "rcpass"){
        if(event.target.value.length === 0){
          event.target.style.border = "none";
          setConfirm(false);
        }
        else if(event.target.value !== registerData.rpass){
          event.target.style.border = "solid";
          event.target.style.borderColor = "red";
          setConfirm(false);
        }
        else {
          event.target.style.border = "solid";
          event.target.style.borderColor = "lightgreen";
          setConfirm(true);
        }
      }  
    }
    const change = (event)=>{
      checkValidity(event)
      setregisterData((prev)=>({...prev, [event.target.id]: event.target.value}));
    }
    const handleSubmit = ()=>{
      setLoading(true);
      axios
        .post("http://localhost:8000/api/register", {
          name: registerData.rname,
          emailid: registerData.remail,
          role: registerData.role,
          password: registerData.rpass, 
          password_confirmation: registerData.rcpass
        })
        .then(res => {
          alert(`Hi ${res.data.result.name}. You have successfully registered.`);
          history.push("/");
        })
        .catch(err =>{
          alert(err);
        })
        
    }
    return (
      <div className="container-fluid router-container align-items-center d-flex justify-content-center">
        {isLoading && <div className="loading"></div>}
        <div id="rform" className="d-flex justify-content-center flex-column align-items-center">
          <h2 id="rheading" className="my-2  position-static justify-content-center">REGISTERATION FOR QUIZ TAKER</h2>

        <input
          id="rname"
          type="text"
          onChange={change}
          placeholder="Enter Full Name*"
          required
          className="my-2 form-control form-control-lg"
        />

        <input
          id="role"
          type="text"
          onChange={change}
          placeholder="Enter Role*"
          list="Roles"
          required
          className="my-2 form-control form-control-lg"
        />
        <datalist id="Roles">
          <option value="Student"></option>
          <option value="Teacher"></option>
        </datalist>

        <input
          id="remail"
          type="email"
          onChange={change}
          placeholder="Enter Email Id*"
          required
          className="my-2 form-control form-control-lg"
        />

        <input
          id="rpass"
          type="password"
          onChange={change}
          placeholder="Enter Password*"
          required
          className="my-2 form-control form-control-lg"
        />

        <input
          id="rcpass"
          type="password"
          placeholder="Enter Password Again*"
          onChange={change}
          required
          className="my-2 form-control form-control-lg"
        />

        <p className="grey-text text-darken-1">
          <Link to="/" >Have an account? </Link>  
        </p> 

        <input
          id="rbutton"
          type="button"
          disabled = {!isConfirm || !isNameCorrect || !isRoleCorrect || !isEmailCorrect || !ispassCorrect}
          onClick={handleSubmit}
          value="SUBMIT"
          className="my-2 form-control form-control-lg"
        />
        </div>
      </div>
    );
}
export default RegisterPage;