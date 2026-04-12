import MainLayout from "../layouts/MainLayout";
import { Link } from "@inertiajs/react";

export default function SuccesLogin(){
    return(
        <MainLayout>
            <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-black dark:text-white sm:text-7xl">
                    SingIn realizado correctamente
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Ir a Home
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}