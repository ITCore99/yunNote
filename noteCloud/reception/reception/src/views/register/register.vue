<template>
  <div class="wraper">
      <div class="main">
        <h2 class="title">新用户注册</h2>
        <el-form ref="form" :model="form" label-width="80px" :rules="rule"  status-icon>
          <el-form-item>
          </el-form-item>
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="form.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="form.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn" @click="handlerSubmit('form')">点击注册</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
    export default {
        name: "register",
        data()
        {
          let valUsername=function(rule,value,callback)
          {
              if(!value)
              {
                return callback(new Error("用户名不能为空！"));
              }else {
                    callback();
                }
          };
          let valEmail=function(rule,value,callback)
          {
            if(!value)
            {
              return callback(new Error("邮箱不能为空"));
            }else{
              callback();
            }
          };
          let valPassword=function(rule,value,callback)
          {
            if(!value)
            {
              return callback(new Error("密码不能为空"));
            }else
            {
              callback();
            }
          };
          return{
            form:{
              username:'fu',
              email:'123456789@qq.com',
              password:'123456',
            },
            rule:{
              username:[{validator:valUsername,trigger:'blur'}],
              email:[{validator:valEmail,trigger:'blur'}],
              password:[{validator:valPassword,trigger:'blur'}],
            }
          }
        },
        methods:{
          handlerSubmit(FromName)
          {
            this.$refs[FromName].validate(val=>{
              if(val)
              {
               this.$axios.post('/reg',this.form).then(res=>{
                 if(res.data.code==200)
                 {
                   this.$message.success(res.data.msg);
                   setTimeout(()=>{
                     this.$router.push('/login')
                   },500)

                 }
               }).catch(err)
                {
                  this.$message.error(res.data.msg);
                }

              }else
              {
                alert("error")
                return false;
              }
            });

          }
        }
    }
</script>

<style scoped lang="scss">
  .wraper
  {
    overflow: hidden;
    width: 100%;
    height: 92vh;
    .main{
      width:550px;
      margin: 100px auto;
      background: #fff;
      padding:40px 40px 30px 20px;
    }
    .title
    {
      font-weight: 600;
      text-align: center;
    }
    .btn
    {
      width: 470px;
      margin-top: 20px;
    }
  }

</style>
