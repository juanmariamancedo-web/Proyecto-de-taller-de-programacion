import { Link, useForm } from "@inertiajs/react";
import React from "react";

export default function EditPassword() {
    const { data, setData, put, processing, errors } = useForm({
        actual_password: '',
        password: '',
        confirm_password: '',
    });

    const submit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        put('/perfil/password');
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            {/* Actual password */}
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                    Contraseña actual
                </label>

                <input
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                    placeholder="password"
                    required
                    autoComplete="password"
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />

                {errors.password && (
                    <div className="text-red-500 text-sm">{errors.password}</div>
                )}
            </div>

            {/* password */}
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                    Nueva contraseña
                </label>

                <input
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                    placeholder="password"
                    required
                    autoComplete="password"
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />

                {errors.password && (
                    <div className="text-red-500 text-sm">{errors.password}</div>
                )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                        Repite la nueva contraseña
                    </label>

                    <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>

                <input
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                    placeholder="Password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                />

                {errors.password && (
                    <div className="text-red-500 text-sm">{errors.password}</div>
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