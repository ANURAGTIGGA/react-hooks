import { useTransition } from "react"

export default function TabButton({tabname, onClick}) {
    const [isPending, startTransition] = useTransition();

    function handleClick(tabname) {
        startTransition(()=>{
            onClick()
        })
    }

    if(isPending) {
        return <span>Loading...</span>
    }

    return (
        <button onClick={handleClick}>
            {tabname}
        </button>
    )
}