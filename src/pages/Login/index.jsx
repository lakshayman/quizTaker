import React, { useState } from 'react';
import './index.css';
function LoginPage(){
  const [loginData, setLoginData] = useState({
    lemail: "",
    lpass: ""
  });

  const change = (event)=>{
    setLoginData((prev)=>({...prev, [event.target.id]: event.target.value}));
  }

  const handleSubmit = ()=>{
    console.log(loginData);
  }
    return (
        <div class="container-fluid louter-container align-items-center flex-column d-flex justify-content-center">
        <h1 class="display-1 lname position-static">Quiz Taker</h1>
      <div id="lform" class="position-static d-flex flex-column align-items-center">
        <h2 id="lheading" class="my-2 justify-content-center">Login</h2>

      <input
        id="lemail"
        type="email"
        onChange={change}
        placeholder="Enter Email Id*"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Enter Email Id*'"
        required
        class="my-2 form-control form-control-lg"
      />

      <input
        id="lpass"
        type="password"
        onChange={change}
        placeholder="Enter Password*"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Enter Password*'"
        required
        class="my-2 form-control form-control-lg"
      />

      <input
        id="lbutton"
        type="button"
        value="SUBMIT"
        onClick={handleSubmit}
        class="my-2 form-control form-control-lg"
      />
    
    </div>
    </div>
    );
}

export default LoginPage;