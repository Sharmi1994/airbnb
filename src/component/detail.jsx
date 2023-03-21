import React from "react";

import { FaSearch } from "react-icons/fa";

function Detail() {
  return (
    <div >
      <div className=" row details">
        {" "}
        <div>Stays</div>
        <div>Experiences</div>
        <div>Online Experiences</div>
      </div>
      <br></br>
      <div className="row search2">
   
      <div>
        <div> Where</div>
        <input  className="inputdesign" type="text" placeholder="Search Destinations"/>
      </div>

      <div>
        <div> Check In</div>
        <input className="inputdesign"  type="text" placeholder="Add Dates"/>
      </div>
      <div>
        <div> Check Out</div>
        <input  className="inputdesign" type="text" placeholder="Add Dates"/>
      </div>
      <div><div>Who</div>
      <input className="inputdesign" type="text" placeholder="Add Guests"/></div>
      
      <div className="search-icon2">
        <FaSearch  />
      </div>
    </div>
  </div>
  );
}

export default Detail;
