<template>
  <div class="app-main-layout">
    <h2>What's up, my friend!</h2>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$message({
        message: fbError.message || 'Something went wrong. Please try again.',
        type: 'error',
        duration: 5000,
      });
    },
  },
};
</script>
