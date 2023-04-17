import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Employees from "./Employees";
// import {v4 as uuid} from 'uuid';
import  {useNavigate} from  "react-router-dom";
import "./Add.css";

function Edit() {
    const[firstname, setName] = useState('');
    const[lastname, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[gender, setGender] = useState('');
    const[department, setDepartment] = useState('');
    const[skills, setSkills] = useState([]);
    const[id, setId] = useState('');
    const[phone, setPhone] = useState('');
    const[about, setAbout] = useState('');
    

    const handlechange = (e) => {
      const value = e.target.value;
      const checked = e.target.checked;
      console.log(value, checked);
      if (checked) {
        setSkills([...skills, value]);
      } else {
        setSkills(skills.filter((e) => e !== value));
      }
    };


    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

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
        } else if(department === ""){
            alert("Please Select Your Department");
        } 
        else if(skills === ""){
            alert("Please Select Your Skills");
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

        let a = Employees[index];
        a.FirstName = firstname;
        a.LastName = lastname;
        a.Email = email;
        a.Gender = gender;
        a.Department = department;
        a.Skills = skills;
        a.Phone = phone;
        a.About = about;


        history("/");

    }
    alert("Employee Updated Successfully");
}

    useEffect(() => {
        setName(localStorage.getItem('FirstName'))
        setLastName(localStorage.getItem('LastName'))
        setEmail(localStorage.getItem('Email'))
        setGender(localStorage.getItem('Gender'))
        setDepartment(localStorage.getItem('Department'))
        setSkills((JSON.parse(localStorage.getItem('Skills'))))
        setPhone(localStorage.getItem('Phone'))
        setAbout(localStorage.getItem('About'))
        setId(localStorage.getItem('id'))
    },[])

    const isChecked = (value) =>{
        if (Array.isArray(skills)){
            return skills.find((s) => s === value);
        }
    }


  return (
    <div>

      <h1>
        Edit Employee
      </h1>

      <Form className="d-grid gap-2" style={{margin:"2rem 5rem"}} validated>
        <Form.Group className="mb-3" controlId="firstName">
            <Form.Label className="d-flex">FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={firstname}  onChange={(e) => setName(e.target.value)} required> 
            </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
            <Form.Label className="d-flex">LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter LastName" value={lastname} required onChange={(e) => setLastName(e.target.value)}> 
            </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label className="d-flex">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)}> 
            </Form.Control>
        </Form.Group>

        <Form.Group>
        {['radio'].map((type) => (
        <div className="mb-3 gender" style={{height: "2rem"}}>
        <Form.Label label={`Gender`}>Gender</Form.Label>
          <Form.Check type={type} value={"Female"} label={`Female`} id={`female`} name="gender" style={{display: "flex" , gap: "1rem", justifyContent: "start"}} onChange={(e) => setGender(e.target.value)}/>
          <Form.Check type={type} value={"Male"} label={`Male`} id={`male`} name="gender" style={{display: "flex" , gap: "1rem", justifyContent: "start"}} onChange={(e) => setGender(e.target.value)}/>
        
        </div>
        ))}
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Select aria-label="Default select example" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="Select Your Department">Select Your Department</option>
            <option value="PHP">PHP</option>
            <option value=".NET">.NET</option>
            <option value="SEO">SEO</option>
            <option value="Mobile">Mobile</option>
            <option value="Admin/HR">Admin/HR</option>
            <option value="Account">Account</option>
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" htmlFor="skill" controlId="skills" style={{height: "1.5rem"}}>
        {/* {[`checkbox`].map((type) => (
        ))} */}
            <div className="mb-3 checkbox">
            <Form.Label label={`skills`}>Please Select Your Skills :</Form.Label>
                <Form.Check value="Programming" checked={isChecked("Programming")} type="checkbox" label={`Programming`}  name="Programming" onChange={handlechange} />
                <Form.Check value="Communication" checked={isChecked("Communication")} type="checkbox" label={`Communication`}  name="Communication" onChange={handlechange} />
                <Form.Check value="Finance" type="checkbox" checked={isChecked("Finance")}  label={`Finance`}  name="Finance" onChange={handlechange} id="skill"/>
                <Form.Check value="Recruitment" type="checkbox" checked={isChecked("Recruitment")} label={`Recruitment`}  name="Recruitment" onChange={handlechange} />
                <Form.Check value="Optimization" type="checkbox" checked={isChecked("Optimization")} label={`Optimization`}  name="Optimization" onChange={handlechange} />
                <Form.Check value="Frontend Technology" type="checkbox" checked={isChecked("Frontend Technology")} label={`Frontend Technology`}  name="Frontend Technology" onChange={handlechange} />
                <Form.Check value="Backend Technology" type="checkbox" checked={isChecked("Backend Technology")} label={`Backend Technology`}  name="Backend Technology" onChange={handlechange} />
            </div>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label className="d-flex">Phone Number</Form.Label>
            <Form.Control type="text" inputMode="numeric" placeholder="Enter Phone Number" value={phone} required onChange={(e) => setPhone(e.target.value)}> 
            </Form.Control>
        </Form.Group>


        <Form.Group className="mb-3 d-flex flex-column" >
            <Form.Label className="d-flex">About</Form.Label>
            <Form.Control id="about" as="textarea" placeholder="About yourself" value={about} onChange={(e) => setAbout(e.target.value)} required />
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
    </Form>
    </div>
  )
}

export default Edit