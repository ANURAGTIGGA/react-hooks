import { forwardRef, useImperativeHandle, useState } from "react"

function Counter(props, ref) {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count+1);
    }

    function handleDecrement() {
        setCount(count-1);
    }

    function reset() {
        setCount(0);
    }

    useImperativeHandle(ref, ()=>({
        reset
    }))

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
} 

export default forwardRef(Counter);