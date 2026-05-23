import { Link } from '@inertiajs/react'
import { Order } from '../../../models/Order'
import MainLayout from '../../layouts/MainLayout'

export default function Success({ order } : {order : Order}) {
    const total = order.item_orders.reduce(
        (acc, item) => acc + item.unit_price * item.amount, 0
    )

    return (
        <MainLayout>
                <div className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                    {/* Ícono y título */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-green-100 rounded-full p-4 mb-4">
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                            ¡Pago exitoso!
                        </h1>
                        <p className="text-sm/6 font-medium text-gray-500 dark:text-gray-400 mt-1">
                            Orden #{order.id}
                        </p>
                    </div>

                    {/* Productos */}
                    <div className="divide-y divide-gray-200 dark:divide-gray-700 mb-6">
                        {order.item_orders.map((item) => (
                            <div key={item.id} className="flex justify-between py-3">
                                <div>
                                    <p className=" text-base font-bold text-gray-800 dark:text-white">
                                        {item.product.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        x{item.amount}
                                    </p>
                                </div>
                                <p className="text-base font-medium text-gray-800 dark:text-white">
                                    ${(item.unit_price * item.amount).toLocaleString('es-AR')}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                        <p className="text-base font-bold text-gray-800 dark:text-white">Total</p>
                        <p className="font-bold text-green-500">
                            ${total.toLocaleString('es-AR')}
                        </p>
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/"
                            className="text-center py-3 font-medium bg-indigo-600 text-white p-2 rounded-md disabled:opacity-50 transition"
                        >
                            Volver al inicio
                        </Link>
                    </div>

                </div>
        </MainLayout>
    )
}