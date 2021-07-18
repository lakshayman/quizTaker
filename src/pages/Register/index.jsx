import './index.css';

function registerPage(){
    return (
        <div class="container-fluid router-container align-items-center d-flex justify-content-center">
      <div id="rform" class="d-flex justify-content-center flex-column align-items-center">
        <h2 id="rheading" class="my-2  position-static justify-content-center">REGISTERATION FOR QUIZ TAKER</h2>

      <input
        id="rname"
        type="text"
        placeholder="Enter Full Name*"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Enter Full Name*'"
        required
        class="my-2 form-control form-control-lg"
      />

      <input
        id="role"
        type="text"
        placeholder="Enter Role*"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Enter Role*'"
        list="Roles"
        required
        class="my-2 form-control form-control-lg"
      />
      <datalist id="Roles">
        <option value="Student"></option>
        <option value="Teacher"></option>
      </datalist>

      <input
        id="remail"
        type="email"
        placeholder="Enter Email Id*"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Enter Email Id*'"
        required
        class="my-2 form-control form-control-lg"
      />

      <input
        id="rpass"
        type="password"
        placeholder="Enter Password*"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Enter Password*'"
        required
        class="my-2 form-control form-control-lg"
      />

      <input
        id="rcpass"
        type="password"
        placeholder="Enter Password Again*"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Enter Password Again*'"
        required
        class="my-2 form-control form-control-lg"
      />

      <input
        id="rbutton"
        type="button"
        value="SUBMIT"
        class="my-2 form-control form-control-lg"
      />
      </div>
    </div>
    );
}

export default registerPage;