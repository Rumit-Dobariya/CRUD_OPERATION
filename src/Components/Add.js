import React, { useState } from "react";
import { Button, Form, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Employees from "./Employees";
import {v4 as uuid} from 'uuid';
import {useNavigate} from  "react-router-dom"; 
import "./Add.css";


function Add() {

    const[firstname, setName] = useState('');
    const[lastname, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[gender, setGender] = useState('');
    const[department, setDepartment] = useState('');
    const[skills, setSkills] = useState('');
    const[phone, setPhone] = useState('');
    const[about, setAbout] = useState('');

    let history = useNavigate();

    const handleSubmit  = (e) => {

        if(!firstname.match(/^[a-zA-Z]+$/) || firstname === "") {
            alert("Please Enter Valid First Name");
            return document.getElementById("fname").focus();
        } 
        else if(!lastname.match(/^[a-zA-Z]+$/) || lastname === "") {
            alert("Please Enter Valid Last Name");
            return document.getElementById("lname").focus();
        }
        else if(!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.+{a-zA-Z}]$/) || email === "") {
            alert("Please Enter Valid Email");
            return document.getElementById("email").focus();
        }
        else if(gender === ""){
            alert("Please Select Gender");
            return document.getElementById("male").focus();
        } else if(department === "Select Your Department" || department === ""){
            alert("Please Select Your Department");
            return document.getElementById("department").focus();
        }
         else if(skills === ""){
            alert("Please Select Your Skills");
            return document.getElementById("skills").focus();
        } 
        else if(phone === "" || phone.length < 10 || phone.length > 10 || !phone.match(/^[0-9]+$/)){
            alert("Please Enter Valid Phone Number");
            return document.getElementById("phone").focus();
        }
        else if (about === "") {
            alert("Please Enter Text in About Field")
            return document.getElementById("about").focus();
        } else {

        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = firstname,
            c = lastname,
            d = email,
            f = gender,
            b = department,
            s = skills,
            p = phone,
            ab = about
        
        Employees.push({id: uniqueId, FirstName: a, LastName: c, Email: d, Gender: f,Department: b, Skills: s, Phone: p, About: ab});

        history("/");

        alert("Employee Added Successfully");
        }

    }

    const handlechange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        console.log(value, checked);
        if (checked) {
            setSkills([...skills, value]);
        } else {
            setSkills(skills.filter((e) => e !== value));
        }
    }

    


  return (

    <div>
        <h1>Add New Employee</h1>

    <Form className="d-grid gap-2 needs-validation" style={{margin:"2rem 5rem"}} validated >
        <Form.Group className="mb-3 was-validated"  >
            <Form.Control type="text"  placeholder="Enter Name" id="fname" required onChange={(e) => setName(e.target.value)}> 
            </Form.Control>
            <div className="invalid-feedback">
                Please Enter Your First Name.
            </div>
        </Form.Group>

        <Form.Group className="mb-3 was-validated" >
            <Form.Control type="text" placeholder="Enter LastName" id="lname" required onChange={(e) => setLastName(e.target.value)}> 
            </Form.Control>
            <div className="invalid-feedback">
                Please Enter Your Last Name.
            </div>
        </Form.Group>

        <Form.Group className="mb-3 was-validated">
            <Form.Control type="email" placeholder="Enter Email" id="email" required onChange={(e) => setEmail(e.target.value)}> 
            </Form.Control>
            <div className="invalid-feedback">
                Please Enter Your email.
            </div>
        </Form.Group>

        
        <Form.Group className="mb-3"  id="gender" style={{height: "1rem"}}>
        {[`radio`].map((type) => (
            <div  className="mb-3 gender" >
            <Form.Label id="gender" label={`Gender`}>Please Select Your Gender :</Form.Label>
                <Form.Check value="Female" type={type} label={`Female`} id={`female`} name="gender" required onChange={(e) => setGender(e.target.value)}/>
                <Form.Check value="Male" type={type} label={`Male`} id={`male`} name="gender" required onChange={(e) => setGender(e.target.value)}/>
                <div className="invalid-feedback">
                Please Select Your Gender.
                </div>
            </div>
        ))}
        </Form.Group>
        


        <Form.Group className="mb-3"  >
        <Form.Select placeholder="Default select example" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required>
            <option disabled={true} value="" required> Select Your Department</option>
            <option value="PHP" required>PHP</option>
            <option value=".NET" required>.NET</option>
            <option value="SEO" required>SEO</option>
            <option value="Mobile" required>Mobile</option>
            <option value="Admin/HR" required>Admin/HR</option>
            <option value="Account" required>Account</option>
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" id="skills" style={{height: "1.5rem"}}>
        {[`checkbox`].map((type) => (
            <div  className="mb-3 checkbox">
            <Form.Label label={`skills`}>Please Select Your Skills :</Form.Label>
                <Form.Check id="Programming" value="Programming" type={type} label={`Programming`}  name="Programming" onChange={handlechange}/>
                <Form.Check id="Communication" value="Communication" type={type} label={`Communication`}  name="Communication" onChange={handlechange}/>
                <Form.Check id="Finance" value="Finance" type={type} label={`Finance`}  name="Finance" onChange={handlechange}/>
                <Form.Check id="Recruitment" value="Recruitment" type={type} label={`Recruitment`}  name="Recruitment" onChange={handlechange}/>
                <Form.Check id="Optimization" value="Optimization" type={type} label={`Optimization`}  name="Optimization" onChange={handlechange}/>
                <Form.Check id="Frontend Technology" value="Frontend Technology" type={type} label={`Frontend Technology`}  name="Frontend Technology" onChange={handlechange}/>
                <Form.Check id="Backend Technology" value="Backend Technology" type={type} label={`Backend Technology`}  name="Backend Technology" onChange={handlechange}/>
                
            </div>
        ))}
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label className="d-flex">Phone Number</Form.Label>
            <Form.Control type="text" inputMode="numeric" id="phone" value={phone} placeholder="Enter Phone Number" className="ph-no" required onChange={(e) => setPhone(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column">
            <Form.Label className="d-flex">About</Form.Label>
            <Form.Control id="about" as="textarea" placeholder="About yourself" value={about} onChange={(e) => setAbout(e.target.value)} required />
        </Form.Group>

        <Button  type="submit" onClick={(e) => handleSubmit(e)}>Add Employee</Button>
    </Form>
    </div>
  )
}

export default Add




