import { router } from '@inertiajs/react';

export default function SortByTotal({sort, className, dir} : {sort: string, className: string, dir: string}){
    function toggleStock(){
        if(sort == "stateAsc"){
            router.visit(dir, {
                data: { sort: 'totalDesc', page: 1 }
            })
        }else{
            router.visit(dir, {
                data: { sort: 'totalAsc', page: 1 }
            })
        }
    }

    return(
        <button onClick={toggleStock} className={className}>
            {sort ==  "totalDesc" && <>↓ </>}
                Total
            {sort ==  "totalAsc" && <> ↑</>}
        </button>
    )
}