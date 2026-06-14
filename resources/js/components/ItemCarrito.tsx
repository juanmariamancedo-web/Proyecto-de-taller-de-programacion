import { useDispatch } from "react-redux";
import { CartItem } from "../../models/Producto";
import { decrease, remove } from "../redux/productoSlice";
import BackSpaceIcon from "./icons/BackSpaceIcon";
import { useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { syncCarrito } from "../redux/carritoThunks";

export default function ItemCarrito({carItem}: {carItem: CartItem}){
    const dispatch = useDispatch<AppDispatch>();

    async function eliminarItem(){
        dispatch(remove(carItem.product.id));
        await dispatch(syncCarrito())   
    }

    return(
        <div className="flex justify-between">
            <div>
                <p className="text-base font-bold">
                    {carItem.product.name}
                </p>
                <p><span className="text-base font-semibold">Cantidad: </span> 
                    {carItem.amount}
                </p>
                <p><span className="text-base font-semibold">Precio: </span> 
                    ${(carItem.product.price * carItem.amount).toLocaleString('es-AR')}
                </p>
            </div>
            <button onClick={eliminarItem} className="self-start bg-indigo-600 text-white p-2 rounded-md disabled:opacity-50">
                <BackSpaceIcon />
            </button>
        </ div>
    )
}