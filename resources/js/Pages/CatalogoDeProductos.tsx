import { Link, Head } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";
import Producto from "../../models/Producto";
import Paginacion from "../components/Paginacion";
import Search from "../components/Search";
import { Sort } from "../components/Sort";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function CatalogoDeProductos({ productos , paginas, pagina, sort, search}: { productos: Producto[], paginas: number, pagina: number, sort: string, search: string }){
    const carItems = useSelector((state: RootState) => state.productos.productos)

    // let productos : Producto[] = [
    //     {
    //         name: "Down Pipe E Intermedio Amarok V6 3.0 Acero Inox",
    //         img: "/imgs/downpipe-amarok-v6.webp",
    //         price: 763000,
    //         link: ""
    //     },
    //     {
    //         name: "Down Pipe Volkswagen Amarok - 2.0 Bitdi 180cv",
    //         img: "/imgs/downpipe-amarok-2.0.webp",
    //         price: 225000,
    //         link: ""
    //     },
    //     {
    //         name: "Downpipe Hilux 2.8 Y 2.4",
    //         img: "/imgs/downpipe-hilux.webp",
    //         price: 197000,
    //         link: ""
    //     },
    //     {
    //         name: "Down Pipe Chevrolet S-10 2.8 Td 200cv",
    //         img: "/imgs/downpipe-s10.webp",
    //         price: 235000,
    //         link: ""
    //     },
    //     {
    //         name: "Down Pipe Volkswagen Vento - 2.0t",
    //         img: "/imgs/downpipe-vento-2.0.webp",
    //         price: 247170,
    //         link: ""
    //     },
    //     {
    //         name: "Downpipe / Escape Fiat Toro",
    //         img: "/imgs/downpipe-fiat-toros.webp",
    //         price: 180000,
    //         link: ""
    //     }
    // ]

    return(
        <>
            <Head title="Catálogo"/>
            <MainLayout>
                <div className="flex flex-col items-center">
                    <h1 className=" text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                        Catálogo
                    </h1>
                    <section className="p-3 sm:p-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="col-span-1 sm:col-span-2">
                            <Search dir="/catalogo" sort={sort} value={search} />
                        </div>
                        <div className="col-span-1 sm:col-span-2 grid grid-cols-subgrid gap-3">
                            <Sort 
                                sort={sort} dir="/catalogo"
                                name="Precio"
                                serverArg="price"
                                className="rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                                search={search}
                            />
                            <Sort 
                                sort={sort} dir="/catalogo"
                                name="Stock"
                                serverArg="stock"
                                search={search}
                                className="rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                            />
                        </div>
                        {productos?.length > 0 && productos.map((producto)=>{
                            const stockPreviamenteAgregado = carItems.find((item)=> item.product.id == producto.id)?.amount || 0;

                            return(
                                <Link 
                                    href={"/catalogo/" + producto.name} 
                                    key={producto.name} 
                                    className="shadow-sm overflow-hidden hover:shadow-md transition grid-rows-subgrid rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white"
                                >
                                    <div className="w-full h-48 flex items-center justify-center p-4">
                                        <img 
                                            src={producto.image} 
                                            alt={producto.name} 
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                    <div className="p-3 flex flex-col gap-1">
                                        <h2 className="text-sm font-medium leading-tight">
                                            {producto.name}
                                        </h2>
                                        <p className="text-base font-semibold">
                                            ${producto.price.toLocaleString('es-AR')}
                                        </p>
                                            {producto.stock > 0?
                                                <>
                                                    <p className="text-base font-mono">
                                                        {producto.stock - stockPreviamenteAgregado} unidades disponibles 
                                                    </p>
                                                    <p className="text-base font-mono">
                                                        {stockPreviamenteAgregado} unidades en carrito
                                                    </p>
                                                </>
                                                :
                                                <>
                                                    <p className="text-base font-mono">
                                                        Sin stock
                                                    </p>
                                                </>
                                            }
                                        
                                    </div>
                                </Link>
                            )
                        })}
                        {productos.length === 0 && (
                            <div className="col-span-1 sm:col-span-2 flex items-center justify-center h-full min-h-[300px]">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-center text-black dark:text-white sm:text-7xl">
                                No se han encontrado productos
                                </h2>
                            </div>
                        )}
                        <div className="col-span-1 sm:col-span-2">
                            <Paginacion paginas={paginas} pagina={pagina} dir="/catalogo" />
                        </div>
                    </section>
                </ div>
            </MainLayout>
        </>
    )

}