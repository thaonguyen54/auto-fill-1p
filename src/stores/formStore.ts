import { create } from "zustand";

interface FormState {
    isContinue: boolean;
    isLoading: boolean;
    newFormEnabled: boolean;
    isEmailValid: boolean;
    email: string;
    setContinue(value: boolean): void;
    setLoading(value: boolean): void;
    setNewFormEnabled(value: boolean): void;
    setEmailValid(value: boolean): void;
    setEmail(value: string): void;
}

const useFormStore = create<FormState>((set) => ({
    isContinue: false,
    isLoading: false,
    newFormEnabled: false,
    isEmailValid: true,
    email: "",
    setContinue: (value) => set({ isContinue: value }),
    setLoading: (value) => set({ isLoading: value }),
    setNewFormEnabled: (value) => set({ newFormEnabled: value }),
    setEmailValid: (value) => set({ isEmailValid: value }),
    setEmail: (value) => set({ email: value }),
}))

export default useFormStore;