import axios from "axios";


var instance=axios.create({

    baseURL:'/api',
    timeout:15000,
});

const xhr={

    get(url,data,config){

      return new Promise((resolve,reject)=>{

        instance.get(url,{params:data}).then(res=>{
          resolve(res);
        }).catch(err=>{
            reject(err)
        })
      })
    },
    fetch(url,data,config,methods)
    {
      return new Promise((resolve,reject)=>{
        instance[methods](url,data).then(res=>{
          resolve(res);
        }).catch(err=>{
          reject(err)
        })
      })
    },
    post(url,data,config)
    {
      return this.fetch(url,data,config,"post")
    }
}
export default xhr;

