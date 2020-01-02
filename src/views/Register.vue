<template>
    <div style="margin-top:30px">
        <my-logo>
        </my-logo>
        <div id="nav">
            <router-link to="/login">登录</router-link> |
            <router-link to="/register">注册</router-link>
        </div>
        <router-view/>
        <cube-form
                :model="model"
                :schema="schema"
                @submit="submitHandler">
        </cube-form>
    </div>
</template>

<script>
    import MyLogo from '@/components/Logo'
    export default {
        data () {
            return {
                model: {
                    username: '',
                    password: ''
                },
                schema: {
                    fields: [
                        // 用户名配置
                        {
                            type: 'input',
                            modelKey: 'username',
                            label: '用户名',
                            props: {
                                placeholder: '请输入用户名'
                            },
                            rules: {
                                // 校验规则
                                required: true,
                                type: 'string',
                                min: 3,
                                max: 18
                            },
                            trigger: 'blur',
                            messages: {
                                required: '用户名不能为空',
                                min: '用户名不能少于3个字符',
                                max: '用户名不能大于18个字符'
                            }
                        },
                        // 密码配置
                        {
                            type: 'input',
                            modelKey: 'password',
                            label: '密码',
                            props: {
                                placeholder: '请输入密码',
                                type: 'password',
                                eye: {
                                    open: false
                                }
                            },
                            rules: {
                                // 校验规则
                                required: true
                            },
                            trigger: 'blur'
                        },
                        {
                            type: 'submit',
                            label: '注册'
                        }
                    ]
                }
            }
        },
        components:{
            MyLogo: MyLogo
        },
        methods : {
            submitHandler(e){
                //阻止提交
                e.preventDefault()
                this.$http.get('/api/register',{params:this.model}).then(res=>{
                    console.log(res.success)
                }).catch(err=>{
                    console.log(err)
                })

            }
        }
    }
</script>

<style lang="stylus" scoped>
#nav
    margin-bottom 30px
</style>
