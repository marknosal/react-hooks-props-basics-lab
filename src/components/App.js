import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} city='New York' name='Liza'/>
      <About bio='I made this!' github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
