<template>
  <div>
    <template>
      <el-form>
        <el-form-item label="Add new category">
          <el-form-item>
            <el-input
              v-model="title"
              type="text"
              maxlength="30"
              minlength="3"
              show-word-limit
              prefix-icon="el-icon-edit"
              placeholder="Enter name of the new category"
              autofocus="true"
            ></el-input>
          </el-form-item>

          <el-form-item class="btn" label="Limit">
            <el-form-item>
              <el-input-number
                v-model="limit"
                type="number"
                :min="1"
                :max="999999"
              ></el-input-number>
            </el-form-item>

            <el-form-item class="btn">
              <el-button
                type="success"
                icon="el-icon-plus"
                plain
                circle
                @click="addCategory"
              ></el-button>
            </el-form-item>
          </el-form-item>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script>
import { limitCategory } from '../../services/constants';

export default {
  data() {
    return {
      title: '',
      limit: +limitCategory,
    };
  },
  methods: {
    async addCategory() {
      if (this.title.length <= 2) {
        this.$message({ message: 'Please, repeat the name of the category', type: 'error' });
      } else {
        try {
          const category = await this.$store.dispatch('createCategory', {
            title: this.title,
            limit: this.limit,
          });
          this.$emit('created', category);
          this.title = '';
          this.limit = 1000;
          this.$message({ message: 'Category created', type: 'success' });
        } catch (error) {
          this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
        }
      }
    },
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.el-button:hover {
  cursor: pointer;
}
</style>
