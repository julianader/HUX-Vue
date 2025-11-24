<script setup lang="ts">
const props = defineProps<{ value?: number }>()
</script>

<template>
  <div class="number-block">{{ props.value }}</div>
</template>

<style scoped>
.number-block {
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #111;
  background: #fff;
}
</style>
