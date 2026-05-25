import Paginacion from "../../components/Paginacion";
import AdminLayout from "../../layouts/adminLayout";
import { User } from "../../../models/Auth";
import CambiarRole from "../../components/Admin/CambiarRol";
import BannearUsuario from "../../components/Admin/BannearUsuario";

export default function Usuarios({pagina , paginas, usuarios} : {pagina: number, paginas : number, usuarios: User[]}){
    return(
        <AdminLayout>
            <div className="flex flex-col items-center gap-3">
                            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                                Usuarios
                            </h1>
                            <table className="rounded-xl bg-black/5 px-3 py-1.5 text-base text-gray-900 sm:text-sm/6 dark:bg-white/5 dark:text-white border border-gray-200 dark:border-white/10 overflow-hidden">
                                <thead className="bg-gray-100 dark:bg-white/10">
                                    <tr className="text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                        <th className="px-4 py-3">ID</th>
                                        <th className="px-4 py-3">Cliente</th>
                                        <th className="px-4 py-3">Cuit/Cuil</th>
                                        <th className="px-4 py-3">Provincia</th>
                                        <th className="px-4 py-3">Ciudad</th>
                                        <th className="px-4 py-3">Código postal</th>
                                        <th className="px-4 py-3">Rol</th>        
                                        <th className="px-4 py-3">Acción rol</th> 
                                        <th className="px-4 py-3">Estado</th>     
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
                                                        <CambiarRole user={user} />

                                                        <BannearUsuario user={user} />
                                                    </tr>
                                                )
                                            }
                                        )
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="text-center py-6 text-gray-500">
                                                No hay órdenes
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <Paginacion pagina={pagina} paginas={paginas} dir="/admin/usuarios" />
                        </ div>
        </AdminLayout>
    )
}