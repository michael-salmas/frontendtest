<template>
  <div class="toolbar">
    <div 
        class="theme-selector"
    >  
      <lightIcon
      width="27px"
      height="27px"
      v-if = "themeStore.getTheme === 'dark-theme'" 
      @click = "themeStore.toggleTheme()"
      />
      <darkIcon
      width="27px"
      height="27px"
      v-else
      @click = "themeStore.toggleTheme()"
      />
    </div>
    
    <div
    @click="handleClear()"
    class="clear-button"
    >
      Clear
    </div>
    <div class="counter">
      {{ coordinatesStore.labelCount }}
    </div> 
  </div>
</template>
  
<script setup lang="ts">
import { useCoordinatesStore } from '@/stores/coordinates'
import { useLastClickedStore } from '@/stores/lastClicked'
import { useThemeStore } from '@/stores/theme'

import lightIcon from '@/components/icons/IconLight.vue'
import darkIcon from '@/components/icons/IconDark.vue'

const coordinatesStore = useCoordinatesStore()
const lastClickedStore = useLastClickedStore()
const themeStore = useThemeStore()

function handleClear() {
  coordinatesStore.clearLabel();
  lastClickedStore.clearLastClicked();
}

</script>

<style scoped lang="scss">
.dark{
  .counter{
    color: white;
  }
}

.toolbar{
  display: flex;
  place-content: space-around;
  padding-top: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    place-content: center;
    place-items: center;
    gap: 20px;
    padding: 0px 0px 0px 10px;
  }
}

.theme-selector{
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
}

.counter{
  min-width: 42px;
  font-size: 1.5rem;

  @media screen and (max-width: 600px) {
    text-align: right;
  }
}

.clear-button{
  font-size: 1.2rem;
  background-color: #CCFECD;
  border-radius: 10px;
  border: none;
  padding: 5px;
  cursor: pointer;
  transition: ease-in-out 0.3s;
  
  &:hover{
    filter: brightness(0.8);
  }
  &:active{
    filter: brightness(0.6);
    transition: none;
  }
}

</style>
