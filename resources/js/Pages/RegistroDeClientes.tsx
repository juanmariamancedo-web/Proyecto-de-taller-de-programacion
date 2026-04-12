import { Link } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";

export default function RegistroDeClientes() {
  return (
    <MainLayout>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white dark:bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full min-w-full flex-col justify-center gap-10 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto dark:hidden"
          />
          <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Registre su cuenta
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
        <div className="col-span-full">
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
            <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                Contraseña
            </label>
            </div>
            <div className="mt-2">
            <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
            </div>
        </div>
        <div className="col-span-full">
            <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                Repita su contraseña
            </label>
            </div>
            <div className="mt-2">
            <input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
            </div>
        </div>
        <div className="col-span-3 sm:col-span-2">
            <label htmlFor="ciudad" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
            Ciudad
            </label>
            <div className="mt-2">
            <input
                id="ciudad"
                name="ciudad"
                type="text"
                required
                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            />
            </div>
        </div>
        <div className="col-span-3 sm:col-span-2">
            <label htmlFor="provincia" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                Provincia
            </label>
            <div className="mt-2">
                <input
                id="provincia"
                name="provincia"
                type="text"
                required
                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
            </div>
        </div>
        <div className="col-span-full sm:col-span-2">
            <label htmlFor="provincia" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                Codigo postal
            </label>
            <div className="mt-2">
                <input
                id="provincia"
                name="provincia"
                type="number"
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
                Registrese
            </button>
            <p className="text-center text-sm/6 text-gray-500 dark:text-gray-400">
                Eres un cliente registrado?{' '}
                <Link
                href="/registro-de-clientes"
                className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                    Ingrese!!!
                </Link>
            </p>
        </div>
        </form>
        </div>
    </ MainLayout>
  )
}
