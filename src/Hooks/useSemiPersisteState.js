import { useEffect, useState } from "react"


const useSemiPersisteState = (key, initalState) => {

    const [value, setValue] = useState(
        localStorage.getItem(key) || initalState
    );

    useEffect(()=>{
        localStorage.setItem(key, value);
    },[key, value])

    return [value, setValue];
    
}


export default useSemiPersisteState;
