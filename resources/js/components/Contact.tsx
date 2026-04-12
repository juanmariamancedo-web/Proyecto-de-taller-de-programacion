import React from "react";
import { useForm } from "@inertiajs/react";

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/contacto', {
            onSuccess: () => reset(), // limpia el formulario
        });
    };

    return (
        <form onSubmit={submit} className="grid grid-cols-6 gap-3">

            {/* Nombre */}
            <div className="col-span-full sm:col-span-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2">
                    Nombre
                </label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={data.nombre}
                    placeholder="Nombre"
                    required
                    onChange={(e) => setData('nombre', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
            </div>

            {/* Apellido */}
            <div className="col-span-full sm:col-span-2 pb-2">
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2">
                    Apellido
                </label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={data.apellido}
                    placeholder="Apellido"
                    required
                    onChange={(e) => setData('apellido', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
                {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido}</p>}
            </div>

            {/* Email */}
            <div className="col-span-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    placeholder="Email"
                    required
                    onChange={(e) => setData('email', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Mensaje */}
            <div className="col-span-full">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2">
                    Mensaje
                </label>
                <textarea
                    value={data.mensaje}
                    id="mensaje"
                    name="mensaje"
                    placeholder="Mensaje"
                    required
                    onChange={(e) => setData('mensaje', e.target.value)}
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />
                {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}
            </div>

            {/* Submit */}
            <div className="col-span-full">
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-indigo-600 text-white py-2 rounded-md disabled:opacity-50"
                >
                    {processing ? "Enviando..." : "Enviar"}
                </button>
            </div>
        </form>
    );
}