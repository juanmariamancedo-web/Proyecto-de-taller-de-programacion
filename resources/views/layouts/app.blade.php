<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    </head>
    <body class="relative text-black dark:text-white overflow-x-hidden">
        <header data-react="Header">
        </header>
        <main class="p-7">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            @yield('content')
        </main>
    </body>
</html>
