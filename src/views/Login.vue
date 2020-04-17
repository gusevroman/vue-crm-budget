<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Login" prop="login">
        <el-input v-model="ruleForm.login" placeholder="Enter login"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          placeholder="Enter password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="success" plain size="mini" @click="submitForm('ruleForm')"
          >Sign-In</el-button
        >
        <el-button type="warning" plain size="mini" @click="register()">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validateLogin = (rule, value, callback) => {
      if (value.length < 3 || value.length > 15) {
        callback(new Error('Length login should be 3 to 15'));
      }
      callback();
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        login: '',
        pass: '',
      },
      rules: {
        login: [{ required: true, validator: validateLogin, trigger: 'blur' }],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
