<template>
    <div id="mine">
        <div>
            <ul>
                <li class="grouptitle">
                    个人中心
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="item in minearry" class="mineitem" @click="itemclick(item)" :key="item.label">
                    <span class="minetitle">{{item.label}}</span>
                    <i class="cubeic-arrow"></i>
                </li>
            </ul>
        </div>
        <div>
            <BotnavView is_index="is_mine"></BotnavView>
        </div>
    </div>
</template>

<script>
    import BotnavView from '../components/Botnav.vue'
    export default{
        data(){
            return{
                minearry:[
                    {label:'我的信息',type:'person'},
                    {label:'退出登录',type:'exit'}
                ]
            }

        },
        methods:{
            itemclick(item){
                if(item.type=='person'){
                    this.$router.push({path:'/personindex'})
                }
                if(item.type=='exit'){
                    this.$store.commit('settoken','')
                    localStorage.removeItem('token')
                    this.$router.push({path:'/login'})
                }
            }
        },
        components:{
            BotnavView:BotnavView
        },
    }
</script>

<style lang="stylus" scoped>
    .grouptitle
        font-size 20px
        color #ffffff
        line-height 40px
        background-color #00584c
        margin-bottom 20px
    .mineitem
        font-size 14px
        text-align left
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
    .minetitle
        display inline-block
        width 90%
</style>