import { createContext, useContext } from 'react';

export const StoreContext = createContext(null);

export const useStore = () => {
    const ctx = useContext(StoreContext);
    if (!ctx) throw new Error('useStore must be used inside <StoreProvider>');
    return ctx;
};
