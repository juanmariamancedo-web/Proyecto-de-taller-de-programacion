import Contact from "../components/Contact";
import MainLayout from "../layouts/MainLayout";

export default function InformacionDeContactos() {
  return (
    <MainLayout>
        <>
        {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-white dark:bg-gray-900">
            <body class="h-full">
            ```
        */}
            <div className="flex flex-col items-center">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Contacto
                </h1>
                <div className="grid grid-cols-2 place-content-center gap-10 p-3 sm:p-0">
                    <div className="col-span-2 p-3 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <p className="text-sm/6 font-medium">
                            En [Nombre de tu tienda] estamos disponibles para ayudarte con cualquier consulta sobre nuestros productos, compatibilidades o procesos de compra.
                        </p>
                        <p className="text-sm/6 font-medium">
                            Si tenés dudas sobre qué downpipe es adecuado para tu vehículo, no dudes en comunicarte con nosotros.
                        </p>
                    </div>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Información de contacto
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                <span className="font-bold">Titular:</span> Juan Mancedo
                            </li>
                            <li>
                                <span className="font-bold">Ubicación:</span> Corrientes, Argentina
                            </li>
                            <li>
                                <span className="font-bold">Teléfono: </span> +54 9 XXX XXX XXXX
                            </li>
                            <li>
                                <span className="font-bold">Email:</span> juanmariamancedo@icloud.com
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Horarios de atención
                        </h2>
                        <ul className="list-disc list-inside text-sm/6 font-medium">
                            <li>
                                <span className="font-bold">Lunes a viernes:</span> 9:00 a 18:00 hs
                            </li>
                        </ul>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Soporte técnico
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Brindamos asesoramiento básico sobre compatibilidad de productos.
        No realizamos instalaciones, pero podemos orientarte para que el proceso sea correcto.
                        </p>
                    </section>
                    <section className="col-span-2 p-3 md:col-span-1 rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white">
                        <h2 className="text-xl lg:text-2xl text-balance text-black dark:text-white font-bold">
                            Importante 
                        </h2>
                        <p className="text-sm/6 font-medium">
                            Debido a la naturaleza técnica de los productos, se recomienda verificar previamente la compatibilidad con el modelo de vehículo antes de realizar cualquier consulta o compra.
                        </p>
                    </section>
            </div>
                <div className="flex min-h-full min-w-full flex-col justify-center gap-10 px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                        Envie una consulta
                    </h2>
                    </div>
                    <Contact />
                </div>
            </div>
        </>
    </ MainLayout>
  )
}
