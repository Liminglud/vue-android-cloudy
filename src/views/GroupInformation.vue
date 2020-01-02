<template>
    <div id="group">
        <div>
            <ul>
                <li class="grouptitle" @click="itemclick">
                    <i class="cubeic-back"></i> 小组资料
                </li>
                <li class="groupitem">小组名称：{{group[0].gname}}</li>
                <li class="groupitem">小组编号：{{group[0].gid}}
                <li class="groupitem">小组成员：<span v-for="item in people"> {{item}}   </span></li>
                <li class="groupitem">我的昵称：{{people[0]}}</li>
            </ul>
        </div>
        <cube-button>退出小组</cube-button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default{
        data(){
            return{
                grouparry:[
                    {label:'我的信息'},
                    {label:'退出登录',type:'exit'}
                ]
            }

        },
        computed:{
            ...mapState({
                clip:state=>state.clip,
                group:state=>state.group,
                people:state=>state.people
            })
        },
        methods:{
            itemclick(){
                this.$router.push({path:'/group'})
            }

        },
    }
</script>

<style lang="stylus" scoped>
    .grouptitle
        font-size 20px
        color #ffffff
        text-align center
        background-color #00584c
        height 40px
        line-height 40px
        padding-right 5%
        border-bottom 5px solid #eee
    .cubeic-back
        float left
        padding-left 10px
    .groupitem
        font-size 14px
        text-align left
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 5px solid #eee
    .minetitle
        display inline-block
        width 90%
</style>