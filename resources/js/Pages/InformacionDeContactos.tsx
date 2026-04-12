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
                    <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto dark:hidden"
                    />
                    <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                        Envie una consulta
                    </h1>
                    </div>
                    <form action="#" method="POST" className="grid grid-cols-6 gap-3">
                        <div className="col-span-full sm:col-span-4">
                            <label htmlFor="nombre" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                Nombre
                            </label>
                        <div className="mt-2">
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            required
                            className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                        />
                        </div>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="apellido" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    id="apellido"
                                    name="apellido"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                Email
                            </label>
                            <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                Mensaje
                            </label>
                            <div className="mt-2">
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                required
                                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                            </div>
                        </div>
                        <div className="col-span-full md:col-span-4 flex flex-col sm:flex-row justify-around md:justify-between items-center gap-3">
                            <button
                                type="submit"
                                className="basis-full sm:basis-1/2 md:basis-1/3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                                >
                                Enviar
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    </ MainLayout>
  )
}
