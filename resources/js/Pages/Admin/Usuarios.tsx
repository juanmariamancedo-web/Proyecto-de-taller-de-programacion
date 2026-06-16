import Paginacion from "../../components/Paginacion"
import { User } from "../../../models/Auth";
import CambiarRole from "../../components/Admin/CambiarRol";
import BannearUsuario from "../../components/Admin/BannearUsuario";
import AdminLayout from "../../layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import Search from "../../components/Search";
import { Sort } from "../../components/Sort";

export default function Usuarios({pagina , paginas, usuarios, sort, search} : {pagina: number, paginas : number, usuarios: User[], sort: string, search: string}){
    const { props } = usePage() as any;

    return(
        <AdminLayout>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Usuarios
                </h1>
                <div className="min-w-full">
                    <Search dir="/admin/usuarios" value={search} sort={sort} />
                </div>
                <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10">
                    <table className="w-full min-w-[640px] bg-black/5 dark:bg-white/5 text-sm text-gray-900 dark:text-white">

                        <thead className="bg-gray-100 dark:bg-white/10">
                            <tr className="text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                <th className="px-4 py-3">
                                    <Sort 
                                        sort={sort} dir="/admin/usuarios"
                                        name="ID"
                                        search={search}
                                        serverArg="Id"
                                        className=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        sort={sort} dir="/admin/usuarios"
                                        name="Nombre"
                                        search={search}
                                        serverArg="name"
                                        className=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        sort={sort} dir="/admin/usuarios"
                                        name="Cuit/Cuil"
                                        search={search}
                                        serverArg="cuil"
                                        className=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        sort={sort} dir="/admin/usuarios"
                                        name="Provincia"
                                        search={search}
                                        serverArg="province"
                                        className=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        sort={sort} dir="/admin/usuarios"
                                        name="Ciudad"
                                        search={search}
                                        serverArg="city"
                                        className=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        sort={sort} dir="/admin/usuarios"
                                        name="Código postal"
                                        search={search}
                                        serverArg="postcode"
                                        className=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <Sort 
                                        sort={sort} dir="/admin/usuarios"
                                        name="Rol"
                                        search={search}
                                        serverArg="role"
                                        className=""
                                    />
                                </th>        
                                <th className="px-4 py-3">Acción rol</th> 
                                <th className="px-4 py-3">
                                    <Sort 
                                        sort={sort} dir="/admin/usuarios"
                                        name="Estado"
                                        serverArg="banned"
                                        search={search}
                                        className=""
                                    />    
                                </th>     
                                <th className="px-4 py-3">Acción</th>     
                            </tr>
                        </thead>
    
                        <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-sm">
                            {usuarios?.length ? (
                                usuarios.map((user) => {   
                                    // const total = user.item_users.reduce(
                                    //     (acc, item) => acc + item.unit_price * item.amount, 0
                                    // ) 
    
                                    return (
                                            <tr
                                                key={user.id}
                                                className="hover:bg-gray-50 dark:hover:bg-white/5 transition"
                                            >
                                                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                                    #{user.id}
                                                </td>
    
                                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                                    {`${user?.name ?? 'Sin'} ${user?.lastname ?? 'cliente'}`}
                                                </td>
    
                                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                                    {user.cuil_cuit}
                                                </td>
                                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                                    {user.province}
                                                </td>
                                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                                    {user.city}
                                                </td>
                                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                                    {user.postcode}
                                                </td>
                                                {props?.auth?.user.id != user.id && (
                                                    <>
                                                        <CambiarRole user={user} />
                                                        <BannearUsuario user={user} />
                                                    </>
                                                )}
                                            </tr>
                                        )
                                    }
                                )
                            ) : (
                                <tr>
                                    <td colSpan={10} className="text-center py-6 text-gray-500">
                                        No hay productos encontrados
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Paginacion pagina={pagina} paginas={paginas} dir="/admin/usuarios" />
            </ div>
        </AdminLayout>
    )
}