import { useState } from "react";
import { router } from "@inertiajs/react";
import { Order } from "../../models/Order";

export default function({ order }: { order: Order }) {
    const [state, setState] = useState(order.state);

    function entregar() {
        router.put(`/admin/ordenes/${order.id}/entregar`, {}, {
            preserveScroll: true,
            onSuccess: () => setState("delivered"),
            onError: (errors) => alert(errors.order)
        });
    }

    return (
        <>
            <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    state === "delivered"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : state === "paid"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                }`}>
                    {state}
                </span>
            </td>
            <td className="px-4 py-3">
                {state === "paid" &&
                    <button
                        onClick={entregar}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
                    >
                        Entregar
                    </button>
                }
            </td>
        </>
    );
}