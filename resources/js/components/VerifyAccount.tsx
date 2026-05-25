import { useForm, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function VerifyAccount(){
        const [reenviado, setReenviado] = useState(false);
        const { data, setData, post, processing, errors } = useForm({
            code: 0,
        });
    
        const submit = (e : React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            post("/verificar-cuenta");
        };


        function reenviar(){
            router.post("/verificar-cuenta/reenviar", {}, {
                onSuccess: () => {
                    setReenviado(true);
                    setTimeout(() => setReenviado(false), 5000); // oculta el mensaje después de 5 segundos
                }
            });
        }
    
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
                    <div className="flex items-baseline justify-between">
                        <p>
                            ¿No recibiste el código?
                        </p>
                        <button
                            type="button"
                            onClick={reenviar}
                            className="w-full text-sm text-indigo-600 hover:text-indigo-500 text-center"
                        >
                            Reenviar
                        </button>

                    </div>

                    {reenviado && (
                        <p className="text-green-500 text-sm text-center">
                            Código reenviado, revisá tu email.
                        </p>
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