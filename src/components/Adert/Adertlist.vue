<template>
  <el-row class="warp" style="padding:20px 0 0 20px;">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>首页广告管理</el-breadcrumb-item>
        <el-breadcrumb-item>广告列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-row>
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary" size="mini" @click="newone">新增广告</el-button>
          </el-form-item>

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
        </el-form>

        <el-table :data="list" border stripe size="small" style="width:801px">
          <el-table-column prop="id" label="广告编号" align="center"></el-table-column>
          <el-table-column prop="href" label="广告图片" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.href" style="max-width:90px;max-height:90px;" />
            </template>
          </el-table-column>
          <!-- <el-table-column prop="type" label="广告类型" width="200" align="center"></el-table-column>
          <el-table-column prop="" label="广告产品" width="200" align="center"></el-table-column>-->

          <!-- <el-table-column prop="group_id" label="拼团id" width="200" align="center">
          </el-table-column>-->

          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                type="danger"
                size="small"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
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
      </el-row>
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

          <el-form-item label="广告类型：">
            <el-select v-model="adv_type" placeholder="请选择" @change="getPro()">
              <el-option
                v-for="item in adv_list"
                :key="item.key"
                :label="item.value"
                :value="item.key"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="广告产品：" v-if="adv_type!=5">
            <el-select v-model="pro_id" placeholder="请选择">
              <el-option
                v-for="item in pro_list"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="跳转链接：" prop="link" v-if="adv_type==5">
            <el-input v-model="link" placeholder="请输入跳转链接" maxlength="200" style="width:400px;"></el-input>
          </el-form-item>

          <el-form-item label="上传图片：">
            <el-upload
              class="upload-demo"
              :action="upurl"
              :data="uptoken"
              :on-success="handleSuccess"
              :on-exceed="handleExceed"
              :limit="1"
              :show-file-list="true"
              accept="image/*"
            >
              <div style="width:150px;border:1px solid #ccc;">
                <img :src="imgSrc" alt style="width:100%;display:block " />
              </div>
              <div slot="tip" class="el-upload__tip">可上传JPG/PNG文件，建议图片比例为16:9</div>
            </el-upload>
          </el-form-item>

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
          <el-button size="small" type="primary" @click="submitdel()">确 定</el-button>
          <el-button size="small" @click="dialogDelVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>



<script>
import { AdvertsGet } from "../../api/api";
import { AdvertPost } from "../../api/api";
import { AdvertDel } from "../../api/api";
import { listGet } from "../../api/api";
import { prolistGet } from "../../api/api";
import { dataGet } from "../../api/api";
import { momentsGet } from "../../api/api";

import qiniu from "../../api/qiniu";

export default {
  data() {
    return {
      uptoken: {
        token: qiniu.token
      },
      upurl: qiniu.upurl,

      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,
      link: "https://",

      dialogNewVisible: false,
      dialogDelVisible: false,

      putorup: "up",
      imgSrc: "../../../static/images/default.png",
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: 1,

      newadv: {},
      adv_list: [
        { key: 1, value: "产品" },
        { key: 2, value: "项目" },
        { key: 3, value: "动态" },
        { key: 4, value: "资料" },
        { key: 5, value: "外部链接" }
      ],
      adv_type: "",

      pro_list: [],
      pro_id: "",

      diatitle: "新增广告",
      postarr: [],
      editId: "",
      delId: "",

      goodData: [],

      checkper1: false,
      checkper2: false,

      grouplist: [],
      gcurrentPage: 1,
      gcount: 0,
      glimit: 10
    };
  },

  methods: {
    getlist() {
      var allParams =
        "?page=" + this.currentPage + "&limit=" + this.limit + "&language="+this.select;
      AdvertsGet(allParams).then(res => {
        console.log(res.data.data);
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    getLag(index) {
      this.select = index;
      this.getlist();
    },

    getPro() {
      this.pro_id = "";
      let allParams =
        "?page=" + this.currentPage + "&limit=1000" + "&language=1";
      if (this.adv_type == 1) {
        listGet(allParams).then(res => {
          this.pro_list = res.data.data;
        });
      } else if (this.adv_type == 2) {
        prolistGet(allParams).then(res => {
          this.pro_list = res.data.data;
        });
      } else if (this.adv_type == 3) {
        momentsGet(allParams).then(res => {
          this.pro_list = res.data.data;
        });
      } else if (this.adv_type == 4) {
        
        dataGet(allParams).then(res => {
          this.pro_list = res.data.data;
        });
      }
    },
    handleSelect(index, row) {
      this.group_id = row.id;
      var grouplist = [];
      grouplist.push(row);
      this.grouplist = grouplist;
    },

    newone() {
      this.putorup = "up";
      this.postarr = [];
      this.link = "";
      this.adv_type = "";
      this.imgSrc = "../../../static/images/default1.png";
      (this.diatitle = "新增广告"), (this.dialogNewVisible = true);
    },

    handleSuccess(res, file) {
      this.imgSrc = qiniu.hosturl + res.data.base_url;
    },

    handleExceed(files, fileList) {
      this.$message.warning(`一次只能上传1张图片`);
    },

    save() {
      if (this.imgSrc == "") {
        this.$message({
          message: "请选择图片",
          type: "error"
        });
      } else {
        if (this.putorup == "put") {
          var allParams = {
            href: this.imgSrc,
            id: this.editId,
            type: this.adv_type,
            language: this.select,
            param: this.pro_id,
            link: this.link
          };
        } else {
          var allParams = {
            type: this.adv_type,
            href: this.imgSrc,
            language: this.select,
            param: this.pro_id,
            link: this.link
          };
        }

        AdvertPost(allParams).then(res => {
          if (res.msg === "ok") {
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.imgSrc = "";
            this.getlist();
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
      this.diatitle = "编辑广告";
      this.dialogNewVisible = true;
      this.putorup = "put";
      this.editId = row.id;
      this.imgSrc = row.href;
      this.pro_id = row.pro_id;
      this.link = row.link;
      this.adv_type = row.type;
      this.param = row.param;

      this.getPro();
      console.log(row);
    },

    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
    },

    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      AdvertDel(allParams).then(res => {
        if (res.msg === "ok") {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getlist();
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
      this.getlist();
    },

    handleSizeChange(val) {
      this.limit = val;
      this.getlist();
    },

    gCurrentChange(val) {
      this.gcurrentPage = val;
      this.getgroup();
    },

    gSizeChange(val) {
      this.glimit = val;
      this.getgroup();
    }
  },

  mounted: function() {
    this.getlist();
  }
};
</script>


<style scoped>
</style>
