import {create} from "zustand"

interface useStoreState {
    username: string | null
}

interface useStoreActions {
    setUsername: (newUsername: string | null) => void
}

export const useStore = create<useStoreState & useStoreActions>((set) => ({
    username: null,
    setUsername: (newUsername) => set({username: newUsername})
}))