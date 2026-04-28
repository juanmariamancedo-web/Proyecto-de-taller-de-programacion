import { useForm, Link } from "@inertiajs/react";

export default function RequestForgottenPasswordCode(){
        const { data, setData, post, processing, errors } = useForm({
            code: '',
        });
    
        const submit = (e : React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            alert("Código verificado correctamente");
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
                        onChange={e => setData('code', e.target.value)}
                        placeholder="Código"
                        required
                        className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                    />
    
                    {errors.code && (
                        <div className="text-red-500 text-sm">{errors.code}</div>
                    )}
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