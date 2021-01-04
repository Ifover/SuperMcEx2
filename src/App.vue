<template>
  <Main :initDta="msg"></Main>
</template>

<script>
import Main from "./components/Main";

export default {
  data() {
    return {
      msg: '淦淦淦淦淦淦'
    }
  },
  components: {
    Main
  }
}
</script>

<style>
body {
  background-color: #000;
}
.record_model {
  box-sizing: content-box
}

</style>
