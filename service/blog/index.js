import axios from "../axios"

export const useBlog = {
    list: async () => axios.get("/posts"),
    one: async (id) => axios.get(`/posts/${id}`)
}