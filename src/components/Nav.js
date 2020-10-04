import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return(
     <div>
         <ul>
            <Link>
                <li>Home</li>
            </Link>
            <Link>
                <li>Farm</li>
            </Link>
            <Link>
                <li>Migrate</li>
            </Link>
            <Link>
                <li>FAQ</li>
            </Link>
         </ul>
     </div>
    )
}

export default Nav