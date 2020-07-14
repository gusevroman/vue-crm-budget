<template>
  <div>
    <el-table
      :data="records"
      class="table"
      style="max-width: 100%;"
      size="mini"
      :row-class-name="tableRow"
    >
      <el-table-column
        fixed
        sortable
        prop="date"
        class="date"
        label="Date"
        width="90"
        :formatter="formatterDate"
      >
      </el-table-column>
      <el-table-column prop="amount" sortable class="table" label="Amount" width="100">
      </el-table-column>
      <el-table-column prop="description" class="table" label="Description" width="100">
      </el-table-column>
      <el-table-column prop="category" class="table" label="Categories" width="100">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Type"
        width="80"
        :filters="[
          { text: 'expense', value: 'expense' },
          { text: 'income', value: 'income' },
        ]"
        :filter-method="filterType"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.type === 'expense' ? 'danger' : 'primary'" disable-transitions>
            {{ scope.row.type }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column class="operations" label="Operations" width="130" fixed="right">
        <template slot-scope="operations">
          <el-button
            type="primary"
            icon="el-icon-view"
            circle
            plain
            size="mini"
            @click="viewRecord(operations.row)"
          ></el-button>

          <el-button
            type="warning"
            icon="el-icon-edit"
            circle
            plain
            size="mini"
            @click.prevent="editRecord(operations.row)"
          ></el-button>

          <el-popconfirm
            confirm-button-text="Delete"
            cancel-button-text="Cancel"
            icon="el-icon-delete"
            title="Confirm the action"
            @onConfirm="deleteRecord(operations.row)"
          >
            <el-button
              slot="reference"
              type="danger"
              icon="el-icon-delete"
              circle
              plain
              size="mini"
            ></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HistoryTable',
  props: {
    records: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    loading: true,
  }),
  methods: {
    viewRecord(row) {
      console.log('click - viewRecord', row);
    },
    editRecord(row) {
      console.log('click - editRecord', row.amount);
    },
    async deleteRecord(row) {
      try {
        const id = row.id;
        await this.$store.dispatch('deleteRecord', id);
        this.$emit('updated', id);
        this.$message({ message: `Record ${row.description} was deleted`, type: 'success' });
      } catch (error) {
        this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
      }
    },
    filterType(value, row) {
      return row.type === value;
    },
    formatterDate(row) {
      // const date = new Date(row.date);
      // console.log('date', date.toDateString());
      // console.log('date', date.toLocaleDateString());
      // console.log('date', date.toLocaleTimeString());
      return row.date.slice(0, 10);
    },
    tableRow({ row }) {
      return row.type === 'expense' ? 'warning-row' : 'success-row';
    },
  },
};
</script>

<style>
.el-table .warning-row {
  background: #f1cfcf;
}

.el-table .success-row {
  background: #f0f9eb;
}

.warning-type {
  background: oldlace;
}

.table {
  font-size: 0.75rem;
}
</style>
