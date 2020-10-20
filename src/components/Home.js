import React from 'react'
import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import { ReactComponent as HelloIcon } from './images/hello.svg'

const mystyle = {
    backgroundColor: "#f1f3f0",
    padding: "100px",
    width:"700px",
    margin: "0 auto",
    
  };
function Home() {
    return(
        
        <div className="content">
            <div className="page-image">
                <HelloIcon/>
            </div>
            <div className="title-box"> 
                <h1>Welcome to my Crypto App</h1>
            </div>

            <Card inset style={mystyle}>
                <div className="middle">
                    <p>There will be some information about the market here.</p>
                </div>
            </Card>
        </div>
    )
}

export default Home