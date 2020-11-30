<template>
  <div class="user">
    <button class="btn btn-primary" @click="getAllUser()">Ping</button>
    <div>
        {{data}}
    </div>
  </div>
</template>

<script>
import UserService from "../../service/UserService.js";
export default {
  name: 'User',
  data(){
    return {
      data: [],
      message: [],
    };
  },
  methods: {
    getAllUser(){
      UserService.getAllUser()
      .then(response =>{
        this.data = response.data;
      })
    },
    getUser(id){
        UserService.getUser(id)
        .then(response =>{
            this.data = response.data;
        })
        .catch(error=>{
            this.message = error.message;
        })
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
