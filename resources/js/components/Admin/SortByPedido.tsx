import { router } from '@inertiajs/react';

export default function SortByPedido({sort, className, dir} : {sort: string, className: string, dir: string}){
    function toggleStock(){
        if(sort == "pedidoAsc"){
            router.visit(dir, {
                data: { sort: 'pedidoDesc', page: 1 }
            })
        }else{
            router.visit(dir, {
                data: { sort: 'pedidoAsc', page: 1 }
            })
        }
    }

    return(
        <button onClick={toggleStock} className={className}>
            {sort ==  "pedidoDesc" && <>↓ </>}
                Pedido
            {sort ==  "pedidoAsc" && <> ↑</>}
        </button>
    )
}