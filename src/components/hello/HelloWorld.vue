<template>
  <div class="hello">
    <button class="btn btn-primary" @click="ping()">Ping</button>
    <div class="container">
        <strong>{{message}}</strong>
    </div>
  </div>
</template>

<script>
import HelloService from "../../service/HelloService.js";
export default {
  name: 'HelloWorld',
  data(){
    return {
      message :[]
    };
  },
  methods:{
    ping(){
      HelloService.ping()
      .then(response=>{
        this.message = response;
        console.log(response.data);
      });
    }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
