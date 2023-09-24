import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    label: "light-theme" as string,
  }),
  actions: {
    toggleTheme() {
      if (this.label === "light-theme") {
        this.label = "dark-theme";
      } else {
        this.label = "light-theme";
      }
    },
    setTheme(theme: string) {
      if (theme === this.label) {
        return;
      } else {
        this.toggleTheme();
      }
    },
  },
  getters: {
    getTheme: (state) => {
      return state.label
    }
  }
})
