import type { BookInCart } from "@/models/Book";
import { defineStore } from "pinia";

interface CartState {
    isLoading: boolean,
    data: BookInCart[],
    error: string | null,
}
export const useCartStore = defineStore('',{
state: (): CartState => ({
    isLoading:false,
    data:[],
    error: null
}),
actions :{
    addBook(){

    },


    removeBook(){

    }
}
})