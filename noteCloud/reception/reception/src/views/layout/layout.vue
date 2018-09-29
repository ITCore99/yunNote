<template>
  <div class="wraper">
    <div class="header">
      <div class="headerMain">
        <span class="title" @click="handleClick">云笔记</span>
        <el-button   class="btn" @click="handlerWrite">写笔记</el-button>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

    export default {
        name: "layout",
        methods:{
          handleClick()
          {
            this.$router.push('/login');
          },
          handlerWrite()
          {
            if(!this.$store.state.userInfo.username)
            {
                 this.$message.info('只有登录才可以写文章')
            }else
            {
               this.$router.push('/write')
            }
          }
        },
    }
</script>

<style scoped >
  .wraper
  {
    width: 100%;
    background: #f1f1f1;
  }
  .header
  {
    width:100%;
    height:60px;
    background: deepskyblue;
  }
  .title
  {
    color:#ffffff;
    font-weight:700;
    font-size: 25px;
    line-height: 60px;
  }
  .content
  {
    width:1200px;
    margin: 0 auto;
    background: #F1F1F1;
    height: 100%;
  }
  .headerMain
  {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    height: 8vh;
  }
  .btn
  {
    height:40px;
    font-size: 14px;
    margin-right: 10px;
    background: #fff;
    color:#333;
    margin-top: 10px;
  }
  .list
  {
    margin: 30px auto;
  }
</style>
