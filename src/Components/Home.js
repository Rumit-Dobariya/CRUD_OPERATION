import React, { Fragment , useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {Link , useNavigate} from  "react-router-dom";
import "./Home.css";


function Home() {  

    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(5);
    const lastindex = currentPage * employeesPerPage;
    const firstindex = lastindex - employeesPerPage;
    const records = Employees.slice(firstindex, lastindex);
    const npages = Math.ceil(Employees.length / employeesPerPage);
    // console.log(npages + "npages  " + employeesPerPage)
    const numbers = [...Array(npages + 1).keys()].slice(1);
    // pagination ends

    // for disable prev and next button
    const newvar = Math.round(Employees.length / 2);
    const newvar1 = Math.floor(Employees.length / 2);
    console.log("newvar " + newvar + " " + newvar1)
    const var2 = currentPage;
    console.log(var2);



    let history = useNavigate();

    // for Edit 
    const handleEdit = (id, firstname, lastname, email, gender, department, skills, phone, about) => {
        localStorage.setItem('FirstName', firstname);
        localStorage.setItem('LastName', lastname);
        localStorage.setItem('Email', email);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('Department', department);
        localStorage.setItem('Skills', JSON.stringify([...skills]));
        localStorage.setItem('Phone', phone);
        localStorage.setItem('About', about)
        localStorage.setItem('id', id);
    }

    // for DELETE
    const handleDelete = (id) =>{
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);
        // console.log(index);
        Employees.splice(index, 1);
        // console.log(Employees.splice(index, 1));

        
        history('/');
        alert("Employee data deleted successfully");
    }

    // for Total No. Of Employee
    const result = Employees.length;

    const[query , setQuery] = useState('');
    const resetsearch = () => {
        document.getElementById("ser1").value = "";
        setQuery('');
    }

  return (
    <Fragment>
        <div style={{margin:"5rem 5rem"}} className="main-body">
            <h2 style={{float: "left" , marginBottom:"2rem"}}>Employee List</h2>
            
            <Form.Group className="d-flex search">
                <Form.Label>For Search</Form.Label>
                <Form.Control type="text" name="search" id="ser1" placeholder="Search..." className="search-child"  onChange={event => setQuery(event.target.value)}>
                </Form.Control>
                <Button className="btn btn-danger" type="reset" onClick={()=>resetsearch()}>Clear</Button>
            </Form.Group>
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th >
                            FirstName
                        </th>
                        <th >
                            LastName
                        </th>
                        <th >
                            Email
                        </th>
                        <th >
                            Gender
                        </th>
                        <th >
                            Department
                        </th>
                        <th >
                            Skills
                        </th>
                        <th >
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Employees.length > 0
                        ?
                        // eslint-disable-next-line array-callback-return
                        records.filter(item => {
                            if (query === '') 
                            {
                              return item;
                            } 
                            else if 
                            (   
                                item.FirstName.toLowerCase().includes(query.toLowerCase()) ||
                                item.LastName.toLowerCase().includes(query.toLowerCase()) ||
                                item.Email.toLowerCase().includes(query.toLowerCase())
                            ) 
                            {
                              return item;
                            }
                          }).map((item) => {
                            return(
                                <tr>
                                    <td key={"fname"}>
                                        {item.FirstName}
                                    </td>
                                    <td key={"lname"}>
                                        {item.LastName}
                                    </td>
                                    <td key={"email"}>
                                        {item.Email}
                                    </td>
                                    <td key={"gender"}>
                                        {item.Gender}
                                    </td>
                                    <td key={"dept"}>
                                        {item.Department}
                                    </td>
                                    <td key={"skl"}>
                                        {item.Skills.join(", ")}
                                    </td>
                                    <td key={"btn"}>
                                        <Link to={`/edit`}>
                                        <Button className="edit" variant="primary" onClick={()=> handleEdit(item.id , item.FirstName, item.LastName, item.Email, item.Gender ,item.Department, item.Skills, item.Phone, item.About)}>Edit</Button>
                                        </Link>
                                        &nbsp;
                                        <Button variant="danger" onClick={()=> handleDelete(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No Data Available"
                    }
                </tbody>
            </Table>

            {/* for Pagination */}


            <ul className="pagination d-flex justify-content-center">
                <li className={`page-item ${currentPage - 1 === 0 ? 'd-none' : ''}`}>
                    <a role={Button} href="#!" className="page-link" onClick={prePage}>Prev</a>
                </li>
                {
                    numbers.map((n, i) => {
                        return(
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a href="#!" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
                            </li>
                        )
                    })
                }
                {/* ${currentPage + 1 === " " ? 'd-none' : ''} */}
                <li className={`page-item ${currentPage + var2 === newvar || currentPage + var2 === newvar1 || Employees.length <= 2 ? 'd-none' : ''} `}>
                    <a href="#!" role={Button}  className="page-link" onClick={nextPage} >Next</a>
                </li>
            </ul>
            {/* Pagination end */}

            <div>
                <h4>Total no. of Employee ={result}</h4>
            </div>
    
           
            <Link className="d-grid gap-2" to="/create">
                <Button variant="primary" size="lg">Add Employee</Button>
            </Link>
        </div>

        <footer>
            <p style={{textAlign:"center"}}>&#169;All Rights Reserved. For More Details Please<Link to={`/contact`}> <a href="#!" >contact us</a></Link></p>
        </footer>

    </Fragment>
  )


  function prePage () {
    if(currentPage !== firstindex){
        setCurrentPage(currentPage - 1);
    }
  }

  function nextPage(){
    if(currentPage !== lastindex){
        setCurrentPage(currentPage + 1);
    }
  }

  function changeCPage(id){
    setCurrentPage(id);
    if (currentPage - 1 === 0) {
        
    } 
  }
}

export default Home;
