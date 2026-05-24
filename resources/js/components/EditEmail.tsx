import { Link, useForm } from "@inertiajs/react";
import React from "react";

export default function EditEmail() {
    const { data, setData, post, processing, errors } = useForm({
        email: ''
    });

    const submit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        post('/perfil/email');
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            {/* Actual password */}
            <div className="flex flex-col gap-2">
                <label htmlFor="actual_password" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                    Nuevo email
                </label>

                <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    placeholder="email"
                    required
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />

                {errors.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                )}
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={processing}
                className="w-full rounded-md bg-indigo-600 py-2 text-white font-semibold hover:bg-indigo-500 disabled:opacity-50"
            >
                {processing ? 'Enviando...' : 'Ingresar'}
            </button>
        </form>
    );
}