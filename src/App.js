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

    eval = 17; // Noncompliant
    arguments++; // Noncompliant
    ++eval; // Noncompliant
    var obj = { set p(arguments) { } }; // Noncompliant
    var eval; // Noncompliant
    try { } catch (arguments) { } // Noncompliant
    function x(eval) { } // Noncompliant
    function arguments() { } // Noncompliant
    var y = function eval() { }; // Noncompliant
    var f = new Function("arguments", "return 17;"); // Noncompliant

    function fun() {
      if (arguments.length == 0) { // Compliant
        // do something
      }
    }

    function foo(obj1, obj2, array) {
      var a = obj1.a;  // Noncompliant
      var b = obj1.b;

      var name = obj2.name;  // ignored; there's only one extraction-and-assignment

      var zero = array[0];  // Noncompliant
      var one = array[1];
    }

    var myArray = ['a', 'b', 'c', 'd'];

    delete myArray[2];  // Noncompliant. myArray => ['a', 'b', undefined, 'd']
    console.log(myArray[2]); // expected value was 'd' but output is undefined

    var x = "Foo";
    "length" in x; // Noncompliant: TypeError
    0 in x;        // Noncompliant: TypeError

    var a = NaN;

    if (a === NaN) {  // Noncompliant; always false
      console.log("a is not a number");  // this is dead code
    }
    if (a !== NaN) { // Noncompliant; always true
      console.log("a is not NaN"); // this statement is not necessarily true
    }

    var a = NaN;

    if (a === NaN) {  // Noncompliant; always false
      console.log("a is not a number");  // this is dead code
    }
    if (a !== NaN) { // Noncompliant; always true
      console.log("a is not NaN"); // this statement is not necessarily true
    }

    var a = NaN;

    if (a === NaN) {  // Noncompliant; always false
      console.log("a is not a number");  // this is dead code
    }
    if (a !== NaN) { // Noncompliant; always true
      console.log("a is not NaN"); // this statement is not necessarily true
    }

    var a = NaN;

    if (a === NaN) {  // Noncompliant; always false
      console.log("a is not a number");  // this is dead code
    }
    if (a !== NaN) { // Noncompliant; always true
      console.log("a is not NaN"); // this statement is not necessarily true
    }

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
