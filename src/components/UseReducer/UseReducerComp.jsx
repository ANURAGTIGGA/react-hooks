import { useReducer } from 'react';
import reducer from './reducer';
import { Link } from 'react-router-dom';

export default function UseReducerComp() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null
    });

    function handleIncrement() {
        dispatch({type:'increment'})
    }

    function handleDecrement() {
        dispatch({type:'decrement'})
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useReducer</li>
            </ul>
            <div>
                Count : {state.count}
                <p>
                    {state.error && state.error}
                </p>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}