<template>
  <div class="formDiv">
    <el-form ref="form" :model="form" label-width="60px">
      <el-form-item >
        <h2>登陆</h2>
      </el-form-item>
      <el-form-item label="邮箱:">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" class="btn" @click="goSubmit">登陆</el-button>
      </el-form-item>
      <p class="link" @click="handler" >去注册>>></p>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "login",
        data()
        {
          return{
            form:{
              email:'123456789@qq.com',
              password:'123456'
            }
          }
        },
        methods:{
          handler()
          {
            this.$router.push("/reg");
          },
          goSubmit()
          {
            this.$emit("submit",this.form);
          }
        }
    }
</script>

<style scoped>
  .formDiv
  {
    width: 430px;
    padding:20px;
    height:296px;
    background: #fff;
    border-radius: 4px;
    border: 2px solid #f1f1f1;
    position: relative;
  }
  .btn
  {
    width:360px;
  }
  .link{
    position: absolute;
    right:15px;
    display: block;
    text-decoration: none;
    color:deepskyblue;
    padding-bottom:20px;
  }
  .link:hover{
    color:blue;
  }

</style>
