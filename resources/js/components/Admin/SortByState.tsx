import { router } from '@inertiajs/react';

export default function SortByState({sort, className, dir} : {sort: string, className: string, dir: string}){
    function toggleStock(){
        if(sort == "stateAsc"){
            router.visit(dir, {
                data: { sort: 'stateDesc', page: 1 }
            })
        }else{
            router.visit(dir, {
                data: { sort: 'stateAsc', page: 1 }
            })
        }
    }

    return(
        <button onClick={toggleStock} className={className}>
            {sort ==  "stateDesc" && <>↓ </>}
                Estado
            {sort ==  "stateAsc" && <> ↑</>}
        </button>
    )
}