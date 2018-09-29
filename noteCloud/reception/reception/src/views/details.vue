<template>
  <div class="wraper">
    <div class="header">
      <div class="contain">
         <div class="avatarR">
            <img :src="Data.author.avatar"/>
         </div>
         <div class="desc">
            <div class="username">{{Data.author.username}}</div>
            <div class="time">{{Data.handlerTime}}</div>
         </div>
      </div>
      <h3 class="title" style="border-bottom: 2px solid #f1f1f1;padding-bottom: 15px;">{{Data.title}}</h3>
      <div class="content" v-html="Data.contentHTML">
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
          return{
            Data:{},
          }
         },
        methods:{
          getData()
          {
            this.$axios.get(`/art/article/${this.$route.query.id}`).then(res=>{
              console.log(res.data);
              if(res.data.code==200)
              {
                 this.Data=res.data.data;
                this.Data.handlerTime=new Date(res.data.data.updatedAt).toLocaleString();
              }
            })
          }
        },
        created()
        {
          this.getData();
        }
    }
</script>

<style scoped lang="scss">
   .wraper
   {
     background: #fff;
     border: 2px solid  #f1f1f1;
     padding: 15px;
     width: 960px;
     margin: 20px auto;
     min-height: 800px;
     border-radius: 6px;
     .avatarR
     {
       width:80px;
       height:80px;
       border-radius: 50%;
       overflow: hidden;
       img{
         display: block;
         width: 100%;
         height:100%;
       }
     }
     .contain
     {
       display: flex;
     }
     .desc
     {
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       padding-left:20px;

       .username,.time{
         font-size: 16px;
         font-weight: 500;
         color:#666;
       }
     }
     .title
     {
       text-align: center;
       margin-top: 20px;
     }
     .content
     {
       padding:15px;

     }
   }
</style>
