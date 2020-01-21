<template>
<div></div>
</template>

<script>

export default {
  name: "profile",
  created() {
    this.player = this.$route.params.player;
  },
  data() {
    return {
      player: {}
    };
  }
};
</script>

<style scoped>

</style>