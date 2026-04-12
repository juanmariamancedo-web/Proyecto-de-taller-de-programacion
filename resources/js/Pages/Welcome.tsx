import { Link } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";
import Producto from "../../models/Producto";

export default function Welcome(){
    let destacados : Producto[] = [
        {
            name: "Down Pipe E Intermedio Amarok V6 3.0 Acero Inox",
            img: "/imgs/downpipe-amarok-v6.webp",
            price: 763000,
            link: ""
        },
        {
            name: "Downpipe Hilux 2.8 Y 2.4",
            img: "/imgs/downpipe-hilux.webp",
            price: 197000,
            link: ""
        },
    ]

    return(
        <MainLayout>
            <>
            
                <div className="p-3 sm:p-0 min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-black dark:text-white sm:text-7xl">
                        Potenciá el rendimiento de tu vehículo
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-red-400 dark:text-gray-400 sm:text-xl/8">
                        Downpipes para autos y camionetas diseñados para optimizar el flujo de gases y mejorar la respuesta del motor.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/catalogo" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                            Ver productos
                        </Link>
                    </div>
                </div>
                <section className="grid grid-cols-2 place-content-center gap-10 p-3 sm:p-0">
                    <article className="col-span-2 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Sobre nosotros
                        </h2>
                        <p className="text-sm/6 font-medium">
                            En <span className="font-bold">FlowTech Performance</span> nos especializamos en la venta de downpipes orientados al rendimiento automotriz.
                        </p>
                        <p className="text-sm/6 font-medium">
                            Ofrecemos productos seleccionados y asesoramiento básico para ayudarte a elegir la mejor opción para tu vehículo.
                        </p>
                    </article>
                    <article className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Qué ofrecemos
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Downpipes para distintos modelos de autos y camionetas
                            </li>
                            <li>
                                Mejora en el rendimiento del motor
                            </li>
                            <li>
                                Productos pensados para uso específico
                            </li>
                            <li>
                                Asesoramiento en compatibilidad
                            </li>
                        </ul>
                    </article>
                    <article className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Ventajas
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                Productos de calidad
                            </li>
                            <li>
                                Atención personalizada  
                            </li>
                            <li>
                                Información clara y precisa
                            </li>
                            <li>
                                Envíos a todo el país
                            </li>
                        </ul>
                    </article> 
                    <div className="col-span-2 flex flex-col items-center gap-10">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Productos destacados
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {destacados?.length > 0 && destacados.map((producto)=>{
                                return(
                                    <Link 
                                        href={producto.link} 
                                        key={producto.name} 
                                        className="shadow-sm overflow-hidden hover:shadow-md transition grid-rows-subgrid rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white"
                                    >
                                        <div className="w-full h-48 flex items-center justify-center p-4">
                                            <img 
                                                src={producto.img} 
                                                alt={producto.name} 
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                        <div className="p-3 flex flex-col gap-1">
                                            <h2 className="text-sm font-medium leading-tight">
                                                {producto.name}
                                            </h2>
                                            <p className="text-base font-semibold">
                                                ${producto.price.toLocaleString()}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <Link href="/catalogo" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                            Ver productos
                        </Link>
                    </div>
                </section>
            </>
        </MainLayout>
    )
}