import { router } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function SortByName({sort, className, dir, children} : {sort: string, className: string, dir: string, children: ReactNode}){
    function toggleStock(){
        if(sort == "nameAsc"){
            router.visit(dir, {
                data: { sort: 'nameDesc', page: 1 }
            })
        }else{
            router.visit(dir, {
                data: { sort: 'nameAsc', page: 1 }
            })
        }
    }

    return(
        <button onClick={toggleStock} className={className}>
            {sort ==  "nameDesc" && <>↓ </>}
                {children}
            {sort ==  "nameAsc" && <> ↑</>}
        </button>
    )
}