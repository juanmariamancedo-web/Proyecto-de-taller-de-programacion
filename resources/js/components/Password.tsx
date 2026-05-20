import { useState } from "react"

const SetDataAction<{
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    password_confirmation: string;
    ciudad: string;
    provincia: string;
    codigoPostal: string;
    cuil_cuit: string;
}>

export default function Password({password, setPassword, password_confirmation} : {password : string, setPassword : React.Dispatch<React.SetStateAction<string | undefined>>, password_confirmation: string}){
    const [password, setPassword] = useState<string>();
    const [passwordConfirmation, setPasswordConfirmation] = useState()

    return(
        <>
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
        </>
    )
}