import { createInertiaApp } from '@inertiajs/react';
import { hydrateRoot } from 'react-dom/client'; // Cambiar de createRoot a hydrateRoot
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        hydrateRoot(el, <App {...props} />); // Usar hydrateRoot en lugar de createRoot
    },
});