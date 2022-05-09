import React, { useState } from 'react'
//import form1 from './styles/form1';
import logo from './logo.png'
import bnr from './bnr.jpeg'
import rsicon from './rsicon.png'
import './styles/form1.css';
import validateInfo from "./ValidateInfo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function ApplyForm() {
  const [form,setForm] = useState({
      name : "",
      number : "",
      gender :"",
      reason :"",
      agree : ""
  });
  const handleRegistration = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setForm({...form,[name]:value});
  }
  const [errors, setErrors] = useState([]);
  const [records, setRecords] = useState([]);
  let navigate = useNavigate(); 
  let valid = false;
  const [name, setName] = useState("");

  const [number, setNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(user);
    const error = validateInfo(form);
    setErrors(error);
    const data = {
        name : form.name,
        number : form.number,
        gender : form.gender,
        reason : form.reason,
        agree : form.agree
      };
      console.log(data);
      if(error.length===0){
        axios
        .post("http://localhost:8080/api/saveUser", data)
        .then((res) => {
          console.log(res);
          console.log("in res");
          if (res.data === true) {
            document.write("User saved Successfully!!");
          } else {
            document.write("invalid user");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
  };

  return (
   
    <div>
        
        <div class="main"> 

		<div class="logo_part">
			<a href="https://www.kotak.com/en/home.html"><img src={logo} class="logo" alt=""/></a>
			<span>Saving A/C</span>	
		</div>
		
		
		<div class="blueBaner"><img src={bnr}  alt=""/></div>
		
	    <form action="" method="post" onSubmit={handleSubmit}>
		
			<span class="heading2">Enter your details to check eligibility and proceed to apply on the official website.</span>
		
			<ul class="form_col">
				
			    
				
				<li>
                <div>

          {/* <label htmlFor="name">name</label> */}
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            placeholder="Name as per Aadhaar card"
            onChange={handleRegistration}
          />
          {errors.name && <p class="error">{errors.name}</p>}
        </div>
        <div>

          {/* <label htmlFor="name">name</label> */}
          <input
            type="text"
            name="number"
            id="number"
            value={form.number}
            placeholder="Enter Your Mobile Number"
            onChange={handleRegistration}
          />
          {errors.number && <p class="error" >{errors.number}</p>}
        </div>
                </li>
				 <li>
					  <label for="reason">Why do you want to open a Kotak's Digital Savings Account?</label>
					   <select name="reason" id="reason" onChange={handleRegistration}>
						 {/* <option value="abc1" style="-webkit-appearance: none !important;  -webkit-user-select: none !important;"></option>  */}
						<option value="I need a savings account.">I need a savings account.</option>
						<option value="I know about Kotak811 it is a good brand.">I know about Kotak811 it is a good brand.</option>
						<option value="I was promised rewards for opening the account.">I was promised rewards for opening the account.</option>
					  </select> 
				</li>  
               
                    <div>
                        <label>Male :</label>
                        <input type="radio" name="gender" value="male" onChange={handleRegistration}/> 
                        <label>Female :</label>
                        <input type="radio" name="gender" value="female" onChange={handleRegistration}/> 
                        {errors.gender && <p class="error">{errors.gender}</p>}
                    </div>
                
                    <div>
                       <input type="checkbox" name="agree" value="true" onChange={handleRegistration}/> 
                       <label>Agree T&C</label>
                       {errors.agree && <p class="error">{errors.agree}</p>}
                    </div>
                       
				
			</ul> 
			
			<p class="note"><strong>Note:</strong> Enter mobile number linked to your Aadhaar card. We may share your number with the financial advisor to help you complete the process.</p>
			
			{/* <a href="https://www.kotak.com/en/home.html" class="save_btn">SAVE & PROCEED</a> */}
          

            {/* <button class="save_btn" type="submit"onClick={event =>  window.location.href='/https://www.kotak.com/en/home.html'}>SAVE & PROCEED</button> */}
            <button class="save_btn" type="submit">SAVE & PROCEED</button>
			
			<p class="minitext"><img src={rsicon}  />Rocket Singh app brings to you India's top financial products</p>
			
		</form> 
		
	</div>  
    </div>
  )
}

export default ApplyForm