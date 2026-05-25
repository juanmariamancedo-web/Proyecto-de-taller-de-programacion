import { router } from "@inertiajs/react";
import { useState } from "react";
import { User } from "../../../models/Auth";

export default function CambiarRole({user} : {user : User}){
    const [role, setRole] = useState(user.role);

    function cambiarRol(){
        router.put(`/admin/usuarios/${user.id}/cambiar-role`, {}, {
            preserveScroll: true,
            onSuccess: () => setRole(role == "admin"? "client" : "admin"),
            onError: (errors) => alert(errors.order)
        });
    }


    return(
        <>
            <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    role === "admin"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        // : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                }`}>
                    {role}
                </span>
            </td>
            <td className="px-4 py-3">
                <button
                    onClick={cambiarRol}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
                >
                    {role == 'admin'? "Descender" : "Ascender"}
                </button>
            </td>
        </>
    )
}