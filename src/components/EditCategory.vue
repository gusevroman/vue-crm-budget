<template>
  <div>
    <template>
      <div>
        <h4>Edit category</h4>
      </div>
      <el-form>
        <el-form-item label="Edit category">
          <el-select ref="select" v-model="current">
            <el-option v-for="c of categories" :key="c.id" :value="c.id">{{ c.title }}</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="New name the category">
          <el-input id="name" v-model="title" type="text" prefix-icon="el-icon-edit"></el-input>

          <el-button
            type="warning"
            icon="el-icon-edit"
            mini
            circle
            @click.prevent="updateCategory"
          ></el-button>
        </el-form-item>
      </el-form>
    </template>
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
    select: null,
    title: '',
    current: null,
  }),
  watch: {
    current(catId) {
      const { title } = this.categories.find((c) => c.id === catId);
      this.title = title;
    },
  },
  created() {
    const { title } = this.categories[0];
    this.current = title;
    this.title = title;
  },
  mounted() {
    // this.select = M.FormSelect.init(this.$refs.select);
    // M.updateTextFields();
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
  methods: {
    async updateCategory() {
      if (this.title.length < 3) {
        this.$message({ message: 'Please, repeat the name of the category', type: 'error' });
      } else {
        try {
          const categoryData = { id: this.current, title: this.title };
          await this.$store.dispatch('updateCategory', categoryData);
          this.$message({ message: 'Category updated successfully', type: 'success' });
          this.$emit('updated', categoryData);
        } catch (error) {
          this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
        }
      }
    },
  },
};
</script>
