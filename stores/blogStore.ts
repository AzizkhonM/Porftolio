import { acceptHMRUpdate, defineStore } from "pinia"

export const useBlogStore = defineStore({
    id: "blogStore",
    state: () => {
        return {
            array: null,
            one: null,
            loading: true,
            errorMessage: ""
        }
    },

    actions: {
        set_list(list: never){
            this.array = (list)
        },

        set_one(one: never){
            this.one = (one)
        }
    },

    getters: {
        get_list: (state) => {
            return () => state.array
        },

        get_one: (state) => {
            return () => state.one
        }
    }
})

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot))
}