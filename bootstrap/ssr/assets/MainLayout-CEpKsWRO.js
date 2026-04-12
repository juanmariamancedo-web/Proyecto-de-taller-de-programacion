import { Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
//#region resources/js/components/icons/DarkMode.tsx
function DarkMode({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		className,
		height: 24,
		width: 24,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 -960 960 960",
		stroke: "currentColor",
		fill: "currentColor",
		children: /* @__PURE__ */ jsx("path", { d: "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" })
	});
}
//#endregion
//#region resources/js/components/icons/LightMode.tsx
function LightMode({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		className,
		height: 24,
		width: 24,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 -960 960 960",
		stroke: "currentColor",
		fill: "currentColor",
		children: /* @__PURE__ */ jsx("path", { d: "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" })
	});
}
//#endregion
//#region resources/js/components/Header/ButtonOfDarkMode.tsx
function getCookie(name) {
	const cookies = document.cookie.split("; ");
	for (const cookie of cookies) {
		const [key, value] = cookie.split("=");
		if (key === name) return decodeURIComponent(value);
	}
	return null;
}
function setCookie(name, value) {
	document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
}
function applyTheme(theme) {
	if (theme === "dark") document.documentElement.classList.add("dark");
	else document.documentElement.classList.remove("dark");
}
function ButtonOfDarkMode() {
	const [theme, setTheme] = useState(() => {
		if (typeof document === "undefined") return "light";
		const cookieTheme = getCookie("theme");
		if (cookieTheme === "dark" || cookieTheme === "light") return cookieTheme;
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
		return "light";
	});
	useEffect(() => {
		applyTheme(theme);
	}, [theme]);
	function changeThemeMode() {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		applyTheme(newTheme);
		setCookie("theme", newTheme);
	}
	return /* @__PURE__ */ jsx("span", {
		onClick: changeThemeMode,
		className: "flex justify-center items-center cursor-pointer",
		children: theme === "dark" ? /* @__PURE__ */ jsx(LightMode, { className: "dark:text-white" }) : /* @__PURE__ */ jsx(DarkMode, { className: "dark:text-white" })
	});
}
//#endregion
//#region resources/js/components/Header/SwitchOpen.tsx
function SwitchOpen({ children, setOpen }) {
	useEffect(() => {
		const mql = window.matchMedia("(min-width: 1024px)");
		function listenner(x) {
			x.matches ? setSmall(false) : setSmall(true);
		}
		listenner(mql);
		mql.onchange = listenner;
	}, []);
	const [small, setSmall] = useState(false);
	return /* @__PURE__ */ jsx("button", {
		onClick: () => {
			if (small) setOpen(false);
		},
		children
	});
}
//#endregion
//#region resources/js/components/icons/LoginIcon.tsx
function Login({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		className,
		height: 24,
		width: 24,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", {
				stroke: "none",
				d: "M0 0h24v24H0z",
				fill: "none"
			}),
			/* @__PURE__ */ jsx("path", { d: "M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" }),
			/* @__PURE__ */ jsx("path", { d: "M21 12h-13l3 -3" }),
			/* @__PURE__ */ jsx("path", { d: "M11 15l-3 -3" })
		]
	});
}
//#endregion
//#region resources/js/components/icons/CreateUserIcon.tsx
function CreateUser({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		className,
		height: 24,
		width: 24,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", {
				stroke: "none",
				d: "M0 0h24v24H0z",
				fill: "none"
			}),
			/* @__PURE__ */ jsx("path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" }),
			/* @__PURE__ */ jsx("path", { d: "M16 19h6" }),
			/* @__PURE__ */ jsx("path", { d: "M19 16v6" }),
			/* @__PURE__ */ jsx("path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4" })
		]
	});
}
//#endregion
//#region resources/js/components/icons/HomeIcon.tsx
function Home({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		className,
		height: 24,
		width: 24,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", {
				stroke: "none",
				d: "M0 0h24v24H0z",
				fill: "none"
			}),
			/* @__PURE__ */ jsx("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }),
			/* @__PURE__ */ jsx("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }),
			/* @__PURE__ */ jsx("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" })
		]
	});
}
//#endregion
//#region resources/js/components/Header/Header.tsx
function Header() {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const mql = window.matchMedia("(max-width: 768px)");
		mql.onchange = (e) => {
			if (!e.matches) setOpen(false);
		};
	}, []);
	function toggleOpen() {
		setOpen((prevState) => !prevState);
	}
	return /* @__PURE__ */ jsx("header", {
		className: "z-10 fixed w-full h-14 flex justify-center items-center",
		children: /* @__PURE__ */ jsxs("nav", {
			className: "w-full h-full relative",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 flex justify-center items-center lg:hidden ",
				children: /* @__PURE__ */ jsx("div", {
					className: "container p-3",
					children: /* @__PURE__ */ jsx("button", {
						onClick: toggleOpen,
						className: "bg-neutral-200 dark:bg-black hover:bg-black/10 dark:hover:bg-white/10 rounded-full px-3 py-1 dark:text-white",
						children: /* @__PURE__ */ jsxs("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							strokeWidth: "2",
							stroke: "currentColor",
							fill: "none",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [
								/* @__PURE__ */ jsx("path", {
									stroke: "none",
									d: "M0 0h24v24H0z",
									fill: "none"
								}),
								/* @__PURE__ */ jsx("path", { d: "M4 6l16 0" }),
								/* @__PURE__ */ jsx("path", { d: "M4 12l16 0" }),
								/* @__PURE__ */ jsx("path", { d: "M4 18l16 0" })
							]
						})
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: `${open ? "translate-x-full" : ""} 
                                bg-neutral-200/50 dark:bg-black/50
                                backdrop-blur-2xl lg:backdrop-blur-0 dark:text-white
                                lg:bg-transparent lg:dark:bg-transparent lg:transition-none
                                z-20 lg:z-auto
                                fixed inset-y-0 -left-full right-full 
                                lg:absolute lg:inset-0
                                transition-transform duration-1000 
                                `,
				children: [/* @__PURE__ */ jsx("div", {
					className: "obsolute w-full h-14 flex justify-center items-center lg:hidden",
					children: /* @__PURE__ */ jsx("div", {
						className: "container p-3 flex items-center",
						children: /* @__PURE__ */ jsx("button", {
							onClick: toggleOpen,
							className: "z-10 bg-neutral-200/50 dark:bg-black/50 hover:bg-black/10 dark:hover:bg-white/10 rounded-full px-3 py-1 dark:text-white",
							children: /* @__PURE__ */ jsxs("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								strokeWidth: "2",
								stroke: "currentColor",
								fill: "none",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ jsx("path", {
										stroke: "none",
										d: "M0 0h24v24H0z",
										fill: "none"
									}),
									/* @__PURE__ */ jsx("path", { d: "M18 6l-12 12" }),
									/* @__PURE__ */ jsx("path", { d: "M6 6l12 12" })
								]
							})
						})
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 flex justify-center items-center lg:h-14 p-3",
					children: /* @__PURE__ */ jsxs("ul", {
						className: `flex flex-col lg:flex-row items-center justify-between gap-5 container
                                        lg:border lg:border-black rounded-full 
                                        px-3 py-1
                                        lg:bg-neutral-200/50 lg:dark:bg-black/50  
                                        lg:backdrop-blur-2xl dark:text-white 
                                        flex-grow-0`,
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
								setOpen,
								children: /* @__PURE__ */ jsx(Link, {
									className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center cursor-pointer",
									href: "/",
									children: /* @__PURE__ */ jsx(Home, { className: "" })
								})
							}) }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
										setOpen,
										children: /* @__PURE__ */ jsx(Link, {
											className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition",
											href: "/quienes-somos",
											children: "Quienes somos?"
										})
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
										setOpen,
										children: /* @__PURE__ */ jsx(Link, {
											className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition",
											href: "/comercializacion",
											children: "Comercializacion"
										})
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
										setOpen,
										children: /* @__PURE__ */ jsx(Link, {
											className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition",
											href: "/contacto",
											children: "Contacto"
										})
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
										setOpen,
										children: /* @__PURE__ */ jsx(Link, {
											className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition",
											href: "/terminos-y-usos",
											children: "Condiciones"
										})
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
										setOpen,
										children: /* @__PURE__ */ jsx(Link, {
											className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition",
											href: "/catalogo",
											children: "Catalogo"
										})
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
										setOpen,
										children: /* @__PURE__ */ jsx(Link, {
											className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition",
											href: "/consultas",
											children: "Consultas"
										})
									}) })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-row items-center justify-center gap-3",
								children: [
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
										setOpen,
										children: /* @__PURE__ */ jsx(Link, {
											className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center cursor-pointer",
											href: "/registro-de-clientes",
											children: /* @__PURE__ */ jsx(CreateUser, { className: "" })
										})
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitchOpen, {
										setOpen,
										children: /* @__PURE__ */ jsx(Link, {
											className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center cursor-pointer",
											href: "/formulario-de-login",
											children: /* @__PURE__ */ jsx(Login, { className: "" })
										})
									}) }),
									/* @__PURE__ */ jsx("li", {
										className: "hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition flex justify-center items-center",
										children: /* @__PURE__ */ jsx(SwitchOpen, {
											setOpen,
											children: /* @__PURE__ */ jsx(ButtonOfDarkMode, {})
										})
									})
								]
							})
						]
					})
				})]
			})]
		})
	});
}
//#endregion
//#region resources/js/layouts/MainLayout.tsx
function MainLayout({ children }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", { className: "absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950\r\n                bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]\r\n                dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" }),
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsx("main", {
			className: "container mx-auto pt-14",
			children
		}),
		/* @__PURE__ */ jsx("footer", {
			className: "rounded-lg shadow bg-black/5 dark:bg-black/20 backdrop-blur-lg container mx-auto mb-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90",
					children: [
						"© 2026 ",
						/* @__PURE__ */ jsx("a", {
							href: "https://midu.dev/",
							className: "hover:underline",
							children: "Juan María Mancedo"
						}),
						".Casi todos los derechos reservados"
					]
				}), /* @__PURE__ */ jsxs("ul", {
					className: "flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0",
					children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						href: "/quienes-somos",
						className: "hover:underline me-4 md:me-6",
						children: "Quienes somos?"
					}) }), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						href: "/contacto",
						className: "hover:underline",
						children: "Contacto"
					}) })]
				})]
			})
		})
	] });
}
//#endregion
export { MainLayout as t };
