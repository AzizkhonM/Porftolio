import { acceptHMRUpdate, defineStore } from "pinia"

export const useBlogStore = defineStore({
    id: "blogStore",
    state: () => {
        return {
            array: null,
            loading: true,
            errorMessage: ""
        }
    },

    actions: {
        set_list(list: never){
            this.array = (list)
        }
    },

    getters: {
        get_list: (state) => {
            return () => state.array
        }
    }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot))
}