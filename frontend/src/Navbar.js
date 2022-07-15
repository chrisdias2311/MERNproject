import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ()=>{
    return(
        <div>
            <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/addproduct">Add Product</Link></li>
                <li><Link to="/updateproduct">Update Products</Link></li>
                <li><Link to="/logout">Logout</Link></li>

                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default Nav;