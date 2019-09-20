<template>
    <div class="flowMark">
        <el-row>
            <el-form :model="formInline" size="mini" label-width="100px">
                <el-row>
                    <el-col :span="7">
                        <el-form-item label="销售顾问">
                            <el-select v-model="formInline.sellName">
                                <el-option label="张三" value="zhangsan"></el-option>
                                <el-option label="李四" value="lisi"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="渠道大类">
                            <el-select v-model="formInline.seeType">
                                <el-option label="杂志" value="zazhi"></el-option>
                                <el-option label="路过" value="luguo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="客户来源">
                            <el-select v-model="formInline.customerType">
                                <el-option label="二网" value="erwang"></el-option>
                                <el-option label="路过" value="luguo"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="客户名称">
                            <el-input v-model="formInline.customerName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="电话号码">
                            <el-input v-model="formInline.customerPhone"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="有效客户">
                            <el-select v-model="formInline.isTrueCustomer">
                                <el-option label="是" value="shi"></el-option>
                                <el-option label="否" value="fou"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="来访方式">
                            <el-select v-model="formInline.comeType">
                                <el-option label="自然到店" value="ziran"></el-option>
                                <el-option label="邀约" value="yaoyue"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="来访时间">
                            <el-date-picker v-model="formInline.comeTime" type="date" placeholder="选择日期"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="意向品牌">
                            <el-select v-model="formInline.thinkType">
                                <el-option label="宝马" value="baoma"></el-option>
                                <el-option label="奥迪" value="aodi"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="意向车系">
                            <el-select v-model="formInline.thinkCar">
                                <el-option label="X1" value="x1"></el-option>
                                <el-option label="X2" value="x2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="意向车型">
                            <el-select v-model="formInline.thinkLevel">
                                <el-option label="进取型" value="jingqu"></el-option>
                                <el-option label="豪华型" value="haohua"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div style="padding-bottom: 15px">
                    <el-button type="primary" size="mini" @click="addPerson">新增</el-button>
                    <el-button size="mini">查询</el-button>
                    <el-button size="mini" @click="export2Excel" type="primary">导出</el-button>
                    <el-button size="mini">打印商谈备忘录</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <!--:highlight-current-row="true" 点击选中的背景色高亮-->
            <el-table :data="tableData" border style="width: 100%" size="mini" :stripe="true" :highlight-current-row="true" @filter-change="headerFilter">
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                        <!--<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">查看</el-button>-->
                        <!--<el-button size="mini" @click="handleDelete(scope.$index, scope.row)">再分配</el-button>-->
                        <span @click="handleEdit(scope.$index, scope.row)" class="decoration">编辑</span> |
                        <span @click="handleDelete(scope.$index, scope.row)" class="decoration">查看</span> |
                        <span @click="handleDelete(scope.$index, scope.row)" class="decoration">再分配</span>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="序号" align="center"></el-table-column>
                <el-table-column prop="comeType" label="来访方式" align="center"></el-table-column>
                <el-table-column prop="sex" label="性别" align="center" :filters="sexFilter" filter-placement="bottom" column-key="sex" :filter-method="sexFilterFun">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.sex === '男' ? 'primary' : 'success'"
                                disable-transitions>{{scope.row.sex}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="number" label="客户编号" align="center"></el-table-column>
                <el-table-column prop="name" label="客户名称" align="center"></el-table-column>
                <el-table-column prop="customerType" label="客户来源" align="center"></el-table-column>
                <el-table-column prop="customerPhone" label="联系手机" align="center"></el-table-column>
                <el-table-column prop="customerNum" label="来访人数" align="center"></el-table-column>
                <el-table-column label="来访时间" align="center">
                    <template slot-scope="scope">
                        {{scope.row.customerTime | filterTime}}
                    </template>
                </el-table-column>
                <el-table-column label="离店时间" align="center">
                    <template slot-scope="scope">
                        {{scope.row.leaveTime | filterTime}}
                    </template>
                </el-table-column>
                <el-table-column prop="sellName" label="销售顾问" align="center"></el-table-column>
                <el-table-column prop="isTrueComplete" label="是否完成" align="center"></el-table-column>
                <el-table-column prop="thinkType" label="意向品牌" align="center"></el-table-column>
                <el-table-column prop="thinkCar" label="意向车系" align="center"></el-table-column>
                <el-table-column prop="thinkLevel" label="意向车型" align="center"></el-table-column>
            </el-table>
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
        <el-dialog title="新增展厅流量" :visible.sync="dialogVisible" width="80%" :before-close="handleClose">
            <add-flow-item @addItem="addItemFather" @cancel="dialogVisible = false"></add-flow-item>
        </el-dialog>
    </div>
</template>

<script>
    import addFlowItem from './components/addFlowItem'
    export default {
        name: "flowMark",
        components:{addFlowItem},
        data() {
            return {
                formInline: {
                    sellName: '',//销售顾问
                    seeType: '',//渠道大类
                    customerType:'',//客户来源
                    customerName:'',//客户名称
                    customerPhone:'',//电话号码
                    isTrueCustomer:'',//有效客户
                    comeType:'',//来访方式
                    comeTime:'',//来访时间
                    thinkType:'',//意向品牌
                    thinkCar:'',//意向车系
                    thinkLevel:''//意向车型
                },
                currentPage:1,
                dialogVisible:false,
                tableData: [{
                        id: '1',
                        comeType: '路过',
                        sex: '男',
                        number:'001',
                        name:'王小虎',
                        customerType:'介绍',
                        customerPhone:'13880808080',
                        customerNum:3,
                        customerTime:new Date(),
                        leaveTime:new Date(),
                        sellName:'张三',
                        isTrueComplete:'是',
                        thinkType:'宝马',
                        thinkCar:'X1',
                        thinkLevel:'豪华型'
                    },
                    {
                        id: '2',
                        comeType: '路过',
                        sex: '女',
                        number:'001',
                        name:'王小虎',
                        customerType:'介绍',
                        customerPhone:'13880808080',
                        customerNum:3,
                        customerTime:new Date(),
                        leaveTime:new Date(),
                        sellName:'张三',
                        isTrueComplete:'是',
                        thinkType:'宝马',
                        thinkCar:'X1',
                        thinkLevel:'豪华型'
                    }
                    ],
                sexFilter:[{ text:'男', value:'男' }, { text:'女', value:'女' }],
            }
        },
        methods: {
            addPerson() {
                this.dialogVisible = true
            },
            sexFilterFun(value, row){
                //只能筛选当前页面的数据，筛选全部的可以配合table的@filter-change事件
                return row.sex == value
            },
            headerFilter(){
                // 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。
                // console.log(filters)
            },
            handleSizeChange() {
                // console.log(`每页 ${val} 条`);
            },
            handleCurrentChange() {
                // console.log(`当前页: ${val}`);
            },
            handleClose(down){
                // 弹窗关闭前的回调
                // console.log('我要关闭了！')
                down()
            },
            addItemFather(value){
                // console.log(value)
                this.$message({
                            type: 'success',
                            message: '新增成功!'
                        });
                value.id = this.tableData.length+1
                this.tableData.push(value)
                this.dialogVisible = false
            },
            handleEdit(){
                // console.log(index,row)
            },
            //导出excel表格
            export2Excel() {
                require.ensure([], () => {
                    const { export_json_to_excel } = require('../../../excel/Export2Excel');
                    const tHeader = ['序号', '来访方式', '性别','客户编号','客户名称','客户来源','联系手机','来访人数','来访时间','离店时间','销售顾部','是否完成','意向品牌','意向车系','意向车型'];
                    // 上面设置Excel的表格第一行的标题
                    const filterVal = ['id','comeType','sex','number','name','customerType','customerPhone','customerNum','customerTime','leaveTime','sellName','isTrueComplete','thinkType','thinkCar','thinkLevel'];
                    // 上面的index、nickName、name是tableData里对象的属性
                    const list = this.tableData;  //把data里的tableData存到list
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '列表excel');
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        }
    }
</script>

<style scoped>

</style>

