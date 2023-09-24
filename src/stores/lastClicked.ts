import { defineStore } from 'pinia'

export const useLastClickedStore = defineStore({
  id: 'LastClicked',
  state: () => ({
    label: "" as string,
  }),
  actions: {
    setLastClicked(labelValue: string) {
      this.label = labelValue
    },
    clearLastClicked() {
      this.label = ""
    }
  },
  getters: {
    LastClickedLabel: (state) => {
      return state.label
    }
  }
})
