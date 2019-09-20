<template>
    <div class="testPage">
        <!--<div class="table-oper">-->
            <!--<span class="menu-btn">-->
                <!--<i class="icon-menu"></i>-->
                <!--<div class="menu-wrapper">-->
                    <!--<template v-for="(column,index) in customColumns">-->
                        <!--<vxe-checkbox v-if="column.property" class="checkbox-item" v-model="column.visible" :key="index" @change="$refs.xTable.refreshColumn()">{{ column.title }}</vxe-checkbox>-->
                    <!--</template>-->
                <!--</div>-->
            <!--</span>-->
        <!--</div>-->
        <div class="scrollTest">
            <el-button @click="goPrint">打印</el-button>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <vxe-toolbar id="toolbar_demo3" :setting="{storage: true}">
            <template v-slot:buttons>
                <vxe-button>按钮1</vxe-button>
                <vxe-button>按钮2</vxe-button>
            </template>
        </vxe-toolbar>
        <!--表格渲染-->
        <vxe-table
                ref="xTable"
                border
                height="300"
                highlight-hover-row
                show-overflow
                size="mini"
                :data="tableData">
            <vxe-table-column type="index" fixed="left" width="60" title="序号"></vxe-table-column>
            <vxe-table-column field="name" title="Name" width="200"></vxe-table-column>
            <vxe-table-column field="comeType" title="ComeType" width="200"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex" width="200"></vxe-table-column>
            <vxe-table-column field="thinkType" title="ThinkType" width="200"></vxe-table-column>
            <vxe-table-column field="name" title="Name" width="200"></vxe-table-column>
            <vxe-table-column field="comeType" title="ComeType" width="200"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex" width="200"></vxe-table-column>
            <vxe-table-column field="thinkType" title="ThinkType" width="200"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex" width="200"></vxe-table-column>
            <vxe-table-column field="thinkType" title="ThinkType" width="200"></vxe-table-column>
            <vxe-table-column field="name" title="Name" width="200"></vxe-table-column>
            <vxe-table-column field="comeType" title="ComeType" width="200"></vxe-table-column>
            <vxe-table-column field="sex" title="Sex" width="200"></vxe-table-column>
            <vxe-table-column field="thinkType" title="ThinkType" width="200"></vxe-table-column>
            <vxe-table-column field="thinkLevel" title="ThinkLevel" width="200"></vxe-table-column>
        </vxe-table>
    </div>
</template>

<script>
    import {customer_data,Admin_login} from '../../api/api'
    export default {
        data () {
            return {
                tableData: [],
                info:{
                    username:'admin',
                    password:'123456'
                }
            }
        },
        created () {
            Admin_login(this.info).then(()=>{
                // console.log(res)
            })
            customer_data().then(res=>{
                // console.log(res)
                this.tableData = res.articles
            })
        },
        methods:{
            goPrint(){
                const {href} = this.$router.resolve({
                    path: '/print',
                })
                window.open(href, '_blank')
            }
        }
    }

</script>

<style>

</style>
