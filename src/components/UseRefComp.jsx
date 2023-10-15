import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'

export default function UseRefComp() {
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useEffect</li>
            </ul>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Type Something ..." 
            />
        </div>
    )
}