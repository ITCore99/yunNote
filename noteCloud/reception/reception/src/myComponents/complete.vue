<template>
    <div class="formData">
      <div class="imgDiv">
          <img :src="$store.state.userInfo.avatar" class="IMG"/>
      </div>
      <div class="common">
          <span>用户：</span><span v-text="$store.state.userInfo.username">123</span>
      </div>
      <div class="common">
          <span>邮箱：</span><span v-text="$store.state.userInfo.email">qwqwwq@163.com</span>
      </div>
      <el-button type="warning" class="btn" @click="outSubmit">退出登录</el-button>
    </div>
</template>

<script>
    export default {
        name: "complete",
        methods:{
          outSubmit()
          {
            this.$emit("outSubmit");
          }
        }
    }
</script>

<style scoped lang="scss">
  .formData{
    width: 430px;
    padding:20px;
    height:296px;
    background: #fff;
    border-radius: 4px;
    border: 2px solid #f1f1f1;
    .imgDiv
    {
      width:100px;
      height: 100px;
      border-radius:50%;
      overflow: hidden;
      margin: 20px auto;
      .IMG{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .common
    {
      font-size: 16px;
      color:#444;
      margin-top: 20px;
      text-align: center;
    }
    .btn{
        margin-top: 40px;
    }
    /deep/ .el-button
    {
      width: 80%;
      margin-left:50px;
    }
  }

</style>
