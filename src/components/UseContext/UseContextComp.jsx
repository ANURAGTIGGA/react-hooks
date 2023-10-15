import { useState } from "react";
import Dashboard from "./Dashboard";
import DashboardContext from "./DashboardContext";
import { Link } from 'react-router-dom'

export default function UseContextComp() {
    const [user] = useState({
        isSubscribed: true,
        name: 'Bob'
    })

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useContext</li>
            </ul>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
}