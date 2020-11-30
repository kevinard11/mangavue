<template>
    <div class="container">
        <h2 class="btn btn-success" v-on:click="toUser()">user</h2>
        <h2 class="btn" @click="toHello()">hello</h2>
    </div>
</template>

<script>
export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }
  methods:{
    toHello(){
      this.$router.push('/hello');
    },
    toUser(){
      this.$router.push('/user');
    }
  }
}
</script>
