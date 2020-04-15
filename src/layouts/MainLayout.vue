<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />
    <main class="app-content" :class="{ full: !isOpen }">
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
    isOpen: true,
  }),
};
</script>
