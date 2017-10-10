<template>
    <div class="login-layout">
        <div class="content">
            <div class="input">
                目前仅支持邮箱找回密码！
            </div>
            <div class="input">
                <mu-flexbox>
                    <mu-flexbox-item>
                        <mu-text-field label="邮箱"
                                       hintText="请输入邮箱"
                                       type="text"
                                       labelFloat
                                       v-model="emile"
                                       :errorText="emileErrorHint"
                                       @blur="emileBlurCheck"
                                       fullWidth/>
                    </mu-flexbox-item>
                </mu-flexbox>
            </div>
            <div class="input">
                <mu-flexbox class="login-but">
                    <mu-flexbox-item grow="9">
                        <mu-raised-button label="发送" primary @click="sendEmile()"/>
                    </mu-flexbox-item>
                    <mu-flexbox-item grow="3">
                        <mu-raised-button label="返回" secondary @click="goBack()"/>
                    </mu-flexbox-item>
                </mu-flexbox>
            </div>
        </div>
        <mu-dialog :open="showDialog" title="发送提示：">
            修改信息已经发送到您的邮箱了，请查收
            <mu-flat-button label="确定" slot="actions" primary @click="closeDialog()"/>
        </mu-dialog>
    </div>
</template>
<script>
  import objectUtils from '../../../utils/ObjectUtils'
  export default {
    name: 'task-restpwd',
    data () {//数据
      return {
        emile: '', //账号
        emileErrorHint: '',//邮箱错误提示
        showDialog: false
      }
    },
    methods: {
      //返回
      goBack(){
        this.$router.push('/auth/login')
      },
      //关闭对话框 跳转到登陆页面
      closeDialog(){
        this.showDialog = false
        // this.$router.push('/auth/login')
      },
      //账号失去焦点验证
      emileBlurCheck(){
        let that = this
        let emile = that.emile//账号
        if (objectUtils.isBlank(emile)) {
          that.emileErrorHint = '请输入您的邮箱'
          return false
        } else if (!objectUtils.isEmail(emile)) {
          that.emileErrorHint = '请输入正确的邮箱地址'
          return false
        } else {
          that.emileErrorHint = ''
          return true
        }
      },
      //发送邮件
      sendEmile(){
        let that = this
        if (that.emileBlurCheck) {
          this.showDialog = true
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
                padding: 20px 30px;
                .login-but { /*两个提交按钮*/
                    margin-top: 1rem;
                }
            }

        }
    }
</style>
