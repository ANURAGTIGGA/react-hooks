import { useDeferredValue, useState } from "react"
import SlowList from "./SlowList";
import { Link } from 'react-router-dom';

export default function UseDeferredValueComp() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useDeferredValue</li>
            </ul>
            <div className="deferred-value">
                <input
                    type="text"
                    placeholder="type here"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                />
                <br/>
                <SlowList text={deferredQuery} />
            </div>
        </div>
    )
}