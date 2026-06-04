import { useState } from "react";
import { router } from "@inertiajs/react";
import AdminLayout from "../../layouts/AdminLayout";
import { Product } from "../../../models/Order";
import Paginacion from "../../components/Paginacion";
import {useForm} from "@inertiajs/react";
import SortByStock from "../../components/Admin/SortByStock";
import SortByPrice from "../../components/Admin/SortByPrice";
import SortByState from "../../components/Admin/SortByState";
import Search from "../../components/Search";

type Form = {
    name: string;
    price: number;
    stock: number;
    low_stock: number;
    image: File | null;
    is_active: boolean;
};

export default function Catalogo({ productos, paginas, pagina, sort }: {
    productos: Product[], paginas: number, pagina: number, sort: string
}) {
    const [editando, setEditando] = useState<Product | null>(null);
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: '',
        price: 0,
        stock: 0,
        low_stock: 0,
        image: null as File | null,
        is_active: true,
    });

    function abrirEditar(product: Product) {
        setEditando(product);
        setData({
            name: product.name,
            price: product.price,
            stock: product.stock,
            low_stock: product.low_stock,
            image: null,
            is_active: product.is_active,
        });
    }

    function guardar(e: React.FormEvent) {
        e.preventDefault();

        if (editando) {
            put(`/admin/catalogo/${editando.id}`, {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => { setEditando(null); reset(); },
            });
        } else {
            post('/admin/catalogo', {
                preserveScroll: true,
                forceFormData: true,
                onSuccess: () => reset(),
            });
        }
    }

    function eliminar(id: number) {
        if (!confirm('¿Eliminar este producto?')) return;
        router.delete(`/admin/catalogo/${id}`, { preserveScroll: true });
    }

    const stockColor = (product: Product) => {
        if (product.stock === 0) return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
        if (product.stock <= product.low_stock) return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    };

    return (
        <AdminLayout>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white pb-6">
                    Productos
                </h1>

                {/* Formulario */}
                <form className="flex flex-col items-center gap-3" encType="multipart/form-data" onSubmit={guardar}>
                    <h2 className="font-semibold text-gray-700 dark:text-gray-200">
                        {editando ? `Editando: ${editando.name}` : 'Nuevo producto'}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="col-span-1 sm:col-span-3 flex flex-col gap-2">
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                                Nombre
                            </label>
                            <input
                                placeholder="Nombre"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                                Precio
                            </label>
                            <input
                                type="number" placeholder="Precio"
                                value={data.price}
                                onChange={e => setData('price', Number(e.target.value))}
                                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                            />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="stock" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                                Stock
                            </label>
                            <input
                                type="number" placeholder="Stock"
                                value={data.stock}
                                onChange={e => setData('stock', Number(e.target.value))}
                                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                            />
                            {errors.stock && <p className="text-red-500 text-sm">{errors.stock}</p>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="low_stock" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                                Low Stock
                            </label>
                            <input
                                type="number" placeholder="Stock mínimo (alerta)"
                                value={data.low_stock}
                                onChange={e => setData('low_stock', Number(e.target.value))}
                                className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white"
                            />
                            {errors.low_stock && <p className="text-red-500 text-sm">{errors.low_stock}</p>}
                        </div>
                        <div className="col-span-1 sm:col-span-3 flex flex-col justify-between items-center sm:flex-row gap-2">
                            <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={data.is_active}
                                    onChange={e => setData('is_active', e.target.checked)}
                                />
                                Producto activo
                            </label>
                            <div className="col-span-2">
                                <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                                    {editando ? 'Nueva imagen (opcional)' : 'Imagen'}
                                </label>
                                <input
                                    type="file" accept="image/*"
                                    onChange={e => setData('image', e.target.files?.[0] ?? null)}
                                    className="text-sm text-gray-700 dark:text-gray-300"
                                />
                                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-md bg-indigo-600 p-2 text-white font-semibold hover:bg-indigo-500 disabled:opacity-50">
                            {processing ? 'Guardando...' : editando ? 'Guardar cambios' : 'Crear producto'}
                        </button>
                        {editando && (
                            <button
                                type="button"
                                onClick={() => { setEditando(null); reset(); }}
                                className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition">
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>

                <div className="min-w-full">
                    <Search dir="/admin/catalogo" />
                </div>
                {/* Tabla */}
                <div className="w-full overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10">
                    <table className="w-full min-w-[640px] bg-black/5 dark:bg-white/5 text-sm text-gray-900 dark:text-white">

                        <thead className="bg-gray-100 dark:bg-white/10">
                            <tr className="text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                <th className="px-4 py-3">Imagen</th>
                                <th className="px-4 py-3">Nombre</th>
                                <th className="px-4 py-3">
                                    <SortByPrice sort={sort} dir="/admin/catalogo"
                                        className=""
                                    />
                                </th>
                                <th className="px-4 py-3">
                                    <SortByStock sort={sort} dir="/admin/catalogo" 
                                        className=""
                                    />
                                </th>
                                <th className="px-4 py-3"> 
                                    <SortByState sort={sort} dir="/admin/catalogo"
                                        className="" 
                                    />
                                </th>
                                <th className="px-4 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                            {productos.length > 0?
                                <>
                                    {productos.map(product => (
                                        <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                                            <td className="px-4 py-3">
                                                <img
                                                    src={`${product.image}`}
                                                    alt={product.name}
                                                    className="w-12 h-12 object-cover rounded-lg"
                                                />
                                            </td>
                                            <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                                                {product.name}
                                            </td>
                                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                                ${product.price}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${stockColor(product)}`}>
                                                    {product.stock === 0 ? 'Sin stock' : product.stock}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                    product.is_active
                                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                                                }`}>
                                                    {product.is_active ? 'Activo' : 'Inactivo'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex gap-2">
                                                    <button onClick={() => abrirEditar(product)}
                                                        className="px-3 py-1 text-xs bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg transition">
                                                        Editar
                                                    </button>
                                                    <button onClick={() => eliminar(product.id)}
                                                        className="px-3 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </>:
                                (
                                    <tr>
                                        <td colSpan={4} className="text-center py-6 text-gray-500">
                                            No hay productos encntrados
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
                <Paginacion pagina={pagina} paginas={paginas} dir="/admin/catalogo" />
            </div>
        </AdminLayout>
    );
}