<template>
    <div class="welcome-layout">
        <div class="header">
            <!--显示菜单按钮-->

            <mu-flexbox>
                <mu-flexbox-item>
                    <mu-icon-button class="icon-menu" icon="menu" @click="toggleMenu(true)"/>
                </mu-flexbox-item>

                <mu-flexbox-item grow="10">
                    <!--选择组织组件-->
                    <mu-select-field>
                        <mu-menu-item value="1" title="阴阳df"/>
                        <mu-menu-item value="2" title="影之刃"/>
                        <mu-menu-item value="3" title="天下HD"/>
                        <mu-menu-item value="4" title="穿越火线"/>
                        <mu-menu-item value="5" title="英雄联盟"/>
                        <mu-menu-item value="6" title="王者荣耀"/>
                    </mu-select-field>
                </mu-flexbox-item>
                <mu-flexbox-item grow="1">
                    <!--信息提示-->
                    <mu-badge content="99+" circle secondary>
                        <mu-icon-button icon="notifications"/>
                    </mu-badge>
                </mu-flexbox-item>
            </mu-flexbox>
            <mu-drawer :open="open" :docked="docked" @close="toggleMenu()">
                <mu-appbar title="控制台"/>
                <mu-menu-item title="团队信息" leftIcon="apps_black" @click="goToPath('/welcome')"/>
                <mu-divider/>
                <mu-menu-item title="我的项目" leftIcon="settings"  @click="goToPath('/project')"/>
                <mu-menu-item title="我的任务" leftIcon="help_outline"/>
                <mu-menu-item title="待我完成" leftIcon="help_outline" @click="toggleMenu()"/>
                <mu-menu-item title="我已完成" leftIcon="help_outline" @click="toggleMenu()"/>
                <mu-menu-item title="我的信息" leftIcon="email"  @click="toggleMenu()"/>
                <mu-menu-item title="待我完成" leftIcon="access_alarm_black" @click="toggleMenu()"/>
                <mu-divider/>
                <mu-menu-item title="个人信息" leftIcon="face"  @click="toggleMenu()"/>
                <mu-menu-item title="个人设置" leftIcon="settings" @click="toggleMenu()"/>
                <mu-divider/>
                <mu-menu-item title="退出" leftIcon="power_settings_new" @click="logOut()"/>
            </mu-drawer>
        </div>

        <div class="content-panel">
            <!--返回顶部-->
            <mu-back-top/>
            <mu-divider/>
            <router-view/>
        </div>

        <div class="footer">
            task ©2017 Created by sunny
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        open: false,
        docked: true
      }
    },
    methods: {
      //菜单开关
      toggleMenu (flag) {

        this.open = !this.open
        this.docked = !flag

      },
      //退出 跳转到登录页面
      logOut (){
        this.$router.push('/auth')
      },
      //跳转
      goToPath(path){
        this.open = !this.open
        //this.docked = !flag
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="less" type="text/less">
 
    .welcome-layout {
        height: 100%;
        .header {
            color: white;
            margin: 0 auto;
            height: 64px;
            line-height: 64px;
            background-color: #7e57c2;
            .icon-menu {
                margin: 8px auto;
            }
            .appbar-search-field {
                font-size: 1.2rem;
                color: white;

                .mu-text-field-hint {
                    color: fade(#FFF, 54%);
                }
                .mu-text-field-input {
                    color: #FFF;
                }
                .mu-text-field-focus-line {
                    background-color: #FFF;
                }
            }
        }
        .footer {
            padding: 20px 0;
            text-align: center;
        }
    }


</style>
