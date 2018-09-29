<template>
    <div class="radios">
      <label class="radio-label" v-for="item in options">
        <input type="radio" v-model="currentValue" class="radio-item" :value="item._id"/>
        <div class="radios-title-wrap">
          <span class="radios-title">{{item.name}}</span>
        </div>
      </label>
    </div>
</template>

<script>
    export default {
        name: "FuRadios",
        props:{
          options:{
            type:Array,
          },
          value:{
            type:String,
          }
        },
        data()
        {
          return{
            currentValue:this.value,
          }
        },
        watch:{
          value(val){
              this.currentValue=val;
          },
          currentValue(val)
          {
            this.$emit("change",val);
            this.$emit("input",val);
          }
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
  .radios{
    width: 10px;
    display: flex;
    margin-right: 16px;
    .radio-item
    {
      display: none;
    }
    .radios-title-wrap
    {
      padding:10px 15px;
      color:#444;
      font-size: 13px;
      border: 1px solid #f1f1f1;
      border-radius: 4px;
      margin-right: 15px;
      margin-top: 5px;
      font-weight: 400;
      cursor: pointer;
    }
    .radio-item:checked + .radios-title-wrap
    {
      background: #409eff;
      color:#fff;
    }
  }
</style>
