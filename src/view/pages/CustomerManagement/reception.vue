<template>
    <div>
        <div style="padding-bottom: 15px">
            <el-row>
                <el-form :inline="true" :model="receptionObj" class="demo-form-inline" size="mini">
                    <el-form-item label="销售顾问">
                        <el-select v-model="receptionObj.sellName">
                            <el-option label="张三" value="zhangsan"></el-option>
                            <el-option label="李四" value="lisi"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="来访时间">
                        <el-date-picker
                                v-model="receptionObj.comeTime"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="客户名称">
                        <el-input v-model="receptionObj.name"></el-input>
                    </el-form-item>
                    <el-form-item label="联系手机">
                        <el-input v-model="receptionObj.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary" size="mini">查询</el-button>
                        <el-button size="mini">导出</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
        </div>
        <el-row>
            <el-table :data="tableData" border style="width: 100%" size="mini" :stripe="true" :highlight-current-row="true" row-key="recepton">
                <el-table-column label="操作" align="center" width="100px" key="operation">
                    <template slot-scope="scope">
                        <span @click="handleEdit(scope.$index, scope.row)">客户接待</span>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="序号" align="center" width="100px" key="id"></el-table-column>
                <el-table-column prop="oldCustomer" label="是否新老客户" key="oldCustomer" width="150px" align="center" :filters="[{text:'是',value:'是'},{text:'否',value:'否'}]" filter-placement="bottom" column-key="oldCustomer" :filter-method="oldFilterFun">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.oldCustomer === '是' ? 'primary' : 'success'"
                                disable-transitions>{{scope.row.oldCustomer}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="comeType" label="来访方式" align="center" key="comeType" width="100px"></el-table-column>
                <el-table-column prop="sex" label="性别" align="center" key="sex" width="100px"></el-table-column>
                <el-table-column prop="name" label="客户名称" align="center" key="name" width="100px"></el-table-column>
                <el-table-column prop="customerType" label="客户来源" align="center" key="customerType" width="100px"></el-table-column>
                <el-table-column prop="phone" label="联系手机" align="center" width="100px" key="phone"></el-table-column>
                <el-table-column prop="customerNum" label="来访人数" align="center" width="100px" key="customerNum"></el-table-column>
                <el-table-column prop="comeTime" label="来访时间" align="center" width="100px" key="comeTime"></el-table-column>
                <el-table-column prop="leaveTime" label="离店时间" align="center" width="100px" key="leaveTime"></el-table-column>
                <el-table-column prop="sellName" label="销售顾部" align="center" width="100px" key="sellName"></el-table-column>
                <el-table-column prop="isTrueCustomer" label="是否有效客户" align="center" width="100px" key="isTrueCustomer"></el-table-column>
                <el-table-column prop="thinkType" label="意向品牌" align="center" width="100px" key="thinkType"></el-table-column>
                <el-table-column prop="thinkCar" label="意向车系" align="center" width="100px" key="thinkCar"></el-table-column>
                <el-table-column prop="thinkLevel" label="意向车型" align="center" width="100px" key="thinkLevel"></el-table-column>
                <el-table-column prop="seeType" label="渠道大类" align="center" width="100px" key="seeType"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <div class="default_pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="100"
                        background
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
        </el-row>
    </div>
</template>

<script>
    import Sortable from 'sortablejs'
    export default {
        name: "reception",
        data(){
            return{
                currentPage:1,
                receptionObj:{
                  sellName:"",
                  comeTime:'',
                  name:'',
                  phone:'',
              },
                tableData:[
                {
                    id:1,
                    oldCustomer:'是',
                    comeType:'',
                    sex:'',
                    name:'',
                    customerType:'',
                    phone:'',
                    customerNum:'',
                    comeTime:'',
                    leaveTime:'',
                    sellName:'',
                    isTrueCustomer:'',
                    thinkType:'',
                    thinkCar:'',
                    thinkLevel:'',
                    seeType:''
                }
             ]
            }
        },
        mounted(){
            this.rowDrop()
            this.columnDrop()
        },
        methods:{
            handleEdit(){

            },
            oldFilterFun(value,row){
                return row.oldCustomer == value
            },
            handleSizeChange() {
                // console.log(`每页 ${val} 条`);
            },
            handleCurrentChange() {
                // console.log(`当前页: ${val}`);
            },
            //行拖拽
            rowDrop() {
                const tbody = document.querySelector('.el-table__body-wrapper tbody')
                const _this = this
                Sortable.create(tbody, {
                    onEnd({ newIndex, oldIndex }) {
                        const currRow = _this.tableData.splice(oldIndex, 1)[0]
                        _this.tableData.splice(newIndex, 0, currRow)
                    }
                })
            },
            //列拖拽
            columnDrop() {
                const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
                this.sortable = Sortable.create(wrapperTr, {
                    animation: 180,
                    delay: 0,
                    onEnd: evt => {
                        const oldItem = this.dropCol[evt.oldIndex]
                        this.dropCol.splice(evt.oldIndex, 1)
                        this.dropCol.splice(evt.newIndex, 0, oldItem)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
