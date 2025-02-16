import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter</h2>
            <p data-testid="counter-value">Current Count: {count}</p>
            <button onClick={() => setCount(count => count + 1)}>Increase</button>
            <button onClick={() => setCount(count => count - 1)}>Decrease</button>
        </div>
    );
}

export default Counter;