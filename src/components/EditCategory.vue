<template>
  <div>
    <template>
      <div>
        <h4>Edit</h4>
      </div>
      <el-form ref="formEditCategories" :model="formEditCategories" label-width="5rem">
        <el-form-item label="Select">
          <el-select v-model="value" placeholder="Select">
            <el-option-group v-for="group in options" :key="group.label" :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="formEditCategories.name"></el-input>
        </el-form-item>
        <el-form-item label="Min">
          <el-input v-model="formEditCategories.min"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="warning"
            icon="el-icon-edit"
            mini
            circle
            @click="editCategory"
          ></el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formCategories: {
        title: '',
      },
      formEditCategories: {
        title: '',
      },
      options: [
        {
          label: 'Popular cities',
          options: [
            {
              value: 'Shanghai',
              label: 'Shanghai',
            },
            {
              value: 'Beijing',
              label: 'Beijing',
            },
          ],
        },
        {
          label: 'City name',
          options: [
            {
              value: 'Chengdu',
              label: 'Chengdu',
            },
            {
              value: 'Shenzhen',
              label: 'Shenzhen',
            },
          ],
        },
      ],
      value: '',
    };
  },
  methods: {
    async createCategory() {
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
    editCategory() {},
  },
};
</script>
