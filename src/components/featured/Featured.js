import './featured.css'
import React from 'react'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
          <img src="https://www.journeyera.com/wp-content/uploads/2021/05/where-to-stay-kathmandu-best-hotels-263341687.jpg" alt="" className='featuredImg' />
          <div className="featuredTitles">
              <h1>Kathmandu</h1>
              <h2>200 properties</h2>
          </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://holeinthedonut.com/wp-content/uploads/2018/03/Nepal-Pokhara-Wooden-boats-on-Phewa-Lake.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pokhara</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      
    </div>
  )
}

export default Featured
