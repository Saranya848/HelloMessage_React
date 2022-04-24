import logo from './logo.jpg';
import './App.css';
import React from "react";

//class App extends React.Component{
  function App() {
    var name = "Saranya";
  //}
  //render() {
    return (
      <div class='App'>
        <h1>"Hello {name} from Bridgelabz"</h1>
        <img src={logo}
          alt="The BridgeLabz logo: A Bridge to Employement through lab works"/>
      </div>
    );
  //}
}

export default App;
