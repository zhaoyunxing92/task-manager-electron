<template>
    <div class="login-layout">
        <!--<mu-linear-progress value="0"/>-->
        <div class="content">

            <mu-flexbox>
                <mu-flexbox-item>
                    <mu-text-field label="账号" hintText="请输入邮箱/用户名/手机号"
                                   type="text"
                                   labelFloat
                                   fullWidth ref="userName"/>
                </mu-flexbox-item>
            </mu-flexbox>
            
            <mu-flexbox>
                <mu-flexbox-item grow="9">
                    <mu-text-field label="密码"
                                   hintText="请输入密码"
                                   type="password"
                                   labelFloat
                                   fullWidth ref="password"/>
                </mu-flexbox-item>
                <mu-flexbox-item grow="2">
                    <mu-checkbox uncheckIcon="visibility_off"
                                 checkedIcon="visibility"
                                 @change="showPwdSwitch()"/>
                </mu-flexbox-item>
            </mu-flexbox>

            <mu-flexbox>
                <mu-flexbox-item grow="8">
                    <mu-checkbox label="记住我"/>
                </mu-flexbox-item>
                <mu-flexbox-item grow="3">
                    <mu-flat-button label="忘记密码" primary @click="resetPwd()"/>
                </mu-flexbox-item>
            </mu-flexbox>


            <mu-flexbox class="login-but">
                <mu-flexbox-item grow="8">
                    <mu-raised-button label="登录" primary @click="login()"/>
                </mu-flexbox-item>
                <mu-flexbox-item grow="3">
                    <mu-raised-button label="注册" secondary @click="register()"/>
                </mu-flexbox-item>
            </mu-flexbox>
        </div>

    </div>

</template>
<style type="text/less" lang="less">
    .login-layout {
        width: 100%;
        height: 100%;
        .content {
            max-width: 456px;
            max-height: 560px;
            min-height: 300px;
            padding: 20px 30px;
            margin: 60px auto;
            width: 80%;
            height: 80%;
            background-color: white;
            .login-but { /*两个提交按钮*/
                margin-top: 1rem;
            }

        }
    }
</style>
<script>
  export default {
    name: 'task-login',
    data () { //数据
      return {
        isShowPwd: false//是否显示密码
      }
    },
    methods: {
      //显示密码开关
      showPwdSwitch (){
        let that = this
        that.$refs.password.type = that.isShowPwd ? 'password' : 'text'
        that.isShowPwd = !that.isShowPwd
      },
      //忘记密码
      resetPwd(){
        this.$router.push('/auth/forgetpwd')
      },
      //跳转首页
      login (){
        this.$router.push('/welcome')
      },
      //注册
      register(){
        this.$router.push('/auth/reg')
      }
    }

  }
</script>

