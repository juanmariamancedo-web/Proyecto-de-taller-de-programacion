import { router } from '@inertiajs/react';

export default function SortByPrice({sort} : {sort: string}){
    function toggleStock(){
        if(sort == "priceAsc"){
            router.visit('/admin/catalogo', {
                data: { sort: 'priceDesc', page: 1 }
            })
        }else{
            router.visit('/admin/catalogo', {
                data: { sort: 'priceAsc', page: 1 }
            })
        }
    }

    return(
        <button onClick={toggleStock}>
            {sort ==  "priceDesc" && <>↓ </>}
                Precio
            {sort ==  "priceAsc" && <> ↑</>}
        </button>
    )
}