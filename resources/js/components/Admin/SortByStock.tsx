import { router } from '@inertiajs/react';

export default function OrderStock({sort, dir, className} : {sort : string, dir: string, className: string}){
    function toggleStock(){
        if(sort == "stockDesc"){
            router.visit(dir, {
                data: { sort: 'stockAsc', page: 1 }
            })
        }else{
            router.visit(dir, {
                data: { sort: 'stockDesc', page: 1 }
            })
        }
    }

    return(
        <button onClick={toggleStock} className={className}>
            {sort ==  "stockDesc" && <>↓ </>}
                Stock
            {sort ==  "stockAsc" && <> ↑</>}
        </button>
    )
}