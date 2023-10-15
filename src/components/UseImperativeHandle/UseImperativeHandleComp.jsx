import { useRef } from "react";
import Counter from "./Counter";
import { Link } from 'react-router-dom';
import TextInput from "./TextInput";

export default function UseImperativeHandleComp() {
    const counterRef = useRef(null);
    const inputRef = useRef(null);

    function handleReset() {
        counterRef.current?.reset();
    }

    function handleInputRef() {
        inputRef.current?.reset();
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useImperativeHandle</li>
            </ul>
           <Counter ref={counterRef} /> 
           <div>
                <button onClick={handleReset}>
                    Reset from parent!
                </button>
           </div>
           <div>
                <p>Using local ref with forward ref</p>
                <TextInput ref={inputRef} />
                <button onClick={handleInputRef}>RESET input</button>
           </div>
        </div>
    )
}