<template>
  <div class="login">
    <div class="login-left">欢迎光临</div>
    <div class="login-right">
      <div class="login-content">
        <h1>欢迎回来</h1>
        <p>———账号密码登录———</p>
        <el-form :model="loginForm" :rules="rules" ref="form" class="form">
          <el-form-item prop="username">
            <el-input
              prefix-icon="el-icon-user"
              v-model.trim="loginForm.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              type="password"
              v-model.trim="loginForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" @click="clickLogin" type="primary"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogin } from '@/api/user'
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    /**
     * 点击登录
     */
    async clickLogin() {
      try {
        const data = await getLogin(this.loginForm)
        // console.log(data)
        localStorage.setItem('token', data.data.data.token)
        // console.log(data.data.data.token);
        this.$router.push('/')
        this.$notify({
          message: '登录成功',
          type: 'success'
        })
      } catch (error) {}
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  .login-left {
    width: 70%;
    background-color: #6366f1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 3rem;
  }
  .login-right {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-content {
      width: 250px;
      h1 {
        font-weight: 700;
        font-size: 1.875rem;
        text-align: center;
      }
      p {
        text-align: center;
        color: #e5e7eb;
        margin: 20px 0;
      }
      .login-btn {
        width: 100%;
        border-radius: 20px;
      }
    }
  }
}
</style>
