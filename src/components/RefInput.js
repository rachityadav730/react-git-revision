import { useState, useEffect, useRef } from "react"

const RefInput =({ref_value,callBack}) =>{
    const [initial, setInitial ] = useState("Rachit")
    const input_ref = useRef(null)

    const handleChange = (e) =>{
        console.log("values comes on input change",input_ref.current.value)
        // setInitial(e.target.value)
        setInitial(input_ref.current.value)
        callBack(input_ref.current.value)
    }
    return <>
        <label>{ref_value}</label>
        <input ref={input_ref} onChange={handleChange} value = {initial}/>
    </>
}

export default RefInput