<!-- Here i want to handle a list of values, add them to a flex, that on overflow goes to the next line no matter the size of container. -->
<template>
  <div class="item-list">
    <div 
      v-for="(item, index) in coordinatesStore.label"
      :key="index"
      class="item"
    >
      {{ index + 1 }}. {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoordinatesStore } from '@/stores/coordinates'

const coordinatesStore = useCoordinatesStore()
</script>

<style scoped lang="scss">

.dark{
  .item-list{
    background-color: #343434;
  }
}

.light{
  .item-list{
    background-color: #a4a4a4;
  }
}
.item-list{
  margin: 15px 10px 10px 10px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(44px, 1fr));

  background-color: #f6c7c7;
  border-radius: 20px;

 /* overflow */
  overflow: hidden;
  overflow-y: auto;

  /* scroll bar */
  scrollbar-width: thin;
  scrollbar-color: #5BC69B #CCFECD;
  /* Border radius of scroll bar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #CCFECD;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5BC69B;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #53b58d;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #428e70;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    margin: 10px 10px 10px 15px;    
  }
}

.item{
  margin: 5px 5px;
  padding: 8px;
  background-color: #b1b1b1;
  border-radius: 20px;

}
</style>