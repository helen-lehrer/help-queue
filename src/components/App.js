import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;
