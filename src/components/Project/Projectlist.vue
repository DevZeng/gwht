<template>
  <el-row class="warp" style="padding:20px 0 0 20px;">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>项目管理</el-breadcrumb-item>
        <el-breadcrumb-item>项目列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary" size="mini" @click="newone">发布项目</el-button>
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
      </el-form>

      <el-table :data="list" border stripe style="width:1650px" size="small">
        <el-table-column prop="id" label="ID" min-width="50" align="center"></el-table-column>
        <el-table-column prop="title" label="项目标题" min-width="140" align="center"></el-table-column>
        <el-table-column prop="detail" label="项目详情内容" min-width="140" align="center"></el-table-column>
        <el-table-column prop="cover" label="项目图片" min-width="80" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.cover" style="max-width:50px;max-height:50px;" />
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.sort"  size="mini" type="number" min="0" @change="changeSort(scope.row.id,scope.row.sort)" ></el-input>
          <!-- <div v-if="scope.row.sort">{{scope.row.sort}}</div> -->
        </template>
      </el-table-column>
        <!-- <el-table-column prop="products" label="项目关联产品" min-width="140" align="center"></el-table-column> -->

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
import { prolistGet } from "../../api/api";
import { proDel } from "../../api/api";
import { setProjectSort } from "../../api/api";
import { Message } from "element-ui";

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
      delId: ""
    };
  },

  methods: {
    newone() {
      sessionStorage.removeItem("groupeditid");
      this.$router.push({ path: "/Project/Projectnew" });
    },
    changeSort(id,val){
      console.log(id)
      console.log(val)

      var allParams = {
        id: id,
        sort:val
      };

      // 发送到数据库里面去
      setProjectSort(allParams).then(res => {
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
        this.select;
      prolistGet(allParams).then(res => {
        console.log(res);
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },

    getLag(index) {
      this.select = index;
      this.getlist();
    },

    // 修改功能 保存id 跳转页面
    handleEdit(index, row) {
      sessionStorage.setItem("groupeditid", row.id);
      this.$router.push({ path: "/Project/Projectnew" });
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
      proDel(allParams).then(res => {
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
  }
};

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
