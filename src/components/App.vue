<template>
  <div id="app">
    {{msg}}
    <Button type="primary" size="large">Primary</Button>
    <Button size="large" @click="open(true)">Open notice(only title)</Button>
    <Collspan></Collspan>
  </div>
</template>
<script>
import Collspan from "./Collspan.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "vue test"
    };
  },
  methods: {
    open(nodesc) {
      this.$Notice.open({
        title: "Notification title",
        desc: nodesc
          ? ""
          : "Here is the notification description. Here is the notification description. "
      });
    }
  },
  components: {
    Collspan: Collspan
  }
};
</script>
<style>
#app {
  color: Red;
}
</style>

