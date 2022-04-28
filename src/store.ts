import create from 'zustand'

const getLocalStorage = (key: string) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key: string, value: any) =>
    window.localStorage.setItem(key, JSON.stringify(value));

export interface Cloth {
    id?: string
    name: string,
    image?: string,
    url: string
}

export interface ClothesSets {
    id: string,
    name: string,
    data: ClothesSetsData[]
}

interface ClothesSetsData {

}

interface ClothesStore {
    clothes: Cloth[],
    addCloth: (cloth: Cloth) => void,
    reset: () => void
}

export const useClothesStore = create<ClothesStore>(set => ({
    clothes: getLocalStorage("clothes") || [],
    addCloth: (cloth) =>
        set((state) => {
            state.clothes.push(cloth)
            setLocalStorage("clothes", state.clothes);
        }),
    reset: () =>
        set((state) => {
            state.clothes = []
            setLocalStorage("clothes", state.clothes);
        }),
}))
