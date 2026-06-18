import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import { Order } from "../../models/Order";
import { Link } from "@inertiajs/react";
import { Sort } from "../components/Sort";
import { router } from "@inertiajs/react";


export default function({ orden , sort}: { orden: Order, sort: string }){
    function handlePay(orderId: number){
        //Comentado a peticion del profesor por usar mercado pago
        // axios.post(`/ordenes/${orderId}/pagar`)
        //     .then(res => window.location.href = res.data.init_point)
        //     .catch(err => console.error(err.response.data.error))

        
        //Bypass mercado pago
        router.get("/success", { order_id: orderId });
    }

    return(
        <MainLayout>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Orden #{orden.id}
                </h1>
                <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10">
                    <table className="w-full min-w-[640px] bg-black/5 dark:bg-white/5 text-sm text-gray-900 dark:text-white">

                        <thead className="bg-gray-100 dark:bg-white/10">
                            <tr className="text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                <th className="px-4 py-3">
                                    <Sort 
                                        name="Item"
                                        dir={`/ordenes/${orden.id}`}
                                        sort={sort}
                                        serverArg="id"
                                        className=""
                                        search=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        name="Cantidad"
                                        dir={`/ordenes/${orden.id}`}
                                        sort={sort}
                                        serverArg="amount"
                                        className=""
                                        search=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        name="Precio unitario"
                                        dir={`/ordenes/${orden.id}`}
                                        sort={sort}
                                        serverArg="price"
                                        className=""
                                        search=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        name="Producto"
                                        dir={`/ordenes/${orden.id}`}
                                        sort={sort}
                                        serverArg="name"
                                        className=""
                                        search=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        name="Subtotal"
                                        dir={`/ordenes/${orden.id}`}
                                        sort={sort}
                                        serverArg="subtotal"
                                        className=""
                                        search=""
                                    />
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-sm">
                            {orden.item_orders?.length ? (
                                orden.item_orders.map((item, index) => {   
                                    return (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-gray-50 dark:hover:bg-white/5 transition"
                                            >
                                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                                    {index + 1}
                                                </td>
                                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                                    {item.amount}
                                                </td>
                                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                                    ${item.unit_price.toLocaleString('es-AR')}
                                                </td>
                                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                                    <Link href={`/catalogo/${item.product.name}`}>
                                                        {item.product.name}
                                                    </Link>
                                                </td>
                                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                                    ${(item.unit_price * item.amount).toLocaleString('es-AR')}
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center py-6 text-gray-500">
                                        No hay órdenes encontradas
                                    </td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4} className="text-right font-semibold px-4 py-3 text-gray-900 dark:text-white">Total</td>
                                <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">${orden.item_orders.reduce((acc, item) => acc + item.unit_price * item.amount, 0).toLocaleString('es-AR')}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {orden.state === 'created' && (
                    <button onClick={() => handlePay(orden.id)}>
                        Pagar
                    </button>
                )}
                {/* <Paginacion dir="/admin/ordenes"  pagina={pagina} paginas={paginas} /> */}
            </ div>
        </MainLayout>
    )
}