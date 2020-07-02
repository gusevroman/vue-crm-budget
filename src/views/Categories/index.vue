<template>
  <div>
    <div>
      <h3>Categories</h3>
    </div>
    <CreateCategory @created="addNewCategory" />
    <EditCategory
      :key="categories.length + updateCount"
      v-loading="loading"
      :categories="categories"
      @updated="updateCategories"
    />
  </div>
</template>

<script>
import CreateCategory from '../../components/CreateCategory';
import EditCategory from '../../components/EditCategory';

export default {
  name: 'Categories',
  components: {
    CreateCategory,
    EditCategory,
  },
  data: () => ({
    loading: true,
    categories: [],
    updateCount: 0,
  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    this.loading = false;
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex((c) => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount++;
    },
  },
};
</script>
