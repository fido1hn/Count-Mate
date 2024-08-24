<template>
  <div>
    <div class="gradient-background h-40 w-full md:h-60"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.gradient-background {
  background: linear-gradient(
    140deg,
    #981ee3,
    #b74bfe 10% 55%,
    #f79b76 70%,
    #fde579 90%
  );
}
@media (max-width: 630px) {
  .gradient-background {
    background: linear-gradient(140deg, #b74bfe 50%, #f79b76 70%);
  }
}
</style>
