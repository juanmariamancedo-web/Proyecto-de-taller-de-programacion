import AdminLayout from "../layouts/adminLayout";
import { Link } from "@inertiajs/react";

export default function Admin(){
    return(
        <AdminLayout>
            <div className="flex flex-col items-center">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Dashboard
                </h1>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <section className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                            <header>
                                <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                                    Pedidos pendientes
                                </h2>
                            </header>

                        </section>

                        <section className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                            <header>
                                <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                                    Ticket medio
                                </h2>
                            </header>
                            
                        </section>
                        <section className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                            <header>
                                <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                                    Usuario registrado
                                </h2>
                            </header>
                            
                        </section>

                        <section className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                            <header>
                                <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                                    Pedidos entregados
                                </h2>
                            </header>
                            
                        </section>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <section className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white col-span-1 sm:col-span-2">
                            <header className="flex justify-between items-center">
                                <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                                    Últimas órdenes
                                </h2>
                                <Link href="\admin\orders" className="text-sm text-indigo-600 hover:text-indigo-500">
                                    Ver todos
                                </Link>
                            </header>
                        </section>
                        <section className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white col-span-1">
                            <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                                Top 5 productos vendidos
                            </h2>

                        </section>
                    </ div>
                </ div>
            </div>
        </AdminLayout>
    )
}