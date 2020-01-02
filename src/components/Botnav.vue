<template>
    <div >
        <router-view/>
        <cube-tab-bar
                v-model="selectedLabelDefault"
                :data="tabs"
                @click="clickHandler"
                @change="changeHandler"
                class="botnav">
        </cube-tab-bar>
    </div>
</template>

<script>
    export default {
        data () {
            return {

                tabs: [{
                    label: '剪贴板',
                    icon: 'icon-ic_copy'
                }, {
                    label: '小组',
                    icon: "icon-group"
                }, {
                    label: '我的',
                    icon: 'icon-iconme'
                }]
            }
        },
        props:{
            is_index:Boolean,
            is_group:Boolean,
            is_mine:Boolean,
        },
        methods: {
            clickHandler (label) {
                // if you clicked home tab, then print 'Home'
                console.log(label)
            },
            //点击与自身不同的其他导航
            changeHandler (label) {
                // if you clicked different tab, this methods can be emitted
                switch(label){
                    case '剪贴板':
                        this.$router.push('/index');
                        break;
                    case '小组':
                        this.$router.push({path:'/group'});
                        break;
                    case '我的':
                        this.$router.push({path:'/mine'});
                        break;
                }
            }
        }
    }

</script>

<style lang="stylus" scoped>
    .cube-tab-bar.botnav
        position  fixed
        bottom  0
        left 0

        width 100%
        height 10%
        background #e6e6e6
        font-size 20%
        .cube-tab div
            font-size  10px
            padding-top  3px
        i
            font-size 10px
</style>