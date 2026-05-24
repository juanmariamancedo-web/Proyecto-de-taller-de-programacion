import { User } from "../../models/Auth";
import MainLayout from "../layouts/MainLayout";
import { useForm } from "@inertiajs/react";
import {Link} from "@inertiajs/react";

export default function EditProfile({user} : {user: User}){
    const { data, setData, put, processing, errors } = useForm({
        nombre: user.name,
        apellido: user.lastname,
        email: user.email,
        ciudad: user.city,
        provincia: user.province,
        codigoPostal: user.postcode,
        cuil_cuit: user.cuil_cuit
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        put("/perfil");
    };

    return (
        <form onSubmit={submit} className="grid grid-cols-6 gap-3">

            {/* Nombre */}
            <div className="col-span-full sm:col-span-4">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2" htmlFor="nombre">
                    Nombre
                </label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    required
                    placeholder="Nombre"
                    value={data.nombre}
                    onChange={e => setData('nombre', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
            </div>

            {/* Apellido */}
            <div className="col-span-full sm:col-span-2">
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2">
                    Apellido
                </label>
                <input
                    name="apellido"
                    id="apellido"
                    type="text"
                    placeholder="Apellido"
                    required
                    value={data.apellido}
                    onChange={e => setData('apellido', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
                {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido}</p>}
            </div>

            {/* Email */}
            <div className="col-span-full sm:col-span-4">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    value={data.email}
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    onChange={e => setData('email', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Cuit/Cuil */}
            <div className="col-span-full sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2" htmlFor="nombre">
                    Cuit / Cuil
                </label>
                <input
                    type="text"
                    name="cuil_cuit"
                    id="cuil_cuit"
                    required
                    placeholder="cuil/cuit"
                    value={data.cuil_cuit}
                    onChange={e => setData("cuil_cuit", parseInt(e.target.value))}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
            </div>

            {/* Ciudad */}
            <div className="col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2" htmlFor="ciudad">
                    Ciudad
                </label>
                <input
                    type="text"
                    placeholder="Ciudad"
                    name="ciudad"
                    id="ciudad"
                    required
                    value={data.ciudad}
                    onChange={e => setData('ciudad', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
            </div>

            {/* Provincia */}
            <div className="col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2" htmlFor="provincia">
                    Provincia
                </label>
                <input
                    type="text"
                    id="provincia"
                    name="provincia"
                    value={data.provincia}
                    placeholder="Provincia"
                    required
                    onChange={e => setData('provincia', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
            </div>

            {/* Código Postal */}
            <div className="col-span-full sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2" htmlFor="codigoPostal">
                    Código Postal
                </label>
                <input
                    type="number"
                    id="codigoPostal"
                    name="codigoPostal"
                    placeholder="Código Postal"
                    required
                    value={data.codigoPostal}
                    onChange={e => setData('codigoPostal', parseInt(e.target.value))}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
            </div>

            {/* Submit */}
            <div className="col-span-full flex flex-col gap-3">
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-indigo-600 text-white py-2 rounded-md"
                >
                    {processing ? "Enviando..." : "Editar"}
                </button>
            </div>
        </form>
    );
}