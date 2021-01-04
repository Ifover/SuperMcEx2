<template>
  <div id="mcex">
    <h2 style="color: #f3f;">{{ initDta }}</h2>
    <a-button type="primary">
      Primary
    </a-button>
  </div>
</template>

<script>
export default {
  name: "super-mc-ex-2",
  props: {
    initDta: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
#mcex {
  position: fixed;
  right: 10px;
  top: 60px;
}
h2 {
  color: #fff !important;
}
</style>
