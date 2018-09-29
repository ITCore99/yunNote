<template>
  <div>
    <div class="article-item" v-for="(item, index) in options" @click="handlerClick(item._id)">
      <div class="item-top">
        <div class="article-img">
          <img :src="item.author.avatar"/>
        </div>
        <div class="articleRight">
          <div class="title">
            <span class="name">{{item.author.username}}</span>
            <span>|</span>
            <span>{{item.title}}</span>
          </div>
          <div class="detail">
            <span class="common">浏览：{{item.readNumber}}</span>
            <span class="common">分类：{{item.category.name}}</span>
            <span class="common">评论：{{item.commonNumber}}</span>
          </div>
        </div>
      </div>
      <div class="item-bottom">{{item.contentText}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "airtcleItem",
        props:{
          options:{
            type:Array
          }
        },
        data()
        {
          return{

          }
        },
        methods:{
          handlerClick(id)
          {
            console.log(this.options);
            this.$router.push({path:"/detail",query:{"id":id}});
          }
        }
    }
</script>

<style scoped lang="scss">
  .article-item{
    width:720px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background: #fff;
    border-radius: 4px;
    .item-top
    {
      display: flex;
    }
   .article-img
   {

      width: 70px;
      height:70px;
      border-radius:4px;
      padding:10px;
     img
     {
       width:70px;
     }
   }
    .articleRight
    {
      padding: 10px 10px 0 10px;
      display: flex;
      width: 650px;
      height: 80px;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      .detail
      {
        background: #f1f1f1;
        padding:5px;
        border-radius: 4px;
        color:#333;
        font-size: 14px;
      }
      .common
      {
        margin-right: 30px;
      }
      .title
      {
        font-weight: bold;
        font-size:16px;
        color:#333;
      }
      .name{
        color:#409eff;
      }
    }
    .item-bottom
    {
      padding:15px;
      font-weight:400;
      font-size: 12px;
      color:#555;
      line-height: 1.5;
    }
  }

</style>
