import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return(
     <div>
         <ul className="Nav-bar">
            <Link to='/'>
                <li className="Logo-link">CryptoApp</li>
            </Link>
            <Link to='/'>
                <li className="Nav-link">Home</li>
            </Link>
            <Link to='/dashboard'>
                <li className="Nav-link">Dashboard</li>
            </Link>
            <Link to='/farm'>
                <li className="Nav-link">Farm</li>
            </Link>
            <Link to='/migrate'>
                <li className="Nav-link">Migrate</li>
            </Link>
            <Link to='/faq'>
                <li className="Nav-link">FAQ</li>
            </Link>
         </ul>
     </div>
    )
}

export default Nav