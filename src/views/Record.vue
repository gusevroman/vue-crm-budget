<template>
  <div>
    <h3>Add a note</h3>
    <el-form ref="formRecord" class="form-record">
      <el-form-item>
        <el-select></el-select>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="radio" fill="orange">
          <el-radio-button label="income"></el-radio-button>
          <el-radio-button label="outcome"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-input-number v-model="summa" :min="1" :max="999999"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="Enter description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-add" type="warning" plain icon="el-icon-plus" circle></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    radio: 'outcome',
    summa: 50,
  }),
  methods: {},
};
</script>

<style scoped>
.form-record {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-add {
}
</style>
