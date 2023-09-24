<template>
  <div 
    class="background"
    :class="[themeStore.getTheme === 'light-theme' ? 'light' : 'dark']"  
  >
    <div 
    class="app"
    >
      <Chessboard />
      <SideBar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Chessboard from './components/ChessboardBoard.vue'
import SideBar from './components/SideBar.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

</script>

<style scoped lang="scss">
.app{
  padding: 2rem;
 
  display: flex;
  flex-direction: row;
  place-content: center;
  place-items: center;
  gap: 40px;

  font-family: 'Poppins', sans-serif;
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 40px;
  }
}

.background{
  height: 100vh;
  &.light{
    background-color: rgb(255, 255, 255);
  }
  
  &.dark{
    background-color: rgb(49, 49, 49)
  }
}

</style>
