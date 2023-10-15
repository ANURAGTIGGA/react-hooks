import { useContext } from "react"
import DashboardContext from "./DashboardContext"

export function Sidebar() {
    const user = useContext(DashboardContext);
    return (
        <div className="sidebar">
            <p>Sidebar</p>
            {user.name}
        </div>
    )
}

export function Profile() {
    const user = useContext(DashboardContext);
    return (
        <div className="profile">
            <p>Profile</p>
            {user.name}
        </div>
    )
}

