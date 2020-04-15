<template>
  <div>
    <div>
      <h3>History</h3>
    </div>

    <el-table :data="tableData" style="max-width: 100%;" size="mini">
      <el-table-column fixed prop="date" label="Date" width="80"> </el-table-column>
      <el-table-column prop="cost" label="Cost" width="50"> </el-table-column>
      <el-table-column prop="name" label="Name" width="120"> </el-table-column>
      <el-table-column prop="category" label="Categories" width="80"> </el-table-column>
      <el-table-column prop="tag" label="Tag" width="100"> </el-table-column>

      <el-table-column fixed="right" label="Operations" width="90">
        <template slot-scope="">
          <el-button
            type="primary"
            icon="el-icon-view"
            circle
            plain
            size="mini"
            @click="viewItem"
          ></el-button>
          <el-button
            type="warning"
            icon="el-icon-edit"
            circle
            plain
            size="mini"
            @click="editItem"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          category: 'Fish',
          cost: 12,
          tag: 'Home',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          category: 'Travel',
          cost: 450,
          tag: 'Home',
        },
        {
          date: '2016-05-04',
          name: 'Hanna',
          category: 'Travel',
          cost: 22,
          tag: 'office',
        },
      ],
    };
  },
  methods: {
    viewItem() {
      console.log('click - viewItem');
    },
    editItem() {
      console.log('click - editItem');
    },
  },
};
</script>
