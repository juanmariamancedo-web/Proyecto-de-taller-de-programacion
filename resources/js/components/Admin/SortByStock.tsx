import { router } from '@inertiajs/react';

export default function OrderStock({sort} : {sort : string}){
    function toggleStock(){
        if(sort == "stockDesc"){
            router.visit('/admin/catalogo', {
                data: { sort: 'stockAsc', page: 1 }
            })
        }else{
            router.visit('/admin/catalogo', {
                data: { sort: 'stockDesc', page: 1 }
            })
        }
    }

    return(
        <button onClick={toggleStock}>
            {sort ==  "stockDesc" && <>↓ </>}
                Stock
            {sort ==  "stockAsc" && <> ↑</>}
        </button>
    )
}