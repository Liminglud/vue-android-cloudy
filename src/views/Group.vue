<template>
    <div id="group">
        <div>
            <ul>
                <li class="grouptitle" @click="itemclick">{{group[0].gname}}
                    <i class="cubeic-arrow"></i>
                </li>
                <li v-for="item in clip" class="clip">
                    <span>
                        <span class="uname">( {{item.uname}} )</span> <br>
                        <span class="content">{{item.content}}</span>
                    </span>
                </li>
            </ul>
        </div>
        <div>
            <BotnavView ></BotnavView>
        </div>
    </div>
</template>

<script>
    import BotnavView from '../components/Botnav.vue'
    import {mapActions} from "vuex";
    import {mapState} from 'vuex'
    export default{

        computed:{
            ...mapState({
                clip:state=>state.clip,
                group:state=>state.group
            })
        },
        methods: {
            itemclick(){
                    this.$router.push({path:'/groupinformation'})
                }
        },

        components:{
            BotnavView:BotnavView
        }
    }
</script>

<style lang="stylus" scoped>
    .grouptitle
        background-color #00584c
        font-size 20px
        color #ffffff
        text-align center
        height 40px
        line-height 40px
        padding-left 10px
        border-bottom 5px solid #eee
    .cubeic-arrow
        float right
        color #ffffff
        padding-right 10px
    .clip
        width 95%
        margin 0 auto
        text-align left
        line-height 25px
        border-bottom 1.5px solid #4A708B
    .uname
        font-size 12px
        line-height 16px
        font-color #8968CD
        padding-bottom 8px
    .content
        display inline-block
        text-align left
        line-height 22px
        font-size 16px
        font-color #292929

</style>