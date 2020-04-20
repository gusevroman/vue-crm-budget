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
import Navbar from '@/components/app/Navbar.vue';
import Sidebar from '@/components/app/Sidebar.vue';
export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Sidebar,
  },
  data: () => ({
    isOpenSidebar: false,
  }),
};
</script>
