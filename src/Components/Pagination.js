// import { useState } from "react";
import React,  {useState} from 'react'
import Employees from "./Employees";

function Pagination(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(5);
    const lastindex = currentPage * employeesPerPage;
    const firstindex = lastindex - employeesPerPage;
    const records = Employees.slice(firstindex, lastindex);
    const npages = Math.ceil(Employees.length / employeesPerPage);
    const numbers = [...Array(npages + 1).keys()].slice(1);

  return (
    <div>
        <ul className="pagination d-flex justify-content-center">
                <li className="page-item">
                    <a href="#!" className="page-link" onClick={prePage}>Prev</a>
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

                <li className="page-item">
                    <a href="#!" className="page-link" onClick={nextPage}>Next</a>
                </li>

            </ul>
    </div>
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
  }
}

export default Pagination
