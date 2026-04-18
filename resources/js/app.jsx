import { createInertiaApp } from '@inertiajs/react';
import { hydrateRoot } from 'react-dom/client'; // Cambiar de createRoot a hydrateRoot
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Provider } from 'react-redux';
import { store } from './redux/store';

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        hydrateRoot(el, 
            <Provider store={store}>
                <App {...props} />
            </Provider>
        ); // Usar hydrateRoot en lugar de createRoot
    },
});