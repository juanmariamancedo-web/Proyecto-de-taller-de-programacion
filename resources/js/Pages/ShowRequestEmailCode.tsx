import { Head, Link } from "@inertiajs/react"
import MainLayout from "../layouts/MainLayout"
import RequestEmailCode from "../components/RequestEmailCode"

export default function ShowRequestEmailCode(){
    return(
        <>
                <Head title="Recupere su cuenta" />
                <MainLayout>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 gap-10">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                                Verifique su email
                            </h1>
                        </div>

                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <RequestEmailCode />   
                        </div>
                        
                    </div>
                </ MainLayout>
            </>
    )

}