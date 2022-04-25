import React from 'react';

function Contact() {
    var message="Hello from BridgeLabz";
    
      return (
        //Demonstrating  property binding
        <div className="Main">
          <h1>{message}</h1> 
          <ul>
              <li>Instagram</li>
              <li>FaceBook</li>
              <li>Linkedin</li>
          </ul>
        </div>
      );
    }
    
    export default Contact;