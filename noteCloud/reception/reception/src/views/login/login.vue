<template>
 <div>
   <div class="wraper">
     <div class="imgDiv">
       <img src="../../static/banner.jpg" class="img"/>
       <span class="mark">十三亿人都再用的云笔记</span>
     </div>
     <div class="change">
       <login-component v-if="!$store.state.userInfo.username" @submit="handleSubmit"></login-component>
       <complete v-else  @outSubmit="HandlerLogOut"></complete>
     </div>
   </div>
   <div>
     <article-item :options="data"></article-item>
   </div>
 </div>
</template>

<script>
    import  login from "../../myComponents/login"
    import articleItem from '@/myComponents/airtcleItem'
    import complete from "../../myComponents/complete"
    import {mapState} from 'vuex'
    export default {
        name: 'login',
        data()
        {
          return{
             data:[],
          }
        },
        methods:{
          handleSubmit(param)
          {
            this.$axios.post('/login',{'email':param.email,'password':param.password}).then(res=>{
              if(res.data.code==200)
              {
                this.$message.success(res.data.msg);
                this.$store.commit('INITUSERINFO',res.data.userInfo);

              }else
              {
                this.$message.error(res.data.msg);
              }
            })
          },
          HandlerLogOut()
          {
            let obj={
              username:'',
              avatar:'',
              email:'',
            }
            this.$axios.get('/out').then(res=>{
              if(res.data.code==200)
              {
                this.$store.commit('INITUSERINFO',obj);
                this.$message.success(res.data.msg);
                this.$router.push('/login');
              }else
              {
                this.$store.commit('INITUSERINFO',obj);
                this.$message.info(res.data.msg);
                this.$router.push('/login');
              }
            })
          },
          getData()
          {
            this.$axios.get("/art/article").then(res=>{
              if(res.data.code=200)
              {
                this.data=res.data.data;
                console.log(this.data);
              }
            })
          }
        } ,
        computed:{
          ...mapState(['userInfo'])
        },
        components:{
            "login-component":login,
            'article-item':articleItem,
             complete
        },
        created()
        {
          this.getData();
        }
    }
</script>

<style scoped>
.wraper
{
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.imgDiv
{
  position: relative;
  width: 770px;
  height:340px;
  margin-right:20px;
  border-radius: 6px;
  overflow: hidden;
}
.img
{
  width:720px;
  height:340px;
}
.mark
{
  position: absolute;
  bottom:0px;
  left:0px;
  font-size:25px;
  line-height: 30px;
  color:#FFF;
  padding-left:10px;
  font-weight: 500;
  background: rgba(0,0,0,0.5);
  opacity: 0.8;
  width: 710px;
  height:30px
}
</style>
