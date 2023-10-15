import { useState } from "react"
import TabButton from "./TabButton";
import About from "./About";
import Posts from "./Posts";
import Contact from "./Contact";
import { Link } from 'react-router-dom';

export default function UseTransitionComp() {
    const [tab, setTab] = useState('about');

    function handleSetTab(tabname) {
        setTab(tabname);
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Back</Link>
                </li>
                <li>useTransition</li>
            </ul>
            <div className="tab-header">
                <TabButton 
                    tabname='About'
                    onClick={()=>handleSetTab('about')}
                />
                <TabButton 
                    tabname='Posts'
                    onClick={()=>handleSetTab('posts')}
                />
                <TabButton 
                    tabname='Contact'
                    onClick={()=>handleSetTab('contact')}
                />
            </div>
            <div className="tab-container">
                {tab === 'about' && <About/>}
                {tab === 'posts' && <Posts/>}
                {tab === 'contact' && <Contact/>}
            </div>
        </div>
    )
}