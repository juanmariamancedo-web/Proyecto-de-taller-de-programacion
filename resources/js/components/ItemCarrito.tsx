import { useDispatch } from "react-redux";
import { CartItem } from "../../models/Producto";
import { decrease, remove } from "../redux/productoSlice";
import BackSpaceIcon from "./icons/BackSpaceIcon";

export default function ItemCarrito({carItem}: {carItem: CartItem}){
    const dispatch = useDispatch();

    function eliminarItem(){
        dispatch(remove(carItem.producto.id));
    }

    return(
        <div className="flex justify-between">
            <div>
                <p className="text-base font-bold">
                    {carItem.producto.name}
                </p>
                <p><span className="text-base font-semibold">Cantidad:</span> {carItem.cantidad}</p>
                <p><span className="text-base font-semibold">Precio:</span> ${(carItem.producto.price * carItem.cantidad).toLocaleString('es-AR')}</p>
            </div>
            <button onClick={eliminarItem} className="self-start bg-indigo-600 text-white p-2 rounded-md disabled:opacity-50">
                <BackSpaceIcon />
            </button>
        </ div>
    )
}