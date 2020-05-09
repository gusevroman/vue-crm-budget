<template>
  <div>
    <h3>Add a note</h3>

    <el-form v-loading="loading" class="form-record">
      <p v-if="!categories.length">
        No categories yet. <router-link to="/categories">Add new category</router-link>
      </p>
      <el-form-item v-else>
        <el-select v-model="category" placeholder="Select category">
          <el-option
            v-for="c in categories"
            :id="c.id"
            :key="c.id"
            :label="c.label"
            :category="c.category"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="radio" fill="orange">
          <el-radio-button label="income"></el-radio-button>
          <el-radio-button label="outcome"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-input-number v-model="amount" type="number" :min="1" :max="999999"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="description"
          placeholder="Enter description"
          type="textarea"
          autosize
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-add" type="warning" plain icon="el-icon-plus" circle></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Record',
  data: () => ({
    loading: true,
    categories: [],
    category: null,
    radio: 'outcome',
    amount: 50,
    description: '',
  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    if (this.categories.length) {
      this.category = this.categories[0].title;
    }
    this.loading = false;
  },
  methods: {},
};
</script>

<style scoped>
.form-record {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
