<template>
    <div id="index">
        <div>
            <ul>
                <li class="grouptitle">
                   剪贴板
                </li>
            </ul>
        </div>
        <div id="clipboard">
            <cube-textarea id="clip"
                    v-model="newHistory.content"
                    class="clip"
                    :placeholder="placeholder"
                    :maxlength="maxlength"
                    :autofocus="autofocus"
                    @focus="input_click"
                    @blur="input_blur"
            ></cube-textarea>
            <div class="index_button">
                <cube-button :inline="true" :outline="true" class="clear" @click="clearText" >
                    <i class="cubeic-close"></i>重置
                </cube-button>
                <cube-button :inline="true" :outline="true" class="get">
                    <i class="cubeic-ok" @click="createClipboard"></i>获取
                </cube-button>
                <cube-button :inline="true" :outline="true" class="push" @click="createHistory">
                    <i class="cubeic-email"></i>提交
                </cube-button>
            </div>
            <div class="line"></div>
        </div>
         <div>
            <table>
                <thead>
                <tr>
                    <th>历史记录</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(history, index) in history">
                    <td class="history">{{ history.content}}</td>
                    <td class="delete">
                        <cube-button :inline="true" :outline="true"  @click="deleteHistory(index)">
                            <i class="cubeic-close"></i>
                        </cube-button>
                    </td>
                </tr>
                </tbody>
            </table>
         </div>
        <div v-show="bottom_tip">
            <BotnavView is_index="is_index" ></BotnavView>
        </div>
    </div>
</template>

<script>
import BotnavView from '../components/Botnav.vue'
import TopnavView from '../components/Topnav.vue'
import {mapState} from 'vuex'
export default{
    data() {
        return {
            placeholder: '请输入内容',
            maxlength: 2000,
            autofocus: false,
            bottom_tip:true,
            newHistory: {
                uid: '00001',uname: 'ThisRabbit',
                gid: '0101', gname: 'Test Group',
                content:""
            },
        }
    },
    computed:{
        ...mapState({
            history:state=>state.history
        })
    },
    methods:{
        input_click: function() {
            this.bottom_tip =false;
        },
        input_blur(){
            setTimeout(()=> {
                this.bottom_tip=true;
            }, 300);
            console.log('失去焦点事件')
        },
        clearText(){
            this.newHistory ={
                uid: '00001',uname: 'ThisRabbit',
                gid: '0101', gname: 'Test Group',
                content:" "
            }
        },
        createClipboard: function(){
            this.newHistory.content=window.android.getClipboardText
        },
        createHistory: function(){
            // this.history.push(this.newHistory);
            if(this.newHistory.content!=""){
            this.$store.commit('setHistory',this.newHistory)
            this.$store.commit('setClip',this.newHistory)
            // 添加完newHistory对象后，重置newHistory对象
            this.newHistory= {uid: '00001',uname: 'ThisRabbit',
                gid: '0101', gname: 'ITM Group',
                content:" "}}
        },
        deleteHistory: function(index){
            // 删一个数组元素
            this.history.splice(index,1);
        },

    },

    components: {
        BotnavView: BotnavView,
        TopnavView: TopnavView
    }
}




</script>

<style lang="stylus" scoped>
    .grouptitle
        font-size 20px
        color #ffffff
        line-height 40px
        background-color #00584c
        margin-bottom 20px
    .clip
        width 90%
        font-size 14px
        text-align left
        line-height 16px
        margin 0 auto
        border 1px solid #eee
    .index_button
        margin-top 10px
        margin-bottom 10px
        heigth 20px
        border-bottom-color #333333
        .clear
            margin-right 20px
        .get
            margin-right 20px
            margin-left 20px
        .push
            margin-left 20px
    .line
        margin-top 10px
        background-color #eee
        border: 5px solid #eee
    table
        width:100%
    tr

        width:80%
    th
        font-size 20px
        line-height 30px
        text-align left
        padding-left 5%
        padding-top 10px
        margin 10px 10px
    td
        text-align left
        padding-left 10px
        padding-bottom 3px
        height 40px
        font-size 14px
        line-height 19px
    .history
        border 1px solid #eee
        width 90%
    .delete
        width:10%
        text-align right
        border 0px
</style>