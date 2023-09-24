<template>
  <div 
    class="side-panel"
  >
    <ToolBar />
    <HistoryList />
  </div>
</template>

<script setup lang="ts">
import HistoryList from './HistoryList.vue'
import ToolBar from './ToolBar.vue';

</script>

<style scoped lang="scss">
.dark {
  .side-panel{
    background-color: rgb(124, 121, 121);
  }
}

.light {
  .side-panel{
    background-color: rgb(189, 189, 189);
  }
}

.side-panel{
  display: flex;
  flex-direction: column;
  
  height: calc(min(90vw,90vh));
  width: 300px;  
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    width: calc(min(90vw,90vh));
    height: 200px;
    flex-direction: row;
  }
}

</style>
