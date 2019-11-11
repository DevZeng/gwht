<template>
 <el-row class="warp" style="padding:20px 0 0 20px;">
  <el-col :span="24" class="warp-breadcrum">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
      <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>基本设置</el-breadcrumb-item>
    </el-breadcrumb>
  </el-col>


  <el-col :span="24" class="warp-main">
    <el-row>

      <el-tabs v-model="activeName" type="card">

        <el-tab-pane label="基础信息" name="hongbao">
          <el-form label-width="120px"  >
            <el-form-item label="邮箱：" prop="email">
              <el-input  type="text" style="width: 400px;" v-model="email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="电话：" prop="phone">
              <el-input  type="text" style="width: 400px;" v-model="phone" placeholder="请输入电话"></el-input>
            </el-form-item>
            <el-form-item label="零售购买：" prop="buy">
              <el-input  type="text" style="width: 400px;" v-model="buy" placeholder="请输入零售购买"></el-input>
            </el-form-item>
            <el-form-item label="工程购买：" prop="eng_buy">
              <el-input  type="text" style="width: 400px;" v-model="eng_buy" placeholder="请输入工程购买"></el-input>
            </el-form-item>
            <el-form-item label="商务合作：" prop="bussiness">
              <el-input   type="text" style="width: 400px;" v-model="bussiness" placeholder="请输入商务合作"></el-input>
            </el-form-item>
            <el-form-item label="媒体合作：" prop="media">
              <el-input  type="text" style="width: 400px;" v-model="media" placeholder="请输入媒体合作"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" class="postbtn" size="small" @click="savehb()">提交</el-button>
        </el-tab-pane>

        <el-tab-pane label="微信公众号" name="bgpic">
         <el-upload class="upload-demo" :action="upurl" :data="uptoken" :on-success="linkSuccess1" :show-file-list="false" accept="image/*">
        <img :src="wechat_bg" class="pre-img" style="width:200px;height:200px;border:1px dashed #ccc;border-radius:6px;display: block;margin-top: 1px;">
      </el-upload>

      <el-input v-model="wechat_title" placeholder="请输入标题" style="margin-top:10px;width: 300px;display: block;"></el-input>
        <el-button type="primary" class="postbtn" size="small" @click="savebg()">提交</el-button>
      </el-tab-pane>



      <el-tab-pane label="Instagram" name="sharebg">
        <el-upload class="upload-demo" :action="upurl" :data="uptoken" :on-success="linkSuccess2" :show-file-list="false" accept="image/*">
        <img :src="ins_bg" class="pre-img" style="width:200px;height:200px;border:1px dashed #ccc;border-radius:6px;display: block;margin-top: 1px;">
      </el-upload>

      <el-input v-model="ins_title" placeholder="请输入标题" style="margin-top:10px;width: 300px;display: block;"></el-input>
        <el-button type="primary" class="postbtn" size="small" @click="saveshare()">提交</el-button>
      </el-tab-pane>



      <el-tab-pane label="微博" name="sharepic">
       <el-upload class="upload-demo" :action="upurl" :data="uptoken" :on-success="linkSuccess3" :show-file-list="false" accept="image/*">
        <img :src="weibo_bg" class="pre-img" style="width:200px;height:200px;border:1px dashed #ccc;border-radius:6px;display: block;margin-top: 1px;">
      </el-upload>

      <el-input v-model="weibo_title" placeholder="请输入标题" style="margin-top:10px;width: 300px;display: block;"></el-input>

      <el-button type="primary" class="postbtn" size="small" @click="savelink()">提交</el-button>
    </el-tab-pane>



    



  </el-tabs>

</el-row>
</el-col>


</el-row>
</template>



