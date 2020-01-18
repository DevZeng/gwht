<template>
  <el-row class="warp" style="padding:20px 0 0 20px;">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>实验品</el-breadcrumb-item>
        <el-breadcrumb-item>基本设置</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-row>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="基础信息" name="hongbao">
            <el-form label-width="120px">
              <el-form-item label="中文标题：" prop="title">
                <el-input type="text" style="width: 400px;" v-model="title" placeholder="请输入中文标题"></el-input>
              </el-form-item>
              <el-form-item label="中文内容：" prop="detail">
                <el-input
            
              type="textarea"
              :rows="3"
              placeholder="请输入中文内容"
              v-model="detail">
            </el-input></el-form-item>
              <el-form-item label="英文标题：" prop="title_en">
                <el-input type="text" style="width: 400px;" v-model="title_en" placeholder="请输入英文标题"></el-input>
              </el-form-item>
              <el-form-item label="英文内容：" prop="detail_en">
                <el-input
            
              type="textarea"
              :rows="3"
              placeholder="请输入英文内容"
              v-model="detail_en">
            </el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" class="postbtn" size="small" @click="setConfig()">提交</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </el-col>
  </el-row>
</template>



<script>
import qiniu from "../../api/qiniu";
import { experimentConfigset } from "../../api/api";
import { experimentConfigget } from "../../api/api";

import { Message } from "element-ui";

export default {
  data() {
    return {
        activeName: "hongbao",
      title:"",
      detail:"",
      title_en:"",
      detail_en:''
    };
  },

  methods: {
    getConfig(){
        var allParams = "";
        experimentConfigget(allParams).then(res => {
        this.title = res.data.title ? res.data.title : "";
        this.detail = res.data.detail ? res.data.detail : "";
        this.title_en = res.data.title_en ? res.data.title_en : "";
        this.detail_en = res.data.detail_en ? res.data.detail_en : "";
      });
    },
    setConfig(){
        var allParams = {
        title: this.title,
        detail: this.detail,
        title_en: this.title_en,
        detail_en: this.detail_en,
      };
      experimentConfigset(allParams).then(res => {
        if (res.msg === "ok") {
          this.getConfig();
          this.$message({
            message: "提交成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    }
  },

  mounted: function() {
    this.getConfig();
  }
};
</script>

<style scoped>
.loginbg {
  width: 180px;
  height: 320px;
  border: 1px dashed #ccc;
  border-radius: 6px;
  display: block;
  margin-top: 1px;
}

.postbtn {
  margin-top: 10px;
}
</style>