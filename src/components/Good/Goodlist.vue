<template>
  <el-row class="warp" style="padding:20px 0 0 20px;">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>产品管理</el-breadcrumb-item>
        <el-breadcrumb-item>产品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary" size="mini" @click="newone">发布产品</el-button>
        </el-form-item>

        <el-form-item label="语言选择：" prop="language" style="margin-left:20px">
          <el-select v-model="select" placheolder="请选择语言" @change="getLag">
            <el-option
              v-for="item in language"
              :label="item.value"
              :value="item.key"
              :key="item.key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品类型：" prop="type_id" style="margin-left:20px">
          <el-select v-model="type_id" placheolder="请选择类型" @change="getChild">
            <el-option
              v-for="item in type"
              :label="item.title"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
          <el-select v-model="childtype_id" placheolder="请选择类型" @change="setType">
            <el-option
              v-for="item in childtype"
              :label="item.title"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否新品：" prop="newset" style="margin-left:20px">
          <el-select v-model="newset" placheolder="请选择" @change="setNewer">
            <el-option
              v-for="item in newer"
              :label="item.value"
              :value="item.key"
              :key="item.key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="getlist">搜索</el-button>
          <el-button size="small" @click="clear">清空</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" border stripe style="width:1650px" size="small">
        <el-table-column prop="id" label="ID" min-width="50" align="center"></el-table-column>
        <el-table-column prop="title" label="标题" min-width="140" align="center"></el-table-column>
        <el-table-column prop="cover" label="产品图片" min-width="80" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.cover" style="max-width:50px;max-height:50px;" />
          </template>
        </el-table-column>
        <el-table-column prop="material" label="主要材料" min-width="80" align="center"></el-table-column>
        <!-- <el-table-column prop="category_cover" label="规模图" min-width="80" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.category_cover" style="max-width:50px;max-height:50px;" />
          </template>
        </el-table-column> -->

        <!-- <el-table-column label="排序" min-width="150" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.sort"
              size="mini"
              type="number"
              min="0"
              style="width: 60px;"
            ></el-input>
            <el-button
              type="primary"
              size="mini"
              @click="changesort(scope.row)"
              style="display: inline-block;"
            >提交</el-button>
          </template>
        </el-table-column>-->

        <!-- <el-table-column prop="hot" label="推荐" min-width="80" align="center">
          <template slot-scope="scope">
            <el-button
              type="success"
              size="mini"
              @click="handleHot(scope.$index, scope.row)"
              v-show="scope.row.hot==1"
            >是</el-button>
            <el-button
              type="info"
              size="mini"
              @click="handleHot(scope.$index, scope.row)"
              v-show="scope.row.hot==0"
            >否</el-button>
          </template>
        </el-table-column>-->

        <!-- <el-table-column prop="state" label="状态" min-width="80" align="center">
          <template slot-scope="scope">
            <el-button
              type="success"
              size="mini"
              @click="handleState(scope.$index, scope.row)"
              v-show="scope.row.state==1"
            >上线</el-button>
            <el-button
              type="info"
              size="mini"
              @click="handleState(scope.$index, scope.row)"
              v-show="scope.row.state==0"
            >下线</el-button>
          </template>
        </el-table-column>-->
<el-table-column label="排序" width="100" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.sort"  size="mini" type="number" min="0" @change="changeSort(scope.row.id,scope.row.sort)" ></el-input>
          <!-- <div v-if="scope.row.sort">{{scope.row.sort}}</div> -->
        </template>
      </el-table-column>
      <el-table-column prop="title" label="新品" min-width="100" align="center">
     <template slot-scope="scope">
      <el-button type="success" size="mini" v-show="scope.row.newer==1" @click="changestate(scope.row)">是</el-button>
      <el-button type="info" size="mini" v-show="scope.row.newer==2" @click="changestate(scope.row)">否</el-button>
    </template>
  </el-table-column>
        <el-table-column label="操作" min-width="140" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
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

    <!-- 删除显示页 -->
    <el-dialog title="删除不可恢复，是否确定删除？" :visible.sync="dialogDelVisible" width="30%">
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitdel()">确 定</el-button>
        <el-button @click="dialogDelVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
