import { router } from '@inertiajs/react';

export default function SortByPrice({sort, dir, className} : {sort: string, dir: string, className: string}){
    function toggleStock(){
        if(sort == "priceAsc"){
            router.visit(dir, {
                data: { sort: 'priceDesc', page: 1 }
            })
        }else{
            router.visit(dir, {
                data: { sort: 'priceAsc', page: 1 }
            })
        }
    }

    return(
        <button onClick={toggleStock} className={className}>
            {sort ==  "priceDesc" && <>↓ </>}
                Precio
            {sort ==  "priceAsc" && <> ↑</>}
        </button>
    )
}