import { create } from 'zustand';

export const useUIStore = create((set) => ({

    modal: null, 
    confirm: null, 

    OpenModal: (title, message, onClose) => set(
        { 
            modal: { title, message, onClose } 
        }
    ),

    CloseModal: () => set({ modal: null }),

    OpenConfirm: (title, message, onConfirm, onCancel) => set(
        { 
            confirm: { title, message, onConfirm, onCancel } 
        }
    ),

    CloseConfirm: () => set({ confirm: null }),

}));