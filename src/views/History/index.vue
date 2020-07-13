<template>
  <div>
    <div>
      <h3>History of payments and receipts</h3>
      total {{ records.length }} records.
    </div>
    <HistoryTable v-loading="loading" :records="records" />
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
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords');
    this.loading = false;
  },
};
</script>
