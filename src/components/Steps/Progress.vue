<template>
  <div class="step-progress my-3 mx-auto">
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style=" { width: width + '%' }" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true
    }
  }
}
</script>
