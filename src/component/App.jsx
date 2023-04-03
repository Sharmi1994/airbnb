import React from "react";

import Header from "./header";
import Footer from "./footer";
import Navbar from "./Navbar";


import FilterCarousel from "./Filternav";

// function createFilters(filters, index) {
//   return (
//     <Filternav
//       key={filters.id}
//       Filtersrc={filters.src}
//       Filtervalue={filters.value}
//       classname= {index===0? "d-inline-block": "d-inline-block ml-5"}
//     />
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Navbar />
      <hr />
      <div style={{display:"flex", height:"80px"}}> <FilterCarousel /></div>
    
      <hr />
      <Footer />
    </div>
  );
}
export default App;
