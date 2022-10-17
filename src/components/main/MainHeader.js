import React from 'react'
import "./MainHeader.css"
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useState } from 'react';
import { BsPerson,BsChevronDown ,BsChevronUp} from "react-icons/bs";

import {TbNotes  } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

// import {CiLogin } from "react-icons/ci";
import { IconButton } from '@mui/material';
// import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
function MainHeader({ set }) {

  const [state,setState]=useState(false)
  let num=true
  return (
    <>
    <div className='mainheader'>
      <div className='icon' onClick={() => {
     
    num?set( !false ):set( false  )
     if(num){
     num=false}
     else{
      num=true
     }
   }
   } style={{ focus:{cursor:'pointer'}, justifyContent:'center' 
   ,display:"flex",
   alignItems:'center'
    ,width:'3vw'}} ><DensityMediumOutlinedIcon  /></div>
      <div className='search'>
<SearchIcon className='sIcon' /> <input type="text" className="inputContainer" placeholder='Search transactons,invoices or help' />
      </div>
      <div className='margin' >
     <NotificationsNoneIcon className='sIcon1'/>
     <p>John Doe  </p> <div className='up_down'>  {!state?<BsChevronDown 
       onClick={
      ()=>

 setState(!false)}
     />: <BsChevronUp
     onClick={
      ()=>

    setState(false)}
     />}</div>
     <img src="./images/profile-pic-01.jpg" className='img' alt="" srcset=""  onClick={
      ()=>

     state? setState(false):setState(!false)} /></div>
    </div>
{state?<div className="info">
  <div className="one">  <IconButton> <BsPerson/> </IconButton>My Profile</div>
    <div className="two"> <IconButton> <TbNotes/> </IconButton>Billing</div>
  <div className="three"> <IconButton> <FiLogOut/> </IconButton>Logout</div>
</div>:''}
    </>

  )
  // const show=()=>{
  //   <div className="info">

  //   </div>
  // }
}

export default MainHeader