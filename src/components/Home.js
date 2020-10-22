import React from 'react'
// import Graph from './Graph'
import 'ui-neumorphism/dist/index.css'
import { ReactComponent as HelloIcon } from './images/hello.svg'
import Cardd from './Cardd.js'


function Home() {
    return(
        
        <div className="content">
            <div className="page-image">
                <HelloIcon/>
            </div>
            <div className="title-box"> 
                <h1>Welcome to my Crypto App</h1>
            </div>

            <Cardd>
                <div className="middle">
                    {/* <Graph/> */}
                </div>
            </Cardd>
        </div>
    )
}

export default Home