import { useForm, Link } from "@inertiajs/react";

export default function RequestForgottenPasswordCode(){
        const { data, setData, post, processing, errors } = useForm({
            code: 0,
            password: '',
            password_confirmation: '',
        });
    
        const submit = (e : React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            post('/requestForgottenPasswordCode');
        };
    
        return (
            <form onSubmit={submit} className="space-y-6">
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                        Código
                    </label>
    
                    <input
                        id="code"
                        type="number"
                        value={data.code}
                        onChange={e => setData('code', parseInt(e.target.value))}
                        placeholder="Código"
                        required
                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                    />
    
                    {errors.code && (
                        <div className="text-red-500 text-sm">{errors.code}</div>
                    )}
                </div>

                    {/* Password */}
                <div className="col-span-full">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        required
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>

                {/* Confirm Password */}
                <div className="col-span-full">
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 pb-2" htmlFor="repeatPassword">
                        Repetir contraseña
                    </label>
                    <input
                        type="password"
                        placeholder="Repeat password"
                        name="repeatPassword"
                        id="repeatPassword"
                        required
                        value={data.password_confirmation}
                        onChange={e => setData('password_confirmation', e.target.value)}
                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                    />
                </div>
    
                {/* Submit */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full rounded-md bg-indigo-600 py-2 text-white font-semibold hover:bg-indigo-500 disabled:opacity-50"
                >
                    {processing ? 'Enviando...' : 'Verificar código'}
                </button>
            </form>
        );
}