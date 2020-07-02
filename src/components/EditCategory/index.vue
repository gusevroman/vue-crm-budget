<template>
  <div>
    <el-form class="edit-items">
      <el-form-item label="Edit category:">
        <el-select v-model="currentCategory">
          <el-option v-for="c of categories" :key="c.id" :value="c.title">{{ c.title }}</el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="New name:">
        <el-input id="name" v-model="title" type="text" prefix-icon="el-icon-edit"></el-input>
      </el-form-item>

      <el-form-item class="edit-limit" label="New limit:">
        <el-input-number
          id="limit"
          v-model="limit"
          type="number"
          :min="1"
          :max="999999"
        ></el-input-number>
      </el-form-item>

      <el-form-item class="btn-group">
        <el-button
          class="btn-delete"
          type="danger"
          icon="el-icon-delete"
          plain
          circle
          @click.prevent="deleteCategory"
        ></el-button>

        <el-button
          class="btn-edit"
          type="warning"
          icon="el-icon-edit"
          plain
          circle
          @click.prevent="updateCategory"
        ></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import limitCategory from '../../services/constants';

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
    limit: limitCategory,
    currentCategory: null,
  }),
  watch: {
    currentCategory(category) {
      const { title, limit } = this.categories.find((c) => c.title === category);
      this.currentCategory = title;
      this.title = title;
      this.limit = limit;
    },
  },
  mounted() {
    if (this.categories.length) {
      this.currentCategory = this.categories[0].title;
    }
  },
  methods: {
    async updateCategory() {
      if (this.title.length < 3) {
        this.$message({ message: 'Please, repeat the name of the category', type: 'error' });
      } else {
        try {
          const { id } = this.categories.find((c) => c.title === this.currentCategory);
          const categoryData = { id: id, title: this.title, limit: this.limit };
          await this.$store.dispatch('updateCategory', categoryData);
          this.$emit('updated', categoryData);
          this.$message({ message: 'Category updated successfully', type: 'success' });
        } catch (error) {
          this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
        }
      }
    },
    async deleteCategory() {
      try {
        const { id } = this.categories.find((c) => c.title === this.currentCategory);
        const categoryData = { id: id, title: this.title };
        await this.$store.dispatch('deleteCategory', categoryData);
        this.$emit('updated', categoryData);
        this.$message({ message: `Category ${this.title} was deleted`, type: 'success' });
      } catch (error) {
        this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
      }
    },
  },
};
</script>

<style scoped>
.edit-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.edit-limit {
  display: flex;
  justify-content: center;
}
.btn-group {
  display: flex;
  justify-content: center;
}
.el-button:hover {
  cursor: pointer;
}
.el-form-item {
  margin-bottom: 0.5rem;
}
</style>
