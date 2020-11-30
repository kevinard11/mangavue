<template>
  <div class="container">
    
    <router-view/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
  </div> 
</template>

<script>
// import HelloWorld from './components/hello/HelloWorld.vue'

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
  methods:{
    toHello(){
      this.$router.push('/hello');
    }
  }
}
</script>

<style>

</style>
