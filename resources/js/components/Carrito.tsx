import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store'
import ItemCarrito from "./ItemCarrito";
import { clear } from "../redux/productoSlice";
import CartIcon from "./icons/CartIcon";
import CloseIcon from "./icons/CloseIcon";


export default function Carrito(){
    const [open, setOpen] = useState(false);

    const productos = useSelector((state: RootState) => state.productos.productos);
    const dispatch = useDispatch()

    function toggleOpen(){
        setOpen(prev => !prev)
    }

    function vaciarCarrito(){
        dispatch(clear())
    }

    return (
        <>
            <button 
                className="fixed bottom-2 right-3 z-5 bg-neutral-200 dark:bg-black hover:bg-black/10 dark:hover:bg-white/10 rounded-full px-3 py-1 dark:text-white" 
                onClick={toggleOpen}
            >
                <CartIcon />
            </button>

            <div className={`
                fixed top-0 right-0 h-full w-full sm:w-1/3
                 bg-white/70 dark:bg-black/70 backdrop-blur-xl
                  dark:text-white
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}
                flex flex-col justify-between
                z-40
                p-3
            `}>
                <div className="flex flex-col gap-10 flex-1 min-h-0">
                    <p className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">Carrito de compras</p>
                    <div className="overflow-y-auto divide-y flex flex-col gap-3 flex-1">
                        {productos.length > 0 && productos.map((producto)=>{
                            return(
                                <ItemCarrito key={producto.producto.id} carItem={producto} />
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col items-center self-stretch">
                    <div className="grid grid-cols-2 gap-3">
                        {productos.length > 0 &&
                            <button className="bg-indigo-600 text-white p-2 rounded-md disabled:opacity-50">
                                Comprar
                            </button>
                        }
                        <button onClick={vaciarCarrito} className="col-start-2 bg-indigo-600 text-white p-2 rounded-md disabled:opacity-50">
                            Vaciar carrito
                        </button>
                    </div>
                    <button className="self-end" onClick={toggleOpen}>
                        <CloseIcon />
                    </button>
                </div>
            </div>
        </>
    )
}