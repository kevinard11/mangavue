<template>
  <div class="user">
    <div class="container">
        <h4>User List</h4>
        <ul>
            <li v-for="(user, index) in data" :key="index">
                <span id="user" @click="getUser(user.userId)"> {{user.userId}}. {{user.username}} </span>
            </li>
        </ul>
        <h3>{{dataUser.data}}</h3>
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
      dataUser: []
    };
  },
  methods: {
    getAllUser(){
      UserService.getAllUser()
      .then(response =>{
        this.data = response.data.data;
        this.message = response.data.message;
      })
    },
    getUser(id){
        UserService.getUser(id)
        .then(response =>{
            this.dataUser = response.data;
        })
        .catch(error=>{
            this.message = error.message;
        })
    }
  },
  created(){
      this.getAllUser();
  }
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
