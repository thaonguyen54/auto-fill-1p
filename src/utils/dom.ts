// src/utils/root.ts
import { Root, createRoot } from 'react-dom/client';

class RootContainer {
    private static instance: Root | null = null;

    static getRoot(): Root {
        if (!this.instance) {
            const container = document.getElementById('root');
            if (!container) {
                throw new Error('Root element not found');
            }

            this.instance = createRoot(container);
        }
        return this.instance;
    }
}

export default RootContainer;