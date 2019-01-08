<template>
    <!-- 评测管理 -->
    <div>
        <div class="main-header">
            <span class="main-header-l"></span>
            <span class="main-header-name">评测管理</span>
        </div>
        <div class="main-box">
            <el-form :inline="true">
                <el-form-item>
                    <el-select v-model="select" placeholder="所有分类">
                        <el-option label="区域一" value="区域一"></el-option>
                        <el-option label="区域二" value="区域二"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-date-picker
                        v-model="time"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="keyword" placeholder="输入关键字查询"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                    <el-button type="primary" @click="add">新增</el-button>
                </el-form-item>
                <el-button class="recycle" type="text">回收站</el-button>
            </el-form>
            <el-table style="width:100%;" :data="tableData">
                <el-table-column type="selection" width="45"></el-table-column>
                <el-table-column property="title" label="标题"></el-table-column>
                <el-table-column property="range" label="所属分类"></el-table-column>
                <el-table-column property="price" label="价格"></el-table-column>
                <el-table-column property="num" label="评测人数"></el-table-column>
                <el-table-column property="state" label="状态"></el-table-column>
                <el-table-column property="time" label="创建时间"></el-table-column>
                <el-table-column width="300" label="操作">
                    <template slot-scope="scope">
                        <el-button
                            class="opt"
                            type="text"
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)"
                        >操作</el-button>
                        <el-button class="opt" type="text" size="mini">操作</el-button>
                        <el-button class="opt" type="text" size="mini">操作</el-button>
                        <el-button class="opt" type="text" size="mini">操作</el-button>
                        <el-button class="opt" type="text" size="mini">操作</el-button>
                        <el-button class="opt" type="text" size="mini">操作</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pag">
                <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Evaluation",
    data() {
        return {
            keyword: "",
            time: "",
            select: "",
            tableData: [
                {
                    title: "儿童入学准备",
                    range: "学习",
                    price: "99",
                    num: "12",
                    state: "未发布",
                    time: "1996"
                }
            ]
        };
    },
    methods: {
        search() {
            console.log("select", this.select);
            console.log("time", this.time);
            console.log("keyword", this.keyword);
        },
        add() {},
        handleEdit() {},
        handleSizeChange() {},
        handleCurrentChange() {}
    }
};
</script>
<style lang="scss">
@import "../../utils/app.scss";
.el-form.el-form--inline {
    position: relative;
}
.el-table {
    border: 1px solid #dcdfe6;
}
</style>
<style lang="scss" scoped>
.recycle {
    position: absolute;
    right: 0;
}
</style>

