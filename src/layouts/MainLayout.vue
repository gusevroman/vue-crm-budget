<template>
  <div class="app-main-layout">
    <Navbar @click="isOpenSidebar = !isOpenSidebar" />
    <Sidebar v-model="isOpenSidebar" />
    <main class="app-content" :class="{ full: !isOpenSidebar }">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar';
import Sidebar from '@/components/app/Sidebar';
export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Sidebar,
  },
  data: () => ({
    isOpenSidebar: false,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo');
    }
  },
};
</script>
