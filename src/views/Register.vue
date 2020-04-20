<template>
  <div>
    <el-form
      ref="regForm"
      :model="regForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="regForm"
    >
      <el-form-item label="Login" prop="login">
        <el-input v-model="regForm.login" type="text" placeholder="Enter login"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="regForm.email" type="email" placeholder="Enter email"></el-input>
      </el-form-item>
      <el-form-item id="passs" label="Password" prop="pass">
        <el-input
          v-model="regForm.pass"
          type="password"
          autocomplete="off"
          placeholder="Enter password"
        ></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input
          v-model="regForm.checkPass"
          type="password"
          autocomplete="off"
          placeholder="Please, enter password again"
        ></el-input>
      </el-form-item>
      <el-form-item label=" " prop="agreeRules">
        <el-checkbox v-model="regForm.agreeRules" label="I agree with rules"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="success" plain size="mini" @click="submitRegister('regForm')"
          >Register</el-button
        >
        <router-link to="/login">
          <el-button class="btn" type="warning" plain size="mini">Sign-in</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const minLenghtPass = 6;
    const validateLogin = (rule, value, callback) => {
      if (value.length < 3 || value.length > 15) {
        callback(new Error('Length login should be 3 to 15'));
      }
      callback();
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else if (value.length < minLenghtPass) {
        callback(new Error(`Length login should be more than ${minLenghtPass} symbols`));
      } else {
        if (this.regForm.checkPass !== '') {
          this.$refs.regForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input confirm password again'));
      } else if (value !== this.regForm.pass) {
        callback(new Error("Two inputs don't match!"));
      }
      callback();
    };
    return {
      regForm: {
        login: '',
        email: '',
        pass: '',
        checkPass: '',
        agreeRules: false,
        agree: [],
      },
      rules: {
        login: [{ required: true, validator: validateLogin, trigger: 'blur' }],
        email: [
          { required: true, message: 'Input e-mail address', trigger: 'blur' },
          {
            type: 'email',
            message: 'Input correct e-mail address',
            trigger: ['blur', 'change'],
          },
        ],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validateCheckPass, trigger: 'blur' }],
        agreeRules: [
          { required: true, message: 'You should be agree with rules', trigger: 'change' },
        ],
      },
    };
  },
  methods: {
    submitRegister(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$message({ message: 'You are registered successfully', type: 'success' });
          this.$router.push('/');
        } else {
          this.$message({ message: 'Registration error', type: 'error' });
          return false;
        }
      });
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 0 10px 0 0;
}
</style>
