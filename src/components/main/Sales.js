import React from 'react'
import "./Sale.css"
export default function Sales() {
  return (
    <div className='sales' >
     <h3>Sales Distribution</h3>
     <div className="img2">  <img src="./images/pie.png" alt="" /></div>
 <hr />
    <div className="row1">
    <div className='bullet1'></div> <p> France</p>  <div className='bullet2'></div><p>Italy </p>
    </div>
    <div className="row1">
    <div className='bullet3'></div> <p> Japan</p>  <div className='bullet4'></div><p>Canada</p>

    </div>
     
    </div>
  )
}
