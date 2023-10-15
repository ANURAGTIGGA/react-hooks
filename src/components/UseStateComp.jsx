import { useState } from "react"
import { Link } from 'react-router-dom'

export default function UseStateComp() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount((prev)=>prev+1)
    }

    function handleDecrement() {
        setCount((prev)=>prev-1)
    }

    return (
        <div className="use-state">
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useState</li>
            </ul>
            <div>
                <div>
                    Count : {count}
                </div>
                <div>
                    <button onClick={handleDecrement}>Decrement</button>
                    <button onClick={handleIncrement}>Increment</button>
                </div>
            </div>
        </div>
    )
}