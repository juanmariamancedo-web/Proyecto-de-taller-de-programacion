import { useEffect, useState} from "react"
import ButtonOfDarkMode from "./ButtonOfDarkMode";
import SwitchOpen from "./SwitchOpen";
import Login from "../icons/LoginIcon";
import CreateUser from "../icons/CreateUserIcon";
import Home from "../icons/HomeIcon";
import { Link } from "@inertiajs/react";

export function Header(){
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        const mql = window.matchMedia("(max-width: 768px)");
        mql.onchange = (e) => {
            if(!(e.matches)) setOpen(false)
        }
    }, [])

    function toggleOpen(){
        setOpen((prevState)=> !prevState)
    }

    return (
        <header className="z-10 fixed w-full h-14 flex justify-center items-center">
            <nav className="w-full h-full relative">
                <div className="absolute inset-0 flex justify-center items-center lg:hidden ">
                    <div className="container p-3">
                        <button onClick={toggleOpen} className="bg-neutral-200 dark:bg-black hover:bg-black/10 dark:hover:bg-white/10 rounded-full px-3 py-1 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                        </button>
                    </div>
                </div>
                <div className={`${open? "translate-x-full": ""} 
                                bg-neutral-200/50 dark:bg-black/50
                                backdrop-blur-2xl lg:backdrop-blur-0 dark:text-white
                                lg:bg-transparent lg:dark:bg-transparent lg:transition-none
                                z-20 lg:z-auto
                                fixed inset-y-0 -left-full right-full 
                                lg:absolute lg:inset-0
                                transition-transform duration-1000 
                                `}>
                    <div className="obsolute w-full h-14 flex justify-center items-center lg:hidden">
                        <div className="container p-3 flex items-center">
                            <button onClick={toggleOpen} className="z-10 bg-neutral-200/50 dark:bg-black/50 hover:bg-black/10 dark:hover:bg-white/10 rounded-full px-3 py-1 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center lg:h-14 p-3">
                        <ul className={`flex flex-col lg:flex-row items-center justify-between gap-5 container
                                        lg:border lg:border-black rounded-full 
                                        px-3 py-1
                                        lg:bg-neutral-200/50 lg:dark:bg-black/50  
                                        lg:backdrop-blur-2xl dark:text-white 
                                        flex-grow-0`}>
                            <li className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center">
                                <SwitchOpen setOpen={setOpen}>
                                    <Link className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center cursor-pointer" href="/">
                                        <Home className=""/>
                                    </Link>
                                </SwitchOpen>    
                            </li>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5">
                                <li>
                                    <SwitchOpen setOpen={setOpen}>
                                        <Link className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition" href="/contacto">
                                            Contacto
                                        </Link>
                                    </SwitchOpen>
                                </li>

                                <li>
                                    <SwitchOpen setOpen={setOpen}>
                                        <Link className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition" href="/quienes-somos">
                                            Quienes somos?
                                        </Link>
                                    </SwitchOpen>
                                </li>
                                <li>
                                    <SwitchOpen setOpen={setOpen}>
                                        <Link className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition" href="/comercializacion">
                                            Comercialización
                                        </Link>
                                    </SwitchOpen>
                                </li>
                                <li>
                                    <SwitchOpen setOpen={setOpen}>
                                        <Link className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition" href="/terminos-y-usos">
                                            Términos y usos
                                        </Link>
                                    </SwitchOpen>
                                </li>
                                <li>
                                    <SwitchOpen setOpen={setOpen}>
                                        <Link className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition" href="/catalogo">
                                            Catálogo
                                        </Link>
                                    </SwitchOpen>
                                </li>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                                <div className="flex flex-row items-center justify-center gap-3">
                                    <li className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center">
                                        <SwitchOpen setOpen={setOpen}>
                                            <Link className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center cursor-pointer" href="/registro-de-clientes">
                                                <CreateUser className="" />
                                            </Link>
                                        </SwitchOpen>
                                    </li>
                                    <li className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center">
                                        <SwitchOpen setOpen={setOpen}>
                                            <Link className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center cursor-pointer" href="/formulario-de-login">
                                                    <Login className=""/>
                                            </Link>
                                        </SwitchOpen>
                                    </li>
                                </div>
                                <li className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center">
                                    <SwitchOpen setOpen={setOpen}>
                                        <ButtonOfDarkMode />
                                    </SwitchOpen>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>  
            </nav>
        </header>
    )
}

