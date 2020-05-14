import React,{Component} from "react";
import {Link,Navlink} from 'react-router-dom'

export default class navbar extends Component {

  

  render() {
    return (
      <div>
            <nav class="navbar is-light" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <Link class="navbar-item" to='/'>
                  <img
                    src={require("../../images/Mono-left.svg")}
                    width="112"
                    height="28"
                  />
                </Link>
                <Link class="navbar-item" to='/create-poll'>
                  <img
                    class="google-login"
                    src={require("../../images/google-auth-button.png")}
                    
                    alt="google-auth-button"
                  />
                </Link>
              </div>
            </nav>
      </div>
    )
  }
}

