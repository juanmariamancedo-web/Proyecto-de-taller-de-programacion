import AdminLayout from "../../layouts/adminLayout";
import { Order } from "../../../models/Order";
import Paginacion from "../../components/Paginacion";
import EntregarOrden from "../../components/EntregarOrden";

export default function({ ordenes , paginas, pagina}: { ordenes: Order[], paginas: number, pagina: number }){

    return(
        <AdminLayout>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Ordenes
                </h1>
                <table className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white border border-gray-200 dark:border-white/10 overflow-hidden">
                    <thead className="bg-gray-100 dark:bg-white/10">
                        <tr className="text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                            <th className="px-4 py-3">Pedido</th>
                            <th className="px-4 py-3">Cliente</th>
                            <th className="px-4 py-3">Total</th>
                            <th className="px-4 py-3">Estado</th>
                            <th className="px-4 py-3">Acciones</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-sm">
                        {ordenes?.length ? (
                            ordenes.map((order) => {   
                                const total = order.item_orders.reduce(
                                    (acc, item) => acc + item.unit_price * item.amount, 0
                                ) 

                                return (
                                        <tr
                                            key={order.id}
                                            className="hover:bg-gray-50 dark:hover:bg-white/5 transition"
                                        >
                                            <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                                #{order.id}
                                            </td>

                                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                                {`${order.user?.name ?? 'Sin'} ${order.user?.lastname ?? 'cliente'}`}
                                            </td>

                                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                                ${total}
                                            </td>
                                            <EntregarOrden order={order} />
                                        </tr>
                                    )
                                }
                            )
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-6 text-gray-500">
                                    No hay órdenes
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Paginacion dir="/admin/ordenes"  pagina={pagina} paginas={paginas} />
            </ div>
        </AdminLayout>
    )
}