<template>
  <el-row class="warp" style="padding:20px 0 0 20px;">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>产品列表</el-breadcrumb-item>
        <el-breadcrumb-item>新增产品</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-form
        label-width="130px"
        width="900px"
        center
        style="width: 1000px"
        :rules="rules"
        ref="newone"
        :model="newone"
      >
        <el-form-item label="语言选择：" prop="language">
          <el-select v-model="select" placheolder="请选择语言" @change="getLag">
            <el-option
              v-for="item in language"
              :label="item.value"
              :value="item.key"
              :key="item.key"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="上级分类：" prop="parent_id">
          <el-select v-model="parent_id" placeholder="请选择分类" @change="getPid">
            <el-option
              v-for="item in typeArr"
              :label="item.title"
              :value="item.parent_id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品分类：" prop="type">
          <el-select v-model="newone.type_id" placeholder="请选择分类">
            <el-option
              v-for="item in parentArr"
              :label="item.title"
              :value="item.id"
              :key="item.parent_id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="标题：" prop="title">
          <el-input
            v-model="newone.title"
            placeholder="请输入产品标题（20字以内）"
            maxlength="20"
            style="width:500px;"
          ></el-input>
        </el-form-item>

        <el-form-item label="产品图片：" prop="cover">
          <el-upload
            class="upload-demo"
            :action="upurl"
            :data="uptoken"
            :on-success="handleSuccess"
            :show-file-list="false"
            accept="image/*"
          >
            <img
              :src="newone.cover"
              class="pre-img"
              style="width:146px;height:146px;border:1px dashed #ccc;border-radius:6px;display: block;margin-top: 1px;"
            />
            <!-- <p slot="tip" class="upload__tip">可上传JPG/PNG文件，建议图片长宽比为1:1</p> -->
          </el-upload>
        </el-form-item>

        <el-form-item label="主要材料" prop="material">
          <el-input
            v-model="newone.material"
            placeholder="请输入材料名称（20字以内）"
            maxlength="20"
            style="width:500px;"
          ></el-input>
        </el-form-item>

        <el-form-item label="规格：">
          <div v-for="(guige, index) in categories">
            <el-input
              size="mini"
              v-model="guige.title"
              style="display:block;width: 200px;margin:5px 5px 5px 0;"
              placeholder="规格名"
            ></el-input>
            <div v-for="(item,index) in guige.details" style="display:inline-block;">
              <el-input
                size="mini"
                v-model="item.title"
                style="width: 130px;margin:5px 5px 5px 0;"
                placeholder="详细内容"
              ></el-input>
            </div>
            <div style="display: block;">
              <el-button
                @click.prevent="adddetail(index)"
                type="warning"
                size="mini"
                style="margin: 5px 5px 5px 0"
              >新增详细</el-button>
              <el-button
                @click.prevent="removeguige(guige)"
                type="danger"
                size="mini"
                style="margin: 5px 5px 5px 0"
              >删除规格</el-button>
            </div>
          </div>
          <el-button
            @click.prevent="addguige()"
            type="primary"
            size="mini"
            style="margin-top: 10px;"
          >新增规格</el-button>
        </el-form-item>

        <el-form-item label="规格图片" prop="pictures">
          <el-upload
            class="upload-demo"
            :action="upurl"
            :data="uptoken"
            v-model="category_cover"
            :on-success="guigeSuccess"
            :show-file-list="false"
            accept="image/*"
          >
            <img
              :src="this.category_cover"
              class="pre-img"
              style="width:146px;height:146px;border:1px dashed #ccc;border-radius:6px;display: block;margin-top: 1px;"
            />
          </el-upload>
        </el-form-item>

        <div v-for="(item,index) in newone.areas" :key="index">
          <div style="display:inline-block;">
            <el-form-item label="区域名称：">
              <el-input
                v-model="item.title"
                maxlength="20"
                placeholder="请输入区域名称"
                style="width:300px; "
              ></el-input>
            </el-form-item>
            <el-form-item label="区域内容：">
              <el-input
                v-model="item.detail"
                maxlength="20"
                placeholder="请输入内容"
                style="width:300px; margin-bottom:10px; display:block;"
              ></el-input>
            </el-form-item>
            <el-form-item label="区域图片：">
              <el-upload
                accept="image/*"
                :action="upurl"
                :data="uptoken"
                v-model="newone.areas[index].icon"
                :onBind="index"
                :on-success="HomeSuccess"
                :show-file-list="false"
              >
                <img
                  :src="newone.areas[index].icon"
                  class="pre-img"
                  style="width:146px;height:146px;border:1px dashed #ccc;border-radius:6px;display: block;margin-top: 1px;"
                />
              </el-upload>
            </el-form-item>
          </div>
        </div>

        <el-form-item label="图片展示：">
          <el-upload
            :action="upurl"
            :data="uptoken"
            list-type="picture-card"
            v-model="newone.pictures"
            :file-list="newone.pictures"
            :on-remove="handleRemove"
            :on-success="handlelistSuccess"
            accept="image/*"
          >
            <img
              src="../../../static/images/default1.png"
              class="pre-img"
              style="width:145px;height:144px;margin-top: 1px;display: block"
            />
          </el-upload>
        </el-form-item>

        <el-form-item label="上传参数表">
          <el-upload
            :action="upurl"
            :data="uptoken"
            :limit="1"
            accept=".xlsx"
            v-model="newone.parameter"
            :on-success="ExcelSuccess"
            :file-list="newone.parameter"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item style="margin-top: 20px;">
          <el-button type="primary" @click="save()" size="mini">提交</el-button>
          <el-button @click="golist()" size="mini">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import hosturl, { typeGet } from "../../api/api";
