<template>
  <div>
    <el-table
      :data="records"
      class="table"
      style="width: 100%;"
      size="mini"
      :row-class-name="tableRow"
    >
      <el-table-column
        fixed
        sortable
        prop="date"
        class="date"
        label="Date"
        width="120"
        :formatter="formatterDate"
      >
      </el-table-column>
      <el-table-column prop="amount" sortable class="amount" label="$$" width="70">
      </el-table-column>
      <el-table-column prop="description" class="table" label="Description" min-width="100">
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
      <el-table-column class="actions" label="Action" width="80" fixed="right">
        <template slot-scope="actions">
          <el-popover placement="top-start" width="40" trigger="hover" content="view detail">
            <el-button
              slot="reference"
              type="primary"
              icon="el-icon-view"
              circle
              plain
              size="mini"
              @click="viewRecord(actions.row)"
            ></el-button>
          </el-popover>

          <el-popover placement="top-start" width="40" trigger="hover" content="delete record">
            <el-popconfirm
              slot="reference"
              confirm-button-text="Delete"
              cancel-button-text="Cancel"
              icon="el-icon-delete"
              title="Delete the record?"
              @onConfirm="deleteRecord(actions.row)"
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
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import filterDate from '../../../filters/date.filter';

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
  computed: {
    ...mapGetters(['info']),
  },
  methods: {
    viewRecord(row) {
      const id = row.id;
      this.$router.push(`/record/${id}`);
    },
    async deleteRecord(row) {
      try {
        const { id, amount, type, description } = row;
        await this.$store.dispatch('deleteRecord', id);

        const bill = type === 'income' ? this.info.bill - amount : this.info.bill + amount;
        await this.$store.dispatch('updateInfo', { bill });

        this.$emit('updated', id);
        this.$message({ message: `Record ${description} was deleted`, type: 'success' });
      } catch (error) {
        this.$message({ message: 'Anything wrong, please repeat', type: 'error' });
      }
    },
    filterType(value, row) {
      return row.type === value;
    },
    formatterDate(row) {
      const { date } = row;
      return filterDate(date, 'date');
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

.actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
