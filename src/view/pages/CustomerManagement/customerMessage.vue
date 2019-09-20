<template>
    <div>
        <el-form ref="messageObj" :model="messageObj" label-width="80px" size="mini">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-row>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="客户编号">
                                <el-input v-model="messageObj.personNum"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="客户名称">
                                <el-input v-model="messageObj.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="手机号码">
                                <el-input v-model="messageObj.phone"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="意向级别">
                                <el-select v-model="messageObj.thinkWeight">
                                    <el-option label="H" value="h"></el-option>
                                    <el-option label="N" value="n"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="客户类型">
                                <el-select v-model="messageObj.customerType">
                                    <el-option label="个人" value="个人"></el-option>
                                    <el-option label="公司" value="公司"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="客户来源">
                                <el-select v-model="messageObj.customerCome">
                                    <el-option label="到店" value="到店"></el-option>
                                    <el-option label="邀约" value="邀约"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="意向品牌">
                                <el-select v-model="messageObj.thinkType">
                                    <el-option label="宝马" value="宝马"></el-option>
                                    <el-option label="奥迪" value="奥迪"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="意向车系">
                                <el-select v-model="messageObj.thinkCar">
                                    <el-option label="X1" value="X1"></el-option>
                                    <el-option label="X2" value="X2"></el-option>
                                    <el-option label="X3" value="X3"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="意向车型">
                                <el-select v-model="messageObj.thinkLevel">
                                    <el-option value="进取型"></el-option>
                                    <el-option value="豪华型"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="意向配置">
                                <el-select v-model="messageObj.thinkSetting">
                                    <el-option value="自动进取"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="意向颜色">
                                <el-select v-model="messageObj.thinkColor">
                                    <el-option value="白"></el-option>
                                    <el-option value="红"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="销售顾问">
                                <el-select v-model="messageObj.sellName">
                                    <el-option value="张三"></el-option>
                                    <el-option value="李四"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="建档日期">
                                <el-date-picker
                                        v-model="messageObj.start"
                                        type="date"
                                        placeholder="选择日期" format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :md="8" :lg="8" :xl="6">
                            <el-form-item label="至">
                                <el-date-picker
                                        v-model="messageObj.end"
                                        type="date"
                                        placeholder="选择日期"
                                        format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <el-row>
                        <el-col :span="24">
                            <div class="btn_group">
                                <el-button type="primary" size="mini">查询</el-button>
                                <el-button size="mini" type="primary" @click="dialogVisible = true">新增</el-button>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="btn_group">
                                <el-button size="mini">再分配</el-button>
                                <el-button size="mini">合并</el-button>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="btn_group">
                                <el-button size="mini">战败再分配</el-button>
                                <el-button size="mini">战败确认</el-button>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="btn_group">
                                <el-button size="mini">激活客户</el-button>
                                <el-button size="mini" type="primary">导出</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-form>
        <div style="height: 30px"></div>
        <el-table :data="tableData" border style="width: 100%"
                  size="mini" max-height="400" ref="filterTable" :stripe="true"
                  :highlight-current-row="true" @filter-change="headerFilter"
                  @selection-change="handleSelectionChange"
        >
            <el-table-column align="center" :fixed="isTrueFixed(2)"  width="75px">
                <template slot="header">
                    <el-popover placement="bottom" trigger="click">
                        <div class="chooseShowColumn"><el-checkbox v-model="showComeType" @change="decDoLayout">来访方式</el-checkbox></div>
                        <div class="chooseShowColumn"><el-checkbox v-model="showSex" @change="decDoLayout">性别</el-checkbox></div>
                        <div class="chooseShowColumn"><el-checkbox v-model="showNumber" @change="decDoLayout">客户编号</el-checkbox></div>
                        <div class="chooseShowColumn"><el-checkbox v-model="showName" @change="decDoLayout">客户名称</el-checkbox></div>
                        <div class="chooseShowColumn"><el-checkbox v-model="showCustomerType" @change="decDoLayout">客户类型</el-checkbox></div>
                        <div class="chooseShowColumn"><el-checkbox v-model="showPhone" @change="decDoLayout">联系人手机</el-checkbox></div>
                        <div class="chooseShowColumn"><el-checkbox v-model="showDriver" @change="decDoLayout">是否试乘试驾</el-checkbox></div>
                        <div class="chooseShowColumn"><el-checkbox v-model="showDateDriver" @change="decDoLayout">试乘试驾日期</el-checkbox></div>
                        <span slot="reference"><i class="el-icon-menu" style="cursor: pointer"></i>  序号</span>
                    </el-popover>
                </template>
                <template slot-scope="scope">
                    <span @click="handleEdit(scope.$index, scope.row)" class="decoration">{{scope.row.id}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" :fixed="isTrueFixed(3)">
                <template slot-scope="scope">
                    <span @click="handleEdit(scope.$index, scope.row)" class="decoration">编辑</span>
                </template>
            </el-table-column>
            <el-table-column type="selection" align="center" width="55" :fixed="isTrueFixed(4)"></el-table-column>
            <!--<el-table-column prop="id" label="序号" align="center" :fixed="isTrueFixed(4)"></el-table-column>-->
            <el-table-column v-if="showComeType" prop="comeType" label="来访方式" align="center" :fixed="isTrueFixed(5)"></el-table-column>
            <el-table-column v-if="showSex" prop="sex" :fixed="isTrueFixed(6)" label="性别" align="center" :filters="sexFilter" filter-placement="bottom" column-key="sex" :filter-method="sexFilterFun">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.sex === '男' ? 'primary' : 'success'"
                            disable-transitions>{{scope.row.sex}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column v-if="showNumber" prop="number" label="客户编号" align="center"></el-table-column>
            <el-table-column v-if="showName" prop="name" label="客户名称" align="center"></el-table-column>
            <el-table-column v-if="showCustomerType" prop="customerType" label="客户类型" align="center"></el-table-column>
            <el-table-column prop="customerPhone" label="省份" align="center"></el-table-column>
            <el-table-column prop="customerNum" label="城市" align="center"></el-table-column>
            <el-table-column prop="customerTime" label="区县" align="center"></el-table-column>
            <el-table-column prop="leaveTime" label="大客户" align="center"></el-table-column>
            <el-table-column prop="sellName" label="客户来源" align="center"></el-table-column>
            <el-table-column prop="isTrueComplete" label="意向级别" align="center"></el-table-column>
            <el-table-column prop="thinkType" label="联系电话" align="center"></el-table-column>
            <el-table-column prop="thinkCar" label="联系手机" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="销售顾问" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="延时再发配" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="战败再分配" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="再分配时间" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="联系人姓名" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="职务名称" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="联系人电话" align="center"></el-table-column>
            <el-table-column v-if="showPhone" prop="thinkLevel" label="联系人手机" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="备注" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="购进方式" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="意向品牌" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="意向车型" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="意向配置" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="意向颜色" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="意向内饰色" align="center" width="100px"></el-table-column>
            <el-table-column prop="thinkLevel" label="是否到店" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="到店时间" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="渠道大类" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="渠道细分" align="center"></el-table-column>
            <el-table-column prop="thinkLevel" label="驾龄" align="center"></el-table-column>
            <el-table-column v-if="showDriver" prop="thinkLevel" label="是否试乘试驾" align="center" width="100px"></el-table-column>
            <el-table-column v-if="showDateDriver" prop="thinkLevel" label="试乘试驾日期" align="center" width="100px"></el-table-column>
        </el-table>
        <div class="default_pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    background
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40,50]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper ,slot"
                    :total="1000">
                <span style="margin: 0 15px">
                    请选择固定列
                    <el-select v-model="fixedIndex" size="mini">
                        <el-option value="1" label="无"></el-option>
                        <el-option value="2" label="序号"></el-option>
                        <el-option value="3" label="操作"></el-option>
                        <el-option value="4" label="选择框"></el-option>
                        <el-option value="5" label="来访方式"></el-option>
                        <el-option value="6" label="性别"></el-option>
                    </el-select>
                </span>
            </el-pagination>
        </div>
        <el-dialog title="潜在客户编辑" :visible.sync="dialogVisible" width="85%">
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="客户信息" name="first">
                    <div class="tabWrap">
                        <fieldset class="fieldWrap">
                            <legend>个人/公司信息</legend>
                            <el-form size="mini" label-width="80px" :model="editPerson" ref="editPerson">
                                <el-row>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="客户名称">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="性别">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="客户类型">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="出生日期">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="证件类型">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="证件号码">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </fieldset>
                        <fieldset class="fieldWrap">
                            <legend>联系信息</legend>
                            <el-form size="mini" label-width="80px" :model="editPerson" ref="editPerson">
                                <el-row>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="客户名称">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="性别">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="客户类型">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="出生日期">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="证件类型">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="证件号码">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </fieldset>
                        <fieldset class="fieldWrap">
                            <legend>家庭状况信息</legend>
                            <el-form size="mini" label-width="80px" :model="editPerson" ref="editPerson">
                                <el-row>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="客户名称">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="性别">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="客户类型">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="出生日期">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="证件类型">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="证件号码">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </fieldset>
                        <fieldset class="fieldWrap">
                            <legend>客户来源信息</legend>
                            <el-form size="mini" label-width="80px" :model="editPerson" ref="editPerson">
                                <el-row>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="客户名称">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="性别">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="客户类型">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="出生日期">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="证件类型">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="6">
                                        <el-form-item label="证件号码">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </fieldset>
                        <fieldset class="fieldWrap fieldFoot">
                            <legend>联系人信息</legend>
                            <el-button size="mini" @click="outerVisible = true" type="primary">新增</el-button>
                            <el-table border style="width: 100%" size="mini" :stripe="true" :highlight-current-row="true" :data="contactData">
                                <el-table-column label="操作" align="center">
                                    <template>
                                        <span>编辑</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="id" label="序号" align="center"></el-table-column>
                                <el-table-column prop="companyName" label="单位名称" align="center"></el-table-column>
                                <el-table-column prop="companyPart" label="所属部门" align="center"></el-table-column>
                                <el-table-column prop="contactPerson" label="联系人" align="center"></el-table-column>
                                <el-table-column prop="sex" label="性别" align="center"></el-table-column>
                                <el-table-column prop="isDefaultPerson" label="是否默认联系人" align="center" width="120px"></el-table-column>
                                <el-table-column prop="contactType" label="联系人类型" align="center" width="100px"></el-table-column>
                                <el-table-column prop="jobName" label="职务名称" align="center"></el-table-column>
                                <el-table-column prop="betterContact" label="最佳联系方式" align="center" width="100px"></el-table-column>
                                <el-table-column prop="phone" label="电话" align="center"></el-table-column>
                                <el-table-column prop="call" label="手机" align="center"></el-table-column>
                                <el-table-column prop="mail" label="E_MAIL" align="center"></el-table-column>
                                <el-table-column prop="postMail" label="传真" align="center"></el-table-column>
                                <el-table-column prop="remark" label="备注" align="center"></el-table-column>
                            </el-table>
                        </fieldset>
                        <el-row style="padding: 50px 0">
                            <el-col :span="6" align="center" :offset="6">
                                <el-button type="primary" size="mini">保存</el-button>
                            </el-col>
                            <el-col :span='6' align="center">
                                <el-button size="mini" @click="dialogVisible = false">取消</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <el-dialog title="新增展厅流量" :visible.sync="outerVisible" width="85%" append-to-body>
                        <add-flow-item @addItem="addItemFather" @cancel="outerVisible = false"></add-flow-item>
                    </el-dialog>
                </el-tab-pane>
                <el-tab-pane label="客户意向报价" name="second">
                    <div class="tabWrap">
                         <fieldset class="fieldWrap">
                            <legend>筛选条件</legend>
                            <el-form size="mini" label-width="80px" :model="editPerson" ref="editPerson">
                                <el-row>
                                    <el-col :md="8" :lg="7" :xl="5">
                                        <el-form-item label="采购方式">
                                            <el-select v-model="editPerson.personNum">
                                                <option value="全款"></option>
                                                <option value="分期"></option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="7" :xl="5">
                                        <el-form-item label="预算金额">
                                            <el-input v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :md="8" :lg="8" :xl="5" style="padding-top: 6px">
                                        <el-checkbox v-model="checked">预算是否充足</el-checkbox>
                                    </el-col>
                                </el-row>
                            </el-form>
                         </fieldset>
                         <fieldset class="fieldWrap fieldFoot">
                             <legend>保有车辆信息</legend>
                             <el-button type="primary" size="mini" style="margin-bottom: 10px" @click="customerThinkVisible = true">新增</el-button>
                             <el-table border style="width: 100%" size="mini" :stripe="true" :highlight-current-row="true" :data="contactData">
                                 <el-table-column label="操作" align="center">
                                     <template>
                                         <span>编辑</span>
                                     </template>
                                 </el-table-column>
                                 <el-table-column prop="id" label="序号" align="center"></el-table-column>
                                 <el-table-column prop="companyName" label="单位名称" align="center"></el-table-column>
                                 <el-table-column prop="companyPart" label="所属部门" align="center"></el-table-column>
                                 <el-table-column prop="contactPerson" label="联系人" align="center"></el-table-column>
                                 <el-table-column prop="sex" label="性别" align="center"></el-table-column>
                                 <el-table-column prop="isDefaultPerson" label="是否默认联系人" align="center" width="120px"></el-table-column>
                                 <el-table-column prop="contactType" label="联系人类型" align="center" width="100px"></el-table-column>
                                 <el-table-column prop="jobName" label="职务名称" align="center"></el-table-column>
                                 <el-table-column prop="betterContact" label="最佳联系方式" align="center" width="100px"></el-table-column>
                                 <el-table-column prop="phone" label="电话" align="center"></el-table-column>
                                 <el-table-column prop="call" label="手机" align="center"></el-table-column>
                                 <el-table-column prop="mail" label="E_MAIL" align="center"></el-table-column>
                                 <el-table-column prop="postMail" label="传真" align="center"></el-table-column>
                                 <el-table-column prop="remark" label="备注" align="center"></el-table-column>
                             </el-table>
                         </fieldset>
                         <fieldset class="fieldWrap fieldFoot">
                           <legend>客户意向车型信息</legend>
                           <el-button type="primary" size="mini" style="margin-bottom: 10px" @click="customerThinkVisible = true">新增</el-button>
                           <el-table border style="width: 100%" size="mini" :stripe="true" :highlight-current-row="true" :data="contactData">
                               <el-table-column label="操作" align="center">
                                   <template>
                                       <span>编辑</span>
                                   </template>
                               </el-table-column>
                               <el-table-column prop="id" label="序号" align="center"></el-table-column>
                               <el-table-column prop="companyName" label="单位名称" align="center"></el-table-column>
                               <el-table-column prop="companyPart" label="所属部门" align="center"></el-table-column>
                               <el-table-column prop="contactPerson" label="联系人" align="center"></el-table-column>
                               <el-table-column prop="sex" label="性别" align="center"></el-table-column>
                               <el-table-column prop="isDefaultPerson" label="是否默认联系人" align="center" width="120px"></el-table-column>
                               <el-table-column prop="contactType" label="联系人类型" align="center" width="100px"></el-table-column>
                               <el-table-column prop="jobName" label="职务名称" align="center"></el-table-column>
                               <el-table-column prop="betterContact" label="最佳联系方式" align="center" width="100px"></el-table-column>
                               <el-table-column prop="phone" label="电话" align="center"></el-table-column>
                               <el-table-column prop="call" label="手机" align="center"></el-table-column>
                               <el-table-column prop="mail" label="E_MAIL" align="center"></el-table-column>
                               <el-table-column prop="postMail" label="传真" align="center"></el-table-column>
                               <el-table-column prop="remark" label="备注" align="center"></el-table-column>
                           </el-table>
                       </fieldset>
                         <el-row style="padding: 50px 0">
                            <el-col :span="6" align="center" :offset="6">
                                <el-button type="primary" size="mini">保存</el-button>
                            </el-col>
                            <el-col :span='6' align="center">
                                <el-button size="mini" @click="dialogVisible = false">取消</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <el-dialog title="新增" :visible.sync="customerThinkVisible" width="85%" append-to-body>
                        <customer-think @cancel="customerThinkVisible = false"></customer-think>
                    </el-dialog>
                </el-tab-pane>
                <el-tab-pane label="接待及跟进" name="third">
                    <div class="tabWrap">
                        <fieldset class="fieldWrap">
                            <legend>筛选条件</legend>
                            <el-form size="mini" label-width="100px" :model="editPerson" ref="editPerson">
                                <el-row>
                                    <el-col :span="7">
                                        <el-form-item label="原级别">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="H"></el-option>
                                                <el-option value="N"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="新级别">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="H"></el-option>
                                                <el-option value="N"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="计划日期">
                                            <el-date-picker
                                                    v-model="editPerson.personNum"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="跟进方式">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="电话"></el-option>
                                                <el-option value="邀约"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="跟进结果">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="完成"></el-option>
                                                <el-option value="战败"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="接触次数">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="1次"></el-option>
                                                <el-option value="2次"></el-option>
                                                <el-option value="3次"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="联系人">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="张三"></el-option>
                                                <el-option value="李四"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="联系电话">
                                            <el-input type="text" v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="联系手机">
                                            <el-input type="text" v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-row style="margin-bottom: 20px">
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">邀约到店</el-checkbox>
                                            </el-col>
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">看车</el-checkbox>
                                            </el-col>
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">再回展厅</el-checkbox>
                                            </el-col>
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">试乘试驾</el-checkbox>
                                            </el-col>
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">参加活动</el-checkbox>
                                            </el-col>
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">二手车置换</el-checkbox>
                                            </el-col>
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">需求分析</el-checkbox>
                                            </el-col>
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">车辆介绍</el-checkbox>
                                            </el-col>
                                            <el-col :span="4" align="center">
                                                <el-checkbox v-model="checked">协商议价</el-checkbox>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item label="执行日期">
                                            <el-date-picker
                                                    v-model="editPerson.personNum"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item label="经过情形">
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="请输入内容"
                                                    v-model="editPerson.personNum">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item label="商谈结果">
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="请输入内容"
                                                    v-model="editPerson.personNum">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </fieldset>
                        <fieldset class="fieldWrap">
                            <legend>下次跟进计划</legend>
                            <el-form size="mini" label-width="100px" :model="editPerson">
                                <el-row>
                                    <el-col :span="7">
                                        <el-form-item label="跟进时间">
                                            <el-date-picker
                                                    v-model="editPerson.personNum"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="跟进方式">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="电话"></el-option>
                                                <el-option value="邀约"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="邀约时间">
                                            <el-date-picker
                                                    v-model="editPerson.personNum"
                                                    type="date"
                                                    placeholder="选择日期">
                                            </el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="3">
                                        <div style="margin: 5px 0 0 -100px">
                                            <el-checkbox v-model="checked">是否邀约</el-checkbox>
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item label="下次跟进内容">
                                            <el-input
                                                    type="textarea"
                                                    :rows="2"
                                                    placeholder="请输入内容"
                                                    v-model="editPerson.personNum">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </fieldset>
                        <fieldset class="fieldWrap">
                            <legend>战败申请</legend>
                            <el-form size="mini" label-width="100px" :model="editPerson">
                                <el-row>
                                    <el-col :span="7">
                                        <el-form-item label="战败类型">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="整车"></el-option>
                                                <el-option value="精品"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="战败车型">
                                            <el-input type="text" v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="原因">
                                            <el-select v-model="editPerson.personNum">
                                                <el-option value="无意向"></el-option>
                                                <el-option value="无法联系"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="其他原因">
                                            <el-input type="text" v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="14">
                                        <el-form-item label="战败申请说明">
                                            <el-input type="text" v-model="editPerson.personNum"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </fieldset>
                        <el-row>
                            <el-col :span="6" align="center" :offset="6">
                                <el-button type="primary" size="mini">保存</el-button>
                            </el-col>
                            <el-col :span='6' align="center">
                                <el-button size="mini" @click="dialogVisible = false">取消</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script>
    import addFlowItem from './components/addFlowItem'
    import customerThink from './components/customerThink'
    import data from '../../../utils/testTableData'
    export default {
        name: "customerMessage",
        components:{addFlowItem,customerThink},
        data(){
            return{
                checked:false,
                input:'',
                showComeType:true,
                showSex:true,
                showNumber:true,
                showName:true,
                showCustomerType:true,
                showPhone:true,
                showDriver:true,
                showDateDriver:true,
                outerVisible:false,
                fixedIndex:'无',
                customerThinkVisible:false,
                pageSize:10,
                messageObj:{
                    personNum:'',
                    start:'',
                    end:'',
                    name:'',
                    phone:'',
                    thinkWeight:'',
                    customerType:'',
                    customerCome:'',
                    thinkType:'',
                    thinkCar:'',
                    thinkLevel:'',
                    thinkSetting:'',
                    thinkColor:'',
                    sellName:'',
                },
                newArr:[],
                tableData: [],
                sexFilter:[{ text:'男', value:'男' }, { text:'女', value:'女' }],
                currentPage:1,
                dialogVisible:false,
                activeName: 'first',
                editPerson:{
                    personNum:''
                },
                contactData:[{
                        id:'',
                        companyName:'',
                        companyPart:'',
                        contactPerson:'',
                        sex:'',
                        isDefaultPerson:'',
                        contactType:'',
                        jobName:'',
                        betterContact:'',
                        phone:'',
                        call:'',
                        mail:'',
                        postMail:'',
                        remark:''
                    }]
            }
        },
        mounted(){
            // console.log(this.filterTableData(this.pageSize,data))
            this.filterTableData(this.pageSize,data)
            this.tableData = this.newArr[this.currentPage-1]
        },
        methods:{
            filterTableData(size,arr){
                const list = [...arr]
                let n = arr.length
                for (let i = 0,j = 0;i<n;i+=size,j++){
                    this.newArr[j] = list.splice(0,size)
                }
            },
            isTrueFixed(num){
                if (parseInt(num)<=this.fixedIndex) {
                    return true
                }else {
                    return false
                }
            },
            sexFilterFun(value, row){
                //只能筛选当前页面的数据，筛选全部的可以配合table的@filter-change事件
                // console.log(value)
                return row.sex == value
            },
            headerFilter(){
                // 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。
                // console.log(filters)
            },
            //选择表格显示的条数
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                // if(val == this.pageSize) return
                this.filterTableData(val,data)
                this.tableData = this.newArr[0]
                this.currentPage = 1
            },
            //切换分页
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                // console.log(this.newArr)
                this.currentPage = val
                this.tableData = this.newArr[val-1]
            },
            //计步器加减
            changePersonNumber(){
                // console.log(value);
            },
            //tab的切换事件
            handleClick() {
                // console.log(tab, event);
            },
            //接收子组件传递过来的值
            addItemFather(){
                // console.log(value)
                // this.$message({
                //     type: 'success',
                //     message: '新增成功!'
                // });
                // value.id = this.tableData.length+1
                // this.tableData.push(value)
                // this.dialogVisible = false
            },
            //table中checkBox选中事件
            handleSelectionChange(){
                //val是一个数组，有可能多选
                // console.log(val)
            },
            decDoLayout(){
                // console.log('变化了..............................')
                this.$refs.filterTable.doLayout();
            }
        }
    }
</script>

<style scoped>
.btn_group{margin-bottom: 20px}
.btn_group button{width: 110px;display: inline-block}
.chooseShowColumn{padding: 5px 0px;}
</style>

