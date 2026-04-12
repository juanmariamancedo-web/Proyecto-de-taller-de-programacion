import MainLayout from "../layouts/MainLayout";
import { Link } from "@inertiajs/react";

export default function TerminosYUsos(){
    return(
        <MainLayout>
            <div className="flex flex-col items-center">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold gap-x-4 pb-6 lg:pb-10">
                    Terminos y usos
                </h1>
                <div className="p-3 sm:p-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <section className="col-span-2 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Introducción
                        </h2>
                        <p className="text-sm/6 font-medium">
                            El presente sitio web pertenece a [Nombre de tu tienda], dedicado a la comercialización de downpipes para autos y camionetas.
                        </p>
                        <p className="text-sm/6 font-medium">
                            El acceso y uso de este sitio implica la aceptación de los presentes Términos y Usos. En caso de no estar de acuerdo, se recomienda no utilizar el sitio.
                        </p>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Uso del sitio
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Brindar información veraz en los formularios del sitio.
                            </li>
                            <li>
                                No utilizar el sitio con fines ilegales o indebidos.
                            </li>
                            <li>
                                No realizar acciones que puedan dañar, sobrecargar o alterar el funcionamiento del sitio web.
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Productos y servicios
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Los productos publicados en el sitio tienen carácter informativo.
    Las imágenes son ilustrativas y pueden presentar variaciones respecto al producto real.
                        </p>
                        <p className="text-sm/6 font-medium">
                            Los precios y la disponibilidad pueden modificarse sin previo aviso.
                        </p>
                    </section>
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Proceso de compra
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Las compras están sujetas a confirmación de pago y disponibilidad del producto.
                            Una vez confirmado el pago, se procederá a la preparación y envío del pedido según las condiciones establecidas.
                        </p>
                    </section>
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">Envíos y entregas</h2>
                        <p className="text-sm/6 font-medium">
                            Los envíos se realizan mediante servicios de transporte seleccionados según la ubicación del cliente.
                        </p>
                        <p className="text-sm/6 font-medium">
                            Los tiempos de entrega son estimados y pueden variar por factores externos.
                        </p>
                    </section>
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Garantía y postventa
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Se aceptan cambios únicamente por fallas de fabricación.
                            </li>
                            <li>
                                El producto debe encontrarse sin uso y en su embalaje original.
                            </li>
                            <li>
                                No se aceptan devoluciones por errores en la elección del producto por parte del cliente.
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Responsabilidad del uso
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Los productos ofrecidos están destinados a uso automotriz específico.
                        </p>
                        <p className="text-sm/6 font-medium">
                            La empresa no se responsabiliza por:
                        </p>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Daños ocasionados por instalación incorrecta.
                            </li>
                            <li>
                                Uso inadecuado del producto.
                            </li>
                        </ul>
                        <p className="text-sm/6 font-medium">
                            La empresa no se responsabiliza por:
                        </p>
                    </section>
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Uso en vía pública
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Algunos productos pueden no estar homologados para su uso en la vía pública, siendo su utilización exclusiva para competición o uso fuera de carretera.
                        </p>
                    </section>
                    
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Política de privacidad.
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Los datos personales proporcionados por el usuario serán utilizados únicamente para fines de contacto, gestión de consultas y procesos de compra.
                        </p>
                        <p className="text-sm/6 font-medium">
                            La empresa se compromete a no compartir dicha información con terceros sin consentimiento del usuario.
                        </p>
                    </section>
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Contacto
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Para consultas o reclamos, el usuario puede comunicarse a través de los medios indicados en la sección de 
                            <Link
                                href="/contacto"
                                className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                                contacto 
                            </Link>
                            del sitio.
                        </p>
                    </section>
                    <section className="col-span-2 md:col-span-1 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Garantía y responsabilidad
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Los productos están destinados a uso automotriz específico. La empresa no se responsabiliza por daños derivados de una instalación incorrecta.
                        </p>
                    </section>
                </div>
            </div>
        </MainLayout>
    )
}