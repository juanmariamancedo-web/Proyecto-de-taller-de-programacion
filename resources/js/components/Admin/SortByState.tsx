import { router } from '@inertiajs/react';

export default function SortByState({sort, className} : {sort: string, className: string}){
    function toggleStock(){
        if(sort == "stateAsc"){
            router.visit('/admin/catalogo', {
                data: { sort: 'stateDesc', page: 1 }
            })
        }else{
            router.visit('/admin/catalogo', {
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