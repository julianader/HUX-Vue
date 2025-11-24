<script setup lang="ts">
import NumberBlock from './NumberBlock.vue'
</script>

<template>
  <div class="sudoku-block">
    <NumberBlock v-for="block in 9" :key="block" />
  </div>
</template>

<style scoped>
.sudoku-block {
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: repeat(3, 40px);
  gap: 0;
  border: 2px solid #000;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
}
</style>
