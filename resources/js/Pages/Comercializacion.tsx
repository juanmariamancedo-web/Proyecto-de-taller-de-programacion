import MainLayout from "../layouts/MainLayout"

export default function Comercializacion(){
    return(
        <MainLayout>
            <div className="flex flex-col items-center">
                <h1 className=" text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Comercialización
                </h1>
                <div className="grid grid-cols-2 place-content-center gap-10 p-3 sm:p-0">
                    <div className="col-span-2 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <p className="text-sm/6 font-medium">
                            En <span className="font-bold">FlowTech Performance</span> nos dedicamos a la comercialización de downpipes para autos y camionetas, ofreciendo productos orientados a mejorar el rendimiento del sistema de escape. Buscamos brindar una experiencia de compra clara, segura y confiable.
                        </p>
                    </div>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Tipos de entrega
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                <span className="font-bold">Envío a domicilio:</span> realizamos envíos a todo el país mediante servicios de mensajería y transporte.
                            </li>
                            <li>
                                <span className="font-bold">Retiro coordinado:</span> el cliente puede retirar el producto en un punto acordado previamente.
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Formas de envío
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Los envíos se realizan a través de empresas de correo o transporte, seleccionadas según la ubicación del cliente.
                        </p>
                        <p className="text-sm/6 font-medium">
                            El costo y el tiempo de envío serán informados antes de confirmar la compra.
                        </p>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Tiempos de entrega
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                <span className="font-bold">Preparación del pedido:</span> entre 24 y 72 horas hábiles luego de confirmado el pago.
                            </li>
                            <li>
                                <span className="font-bold">Entrega:</span> el tiempo dependerá del destino y del servicio de transporte elegido
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Formas de pago 
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Transferencia bancaria
                            </li>
                            <li>
                                Billeteras virtuales
                            </li>
                            <li>
                                Efectivo (solo para retiros presenciales)
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Información útil para el cliente
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Se recomienda consultar previamente la compatibilidad del producto con el modelo de vehículo.
                            </li>
                            <li>
                                Los productos requieren instalación por personal capacitado.
                            </li>
                            <li>
                                Ante cualquier duda, el cliente puede comunicarse a través de los canales de contacto disponibles.
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Consideraciones importantes
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Los productos están destinados a uso automotriz específico.
                            </li>
                            <li>
                                Algunos productos pueden no estar homologados para su uso en la vía pública.
                            </li>
                            <li>
                                La empresa no se responsabiliza por daños derivados de una instalación incorrecta.
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Cambios y devoluciones
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Se aceptan cambios únicamente por fallas de fabricación.
                            </li>
                            <li>
                                El producto debe encontrarse sin uso y en su embalaje original.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </MainLayout>
    )
}