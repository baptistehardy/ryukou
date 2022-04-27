import create from 'zustand'

const getLocalStorage = (key: string) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key: string, value: any) =>
    window.localStorage.setItem(key, JSON.stringify(value));

interface Count {
    count: number;
    increaseCount: (count: any) => void,
    reset: () => void
}

export const useStore = create<Count>(set => ({
    count: getLocalStorage("count") || 0,
    increaseCount: (number) =>
        set((state) => {
            state.count += number;
            setLocalStorage("count", state.count);
        }),
    reset: () =>
        set((state) => {
            state.count = 0;
            setLocalStorage("count", state.count);
        }),
}))
