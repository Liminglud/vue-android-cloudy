<template>
    <div id="group">
        <ul>
            <li class="grouptitle" @click="itemclick">
                <i class="cubeic-back"></i> 我的信息
            </li>

            <li class="groupitem">账号：{{group[0]}}</li>
            <li class="groupitem">编号：{{group[1]}}</li>
            <li class="groupitem">修改密码 <i class="cubeic-arrow"></i></li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                group:['ThisRabbit','00001']
            }

        },
        methods:{
            itemclick(){
                this.$router.push({path:'/mine'})
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
        border-bottom 1px solid #eee
    .cubeic-arrow
        float right
        padding-right 5%
</style>