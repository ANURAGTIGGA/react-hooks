import { forwardRef, useImperativeHandle, useRef } from "react"

function TextInput(props, ref) {
    const localRef = useRef(null);

    useImperativeHandle(ref, ()=>({
        reset: () => {
            if(!localRef.current) return

            localRef.current.value = '';
            localRef.current?.focus();
        }
    }))

    return (
        <div>
            <input ref={localRef} type="text" />
        </div>
    )
}

export default forwardRef(TextInput);