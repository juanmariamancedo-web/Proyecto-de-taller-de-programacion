<!DOCTYPE html>
<html
    lang="{{ str_replace('_', '-', app()->getLocale()) }}"
>
    <head>
        <script>
            (function () {
                const theme = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('theme='))
                    ?.split('=')[1];

                if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                }
            })();
        </script>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="flex flex-col justify-between min-h-screen relative text-black dark:text-white overflow-x-hidden">
        @inertia
    </body>
</html>
