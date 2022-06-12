import React from 'react'
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://www.kayak.com/rimg/himg/b2/14/4d/expediav2-76619-48f1af-866918.jpg?width=2160&height=1215&crop=true&outputtype=webp" alt="" className="searchItemImg" />
        <div className="searchItemDesc">
        <h1 className="siTitle">Hotel Shanker</h1>
        <span className="siDistance">350 Lazimpat Kathmandu Nepal, Kathmandu, Nepal</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        </div>
        <div className="searchItemDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.4</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$47</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
        </div>
    </div>
  )
}

export default SearchItem
