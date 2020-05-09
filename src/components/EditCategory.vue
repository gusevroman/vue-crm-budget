<template>
  <div>
    <el-form>
      <el-form-item label="Edit category:">
        <el-select v-model="current">
          <el-option v-for="c of categories" :key="c.id" :value="c.title">{{ c.title }}</el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="New name the category:">
        <el-input id="name" v-model="title" type="text" prefix-icon="el-icon-edit"></el-input>
      </el-form-item>
      <el-form-item class="btn-group">
        <el-button
          class="btn-delete"
          type="danger"
          icon="el-icon-delete"
          size="mini"
          circle
          @click.prevent="deleteCategory"
        ></el-button>

        <el-button
          class="btn-edit"
          type="warning"
          icon="el-icon-edit"
          size="mini"
          circle
          @click.prevent="updateCategory"
        ></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    loading: true,
    title: '',
    current: null,
  }),
  watch: {
    current(category) {
      const { title } = this.categories.find((c) => c.title === category);
      this.current = title;
      this.title = title;
    },
  },
  mounted() {
    if (this.categories.length) {
      this.current = this.categories[0].title;
    }
  },
  methods: {
    async updateCategory() {
      if (this.title.length < 3) {
        this.$message({ message: 'Please, repeat the name of the category', type: 'error' });
      } else {
        try {
          const { id } = this.categories.find((c) => c.title === this.current);
          const categoryData = { id: id, title: this.title };
          await this.$store.dispatch('updateCategory', categoryData);
          this.$message({ message: 'Category updated successfully', type: 'success' });
          this.$emit('updated', categoryData);
        } catch (error) {
          this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
        }
      }
    },
    deleteCategory() {
      try {
        this.$message({ message: `Category ${this.title} was deleted`, type: 'success' });
      } catch (error) {
        this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
      }
    },
  },
};
</script>

<style scoped>
.btn-group {
  display: flex;
  justify-content: space-between;
}
.el-button:hover {
  cursor: pointer;
}
.el-form-item {
  margin-bottom: 0.5rem;
}
</style>
