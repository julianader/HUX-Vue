<script setup lang="ts">
import SudokuBlock from './SudokuBlock.vue'
</script>

<template>
  <h1>Sudoku</h1>
  <div class="game-board">
    <SudokuBlock v-for="block in 9" :key="block" />
  </div>
</template>

<style scoped>
.game-board {
  display: grid;
  grid-template-columns: repeat(3, 120px);
  grid-auto-rows: 120px;
  gap: 0;
  border: 4px solid #000;
  padding: 0;
  background: #fff;
  width: max-content;
}
</style>