<script>


  import qiniu from '../../api/qiniu';
  import { baseset } from '../../api/api';
  import { baseget } from '../../api/api';

  import { Message } from 'element-ui';


  export default {
    data() {
     var checkvalue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('此项不能为空'));
      }
      setTimeout(() => {
        if (Math.sign(value) == 1) {
          if(value%1 === 0){
           callback();
         }else{
          callback();
        }
      } else if(Math.sign(value) == 0) {
        callback(new Error('不能为0'));
      } else if(Math.sign(value) == -1) {
        callback(new Error('请输入正数'));
      }else{
        callback(new Error('请输入数字'));
      }
    }, 100);
    };


    return {
      activeName:'hongbao',

      uptoken:{
        token:qiniu.token,
      },
      upurl:qiniu.upurl,

      loginbg:'../static/images/default2.png',
      brokerage_type:'1',

      sharebg:"../static/images/default2.png",


      sharepic:"../static/images/default.png",
      sharetitle:'',
      email :'',
phone :'',buy :'',eng_buy :'',bussiness :'',media :'',
wechat_title:'',
wechat_bg:'',
ins_title:'',
ins_bg:'',
weibo_title:'',
weibo_bg:'',

      switch:0,

    };
  },

  methods:{

    schange(val){
      console.log(val)
      var allParams={
        brokerage_type:this.brokerage_type
      }
      baseset(allParams).then((res) => {
        if (res.msg === "ok") {
         this.getconfig()
         this.$message({
          message: '修改成功',
          type: 'success'
        });
       } else {
         this.$message({
          message: res.msg,
          type: 'error'
        });
       }
     });
    },


    bgSuccess(res, file){
      this.loginbg = qiniu.showurl+ res.key
    },

    savebg(){
      var allParams={
        wechat_title:this.wechat_title,
        wechat_bg:this.wechat_bg
      }
      baseset(allParams).then((res) => {
        if (res.msg === "ok") {
         this.getconfig()
         this.$message({
          message: '提交成功',
          type: 'success'
        });
       } else {
         this.$message({
          message: res.msg,
          type: 'error'
        });
       }
     });
    },

    shareSuccess(res, file){
      this.sharebg = qiniu.showurl+ res.key
    },

    saveshare(){
      var allParams={
        ins_bg:this.ins_bg,
        ins_title:this.ins_title
      }
      baseset(allParams).then((res) => {
        if (res.msg === "ok") {
         this.getconfig()
         this.$message({
          message: '提交成功',
          type: 'success'
        });
       } else {
         this.$message({
          message: res.msg,
          type: 'error'
        });
       }
     });
    },




    linkSuccess(res, file){
      this.sharepic = qiniu.showurl+ res.key
    },
    linkSuccess1(res, file){
      this.wechat_bg = qiniu.showurl+ res.key
    },
    linkSuccess2(res, file){
      this.ins_bg = qiniu.showurl+ res.key
    },
    linkSuccess3(res, file){
      this.weibo_bg = qiniu.showurl+ res.key
    },

    savelink(){
      var allParams={
        weibo_bg:this.weibo_bg,
        weibo_title:this.weibo_title
      }
      baseset(allParams).then((res) => {
        if (res.msg === "ok") {
         this.getconfig()
         this.$message({
          message: '提交成功',
          type: 'success'
        });
       } else {
         this.$message({
          message: res.msg,
          type: 'error'
        });
       }
     });
    },

    savehb(){
      var allParams={
            email:this.email,
            phone:this.phone,
            buy :this.buy,eng_buy :this.eng_buy,bussiness :this.bussiness,media :this.media,
          }
          baseset(allParams).then((res) => {
            if (res.msg === "ok") {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
              this.getconfig()
            } else {
             this.$message({
              message: res.msg,
              type: 'error'
            });
           }
         });
    },


    getconfig(){
      var allParams=''
      baseget(allParams).then((res) => {
        if (res.msg === "ok") {

          this.phone=res.data.phone?res.data.phone:''
          this.email = res.data.email?res.data.email:''
          this.buy = res.data.buy?res.data.buy:''
          this.eng_buy = res.data.eng_buy?res.data.eng_buy:''
          this.bussiness = res.data.bussiness?res.data.bussiness:''
          this.media = res.data.media?res.data.media:''
          this.wechat_title = res.data.wechat_title?res.data.wechat_title:''
          this.ins_title = res.data.ins_title?res.data.ins_title:''
          this.weibo_title = res.data.weibo_title?res.data.weibo_title:''
          this.wechat_bg = res.data.wechat_bg?res.data.wechat_bg:'../static/images/default.png'
          this.ins_bg = res.data.ins_bg?res.data.ins_bg:'../static/images/default.png'
          this.weibo_bg = res.data.weibo_bg?res.data.weibo_bg:'../static/images/default.png'


        } else {
         this.$message({
          message: res.msg,
          type: 'error'
        });
       }
     });
    },
  },

  mounted: function(){
    this.getconfig()
  }
}
</script>

<style scoped>

  .loginbg{
    width: 180px;
    height: 320px;
    border:1px dashed #ccc;
    border-radius:6px;
    display: block;
    margin-top: 1px;
  }

  .postbtn{
    margin-top: 10px;
  }

</style>