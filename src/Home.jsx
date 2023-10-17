import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div className="home">
            <h1>Welcome to React HOOKs</h1>
            <ul className="tabs">
                <li>
                    <Link to="/usestate">useState</Link>
                </li>
                <li>
                    <Link to="/useeffect">useEffect</Link>
                </li>
                <li>
                    <Link to="/usememo">useMemo</Link>
                </li>
                <li>
                    <Link to="/usecallback">useCallback</Link>
                </li>
                <li>
                    <Link to="/usecontext">useContext</Link>
                </li>
                <li>
                    <Link to="/useref">useRef</Link>
                </li>
                <li>
                    <Link to="/usereducer">useReducer</Link>
                </li>
                <li>
                    <Link to="/useimperativehandle">useImperativeHandle</Link>
                </li>
                <li>
                    <Link to="/usetransition">useTransition</Link>
                </li>
                <li>
                    <Link to="/usedeferredvalue">useDeferredValue</Link>
                </li>
            </ul>
        </div>
    )
}