import { typeAllGet } from "../../api/api";

import qiniu from "../../api/qiniu";

import { requestUpload } from "../../api/api";

import { Message } from "element-ui";

import { upload } from "../../api/api";

import { oneGet } from "../../api/api";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  data() {
    return {
      uptoken: {
        key: "image"
      },
      uptext: {
        key: "text"
      },
      upurl: qiniu.upurl,
      host: "http://111.230.135.20/",
      typeArr: [],
      parentArr: [],
      parent_id: "",
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      newone: {
        title: "",
        material: "",
        cover: "../static/images/default1.png",
        type_id: "",
        pictures: [],
        language: "",
        parameter: []
      },
      areas: [
        {
          title: "",
          icon: "../static/images/default1.png",
          type: 1,
          detail: ""
        },
        {
          title: "",
          icon: "../static/images/default1.png",
          type: 2,
          detail: ""
        }
      ],
      select: 1,
      category_cover: "../static/images/default1.png",
      images: "",
      categories: [],
      groupid: "",

      rules: {
        title: [{ required: true, message: "请输入产品标题", trigger: "blur" }],
        material: [{ required: true, message: "请输入产品的主要材料" }]
      },

      allParams: null
    };
  },

  methods: {
    // 获取语言分类
    getLag(index, value) {
      this.select = index;
    },
    // 获取分类的数据
    gettype() {
      var allParams = "?page=1&limit=999";
      typeAllGet(allParams).then(res => {
        this.typeArr = res.data.data;
      });
    },

    // 获取二级分类
    getPid(index, value) {
      // console.log(this.typeArr[index].parent_id);
      var parent_id = this.typeArr[index].parent_id;
      var allParams = "?page=1&&limit=999&&parent_id=" + parent_id;
      typeGet(allParams).then(res => {
        this.parentArr = res.data.data;
      });
    },

    //  移除规格
    removeguige(item) {
      var index = this.categories.indexOf(item);
      if (index !== -1) {
        this.categories.splice(index, 1);
      }
    },
    // 新增规格详细
    adddetail(e) {
      this.categories[e].details.push({
        title: ""
      });
    },
    // 新增规格表
    addguige() {
      this.categories.push({
        title: "",
        details: [
          {
            title: ""
          }
        ]
      });
    },

    // 图片上传

    ExcelSuccess(res, file, fileList) {
      this.newone.parameter = [];
      this.newone.parameter.push({
        uid: fileList[0].uid,
        url: this.host + res.data.base_url,
        name: res.data.file_name
      });
      // console.log(this.newone.parameter);
    },
    HomeSuccess(res, file, fileList, index) {
      this.areas[index].icon = "";
      this.areas[index].icon = this.host + res.data.base_url;
    },
    guigeSuccess(res, file) {
      this.category_cover = "";

      this.category_cover = this.host + res.data.base_url;
    },
    handleSuccess(res, file) {
      this.newone.cover = "";
      this.newone.cover = this.host + res.data.base_url;
    },

    handleRemove(file, fileList) {
      console.log(file);
    },
    handlelistSuccess(res, file, fileList) {
      // this.newone.pictures.push({url:response.message})
      this.newone.pictures.push({
        uid: fileList.uid,
        url: this.host + res.data.base_url
      });
      // console.log(this.newone.pictures);
    },

    // 上传信息

    save() {
      // if (this.newone.language == "") {
      //   this.newone.language = 1;
      // } else if (this.newone.type_id == "") {
      //   Message({
      //     message: "请选择分类",
      //     type: "error"
      //   });
      // } else if (this.newone.title == "") {
      //   Message({
      //     message: "请输入标题",
      //     type: "error"
      //   });
      // } else if (this.newone.cover == "") {
      //   Message({
      //     message: "请上传产品图片",
      //     type: "error"
      //   });
      // } else if (this.newone.material == "") {
      //   Message({
      //     message: "请输入产品材料",
      //     type: "error"
      //   });
      // }
      // else if(this.newo)
      // var aaa = this.newone.pictures;
      // var images = [];
      // for (var i = 0; i < aaa.length; i++) {
      //   if (typeof aaa[i] == "object") {
      //     images.push(aaa[i].url);
      //   } else {
      //     images.push(aaa[i]);
      //   }
      // }

      // allParams.pictures = images;
      var image = [];
      // 处理image
      for (var i = 0; i < this.newone.pictures.length; i++) {
        // console.log(this.newone.pictures[i].url);
        image.push(this.newone.pictures[i].url);
      }

      var parameter = this.newone.parameter[0].url;

      var allParams = {
        id: this.groupid,
        language: this.select,
        title: this.newone.title,
        type_id: this.newone.type_id,
        cover: this.newone.cover,
        material: this.newone.material,
        categories: this.categories,
        category_cover: this.category_cover,
        areas: this.areas,
        parameter: parameter,
        pictures: image
      };

      // 发送到数据库里面去
      upload(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.$router.push({ path: "/Good/Goodlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    // 检查商品ID
    checkid() {
      var groupid = sessionStorage.getItem("groupeditid");
      this.groupid = groupid;

      if (groupid) {
        var allParams = "?id=" + groupid;
        oneGet(allParams).then(res => {
          // console.log(res.data.categories)
          this.newone.title = res.data.title;
          this.newone.cover = res.data.cover;
          this.select = res.data.language;
          this.newone.type_id = res.data.type_id;
          this.newone.material = res.data.material;
          this.newone.parameter = res.data.parameter;
          this.category_cover = res.data.category_cover;
          this.categories = res.data.categories;
          // console.log(res.data.areas);
          // 处理区域
          var area = [];
          for (var i = 0; i < res.data.areas.length; i++) {
            area.push({
              title: res.data.areas[i].title,
              icon: res.data.areas[i].icon,
              type: res.data.areas[i].type,
              detail: ""
            });
          }
          this.newone.areas = area;
          console.log(this.newone.areas);

          // 处理图片
          var image = [];
          for (var i = 0; i < res.data.pictures.length; i++) {
            image.push({
              uid: res.data.pictures[i].id,
              url: res.data.pictures[i].href
            });
          }
          for (var i = 0; i < image.length; i++) {
            this.newone.pictures.push({
              uid: 1,
              url: image[i].url
            });
          }
          // EX处理
          var excal = [];
          excal.push({
            name: res.data.parameter,
            url: res.data.parameter
          });
          this.newone.parameter = excal;
        });
      }
    },

    golist() {
      this.$router.push({ path: "/Good/Goodlist" });
    }
  },
  mounted: function() {
    this.gettype();
    this.checkid();
  }
};
</script>



<style scope>
.editer {
  height: 600px;
  margin-bottom: 70px;
}
</style>