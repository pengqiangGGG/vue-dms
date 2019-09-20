<template>
    <div>
        <el-form :model="addPersonItem" size="mini" label-width="120px">
            <el-row>
                <el-col :span="7">
                    <el-form-item label="有效客户">
                        <el-select v-model="addPersonItem.isTrueCustomer">
                            <el-option label="是" value="shi"></el-option>
                            <el-option label="否" value="fou"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="客户名称">
                        <el-input v-model="addPersonItem.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="性别">
                        <el-select v-model="addPersonItem.sex">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="联系手机">
                        <el-input v-model="addPersonItem.customerPhone"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="来访方式">
                        <el-select v-model="addPersonItem.comeType">
                            <el-option label="自然到店" value="ziran"></el-option>
                            <el-option label="邀约" value="yaoyue"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="来访人数">
                        <el-input-number v-model="addPersonItem.num" @change="changePersonNumber" :min="1" :max="10" label="描述文字"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="来访时间">
                        <el-date-picker v-model="addPersonItem.customerTime" type="datetime" placeholder="选择日期" format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="离店时间">
                        <el-date-picker v-model="addPersonItem.leaveTime" type="datetime" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="客户来源">
                        <el-select v-model="addPersonItem.customerType">
                            <el-option label="二网" value="erwang"></el-option>
                            <el-option label="路过" value="luguo"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="渠道大类">
                        <el-select v-model="addPersonItem.seeType">
                            <el-option label="杂志" value="zazhi"></el-option>
                            <el-option label="路过" value="luguo"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="客流性质">
                        <el-select v-model="addPersonItem.flowType">
                            <el-option label="个人" value="zazhi"></el-option>
                            <el-option label="公司" value="luguo"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="销售顾问">
                        <el-select v-model="addPersonItem.sellName">
                            <el-option label="张三" value="zhangsan"></el-option>
                            <el-option label="李四" value="lisi"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="意向品牌">
                        <el-select v-model="addPersonItem.thinkType">
                            <el-option label="宝马" value="baoma"></el-option>
                            <el-option label="奥迪" value="aodi"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="意向车系">
                        <el-select v-model="addPersonItem.thinkCar">
                            <el-option label="X1" value="x1"></el-option>
                            <el-option label="X2" value="x2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="意向车型">
                        <el-select v-model="addPersonItem.thinkLevel">
                            <el-option label="进取型" value="jingqu"></el-option>
                            <el-option label="豪华型" value="haohua"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="固定电话">
                        <el-input v-model="addPersonItem.fixedPhone"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="省份">
                        <el-select v-model="addPersonItem.province">
                            <el-option label="湖北" value="湖北"></el-option>
                            <!--<el-option label="湖南" value="湖南"></el-option>-->
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="城市">
                        <el-select v-model="addPersonItem.city">
                            <el-option label="武汉" value="武汉"></el-option>
                            <!--<el-option label="咸宁" value="咸宁"></el-option>-->
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="区县">
                        <el-select v-model="addPersonItem.street">
                            <el-option label="汉阳区" value="汉阳区"></el-option>
                            <!--<el-option label="咸宁" value="咸宁"></el-option>-->
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="市场活动">
                        <el-input v-model="addPersonItem.activity"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="备注">
                        <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="addPersonItem.message">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="flow_footer">
                <el-button size="mini" @click="cancel">取 消</el-button>
                <el-button type="primary" @click="isTrueAdd" size="mini">确 定</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "addFlowItem",
        data(){
            return{
                addPersonItem:{
                    id:0,
                    num:1,
                    isTrueCustomer:'',
                    name:'',
                    sex:'',
                    customerPhone:'',
                    comeType:'',
                    customerTime:'',
                    leaveTime:'',
                    customerType:'',
                    seeType:'',
                    sellName:'',
                    thinkType:'',
                    thinkCar:'',
                    thinkLevel:'',
                    fixedPhone:'',
                    province:'',
                    city:'',
                    street:'',
                    activity:'',
                    message:'',
                    flowType:''
                }
            }
        },
        methods:{
            //确认按钮
            isTrueAdd(){
                // console.log(this.addPersonItem)
                this.$emit('addItem',this.addPersonItem)
            },
            changePersonNumber(){
                // console.log(value);
            },
            // 取消按钮
            cancel(){
                this.$emit('cancel')
            }
        }
    }
</script>

<style scoped>
.flow_footer{margin-top: 120px;text-align: center;}
.flow_footer button{margin-right: 60px}

</style>
