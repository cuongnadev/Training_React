// Example
import React from "react";
import ReactDOM from "react-dom/client";

// Assigning Events in JSX
class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); // Binding context
  }

  handleClick(event) {
    console.log(this, event);
  }

  render() {
    return <button onClick={this.handleClick}>Save</button>;
  }
}

// React SyntheticEvent
class EventDemo extends React.Component {
  handleClick(event) {
    console.log("currentTarget:", event.currentTarget);
    console.log("target:", event.target);
    console.log("nativeEvent:", event.nativeEvent);
    console.log("event type:", event.type);

    event.preventDefault(); // Prevent default action
    event.stopPropagation(); // Stop event propagation
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

// Using Events and State
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>Current Count: {this.state.count}</p>
      </div>
    );
  }
}

// Passing Event Handlers as Properties
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <ChildComponent counter={this.state.count} increment={this.increment} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <button onClick={this.props.increment}>
        Increment Count: {this.props.counter}
      </button>
    );
  }
}

// Component Classification: "Dumb" vs "Smart"
// Dumb Component
class Button extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>;
  }
}

// Smart Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <Button
          label={`Counter: ${this.state.counter}`}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

// Responding to DOM Events Not Supported by React
class ResizeListener extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth, height: window.innerHeight };
  }

  componentDidMount() {
    // Listen event resize
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    // Delete event when component is unmounted
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    return (
      <div style={{ padding: "20px", border: "1px solid black" }}>
        <h3>Window Size</h3>
        <p>Width: {this.state.width}px</p>
        <p>Height: {this.state.height}px</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <div>
    <SaveButton />
    <br />
    <EventDemo />
    <br />
    <Counter />
    <br />
    <ParentComponent />
    <br />
    <App />
    <br />
    <ResizeListener />
  </div>
);
