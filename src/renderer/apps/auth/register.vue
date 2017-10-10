<template>
    <div class="login-layout">
        <div class="content">
            <div class="input">
                <mu-flexbox>
                    <mu-flexbox-item>
                        <mu-text-field label="邮箱"
                                       hintText="请输入邮箱"
                                       type="text"
                                       labelFloat
                                       v-model="account"
                                       :errorText="accountErrorHint"
                                       :maxLength="accountMaxLength"
                                       @blur="accountBlurCheck"
                                       @textOverflow="emailInputOverflow"
                                       fullWidth/>
                    </mu-flexbox-item>
                </mu-flexbox>
            </div>

            <div class="input">
                <mu-flexbox>
                    <mu-flexbox-item grow="9">
                        <mu-text-field label="密码"
                                       v-model="password"
                                       hintText="请输入密码"
                                       type="password"
                                       labelFloat
                                       fullWidth
                                       :errorText="passwordErrorHint"
                                       :maxLength="passwordMaxLength"
                                       @blur="passwordBlurCheck"
                                       @textOverflow="passwordInputOverflow"
                                       ref="password"/>
                    </mu-flexbox-item>
                    <mu-flexbox-item grow="1">
                        <mu-checkbox uncheckIcon="visibility_off"
                                     checkedIcon="visibility" @change="showPwdSwitch()"/>
                    </mu-flexbox-item>
                </mu-flexbox>
            </div>

            <div class="input">
                <mu-flexbox class="login-but">
                    <mu-flexbox-item grow="9">
                        <mu-raised-button label="注册" primary @click="register()"/>
                    </mu-flexbox-item>
                    <mu-flexbox-item grow="3">
                        <mu-raised-button label="返回" secondary @click="goBack()"/>
                    </mu-flexbox-item>
                </mu-flexbox>
            </div>
        </div>

        <mu-dialog :open="showDialog" title="注册成功提示：">
            注册完成！请登录邮箱激活
            <mu-flat-button label="确定" slot="actions" primary @click="closeDialog()"/>
        </mu-dialog>
    </div>
</template>
<script>
  import objectUtils from '../../../utils/ObjectUtils'
  export default {
    name: 'task-register',
    data () {//数据
      return {
        account: '', //账号
        password: '',//密码
//        disabled: false,//禁用注册
        isShowPwd: false,//是否显示密码
        accountErrorHint: '',//邮箱错误提示
        accountMaxLength: 32, //邮箱最长32个字符
        passwordErrorHint: '', //密码错误提示
        passwordMaxLength: 50, //密码最长个数
        showDialog: false//显示对话框
      }
    },
    methods: {
      showPwdSwitch (){
        let that = this
        that.$refs.password.type = that.isShowPwd ? 'password' : 'text'
        that.isShowPwd = !that.isShowPwd
      },
      emailInputOverflow(isOverflow){
        let that = this
        that.accountErrorHint = isOverflow ? '邮箱最多' + that.accountMaxLength + '个字符' : ''
      },
      passwordInputOverflow(isOverflow){
        let that = this
        that.passwordErrorHint = isOverflow ? '密码最多' + that.passwordMaxLength + '个字符' : ''
      },
      //关闭对话框 跳转到登陆页面
      closeDialog(){
        this.showDialog = false
        this.$router.push('/auth/login')
      },
      //账号失去焦点验证
      accountBlurCheck(){
        let that = this
        let account = that.account//账号
        let accountMaxLength = that.accountMaxLength
        if (objectUtils.isBlank(account)) {
          that.accountErrorHint = '请输入您的邮箱'
          return false
        } else if (!objectUtils.isEmail(account)) {
          that.accountErrorHint = '请输入正确的邮箱地址'
          return false
        } else if (account.length > accountMaxLength) {
          that.passwordErrorHint = '邮箱最多' + accountMaxLength + '个字符'
          return false
        } else {
          that.accountErrorHint = ''
          return true
        }

      },
      //密码失去焦点验证
      passwordBlurCheck(){
        let that = this
        let pwd = that.password//密码
        let pwdMaxLength = that.passwordMaxLength
        if (objectUtils.isBlank(pwd)) {
          that.passwordErrorHint = '请输入您的密码'
          return false
        } else if (pwd.length > pwdMaxLength) {
          that.passwordErrorHint = '密码最多' + pwdMaxLength + '个字符'
          return false
        } else {
          that.passwordErrorHint = ''
          return true
        }
      },
      //返回
      goBack(){
        this.$router.push('/auth/login')
      },
      //注册
      register(){
        let that = this
        if (that.accountBlurCheck && that.passwordBlurCheck()) {
          that.showDialog = true
        }
      }
    }
  }
</script>

<style type="text/less" lang="less">
    .login-layout {
        width: 100%;
        height: 100%;
        .content {
            max-width: 456px;
            max-height: 560px;
            min-height: 300px;
            margin: 60px auto;
            width: 80%;
            height: 80%;
            background-color: white;
            .input { /*两个提交按钮*/
                width: 100%;
                box-sizing: border-box;
                padding: 10px 30px;
                .login-but { /*两个提交按钮*/
                    margin-top: 1rem;
                }
            }

        }
    }
</style>
