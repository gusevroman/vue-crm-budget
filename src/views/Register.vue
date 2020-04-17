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
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email" type="email" placeholder="Enter email"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          placeholder="Enter password"
        ></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
          placeholder="Please, enter password again"
        ></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" plain size="mini" @click="submitForm('ruleForm')"
          >Submit</el-button
        >
        <el-button type="danger" plain size="mini" @click="resetForm('ruleForm')">Reset</el-button>
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
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the email again'));
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
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      ruleForm: {
        login: '',
        email: '',
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        login: [{ required: true, validator: validateLogin, trigger: 'blur' }],
        email: [
          {
            required: true,
            validator: validateEmail,
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }],
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
  register() {}, // TODO: redirect to Register
};
</script>
