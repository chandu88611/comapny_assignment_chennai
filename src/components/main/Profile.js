import React from 'react'
import "./Profile.css"
import { AiOutlineTwitter } from "react-icons/ai";

import { IconButton } from '@mui/material'
import { BsFacebook, BsWhatsapp, BsThreeDotsVertical } from "react-icons/bs";

// import { BsFacebook} from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
function profile() {
  return (
    <div className='profile'>
      <div className="pr">
        <img src="./images/profile-pic-01.jpg" alt="" />
        <h5>Nick Herasimenka</h5>
        <p>united states</p>
        <div className="icons" >
          <IconButton>
            <AiOutlineTwitter className='space' /> </IconButton>   <IconButton>      <BsFacebook className='space' /></IconButton>
          <IconButton><AiFillLinkedin className='space' /></IconButton>  <IconButton><BsWhatsapp className='space' /></IconButton>

        </div>
      </div>
      <hr />
      <div >
        <div className="line1">
          <h5>Our Users</h5>
          <BsThreeDotsVertical />
        </div>
        <div className="profiles">
          <div className="user">
            <img src="./images/profile-pic-02.jpg" alt=''
              className="img" />
            <div className='user_content'>  <h6>David Kames</h6> <p>United States    <span className="mob">mob:989786755</span> </p> </div>
            <div className="user_content1"> <p>Mobile</p><p>9897542233</p></div>
          </div>
          <div className="user"><img src="./images/profile-pic-03.jpg" alt=''
            className="img" />
            <div className='user_content'>   <h6>Drew kames</h6> <p>United States    <span className="mob">mob:989786755</span></p> </div>

            <div className="user_content1"> <p>Mobile</p><p>9897542233</p></div>
          </div>
          <div className="user"><img src="./images/profile-pic-04.jpg" alt=''
            className="img" /> <div className='user_content'><h6>Lavid Emes</h6> <p>United States    <span className="mob">mob:989786755</span></p> </div>
            <div className="user_content1"> <p>Mobile</p><p>9897542233</p></div>
            
          </div>
          <div className="user"><img src="./images/profile-pic-05.jpg" alt=''
            className="img" /> <div className='user_content'><h6>john</h6> <p>United States     <span className="mob">mob:989786755</span></p> </div>
            <div className="user_content1"> <p>Mobile</p><p>9897542233</p></div>
            
          </div> 
           <div className="user"><img src="./images/profile-pic-06.jpg" alt=''
            className="img" /> <div className='user_content'><h6>Mary</h6> <p>United States   <span className="mob">mob.989786755</span></p> </div>
            <div className="user_content1"> <p>Mobile</p><p>9897542233</p></div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default profile