import Producto from "../../models/Producto";
import MainLayout from "../layouts/MainLayout";

export default function Producto({producto} : {producto : Producto}){
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
                    <button className=" bg-indigo-600 text-white p-2 rounded-md disabled:opacity-50">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </MainLayout>
    )
}