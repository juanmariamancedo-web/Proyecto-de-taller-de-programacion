import { Link } from "@inertiajs/react";
import MainLayout from "../layouts/MainLayout";
import Register from "../components/Register";

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
          <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Registre su cuenta
          </h1>
        </div>
            <Register />
        </div>
    </ MainLayout>
  )
}
