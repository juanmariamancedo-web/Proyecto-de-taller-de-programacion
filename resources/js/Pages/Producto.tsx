import { useDispatch } from "react-redux";
import { Producto } from "../../models/Producto";
import MainLayout from "../layouts/MainLayout";
import { add, addWithQuantity } from "../redux/productoSlice";
import { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { syncCarrito } from "../redux/carritoThunks";
import { AppDispatch } from "../redux/store";

export default function Producto({producto} : {producto : Producto}){
    const [showToast, setShowToast] = useState(false);
    const [cantidad, setCantidad] = useState(producto.stock > 0? 1: 0);
    const dispatch = useDispatch<AppDispatch>();
    const props = usePage().props as any;

    useEffect(()=>{
        console.log(producto)
    }, [])

    async function addProducto(){

        if(!props?.auth?.user){
            router.visit("\\formulario-de-login");
        }
        
        dispatch(addWithQuantity({
            producto: producto,
            cantidad: cantidad
            },
        ));

        await dispatch(syncCarrito())

        setShowToast(true);

        setTimeout(() => setShowToast(false), 2000);
    }

    function cambiarCantidad(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        if(parseInt(e.target.value) <= producto.stock){
            setCantidad(parseInt(e.target.value))
        }
    }

    return(
        <MainLayout>
            <>
                
                <div className="p-3 sm:p-0 grid grid-cols-2 gap-3 auto-rows-[384px]">
                    <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                        <img src={producto.image} alt={"Imagen de " + producto.name} className="max-w-full max-h-full object-contain rounded-md" />
                    </div>
                    <div className="flex flex-col items-center justify-evenly col-span-2 sm:col-span-1">
                        <h1 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">{producto.name}</h1>
                            <p className="text-base font-bold">
                                ${producto.price.toLocaleString('es-AR')}
                            </p>
                        {producto.stock > 0?
                            (
                                <>
                                    <input type="number" value={cantidad} onChange={cambiarCantidad}  className="rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"/>
                                    <p className="text-base font-medium">
                                        Stock: {producto.stock}
                                    </p>
                                    <button className=" bg-indigo-600 text-white p-2 rounded-md disabled:opacity-50" onClick={addProducto}>
                                        Añadir al carrito
                                    </button>
                                </>
                            )
                            :
                            (
                            <span className="bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white rounded">
                                Producto sin stock
                            </span>    
                            )
                        }
                        <span className={` ${showToast? "": "invisible "}bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white rounded`}>
                            Producto agregado
                        </span>
                    </div>
                </div>
            </>
        </MainLayout>
    )
}