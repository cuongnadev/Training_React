// Example 
import React from "react";
import ReactDOM from "react-dom/client";

class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log("1️⃣ constructor: Initialzation state");
        this.state = { width: window.innerWidth, error: null };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("2️⃣ getDerivedStateFromProps: Updateing state from props");
        return null; // No state changed
    }

    componentDidMount() {
        console.log("4️⃣ componentDidMount: Component has been attached DOM");
        window.addEventListener("resize", this.updateWidth);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("5️⃣ shouldComponentUpdate: Check if re-render is needed");
        return nextState.width !== this.state.width; // Only render if width change
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("6️⃣ getSnapshotBeforeUpdate: Save state before update");
        return prevState.width; // return value snapshot
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(
            "7️⃣ componentDidUpdate: Component updated. Before width =",
            snapshot
        );
    }

    componentWillUnmount() {
        console.log("8️⃣ componentWillUnmount: Clean up before component is deleted");
        window.removeEventListener("resize", this.updateWidth);
    }

    componentDidCatch(error, info) {
        console.log("🔴 componentDidCatch: Catch error", error);
        this.setState({ error });
    }

    updateWidth = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        console.log("3️⃣ render UI");
        if (this.state.error) {
            return <h1>Something went wrong!</h1>;
        }
        return <h2>Window width: {this.state.width}px</h2>;
    }
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<LifecycleDemo />);
