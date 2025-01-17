
<template>
  <div 
    class="chessboard-square"
    :class="[
      `${(props.row + props.column) % 2 === 0 ? 'light-square' : 'dark-square'}`,
      `${lastClickedStore.LastClickedLabel == (String(props.column) + String(props.row)) ? 'last-clicked' : ''}`,
    ]"
    @click="chessSquareClick()"
  >
    <div
      v-if="props.row === 8 && props.column === 1"
      class="top bottom"
      :data-letter-label="letterLabel"
      :data-number-label="numberLabel"
    />
    <div
      v-else-if="props.column === 1"
      class="top"
      :data-number-label="numberLabel"
    />
    <div
      v-else-if="props.row === 8"
      class="bottom"
      :data-letter-label="letterLabel"
    />
  </div>
</template>

<script setup lang="ts">
import { useCoordinatesStore } from '@/stores/coordinates';
import { useLastClickedStore } from '@/stores/lastClicked';

const coordinatesStore = useCoordinatesStore()
const lastClickedStore = useLastClickedStore()

const props = defineProps<{
  row: number,
  column: number,
}>()

const letterLabel = String.fromCharCode(96 + props.column);
const numberLabel = 9 - props.row;

function chessSquareClick() {
  coordinatesStore.addLabel(letterLabel + (numberLabel));
  lastClickedStore.setLastClicked(String(props.column) + String(props.row));
}

</script>

<style scoped lang="scss">

.dark{
  .dark-square{
    background-color: #79AF99;
  }

  .light-square{
    background-color: #CCFECD;
  }

  .last-clicked.light-square{
    background-color: #9e2aab; 
  }

  .last-clicked.dark-square{
    background-color: #9a34a0; 
  }
}

.light{
  .dark-square{
    background-color: #5BC69B;
  }

  .light-square{
    background-color: #CCFECD;
  }

  .last-clicked.light-square{
    background-color: #D4E635;
  }

  .last-clicked.dark-square{
    background-color: #C3D14D;
  }
}

.chessboard-square{
  display: grid;
  transition: ease-in-out 0.3s;

  &:hover{
    filter: brightness(0.8);
    transition: none;
  }
}

.bottom{
  position: relative;
  &::before{
    content: attr(data-letter-label);
    font-size: 1rem;
    display: inline-block;
    position: absolute;
    bottom: 0.2rem;
    right: 0.3rem;
  }
}

.top{
  position: relative;
  &::after{
    content: attr(data-number-label);
    font-size: 1rem;
    display: inline-block;
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
  }
}

</style>
