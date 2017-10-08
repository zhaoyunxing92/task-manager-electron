<template>
    <div class="welcome-layout">
        <div class="header">
            <!--显示菜单按钮-->
            <mu-icon-button class="icon-menu" icon="menu" @click="toggleMenu(true)"/>

            <!--选择组织组件-->
            <mu-select-field @change="toggleMenu(true)">
                <mu-menu-item value="1" title="阴阳dfsdfdsfdsdsfdsdfgdfdfgfdgfdgfd师"/>
                <mu-menu-item value="2" title="影之刃"/>
                <mu-menu-item value="3" title="天下HD"/>
                <mu-menu-item value="4" title="穿越火线"/>
                <mu-menu-item value="5" title="英雄联盟"/>
                <mu-menu-item value="6" title="王者荣耀"/>
            </mu-select-field>
            
            <mu-icon value="search"/>
            <!--信息提示-->
            <mu-badge content="12" circle secondary>
                <mu-icon-button icon="notifications"/>
            </mu-badge>

            <mu-drawer :open="open" :docked="docked" @close="toggleMenu()">
                <mu-appbar title="控制台"/>
                <mu-menu-item title="设置" leftIcon="settings" @click="toggleMenu()"/>
                <mu-menu-item title="帮助" leftIcon="help_outline" @click="toggleMenu()"/>
                <mu-divider />
                <mu-menu-item title="退出" leftIcon="power_settings_new" @click="logOut()"/>
            </mu-drawer>
        </div>
        <div class="content">
            <!--回到顶部设置-->
            <mu-back-top :right="20" :duration="1500"/>
            <div class="content-right">
                <div class="body">

                    <mu-sub-header>阳光
                        <mu-float-button icon="add" secondary mini class="demo-float-button"/>
                    </mu-sub-header>

                    <mu-content-block>
                        散落在指尖的阳光，
                        我试着轻轻抓住光影的踪迹，
                        它却在眉宇间投下一片淡淡的阴影。
                        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起
                        。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                    </mu-content-block>
                </div>
            </div>
        </div>
        <div class="footer">
            Muse-UI ©2017 Created by Muse-UI
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '1',
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
      //退出
      logOut (){
        this.$router.push('/auth');
      },
      handleListChange (val) {
        this.activeList = val
      }
    }
  }
</script>
<style lang="less" type="text/less">
    .welcome-layout {
        .header {
            color: white;
            margin: 0 auto;
            height: 60px;
            line-height: 60px;
            background-color: #7e57c2;
            .icon-menu{
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
        .content {
            height: 10000px;
            overflow: hidden;
            .content-right {
                width: 100%;
                display: inline-block;
                float: right;
                padding: 10px 0;
                background-color: rgba(0, 0, 0, 0);
                .breadcrumb {
                    margin: 10px 0;
                }
                .body {
                    background-color: white;
                    border-radius: 5px;
                    min-height: 500px;
                }
            }
        }
        .footer {
            padding: 20px 0;
            text-align: center;
        }
    }


</style>
