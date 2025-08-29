import { defineStore } from 'pinia'

export const useComplaintStore = defineStore('complaint', {
  state: () => ({
    complaintData: null
  }),
  actions: {
    setComplaintData(data) {
      this.complaintData = data
    },
    clearComplaintData() {
      this.complaintData = null
    }
  },
  persist: true // Optional: if you want to persist data across page refreshes
})