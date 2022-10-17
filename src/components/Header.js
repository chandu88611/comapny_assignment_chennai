import React from 'react'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AiOutlineInbox ,AiOutlineHome,AiTwotoneSetting} from "react-icons/ai";
import { IconButton } from '@mui/material';
import { MdSignalCellularAlt } from "react-icons/md";

import { RiFileListLine } from "react-icons/ri";
import "./Header.css"
function Header() {
  return (
    <div  className='main_header'>
    <h3  className="navs1">ACME</h3>
     <div className="navs"> 
     <IconButton><AiOutlineHome color="grey"/></IconButton> <h5>Home</h5></div>
     <div className="navs">
     <IconButton><MdSignalCellularAlt color="grey"/></IconButton><h5>Dashboard</h5></div>
     <div className="navs">

     <IconButton><AiOutlineInbox color="grey"/></IconButton> 
     <h5>Inbox</h5></div>
     <div className="navs"> 
     <IconButton><RiFileListLine color="grey"/></IconButton><h5>Products</h5></div>
     <div className="navs"> 
     <IconButton><AiTwotoneSetting color="grey"/></IconButton><h5>Admin</h5></div>

    </div>
  )
}

export default Header