import { defineStore } from 'pinia'
import type { Book, BookInCart } from '@/models/Book'

export const useCartStore = defineStore('cart', {
  state: () => ({
    books: [] as BookInCart[],
  }),

  getters: {
    totalItems: (state) =>
      state.books.reduce((sum, book) => sum + book.qty, 0),

    totalPrice: (state) =>
      state.books.reduce((sum, book) => sum + book.price * book.qty, 0),
  },

  actions: {
    addBook(book: Book) {
      const existing = this.books.find((b) => b.id === book.id)
      if (existing) {
        existing.qty++
      } else {
        this.books.push({ ...book, qty: 1 })
      }
    },

    removeBook(id: number) {
      this.books = this.books.filter((b) => b.id !== id)
    },

    clearCart() {
      this.books = []
    },
  },
})
