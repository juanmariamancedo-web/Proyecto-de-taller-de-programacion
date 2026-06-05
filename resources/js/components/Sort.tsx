import { router } from "@inertiajs/react"

export function Sort({dir, sort, className, serverArg, name} : {dir: string, sort: string, className: string, serverArg: string, name: string}){
    function toggleStock(){
        if(sort == `${serverArg}Asc`){
            router.visit(dir, {
                data: { sort: `${serverArg}Desc`, page: 1 }
            })
        }else{
            router.visit(dir, {
                data: { sort: `${serverArg}Asc`, page: 1 }
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