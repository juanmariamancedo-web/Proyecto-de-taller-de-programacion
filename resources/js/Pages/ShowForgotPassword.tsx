import { Head, Link } from "@inertiajs/react"
import MainLayout from "../layouts/MainLayout"
import ForgotPassword from "../components/ForgotPassword"

export default function showForgotPassword(){
        return (
            <>
                <Head title="Recupere su cuenta" />
                <MainLayout>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 gap-10">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                            Recupere su cuenta
                        </h1>
                    </div>

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <ForgotPassword />   
                    </div>
                        <p className="text-center text-sm/6 text-gray-500 dark:text-gray-400">
                            ¿No eres un cliente registrado?{' '}
                            <Link
                                href="/registro-de-clientes"
                                className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                                Registrate gratis!!!
                            </Link>
                        </p>
                    </div>
                </ MainLayout>
            </>

        )

}