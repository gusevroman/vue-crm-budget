<template>
  <div>
    <h3>Profile</h3>
    <span>name: {{ name }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.getters.info.login;
    },
  },
};
</script>
