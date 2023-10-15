import { useCallback, useState } from "react";
import { Link } from 'react-router-dom';
import Search from "./Search";

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james'
];

export default function UseCallbackComp() {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback((text) => {
        const filteredUsers = allUsers.filter((user)=>{
            return user.includes(text)
        });
        setUsers(filteredUsers);
    }, []);

    function shuffle(users) {
        let newList = [...users];
        newList = newList.sort(()=>Math.random()-0.5);
        setUsers(newList);
    }

    return (
        <div className="use-callback">
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useCallback</li>
            </ul>

            <button onClick={()=>shuffle(users)}>
                Shuffle
            </button>
            <Search onChange={handleSearch}></Search>
            <div>
                {
                    users && users.map((user)=>{
                        return <p key={user}>{user}</p>
                    })
                }
            </div>
        </div>
    )
}

