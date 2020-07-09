<template>
  <div>
    <h3>Bill is ${{ info.bill }}</h3>

    <el-form v-loading="loading" class="form-record">
      <p v-if="!categories.length">
        No categories yet.
        <router-link to="/categories">
          Add new category
        </router-link>
      </p>

      <section v-else>
        <h3>Categories:</h3>
        <div v-for="cat of categories" :key="cat.id">
          <p>
            <strong>{{ cat.title }}</strong>
            <span class="cost-overrun"> {{ cat.spent }} out of {{ cat.limit }} </span>
            <el-tooltip effect="dark" :content="`${cat.spent} out of ${cat.limit}`" placement="top">
              <el-progress
                class="progress-bar"
                :text-inside="true"
                :stroke-width="20"
                :percentage="cat.percentage"
                :status="cat.status"
              ></el-progress>
            </el-tooltip>
          </p>
        </div>
      </section>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Expense',
  data: () => {
    return {
      loading: true,
      categories: [],
    };
  },
  computed: {
    ...mapGetters(['info']),
  },
  async mounted() {
    const records = await this.$store.dispatch('fetchRecords');
    const categories = await this.$store.dispatch('fetchCategories');

    this.categories = categories.map((cat) => {
      const spent = records
        .filter((rec) => rec.category === cat.title)
        .filter((rec) => rec.type === 'expense')
        .reduce((sum, rec) => {
          return (sum += +rec.amount);
        }, 0);

      const percent = Math.ceil((100 * spent) / cat.limit);
      const percentage = percent < 100 ? percent : 100;
      const status = this.customColorMethod(percentage);

      return { ...cat, spent, percentage, status };
    });

    this.loading = false;
  },
  methods: {
    customColorMethod(percentage) {
      return percentage < 40 ? 'success' : percentage < 90 ? 'warning' : 'exception';
    },
  },
};
</script>

<style scoped>
.progress-bar {
  font-weight: bold;
}

.cost-overrun {
  font-style: italic;
  font-size: 1rem;
}
</style>
