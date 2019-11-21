<template>
  <el-row class="warp" style="padding:20px 0 0 20px;">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>项目列表</el-breadcrumb-item>
        <el-breadcrumb-item>新增项目</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-form
        label-width="130px"
        width="900px"
        center
        style="width: 1000px"
        :rules="rules"
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

        <el-form-item label="标题：" prop="title">
          <el-input
            v-model="newone.title"
            placeholder="请输入产品标题（20字以内）"
            maxlength="20"
            style="width:500px;"
          ></el-input>
        </el-form-item>

        <el-form-item label="详细内容:">
          <div class="edit_container">
            <quill-editor
              style="height:450px;"
              v-model="newone.detail"
              :options="editorOption"
              class="editer"
              placeholder="请输入详细内容"
            ></quill-editor>
            <el-upload
              class="avatar-uploader quill-img"
              :action="upurl"
              :data="uptoken"
              style="display: none"
            ></el-upload>
          </div>
        </el-form-item>

        <el-form-item label="项目图片：" prop="cover">
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

        <el-form-item label="关联产品：">
          <el-checkbox-group v-model="newone.pro_id"  :max="4">
            <el-checkbox-button
              v-for="item in newone.products"
              :key="item.key"
              :label="item.key"
              border
            >{{item.title}}</el-checkbox-button>
          </el-checkbox-group>
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
import qiniu from "../../api/qiniu";

import { Message } from "element-ui";

// 添加接口
import { proAdd } from "../../api/api";

// 获取产品接口
import { listGet } from "../../api/api";

// 获取单项目接口
import { proGet } from "../../api/api";
import { quillEditor } from "vue-quill-editor"; //调用编辑器

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

      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      newone: {
        title: "",
        cover: "../static/images/default1.png",
        language: "",
        detail: "",
        products: [],
        pro_id: []
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
      groupid: "",
      rules: {
        title: [{ required: true, message: "请输入产品标题", trigger: "blur" }],
        material: [{ required: true, message: "请输入产品的主要材料" }]
      },

      editorOption: {
        placeholder: "请输入详细内容（添加图片请点击上方第一个按钮）",
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              ["image"],
              [
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "code-block"
              ],
              [{ direction: "rtl" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }]
              // ['clean']
            ],
            handlers: {
              image: function(value) {
                if (value) {
                  document.querySelector(".quill-img input").click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      },

      allParams: null
    };
  },

  methods: {
    change() {
      console.log(this.newone.pro_id);
    },
    // 获取语言分类
    getLag(index, value) {
      this.select = index;
    },

    // 获取产品信息
    getProduct() {
      var allParams = "?page=1&limit=10&language=" + this.select;
      listGet(allParams).then(res => {
        if (res.msg === "ok") {
          this.newone.products = [];
          for (let i = 0; i < res.data.data.length; i++) {
            this.newone.products.push({
              key: res.data.data[i].id,
              title: res.data.data[i].title
            });
          }
        }
      });
    },

    // 复选框选中时获取id

    // 图片上传

    handleSuccess(res, file) {
      this.newone.cover = this.host + res.data.base_url;
    },

    // 上传信息

    save() {
      var allParams = {
        title: this.newone.title,
        detail: this.newone.detail,
        id: this.groupid,
        language: this.select,
        cover: this.newone.cover,
        products: this.newone.pro_id
      };
      console.log(allParams);
      // 发送到数据库里面去
      proAdd(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.$router.push({ path: "/Project/Projectlist" });
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
        proGet(allParams).then(res => {
          console.log(res);
          this.select = res.data.language;
          this.newone.title = res.data.title;
          this.newone.detail = res.data.detail;
          this.newone.cover = res.data.cover;
          for (var i = 0; i < res.data.products.length; i++) {
            this.newone.pro_id.push(res.data.products[i].product_id);
          }
        });
      }
    },

    golist() {
      this.$router.push({ path: "/Product/Productlsit" });
    }
  },
  mounted() {
    this.getProduct();
    this.checkid();
  },
  components: {
    quillEditor
  }
};
</script>



<style scope>
.editer {
  height: 600px;
  margin-bottom: 70px;
}
</style>