import { listGet } from "../../api/api";
import { listDel } from "../../api/api";
import { setProductSort } from "../../api/api";
import { Message } from "element-ui";
import { typeGet } from "../../api/api";
import { typeAllGet } from "../../api/api";
import { setProductNewer } from "../../api/api";
export default {
  data() {
    return {
      currentPage: 1,
      list: [],
      count: 0,
      limit: 10,

      dialogDelVisible: false,
      language: [{ key: 1, value: "中文" }, { key: 2, value: "英文" }],
      select: 1,
      editId: "",
      delId: "",
      type_id:"",
      type:[],
      childtype:[],
      childtype_id:"",
      newer: [{ key: 1, value: "是" }, { key: 2, value: "否" }],
      newset:""
    };
  },

  methods: {
    newone() {
      sessionStorage.removeItem("groupeditid");
      this.$router.push({ path: "/Good/Goodnew" });
    },
    ExcelSuccess(res, file, fileList) {
      this.newone.parameter = [];
      this.newone.parameter.push({
        uid: fileList[0].uid,
        url: this.host + res.data.base_url,
        name: res.data.file_name
      });
      // console.log(this.newone.parameter);
    },
    gettype(language) {
      var allParams = "?page=1&limit=999&language="+language;
      typeGet(allParams).then(res => {
        this.type = res.data.data;
      });
    },
    changeSort(id,val){
      console.log(id)
      console.log(val)

      var allParams = {
        id: id,
        sort:val
      };
      

      // 发送到数据库里面去
      setProductSort(allParams).then(res => {
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

    getlist() {
      var allParams =
        "?page=" +
        this.currentPage +
        "&limit=" +
        this.limit +
        "&language=" +
        this.select +
        "&type_id=" + this.childtype_id+"&newer="+this.newset
        console.log(allParams);
      listGet(allParams).then(res => {
        console.log(res);
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    changestate(index){
     var allParams = {
        id: index.id
      };
     console.log(allParams);
     setProductNewer(allParams).then((res) => {
       this.getlist();
     });
   },

    getLag(index) {
      
      this.select = index;
      // this.getlist();
      this.gettype(index);
      
    },
    clear(){
this.childtype_id = "";
      this.type_id = "";
      this.newset = "";
    },
    setType(type){
      this.childtype_id = type;
      // this.getlist();
    },
    setNewer(index){
      this.newset = index;
    },
    getChild(index, value) {
      // console.log(index);
      // console.log(this.typeArr);
      var parent_id = this.type_id;
      // console.log(this.parent_id);
      var allParams = "?page=1&&limit=999&&parent_id=" + parent_id;
      typeGet(allParams).then(res => {
        this.childtype = res.data.data;
      });
    },
    // 排序确定功能
    // changesort(row) {
    //   if (row.sort == "") {
    //     this.$message({
    //       message: "请先输入排序值",
    //       type: "success"
    //     });
    //     return;
    //   }
    //   var allParams = "?id=" + row.id + "&sort=" + row.sort;
    //   groupSet(allParams).then(res => {
    //     if (res.msg == "ok") {
    //       this.$message({
    //         message: "修改成功",
    //         type: "success"
    //       });
    //       this.getlist();
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: "error"
    //       });
    //     }
    //   });
    // },

    // 是否热门推荐功能
    // handleHot(index, row) {
    //   if (row.hot == 0) {
    //     var allParams = "?id=" + row.id + "&hot=1";
    //   } else {
    //     var allParams = "?id=" + row.id + "&hot=0";
    //   }
    //   groupSet(allParams).then(res => {
    //     if (res.msg == "ok") {
    //       this.$message({
    //         message: "修改成功",
    //         type: "success"
    //       });
    //       this.getlist();
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: "error"
    //       });
    //     }
    //   });
    // },

    // 状态管理功能
    // handleState(index, row) {
    //   if (row.state == 0) {
    //     var allParams = "?id=" + row.id + "&state=1";
    //   } else {
    //     var allParams = "?id=" + row.id + "&state=0";
    //   }
    //   groupSet(allParams).then(res => {
    //     if (res.msg == "ok") {
    //       this.$message({
    //         message: "修改成功",
    //         type: "success"
    //       });
    //       this.getlist();
    //     } else {
    //       this.$message({
    //         message: res.msg,
    //         type: "error"
    //       });
    //     }
    //   });
    // },

    // 修改功能 保存id 跳转页面
    handleEdit(index, row) {
      sessionStorage.setItem("groupeditid", row.id);
      this.$router.push({ path: "/Good/Goodnew" });
    },

    // 删除功能 弹出删除框 获取ID
    handleDelete(index, row) {
      this.dialogDelVisible = true;
      this.delId = row.id;
      // console.log(this.delId);
    },

    // 删除确定按钮 删除记录
    submitdel() {
      this.dialogDelVisible = false;
      var allParams = "?id=" + this.delId;
      listDel(allParams).then(res => {
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
    }
  },

  mounted: function() {
    this.getlist();
    this.gettype(1);
  }
};
</script>


<style scope>
.icon {
  width: 20px;
  height: 20px;
  margin: 2px;
}

.el-button + .el-button {
  margin-left: 0px !important;
}
</style>
