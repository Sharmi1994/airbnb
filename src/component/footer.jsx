import React from "react";

import { FaRegQuestionCircle } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div>
        <FaRegQuestionCircle />
        <h3>{year}</h3>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
