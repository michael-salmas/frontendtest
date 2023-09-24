<template>
  <div 
    class="chessboard"
  >
    <template
      v-for="row in 8"
      :key="row"
    >  
      <template
        v-for="column in 8"
        :key="column" 
      >
        <ChessboardSquare
          :row="row"
          :column="column"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import ChessboardSquare from './ChessboardSquare.vue'
</script>

<style scoped>
.chessboard{
  display: grid;
  grid-template-columns: repeat(8, minmax(0px,1fr));
  grid-template-rows: repeat(8, minmax(0px,1fr));

  min-width: calc(min(90vw,90vh));
  min-height: calc(min(90vw,90vh));

  font-family: 'Poppins', sans-serif;
}
</style>
