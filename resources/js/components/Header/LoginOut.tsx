import { router } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';;
import LoginIcon from "../icons/LoginIcon";
import { Link } from "@inertiajs/react";


export default function LoginOut(){
    const props = usePage().props as any;

    function onClick(){
        router.post('/logout');
        router.visit("/formulario-de-login");
    };

    return(
        <>
            { props.auth.user ? (
                <button onClick={onClick}>
                    Logout
                </button>
                ) : (
                <Link
                    className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center cursor-pointer"
                    href="/formulario-de-login"
                >
                    <LoginIcon className="" />
                </Link>
            )} 
        </>
    )
}