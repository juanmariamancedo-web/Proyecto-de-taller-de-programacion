import axios from "axios";
import { usePage } from '@inertiajs/react';
import { PageProps, type Auth } from "../../../models/Auth";
import { useState, useEffect } from "react";
import LoginIcon from "../icons/LoginIcon";
import { Link } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/usuarioReducer";


export default function LoginOut(){
    const { auth } = usePage<PageProps>().props;

    function onClick(){
        axios.post("logout")
    };

    return(
        <>
            { auth.user ? (
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