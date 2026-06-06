import { router } from "@inertiajs/react"

export function Sort({dir, sort="", className, serverArg, name, search=""} : {dir: string, sort: string, className: string, serverArg: string, name: string, search: string}){
    function toggleStock(){
        if(sort == `${serverArg}Asc`){
            router.visit(dir, {
                data: { sort: `${serverArg}Desc`, page: 1, search },
                preserveScroll: true
            })
        }else{
            router.visit(dir, {
                data: { sort: `${serverArg}Asc`, page: 1, search },
                preserveScroll: true
            })
        }
    }

    return(
        <button onClick={toggleStock} className={className}>
            {sort ==  `${serverArg}Desc` && <>↓ </>}
                {name}
            {sort ==  `${serverArg}Asc` && <> ↑</>}
        </button>   
    ) 
}