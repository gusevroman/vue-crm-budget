<template>
  <div>
    <template>
      <el-form>
        <el-form-item label="Add new category">
          <el-input
            v-model="title"
            type="text"
            maxlength="30"
            minlength="3"
            show-word-limit="true"
            prefix-icon="el-icon-edit"
            placeholder="New category"
            autofocus="true"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" icon="el-icon-plus" circle @click="submitHandler"></el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    async submitHandler() {
      console.log(this.title);
      try {
        const category = await this.$store.dispatch('createCategory', {
          title: this.title,
        });
        this.title = '';
        this.$message({ message: 'Category created', type: 'success' });
        this.$emit('created', category);
      } catch (error) {
        this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
        console.log(error);
      }
    },
  },
};
</script>
