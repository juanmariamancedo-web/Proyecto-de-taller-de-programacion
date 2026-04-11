<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    class="{{ cookie('theme') === 'dark' ? 'dark' : '' }}" >
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    </head>
    <body class="flex flex-col justify-between min-h-screen relative text-black dark:text-white overflow-x-hidden">
        <div
            class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950
            bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
            dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
        <header data-react="Header">
        </header>
        <main class="container mx-auto pt-14">
            @yield('content')
        </main>
        <footer class="rounded-lg shadow bg-black/5 dark:bg-black/20 backdrop-blur-lg container mx-auto mb-10">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90">© 2026 <a href="https://midu.dev/" class="hover:underline">Juan María Mancedo</a>.Casi todos los derechos reservados</span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
                    <li>
                        <a href="/quienes-somos" class="hover:underline me-4 md:me-6">Quienes somos?</a>
                    </li>
                    <li>
                        <a href="/contacto" class="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    </body>
</html>
