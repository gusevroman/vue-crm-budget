<template>
  <div>
    <div>
      <h3>History of payments and incomes</h3>
      total {{ records.length }} records.
    </div>
    <HistoryTable
      :key="records.length + updateCount"
      v-loading="loading"
      :records="records"
      @updated="updateRecords"
    />
  </div>
</template>

<script>
import HistoryTable from '@/components/app/HistoryTable';
export default {
  name: 'History',
  components: {
    HistoryTable,
  },
  data: () => ({
    loading: true,
    records: [],
    updateCount: 0,
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords');
    this.loading = false;
  },
  methods: {
    updateRecords(id) {
      this.records = this.records.filter((r) => r.id !== id);
      this.updateCount++;
    },
  },
};
</script>
