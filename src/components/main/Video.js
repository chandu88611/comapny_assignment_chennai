import React from 'react'

import { BsThreeDotsVertical } from "react-icons/bs";
import "./video.css"
export default function video() {
  return (
    <div className='video'>
          <div className="line2">
          <h4>Product Video</h4>
          <BsThreeDotsVertical />
        </div>
        {/* <img src="./images/video thumbnail.png"alt="" /> */}
        <video  poster='./images/video thumbnail.png'>
        <source src="" type="video/mp4" />
                                 </video>
    </div>
  )
}
