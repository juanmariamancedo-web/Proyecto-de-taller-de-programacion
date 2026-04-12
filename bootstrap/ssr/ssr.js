import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { jsx } from "react/jsx-runtime";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/ssr.jsx
createServer((page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => `${title} - Mi App`,
	resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({
		"./Pages/QuienesSomos.jsx": () => import("./assets/QuienesSomos-BiX-7C_I.js"),
		"./Pages/Welcome.jsx": () => import("./assets/Welcome-DcolNs1e.js")
	})),
	setup: ({ App, props }) => {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
}));
//#endregion
export {};
