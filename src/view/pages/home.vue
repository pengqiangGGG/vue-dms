<template>
    <div id="main_content">
        <div class="index-button">
            <button @click="useTabVisibility = true" :class="{'active':useTabVisibility == true}">使用历史</button>
            <button @click="useTabVisibility = false" :class="{'active':useTabVisibility == false}">我的收藏</button>
        </div>
        <div v-if="useTabVisibility" class="all_use use_history">
            <ul>
                <li>
                    <div></div>
                    <span>菜单一</span>
                </li>
                <li>
                    <div></div>
                    <span>菜单二</span>
                </li>
                <li>
                    <div></div>
                    <span>菜单三</span>
                </li>
            </ul>
        </div>
        <div v-else class="all_use use_collect">
            <ul>
                <li>
                    <div></div>
                    <span>菜单四</span>
                </li>
                <li>
                    <div></div>
                    <span>菜单五</span>
                </li>
                <li>
                    <div></div>
                    <span>菜单六</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                useTabVisibility:true
            }
        },
        methods: {

        }
    }
</script>
<style scoped>

#main_content .index-button{
        border-bottom: 1px solid #5299ff;
        margin: 158px 0px 0px 35px;
    }
#main_content .index-button>button{
        width: 102px;
        margin-right: 2px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-size: 14px;
        border: 1px solid #5299ff;
        height: 33px;
        border-bottom: 0;
        vertical-align: middle !important;
        padding: 0 15px;
        cursor: pointer;
        font-family: "微软雅黑",Helvetica, Arial, sans-serif;;
        outline: none;
        background-color: #ffffff;
    }
#main_content .index-button>button.active{
        background-color: #5299ff;
        color: #ffffff;
    }
#main_content .index-button>button:hover{
        background-color: #5299ff;
        color: white;
    }
#main_content .use_history{
        padding: 5px 0 30px 0;
        margin: 10px 20px 0 20px;
    }
#main_content .all_use>ul>li{
        display: inline-block;
        width: 112px;
        height: 120px;
        padding: 1px;
        border-radius: 3px;
        position: relative;
    }
#main_content .all_use>ul>li>div{
        background-image: url('../../../public/static/images/book.png');
        background-repeat: no-repeat;
        width: 64px;
        height: 65px;
        margin: 8px auto 8px auto;
        background-position: -92px -2px;
    }
#main_content .all_use>ul>li:hover{
        background-color: #e6e6e6;
        cursor: pointer;
    }
#main_content .all_use>ul>li>span{
        display: block;
        height: 38px;
        color: #000;
        line-height: 19px;
        overflow: hidden;
        text-align: center;
        font-size: 13px;
    }
#main_content .use_collect{
        padding: 5px 0 30px 0;
        margin: 10px 20px 0 20px;
    }

</style>
