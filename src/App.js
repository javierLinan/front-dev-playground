import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function MyClass() {
      this.foo = 'bar';
    }

    var someClass = 1;

    var obj1 = new someClass;    // Noncompliant;
    var obj2 = new MyClass();    // Noncompliant if considerJSDoc parameter set to true. Compliant when considerJSDoc=false

    var a = NaN;

    if (a === NaN) {  // Noncompliant; always false
      console.log("a is not a number");  // this is dead code
    }
    if (a !== NaN) { // Noncompliant; always true
      console.log("a is not NaN"); // this statement is not necessarily true
    }

    $have_time = true;
    $have_money = false;
    $take_vacation = $have_time and $have_money;  // Noncompliant. $take_vacation == true.



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
