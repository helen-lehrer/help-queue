import React from "react";
import ticketsImage from "./../img/tickets.png";

function Header(){
  return (
  <React.Fragment>
    <h1>Help Queue</h1>
    <img src={ticketsImage} alt="An image of tickets" width="100px" />
  </React.Fragment>
  );
}

export default Header;