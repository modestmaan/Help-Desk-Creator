import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        Login
        <form method="POST" action="/login">
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <input type="submit" value="login"></input>
        </form>
        <a href="./signup">Sign up</a>
      </div>
    );
  }
}

export default App;
