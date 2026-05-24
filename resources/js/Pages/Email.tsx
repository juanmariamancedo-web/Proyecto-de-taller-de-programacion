import EditEmail from "../components/EditEmail"
import MainLayout from "../layouts/MainLayout"
import { Head } from "@inertiajs/react"

export default function Email(){
    return(
        <>
            <Head title="Cambiar Email" />
            <MainLayout>
                <div className="flex min-h-full min-w-full flex-col justify-center gap-10 px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                            Modificar Email
                        </h1>
                    </div>
                    <EditEmail /> 
                </div>
            </ MainLayout>
        </>
    )
}