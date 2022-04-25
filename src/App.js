import logo from './logo.jpg';
import './App.css';
import React from "react";

class App extends React.Component{
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super();
    this.state = {
      userName: ""
    };
  }
  // onClick function
  onClick = (event) => {
    console.log("save button is clicked ", { event });
    window.open(this.url);
  };
  //onChange Event function
  onChange = (event) => {
    console.log("value is ", event.target.value);
    // see the title using setState Method
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: `` });
    } else {
      this.setState({ nameError: `Name is incorrect` });
    }
  };
  render() {
    return (
      <div>
        <div class = "App">
          <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick} alt="The BridgeLabz logo: A Bridge to Employement through lab works"
        />
        </div>

        <div class = "App">
          <input onChange={this.onChange} />
          <span class="error-output">{this.state.nameError}</span>
        </div>
        <div>
                  <p>At BridgeLabz, we're a community of </p>
                  <ul>
                    <li>Technoligist</li>
                    <li>Thinkers</li>
                    <li>Builders</li>
                  </ul>
                  <p>
                    Working together to keep Tech employability of enginners alive and
                    accesible so tech comanies worldwide
                    get contributors and creators for technology solutions.
                    We believe this act of human collaboration acrosss an employability
                    platform is essential to individual growth and our collective future
                  </p>
                  <p>
                    To know about us , visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
                    to learn even more about out mission i.e. <strong>Employability to all</strong>
                  </p>
                </div>
      </div>
    );
  }
}

export default App;
