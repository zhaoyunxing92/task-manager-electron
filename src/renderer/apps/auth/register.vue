<template>
    <div class="login-layout">
        <div class="content">
            <div class="input">
                <mu-flexbox>
                    <mu-flexbox-item>
                        <mu-text-field label="账号"
                                       hintText="请输入用户名"
                                       required="required"
                                       type="text"
                                       labelFloat
                                       :errorText="userNameErrorTop"
                                       :maxLength="userNameMaxLength"
                                       @textOverflow="userNameInputOverflow"
                                       fullWidth ref="userName"/>
                    </mu-flexbox-item>
                </mu-flexbox>
            </div>

            <div class="input">
                <mu-flexbox>
                    <mu-flexbox-item grow="9">
                        <mu-text-field label="密码"
                                       required="required"
                                       hintText="请输入密码"
                                       type="password"
                                       labelFloat
                                       fullWidth
                                       :errorText="passwordErrorTop"
                                       :maxLength="passwordMaxLength"
                                       @textOverflow="passwordInputOverflow"
                                       ref="password"/>
                    </mu-flexbox-item>
                    <mu-flexbox-item grow="1">
                        <mu-checkbox uncheckIcon="visibility_off"
                                     checkedIcon="visibility" @change="showPwdSwitch()"/>
                    </mu-flexbox-item>
                </mu-flexbox>
            </div>

        </div>

        

    </div>
</template>
<script>
  export default {
    name: 'task-register',
    data () {//数据
      return {
        isShowPwd: true,//是否显示密码
        required: true,
        userNameErrorTop: '',//用户名错误提示
        userNameMaxLength: 15, //用户名最长15个字符
        passwordErrorTop:'', //密码错误提示
        passwordMaxLength: 50 //密码最长个数

      }
    },
    methods: {
      showPwdSwitch (){
        let _ = this
        _.$refs.password.type = _.isShowPwd ? 'text' : 'password'
        _.isShowPwd=!_.isShowPwd;
      },
      userNameInputOverflow(isOverflow){
        let _=this;
        _.userNameErrorTop = isOverflow ? '用户名最多'+_.userNameMaxLength+'个字符' : ''
      },
      passwordInputOverflow(isOverflow){
        let _=this;
        _.passwordErrorTop = isOverflow ? '密码最多'+_.passwordMaxLength+'个字符' : ''
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
            padding: 20px 30px;
            margin: 60px auto;
            width: 80%;
            height: 80%;
            background-color: white;
            .input{ /*两个提交按钮*/

            }

        }
    }
</style>
