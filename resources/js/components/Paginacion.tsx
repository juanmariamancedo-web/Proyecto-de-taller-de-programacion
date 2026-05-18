import { Link } from "@inertiajs/react";

export default function Paginacion({ paginas, pagina }: { paginas: number, pagina : number }) {
    return (
        <div className="flex justify-center gap-3">
            
            {/* Primer pagina */}
            {pagina > 1 && 
                <Link 
                className="shadow-sm overflow-hidden hover:shadow-md transition grid-rows-subgrid rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white"
                href={`/catalogo?page=1`} >
                    1
                </Link>
            }

            {pagina > 3 && <span>...</span>}

            {/* Ir a pagina anterior */}
            {pagina > 2 && 
                <Link 
                    className="shadow-sm overflow-hidden hover:shadow-md transition grid-rows-subgrid rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white"
                    href={`/catalogo?page=${pagina - 1}`} 
                >
                    {pagina - 1}
                </Link>
            }

            <span className="shadow-sm overflow-hidden hover:shadow-md transition grid-rows-subgrid rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                {pagina}
            </span>

            {/* Ir a siguiente pagina */}
            {pagina < paginas - 1 &&
                <Link 
                    className="shadow-sm overflow-hidden hover:shadow-md transition grid-rows-subgrid rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white"
                    href={`/catalogo?page=${pagina + 1}`}   
                >
                    {pagina + 1}
                </Link>
            }
            
            {pagina < paginas - 2 && <span>...</span>}

            {/* Ultima pagina */}
            {pagina < paginas && 
                <Link 
                    className="shadow-sm overflow-hidden hover:shadow-md transition grid-rows-subgrid rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white"
                    href={`/catalogo?page=${paginas}`} >
                    {paginas}
                </Link>
            }

        </div>
    );
}