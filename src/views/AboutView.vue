<template>
  <div>
    <h1>ABOUT</h1>
    <button @click="flash('hi hello')">
      Click
    </button>
  </div>
</template>

<script>
import { useFlash } from '@/composables/useFlash';

export default {
  setup() {
    let { flash } = useFlash()

    return {
      flash
    }
  },
}
</script>