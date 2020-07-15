<template>
  <div id="app">
    <mainer-component :num="num"></mainer-component>
  </div>
</template>

<script>
import mainer from "./components/mainer";

export default {
  name: "app",
  components: {
    "mainer-component": mainer
  },
  data() {
    return {
      num: 0
    };
  }
};
</script>

<style lang="scss">
@import "./scss/style.scss";
</style>
