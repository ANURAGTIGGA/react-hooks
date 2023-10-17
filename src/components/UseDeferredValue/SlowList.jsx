import { memo } from "react";

function SlowList({text}) {
    const items = [];
    for(let i=0;i<250;i++) {
        items.push(<SlowItem key={i} text={text} />)
    }

    return <ul className="items">{items}</ul>
}

function SlowItem({text}) {
    const startTime = performance.now();
    while(performance.now() - startTime < 1) {
        //do nothing for 1ms per item
    }

    return <li>Text : {text}</li>
}

export default memo(SlowList);