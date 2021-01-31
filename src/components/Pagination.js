import React from 'react'
import '../App.css'
const Pagination = ({postPerPage, totalPosts, paginate}) => {

    const pageNumbers = []
    for(let i=1; i<= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i)
    }
    return (
           <nav className="mx-auto">
              <ul className="pagination pn">
                {
                    pageNumbers.map((number)=>
                      <li key={number} className="page-item">
                          <a onClick={() => paginate(number)} href="#" className="page-link">{number}</a>
                      </li>
                    )
                }
              </ul>
           </nav>
    )
}

export default Pagination
