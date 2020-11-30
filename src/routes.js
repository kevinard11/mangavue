import Vue from "vue";
import Router from "vue-router";
import Home from "./components/hello/Home.vue";
import HelloWorld from "./components/hello/HelloWorld.vue";
import User from "./components/user/User.vue";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/hello",
            name: "hello",
            component: HelloWorld,
        },
        {
            path: "/user",
            name: "user",
            component: User,
        }
    ]
});