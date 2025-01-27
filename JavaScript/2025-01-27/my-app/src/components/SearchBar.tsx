"use client";

import { useRef } from "react";

export default function SearchBar()
{
    const lastTimeExecuted = useRef<null|number>(null);
    const lastExecutionId = useRef<null|number>(null);

    async function filterValues()
    {
        console.log("Vykdomas filtravimaas");
    }

    function onChangeDebounced(event: React.ChangeEvent<HTMLInputElement>)
    {
        console.log("kazka darau");
        const newValue = event.target.value;
        
        console.log(lastExecutionId);
        if((lastTimeExecuted.current || (lastExecutionId.current && Date.now() - lastTimeExecuted.current <= 1000)))
        {
            clearTimeout(lastExecutionId.current);
        }
        lastExecutionId.current = setTimeout(()=>{
            filterValues();
        }, 1000);

        lastTimeExecuted.current = Date.now();
    }

    return (<div className="shadow-md rounded-md p-4 m-4 border">
    <h3>Paieška</h3>
    <input 
        type="text" 
        className="py-1 px-3 outline-none focus:shadow-lg border w-full" 
        name="title" 
        onChange={onChangeDebounced} 
    />
  </div>)
}