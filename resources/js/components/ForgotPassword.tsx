import { useForm, usePage } from "@inertiajs/react";


export default function ForgotPassword(){
    const props = usePage().props as any;

    const { data, setData, post, processing, errors } = useForm({
        email: props?.auth?.user?.email as string,
    });

    const submit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/forgot-password');
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            {/* Email */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                    Email
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    placeholder="Email"
                    required
                    autoComplete="email"
                    disabled={props.auth.user !== null}
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
                {processing ? 'Enviando...' : 'Enviar código'}
            </button>
        </form>
    )

}