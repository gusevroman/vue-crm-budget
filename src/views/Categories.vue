<template>
  <div>
    <div>
      <h3>Categories</h3>
    </div>
    <CreateCategory />
    <EditCategory />
  </div>
</template>

<script>
import CreateCategory from '@/components/CreateCategory';
import EditCategory from '@/components/EditCategory';

export default {
  name: 'Categories',
  components: {
    CreateCategory,
    EditCategory,
  },
  data: () => ({}),
  methods: {},
};
</script>
