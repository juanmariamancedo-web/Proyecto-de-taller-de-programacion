import { useDispatch } from "react-redux";
import Producto from "../../models/Producto";
import MainLayout from "../layouts/MainLayout";
import { add, addWithQuantity } from "../redux/productoSlice";
import { useState } from "react";

export default function Producto({producto} : {producto : Producto}){
    const dispatch = useDispatch();
    const [cantidad, setCantidad] = useState(1);

    function addProducto(){
        dispatch(addWithQuantity({
            producto: producto,
            cantidad: cantidad
            },
        ));

        alert("Item agregado");
    }

    return(
        <MainLayout>
            <div className="p-3 sm:p-0 grid grid-cols-2 gap-3 auto-rows-[384px]">
                <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                    <img src={producto.img} alt={"Imagen de " + producto.name} className="max-w-full max-h-full object-contain rounded-md" />
                </div>
                <div className="flex flex-col items-center justify-evenly col-span-2 sm:col-span-1">
                    <h1 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">{producto.name}</h1>
                    <div>
                        <p className="text-base font-bold">
                            ${producto.price.toLocaleString('es-AR')}
                        </p>
                        <p className="text-base font-medium">
                            {producto.description}
                        </p>
                    </div>
                    <input type="number" value={cantidad} onChange={(e)=>setCantidad(parseInt(e.target.value))}  className="rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"/>
                    <button className=" bg-indigo-600 text-white p-2 rounded-md disabled:opacity-50" onClick={addProducto}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </MainLayout>
    )
}