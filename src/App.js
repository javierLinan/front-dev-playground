import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const test = a;

    test = 2

    let target =-5;
    let num = 3;

    target =- num;  // Noncompliant; target = -3. Is that really what's meant?
    target =+ num; // Noncompliant; target = 3

    var a = NaN;

    if (a === NaN) {  // Noncompliant; always false
      console.log("a is not a number");  // this is dead code
    }
    if (a !== NaN) { // Noncompliant; always true
      console.log("a is not NaN"); // this statement is not necessarily true
    }

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

    var x = 'a';

    var foo = {
      y: 1
    }

    with (foo) {  // Noncompliant
      y = 4;  // updates foo.x
      x = 3;  // does NOT add a foo.x property; updates x var in outer scope
    }
    print(foo.x + " " + x); // shows: undefined 3

    return (
      <div className="App">
        <header className="App-header">
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
