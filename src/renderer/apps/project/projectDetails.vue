<template>
    <div>
        <mu-bottom-nav shift :value="activeTab" @change="handleChange">
            <mu-bottom-nav-item value="project-stat" title="统计" icon="restore"/>
            <mu-bottom-nav-item value="project-task" title="任务" icon="restore"/>
            <mu-bottom-nav-item value="project-people" title="成员" icon="people"/>
            <mu-bottom-nav-item value="project-version" title="版本" icon="restore"/>
            <mu-bottom-nav-item value="project-detalis" title="详情" icon="info"/>
        </mu-bottom-nav>
        <center>
            <mu-circular-progress :size="50"/>
        </center>

        <div v-if="activeTab === 'project-stat'" class="tab-panel demo-infinite-container" ref="project_content">


        </div>

        <div v-if="activeTab === 'project-task'" class="tab-panel demo-infinite-container" ref="project_content">
            <mu-list>

                <mu-list-item title="Alex Qin">
                    <mu-avatar src="https://avatars2.githubusercontent.com/u/18088210" slot="leftAvatar"/>
                    <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
        我们去看电影，最近有部烂片上映，又有吐槽的了
      </span>

                </mu-list-item>
                <mu-divider inset/>
                <mu-list-item title="LOL">
                    <mu-avatar src="https://avatars2.githubusercontent.com/u/18088210" slot="leftAvatar"/>
                    <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
        周末一起 LOL
      </span>

                </mu-list-item>
                <mu-divider inset/>
                <mu-list-item title="Myron Liu">
                    <mu-avatar src="https://avatars2.githubusercontent.com/u/18088210" slot="leftAvatar"/>
                    <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
      </span>
                </mu-list-item>
            </mu-list>
        </div>

        <div v-if="activeTab === 'project-people'" class="tab-panel demo-infinite-container" ref="project_content">
            <!--<mu-circular-progress :size="50"/>-->
            <mu-table multiSelectable enableSelectAll :fixedHeader="fixedHeader">
                <mu-thead>
                    <mu-tr>
                        <mu-th>acc</mu-th>
                        <mu-th>name</mu-th>
                        <mu-th>Status</mu-th>
                        <mu-th>time</mu-th>
                        <mu-th>Status</mu-th>
                    </mu-tr>
                </mu-thead>
                <mu-tbody>
                    <mu-tr v-for="item in list">
                        <mu-td>{{item}}</mu-td>
                        <mu-td>{{item}}</mu-td>
                        <mu-td>{{item}}</mu-td>
                        <mu-td>{{item}}</mu-td>
                        <mu-td>{{item}}</mu-td>
                    </mu-tr>
                </mu-tbody>
            </mu-table>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
            <!--<mu-list>-->
            <!--<div v-for="item in list">-->
            <!--<mu-list-item :title="item"/>-->
            <!--<mu-divider/>-->
            <!--</div>-->
            <!--</mu-list>-->
            <!--<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>-->
        </div>

        <div v-if="activeTab === 'project-version'" class="tab-panel demo-infinite-container" ref="project_content">
          
            <mu-timeline>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 1日</span>
                    <span slot="des">发起第一个pr</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 6日</span>
                    <span slot="des">发起第一个issue发起第一个issue发起第一个issue发起第一个issue发起第一个issue发起第一个issue发起第一个issue</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 12日</span>
                    <span slot="des">添加backTop组件</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 16日</span>
                    <span slot="des">加入Muse-UI org<br/>添加breadcrumb组件</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 19日</span>
                    <span slot="des">添加FAQ模块</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 19日</span>
                    <span slot="des">添加FAQ模块</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 19日</span>
                    <span slot="des">添加FAQ模块</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span slot="time">2017年 6月 20日</span>
                    <span slot="des">添加Layout</span>
                    <span slot="des">添加Layout</span>
                </mu-timeline-item>
                <mu-timeline-item>
                    <span>更多</span>
                </mu-timeline-item>
            </mu-timeline>
        </div>

        <div v-if="activeTab === 'project-detalis'" class="tab-panel demo-infinite-container" ref="project_content">


        </div>
    </div>

</template>
<script>
  export default {
    name: 'task-projectdetails',
    data () {//数据
      const list = []
      for (let i = 0; i < 10; i++) {
        list.push('item' + (i + 1))
      }
      return {
        fixedHeader: true,
        activeTab: 'project-stat', //默认开启统计
        project_id: '',//项目id
        list,
        num: 10,
        loading: false,
        scroller: null
      }
    },
    mounted () {
      // console.log(this.$refs.project_content)
      // console.log(this.project_id)
      this.scroller = this.$refs.project_content
    },
    created(){
      this.project_id = this.$route.params.pro_id
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          for (let i = this.num; i < this.num + 10; i++) {
            this.list.push('item' + (i + 1))
          }
          this.num += 10
          this.loading = false
        }, 2000)
      },
      handleChange (val) {
        //console.log(val)
        this.activeTab = val
      }
    },
  }
</script>

<style>
    .demo-infinite-container {
        width: 100%;
        max-height: 400px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;

    }
</style>
