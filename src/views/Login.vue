<template>
  <div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="loginForm"
    >
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="loginForm.email" type="email" placeholder="Enter e-mail"></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input
          v-model="loginForm.pass"
          type="password"
          autocomplete="off"
          placeholder="Enter password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          class="btn-login"
          type="success"
          plain
          size="mini"
          @click="submitLogin('loginForm')"
          >Sign-In</el-button
        >
        <router-link to="/register">
          <el-button class="btn-login" type="warning" plain size="mini">Register</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    const minLenghtPass = 6;
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input password'));
      } else if (value.length < minLenghtPass) {
        callback(new Error(`Length login should be more than ${minLenghtPass} symbols`));
      }
      callback();
    };
    return {
      loginForm: {
        email: '',
        pass: '',
      },
      rules: {
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitLogin(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$message({ message: 'Welcome', type: 'success' });
          this.$router.push('/');
        } else {
          this.$message({ message: 'Please input e-mail or password again', type: 'error' });
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.btn-login {
  margin: 0 10px 0 0;
}
</style>
