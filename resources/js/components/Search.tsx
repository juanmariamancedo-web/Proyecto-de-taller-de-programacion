import { useState } from "react"
import { router } from "@inertiajs/react";

export default function Search({dir} : {dir: string}){
    const [search, setSearch] = useState("");

    function handleClick(){
        router.visit(dir, {
            data: { search }
        })
    }

    return(
        <div className="grid grid-cols-4 gap-3">
            <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} className="col-span-4 sm:col-span-3 rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white" />
            <button className="col-span-4 sm:col-span-1 rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white" onClick={handleClick}>Buscar</button>
        </div>
    )
}