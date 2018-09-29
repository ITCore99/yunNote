<template>
    <div class="write-note">
      <div>
        <div class="title">
          标题:
        </div>
        <div class="input">
         <el-input v-model="form.title"></el-input>
        </div>
        <div  class="title content">
          内容:
        </div>
      </div>
      <quill-editor
        v-model="form.content"
        ref="myQuillEditor"
        :options="editorOption"
        @change="onEditorChange($event)"
      >
      </quill-editor>
     <div class="label">
      标签:
      <div class="Radio">
        <Radio :options="categories" v-model="form.category"></Radio>
      </div>
     </div>
     <div class="publish">
       <el-button type="primary" @click="handlePublish">发布笔记</el-button>
     </div>
    </div>
</template>

<script>
  import {quillEditor, Quill} from 'vue-quill-editor'
  import 'quill/dist/quill.snow.css'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  import Radio from '../../myComponents/FuRadios'
  Quill.register('modules/ImageExtend', ImageExtend);

    export default {
        name: "writenote",
        data()
        {
          return{
            form:{
              title:'',
              contentHTML:'',
              contentText:'',
              category:'',
            },
            categories:[],
            editorOption: {
              modules: {
                ImageExtend: {
                  loading: true,
                  name: 'img',
                  action: "https://qiniu.com",
                  response: (res) => {
                    return res.info
                  }
                },
                toolbar: {
                  container: container,
                  handlers: {
                    'image': function () {
                      QuillWatch.emit(this.quill.id)
                    }
                  }
                }
              }
            }
          }
        },
        methods:{
          onEditorChange({ quill, html, text })
          {
            this.form.contentHTML=html;
            this.form.contenText=text;
            console.log(this.form.contenText);
          },
          handlePublish()
          {
            console.log(this.form);
            this.$axios.post("/art/publish",{"contentHTML":this.form.contentHTML,
                                              "title":this.form.title,
                                              "contentText":this.form.contenText,
                                               "category":this.form.category,

            }).then(res=>{
              if(res.data.code==200)
              {
                this.$message.success(res.data.msg);
                this.$router.push("/login");
              }else
              {
                this.$message.error(res.data.msg);
              }
            })
          },
          getData()
          {
            this.$axios.get("/gory/category").then(res=>{
              this.categories=res.data.data;
            })
          }
        },
        components: {
          quillEditor,
          Radio
        },
      created()
      {
        this.getData();
      }
    }
</script>

<style scoped lang="scss">
  .write-note{
    margin-top:50px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
    .title
    {
      font-size: 18px;
      font-weight:600;
    }
    .input
    {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .content{
      margin-bottom: 16px;
    }

    /deep/   /**注意使用深度选择器*/
    .ql-container
    {
       min-height:300px;
    }
    .label
    {
      margin-top: 16px;
      color:#409eff;
      font-size: 16px;
      font-weight:600;
    }
    .publish{
      margin-top: 20px;
    }
  }

</style>
