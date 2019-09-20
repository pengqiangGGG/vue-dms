<template>
    <div>
        <el-form size="mini" label-width="115px" :model="addCustomerPrice">
            <el-row>
                <el-col :span="24">
                    <fieldset class="fieldWrap">
                        <legend></legend>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="意向品牌">
                                    <el-input v-model="addCustomerPrice.log"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="意向车系">
                                    <el-input v-model="addCustomerPrice.car"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="意向车型">
                                    <el-input v-model="addCustomerPrice.type"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="意向配置">
                                    <el-input v-model="addCustomerPrice.setting"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="意向颜色">
                                    <el-input v-model="addCustomerPrice.color"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="意向内饰色">
                                    <el-input v-model="addCustomerPrice.inlineColor"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="市场指导价">
                                    <el-input v-model="addCustomerPrice.price"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="成交价">
                                    <el-input v-model="addCustomerPrice.successPrice"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="费用总计(含首付)">
                                    <el-input v-model="addCustomerPrice.allPrice"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="报价日期">
                                    <el-input v-model="addCustomerPrice.priceDate"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="预计购买时间段">
                                    <el-input v-model="addCustomerPrice.buyDate"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="购买数量">
                                    <el-input v-model="addCustomerPrice.buyNumber"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="竞争品牌">
                                    <el-input v-model="addCustomerPrice.battleLog"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12" class="default_input">
                                <el-form-item label="备注">
                                    <el-input v-model="addCustomerPrice.remark"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </fieldset>
                </el-col>
                <el-col :span="24">
                    <fieldset class="fieldWrap">
                        <legend>按揭试算  小计:0.00元</legend>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="首付">
                                    <el-input v-model="addCustomerPrice.firstPay"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="贷款金额">
                                    <el-input v-model="addCustomerPrice.loanMoney"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="月供">
                                    <el-input v-model="addCustomerPrice.monthPay"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="服务费">
                                    <el-input v-model="addCustomerPrice.serviceMoney"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="公证抵押费">
                                    <el-input v-model="addCustomerPrice.notaryMoney"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="解押登记">
                                    <el-input v-model="addCustomerPrice.registration"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="卫星定位防盗系统">
                                    <el-input v-model="addCustomerPrice.position"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="家访费">
                                    <el-input v-model="addCustomerPrice.visit"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="其他">
                                    <el-input v-model="addCustomerPrice.others"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </fieldset>
                </el-col>
                <el-col :span="24">
                    <fieldset class="fieldWrap">
                        <legend>带上牌服务算  小计:0.00元</legend>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="购置税">
                                    <el-input v-model="addCustomerPrice.purchase"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="临牌临保">
                                    <el-input v-model="addCustomerPrice.license"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="代办居住证">
                                    <el-input v-model="addCustomerPrice.residence"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="上牌服务费">
                                    <el-input v-model="addCustomerPrice.carLicense"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="其它">
                                    <el-input v-model="addCustomerPrice.secOthers"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </fieldset>
                </el-col>
                <el-col :span="24">
                    <fieldset class="fieldWrap">
                        <legend>保险项目算  小计:0.00元</legend>
                        <el-row>
                            <el-col :span="4" style="margin: 5px 0;">
                                <el-checkbox v-model="checked">交强(含车船税)</el-checkbox>
                            </el-col>
                            <el-col :span="4" style="margin: 5px 0;">
                                <el-checkbox v-model="checked">车损</el-checkbox>
                            </el-col>
                            <el-col :span="4" style="margin: 5px 0;">
                                <el-checkbox v-model="checked">第三者责任</el-checkbox>
                            </el-col>
                            <el-col :span="4" style="margin: 5px 0;">
                                <el-checkbox v-model="checked">盗抢险</el-checkbox>
                            </el-col>
                            <el-col :span="4" style="margin: 5px 0;">
                                <el-checkbox v-model="checked">不计免赔</el-checkbox>
                            </el-col>
                            <el-col :span="4" style="margin: 5px 0;">
                                <el-checkbox v-model="checked">车上人员</el-checkbox>
                            </el-col>
                            <el-col :span="4" style="margin: 5px 0;">
                                <el-checkbox v-model="checked">玻璃</el-checkbox>
                            </el-col>
                            <el-col :span="4" style="margin: 5px 0;">
                                <el-checkbox v-model="checked">其它</el-checkbox>
                            </el-col>
                        </el-row>
                    </fieldset>
                </el-col>
                <el-col :span="24">
                    <fieldset class="fieldWrap">
                        <legend>精品选装算  小计:0.00元</legend>
                        <el-table :data="tableData" border style="width: 100%" size="mini" :stripe="true" :highlight-current-row="true">
                            <el-table-column label="名称" align="center" prop="name"></el-table-column>
                            <el-table-column label="销售指导价" align="center" prop="price"></el-table-column>
                            <el-table-column label="销售成交价" align="center" prop="successPrice"></el-table-column>
                        </el-table>
                        <div style="line-height: 44px;text-decoration: underline;font-size: 12px;color: #5299ff" @click="addRow">
                            新增一行
                        </div>
                    </fieldset>
                </el-col>
            </el-row>
            <el-row style="margin: 50px 0 20px">
                <el-col :span="6" align="center" :offset="6">
                    <el-button type="primary" size="mini">保存</el-button>
                </el-col>
                <el-col :span='6' align="center">
                    <el-button size="mini" @click="cancel">取消</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "customerThink",
        data(){
            return{
                checked:false,
                addCustomerPrice:{
                    log:'',
                    car:'',
                    type:'',
                    setting:'',
                    color:'',
                    inlineColor:'',
                    price:'',
                    successPrice:'',
                    allPrice:"",
                    priceDate:'',
                    buyDate:'',
                    buyNumber:'',
                    battleLog:'',
                    remark:'',
                    firstPay:'',
                    loanMoney:'',
                    monthPay:'',
                    serviceMoney:'',
                    notaryMoney:'',
                    registration:'',
                    position:'',
                    visit:'',
                    others:'',
                    purchase:'',
                    license:'',
                    residence:'',
                    carLicense:'',
                    secOthers:'',
                },
                tableData:[
                    {
                        name:'啊啊啊啊',
                        price:"1000",
                        successPrice:'20000000'
                    }
                ]
            }
        },
        methods:{
            cancel(){
                this.$emit('cancel')
            },
            addRow(){
                this.tableData.push({
                    name:'啊啊啊啊',
                    price:"1000",
                    successPrice:'20000000'
                })
            }
        }
    }
</script>

<style scoped>

</style>
