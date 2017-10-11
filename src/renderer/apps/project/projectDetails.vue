<template>
    <div>
        <mu-bottom-nav shift :value="activeTab" @change="handleChange">
            <mu-bottom-nav-item value="project-stat" title="统计" icon="restore"/>
            <mu-bottom-nav-item value="project-task" title="任务" icon="restore"/>
            <mu-bottom-nav-item value="project-people" title="成员" icon="people"/>
            <mu-bottom-nav-item value="project-version" title="版本" icon="restore"/>
            <mu-bottom-nav-item value="project-detalis" title="详情" icon="info"/>
        </mu-bottom-nav>

        <div id="abc" v-if="activeTab === 'project-stat'" class="tab-panel demo-infinite-container">
            <!--<mu-circular-progress :size="50"/>-->
            <mu-list>
                <div v-for="item in list">
                    <mu-list-item :title="item"/>
                    <mu-divider/>
                </div>
            </mu-list>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
        </div>

        <div v-if="activeTab === 'project-task'" class="tab-panel">
            <mu-circular-progress :size="50"/>
        </div>

        <div v-if="activeTab === 'project-people'" class="tab-panel">
            <mu-circular-progress :size="50"/>
        </div>

        <div v-if="activeTab === 'project-version'" class="tab-panel">
            <mu-circular-progress :size="50"/>
        </div>

        <div v-if="activeTab === 'project-detalis'" class="tab-panel">
            <mu-circular-progress :size="50"/>
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
        activeTab: 'project-stat', //默认开启统计
        project_id: '',//项目id
        list,
        num: 10,
        loading: false,
        scroller: null
      }
    },
    mounted () {
      // console.log(this.$el)
      // console.log(this.project_id)
      this.scroller = document.getElementById('abc')
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
        max-height: 80%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid #d9d9d9;
    }
</style>
