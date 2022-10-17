import React from 'react'
import "./MainContent.css"
import Profile from './Profile'
import {  Button, IconButton } from '@mui/material'
import Video from "./Video"
import Referrer from './Referrer'
import Statistics from './Statistics'
import Sales from './Sales'
function MainContent() {
  return (
    <div className='container'>
    <div className="container1">
    <h2>Overview</h2>
    <div className='but_div' >
  <button className='but' >Add Funds <span style={{ 
    
    marginLeft:"1vw"}}>+</span></button>
    </div></div>
    <div className="maincontainer">
    <div className="container2">

     <div className="grid1"> <Statistics/> </div> 
     

     <div className="grid2"> <Sales/> </div> 

<div className="grid3"> <Referrer/> </div> 
</div>
<div className="container3">
<div className="grid4"><Profile/></div> 

<div className="grid5"><Video/></div>


 </div>

</div>
 <div className="container4">
   <div className="mobile_container">
  <div className="grid_1"><Profile/></div>
  
  
  <div className="grid_2"> <Statistics/> </div> 
  
  <div className="grid_3"> <Sales/> </div> 
  
  <div className="grid_4"> <Referrer/> </div> 
  
  <div className="grid_5"><Video/></div>
  <hr />
  </div>
  </div> 
  </div>
 
  )
}

export default MainContent