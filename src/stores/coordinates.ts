import { defineStore } from 'pinia'

export const useCoordinatesStore = defineStore({
  id: 'Coordinates',
  state: () => ({
    label: [] as string[],
  }),
  actions: {
    addLabel(label: string) {
      this.label.push(label)
    },
    removeLabel(label: string) {
      const index = this.label.indexOf(label)
      if (index > -1) {
        this.label.splice(index, 1)
      }
    },
    clearLabel() {
      this.label = []
    }
  },
  getters: {
    labelCount: (state) => {
      return state.label.length
    }
  }
})
