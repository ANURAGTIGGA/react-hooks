import { useState, useMemo } from "react"
import { Link } from 'react-router-dom'

const initial = new Array(29999999).fill(0).map((item,index)=>{
    return {
        id: index,
        isSelected: index === 29999998
    }
})

export default function UseMemoComp() {
    const [count, setCount] = useState(0);
    const [items] = useState(initial);

    const selectedItem = useMemo(()=>{
        return items.find((item)=>item.id === 29999998)
    },[items]);

    function handleIncrement() {
        setCount((prev)=>prev+1)
    }

    return (
        <div className="use-state">
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useMemo</li>
            </ul>
            <div>
                <div>
                    Count : {count}
                </div>
                <div>
                    Selected : {selectedItem?.id}
                </div>
                <div>
                    <button onClick={handleIncrement}>Increment</button>
                </div>
            </div>
        </div>
    )
}