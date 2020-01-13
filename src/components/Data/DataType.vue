<template>
  <el-row class="warp" style="padding:20px 0 0 20px;">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>资源管理</el-breadcrumb-item>
        <el-breadcrumb-item>资源分类</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary" size="mini" @click="newone">新增分类</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" border stripe style="width:901px" size="small">
        <el-table-column prop="id" label="编号" width="200" align="center"></el-table-column>

        <el-table-column prop="href" label="分类logo" width="200" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.href" style="max-width:50px;max-height:50px;" />
          </template>
        </el-table-column>

        <el-table-column prop="title" label="名称" width="200" align="center"></el-table-column>
        <!-- <el-table-column prop="parent" label="上级" width="200" align="center"></el-table-column> -->

        <el-table-column label="排序" width="100" align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.sort"  size="mini" type="number" min="0" @change="changeSort(scope.row.id,scope.row.sort)" ></el-input>
                    <!-- <div v-if="scope.row.sort">{{scope.row.sort}}</div> -->
                  </template>
                </el-table-column>

        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

            <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        style="float:left;margin-top:20px;"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="limit"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        layout="total,sizes, prev, pager, next, jumper"
        :total="count"
        prev-text="上一页"
        next-text="下一页"
      ></el-pagination>
    </el-col>

    <el-col>
      <el-dialog
        :title="diatitle"
        :visible.sync="dialogNewVisible"
        width="500"
        center
        style="min-width: 500px"
      >
        <el-form ref="newadv" :model="newadv" label-width="120px">
          <el-form-item label="分类标题：">
            <el-input v-model="newadv.title" style="max-width: 300px;" placeholder="请输入分类名称"></el-input>
          </el-form-item>

          
          <el-form-item label="语言选择" prop="language">
            <el-select v-model="select" placheolder="请选择语言" @change="getLag">
              <el-option
                v-for="item in language"
                :label="item.value"
                :value="item.key"
                :key="item.key"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分类logo：">
            <el-upload
              class="upload-demo"
              :action="upurl"
              :data="uptoken"
              :before-upload="beforeUpload"
              :on-success="handleSuccess"
              :show-file-list="false"
              accept="image/*"
            >
              <img
                :src="imgSrc"
                class="pre-img"
                style="max-width:100px;max-height:100px;border:2px dashed #ccc;border-radius:0px;display: block"
              />
              <el-button size="small" type="primary" style="display: block;margin-top: 20px;">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">可上传JPG/PNG文件，且大小不超过1M，建议图片长宽比为1:1</div>
            </el-upload>
          </el-form-item>
          <!-- <el-form-item label="详情：" prop="detail">
     <el-input type="textarea" :rows="5"></el-input>
          </el-form-item>-->

          

          

          <el-form-item style="margin-left: calc(50% - 200px);">
            <el-button size="small" type="primary" @click="save()">保 存</el-button>
            <el-button size="small" @click="dialogNewVisible = false">取 消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-col>

    <el-col>
      <el-dialog title="删除不可恢复，是否确定删除？" :visible.sync="dialogDelVisible" width="30%">
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitdel()">确 定</el-button>
          <el-button @click="dialogDelVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>



<script>
import { typeGet } from "../../api/api";
import { dataTypeGet } from "../../api/api";
import { dataTypePost } from "../../api/api";
import { dataTypeDel } from "../../api/api";
import { setDataTypeSort } from "../../api/api";
import qiniu from "../../api/qiniu";

import { Message } from "element-ui";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor"; //调用编辑器

export default {
  data() {
    return {
      loading: false,
      uptoken: {
        token: qiniu.token
      },
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: "",
      upurl: qiniu.upurl,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      dialogNewVisible: false,
      dialogDelVisible: false,
      parent_type: true,
      addPar_type: false,
      putorup: "up",
      imgSrc: "../static/images/default.png",
      newadv: {
        title: "",
        icon: "",
        desc: ""
      },

      typeArr: [],
      type_id: "",

      diatitle: "新增分类",

      editId: "",
      delId: "",

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
      }
    };
  },
  components: {
    quillEditor
  },

  methods: {
    changeSort(id,val){
      console.log(id)
      console.log(val)

      var allParams = {
        id: id,
        sort:val
      };
      console.log(allParams)

      // 发送到数据库里面去
      setDataTypeSort(allParams).then(res => {
        if (res.msg == "ok") {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          // this.getlist();
          // this.$router.push({ path: "/Good/Goodlist" });
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    quillImgSuccess(res, file) {
      console.log(res);
      let quill = this.$refs.myQuillEditor.quill;
      if (res.key) {
        let length = quill.getSelection().index;
        quill.insertEmbed(length, "image", qiniu.showurl + res.key);
        quill.setSelection(length + 1);
      } else {
        this.$message.error("图片插入失败");
      }
    },
    // 显示添加上级分类
    Showtext() {
      this.parent_type = false;
      this.addPar_type = true;
    },

    getLag(index) {
      this.select = index;
    },
    getlist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      typeGet(allParams).then(res => {
        this.typeArr = res.data.data;
      });
    },
    getalllist() {
      var allParams = "?page=" + this.currentPage + "&limit=" + this.limit;
      dataTypeGet(allParams).then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    newone() {
      this.putorup = "up";
      this.imgSrc = "../static/images/default1.png";
      (this.diatitle = "新增分类"),
        (this.dialogNewVisible = true),
        (this.newadv = {
          title: "",
          icon: ""
        });
    },

    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isLt1M) {
        this.$message.error("图片大小不能超过 1MB!");
      }
      return isLt1M;
    },

    handleSuccess(res, file) {
      this.newadv.icon = qiniu.hosturl + res.data.base_url;
      this.imgSrc = qiniu.hosturl + res.data.base_url;
    },

    save() {
      if (this.newadv.logo == "" && this.nothree == true) {
        this.$message({
          message: "请上传分类logo",
          type: "error"
        });
      } else if (this.newadv.title == "") {
        this.$message({
          message: "请输入分类名称",
          type: "error"
        });
      } else {
        if (this.putorup == "put") {
          var allParams = {
            title: this.newadv.title,
            id: this.editId,
            href: this.imgSrc,
            description: this.newadv.desc,
            language: this.select
          };
        } else {
          var allParams = {
            title: this.newadv.title,
            href: this.imgSrc,
            description: this.newadv.desc,
            language: this.select
          };
        }
        console.log(allParams);

        dataTypePost(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });

            this.getalllist();
            // this.getlist();
            this.parent_type = true;
            this.addPar_type = false;
            this.dialogNewVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
      }
    },

    handleEdit(index, row) {
      console.log(row);
      this.diatitle = "编辑分类";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.imgSrc = row.image;
      this.newadv.icon = row.icon;
      this.newadv.title = row.title;
      this.newadv.desc = row.description;
      this.type_id = row.parent_id;
      this.newadv.icon = row.href;
      this.imgSrc = row.href;
      this.select = row.language;
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      dataTypeDel(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getalllist();
          this.getlist();
          this.parent_type = true;
          this.addPar_type = false;
          this.dialogDelVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getalllist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getalllist();
    }
  },

  mounted: function() {
    this.getlist();
    this.getalllist();
  }
};
</script>


<style>
.icon {
  width: 20px;
  height: 20px;
  margin: 2px;
}
</style>
