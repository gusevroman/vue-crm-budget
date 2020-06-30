<template>
  <div>
    <h3>Add record to budget</h3>

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
            :value="c.title"
            :category="c.category"
            size="medium"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-radio-group v-model="typeRecord" size="medium" fill="orange">
          <el-radio-button label="income">income</el-radio-button>
          <el-radio-button label="expense">expense</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-input-number
          v-model="amount"
          size="medium"
          type="number"
          :min="1"
          :max="999999"
        ></el-input-number>
      </el-form-item>

      <el-form-item>
        <el-input
          v-model="description"
          placeholder="Enter description"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 10 }"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          class="btn-add"
          type="warning"
          plain
          icon="el-icon-plus"
          circle
          @click="addRecord"
        ></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Record',
  data: () => ({
    loading: true,
    categories: [],
    category: null,
    label: null,
    typeRecord: 'expense',
    amount: 50,
    description: '',
  }),
  computed: {
    ...mapGetters(['info']),
    allowCreateRecord() {
      return this.info.bill >= this.amount;
    },
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
    if (this.categories.length) {
      this.category = this.categories[0].title;
    }
    this.loading = false;
  },
  methods: {
    async addRecord() {
      if (!this.description.trim().length) {
        this.$message({ message: 'Please, repeat the name of the record', type: 'error' });
      } else if (this.allowCreateRecord) {
        try {
          await this.$store.dispatch('createRecord', {
            category: this.category,
            amount: this.amount,
            description: this.description,
            typeRecord: this.typeRecord,
            date: new Date().toJSON(),
          });
          this.$message({ message: 'Record created', type: 'success' });
        } catch (error) {
          this.$message({ message: 'Anything wrong, record not created', type: 'error' });
        }
      } else {
        this.$message({ message: 'Insufficient funds', type: 'error' });
      }
    },
  },
};
</script>

<style scoped>
.form-record {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
