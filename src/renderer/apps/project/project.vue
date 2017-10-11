<template>
    <div>
            <mu-row gutter>
                <mu-col width="50" tablet="33.33" desktop="25" v-for="tile, index in list" :key="index">

                        <img :src="tile.image" width="100%" height="276px" @click="goToPath({path:'/project/'+tile.id})"/>
                </mu-col>
            </mu-row>
    </div>
</template>
<script>
  export default {
    name: "task-project",
    data () {//数据
      return {
        list: [{
          id: 100,
          image: 'http://img0.ph.126.net/HMAamFg2HfWh-XpJ3qvPww==/1799751001187969703.jpg',
          title: 'Breakfast',
          author: 'Myron'
        }, {
          id: 200,
          image: 'http://img0.ph.126.net/HMAamFg2HfWh-XpJ3qvPww==/1799751001187969703.jpg',
          title: 'Burger',
          author: 'Linyu'
        }, {
          id: 300,
          image: 'http://img0.ph.126.net/HMAamFg2HfWh-XpJ3qvPww==/1799751001187969703.jpg',
          title: 'Camera',
          author: 'ruolin'
        }, {
          id: 400,
          image: 'http://img0.ph.126.net/HMAamFg2HfWh-XpJ3qvPww==/1799751001187969703.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          id: 500,
          image: 'http://img0.ph.126.net/HMAamFg2HfWh-XpJ3qvPww==/1799751001187969703.jpg',
          title: 'Hats',
          author: 'kakali'
        }, {
          id: 600,
          image: 'http://img0.ph.126.net/HMAamFg2HfWh-XpJ3qvPww==/1799751001187969703.jpg',
          title: 'Hats',
          author: 'kakali'
        }]
      }
    } ,
    methods: {
      //跳转
      goToPath(path){
        this.$router.push(path)
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    


</style>
