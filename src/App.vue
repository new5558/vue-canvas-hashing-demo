<template>
  <div class="container">
    <div v-for="(item, index) in list" v-bind:key="index" class="image">
      <LazyImage
        :width="200 + index"
        :height="200 + index"
        :url="`https://picsum.photos/${200 + index}`"
        placeholder="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
        alt="image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LazyImage from './components/LazyImage.vue'

export default defineComponent({
  name: 'App',
  components: {
    LazyImage
  },
  setup() {
    return {
      list: Array(20).fill(0)
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.canvas {
  border: 0 !important;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.image {
  margin: 10px;
}
</style>
