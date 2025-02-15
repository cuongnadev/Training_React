import React from "react";
import ReactDOM from "react-dom/client";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.lauchClock();
        this.state = {
            currentTime: (new Date()).toLocaleString()
        }
    }

    lauchClock() {
        console.log(this);
        setInterval(() => {
            console.log("updating...");
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000);
    }
    render() {
        console.log(this);
        console.log("Rendering...");
        return (
            <div>
                {this.state.currentTime}
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Clock />);