import { create } from "zustand";

interface props {
    isSubmitted: boolean;
    setIsSubmitted: (val: boolean) => void;
}

export const formStore = create<props>((set) => ({
    isSubmitted: false,
    setIsSubmitted: (val: boolean) => set({ isSubmitted: !val }),
}));
