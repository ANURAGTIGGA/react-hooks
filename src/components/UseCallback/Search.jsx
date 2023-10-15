import { memo } from "react";

function Search({onChange}) {
    console.log('search rendered!');
    
    return (
        <input
            type="text"
            placeholder="search"
            onChange={(e)=>onChange(e.target.value)}    
        />
    )
}

export default memo(Search);